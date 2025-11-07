
"use client"

import { useState, useMemo, useCallback, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { milkStandards, componentProps, snfFormulas } from "@/lib/data"
import { getRecipeSuggestions } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Sparkles, Loader2 } from "lucide-react"

type MilkType = keyof typeof milkStandards
type MainComponent = 'cream' | 'rich_milk' | 'skim_milk';

interface Results {
  mainComponentAmount: number;
  smpAmount: number;
  waterAmount: number;
  finalWeight: number;
  finalFat: number;
  finalSnf: number;
  infoMsg: string;
}

export function StandardizationIModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  // Input states
  const [milkQuantity, setMilkQuantity] = useState("1000");
  const [milkUnit, setMilkUnit] = useState<'liters' | 'kg'>('liters');
  const [milkFat, setMilkFat] = useState("3.8")
  const [milkClr, setMilkClr] = useState("27.5")
  const [targetMilkType, setTargetMilkType] = useState<MilkType>("toned")
  const [mainComponent, setMainComponent] = useState<MainComponent>('cream');
  const [snfFormula, setSnfFormula] = useState('isi');
  const [customSnfConstants, setCustomSnfConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });


  // Ingredient properties states
  const [creamFat, setCreamFat] = useState("40.0");
  const [creamSnf, setCreamSnf] = useState("5.4");
  const [richMilkFat, setRichMilkFat] = useState("6.0");
  const [richMilkClr, setRichMilkClr] = useState("29.0");
  const [skimMilkFat, setSkimMilkFat] = useState("0.05");
  const [skimMilkClr, setSkimMilkClr] = useState("28.0");
  const [smpFat, setSmpFat] = useState("0.5");
  const [smpTs, setSmpTs] = useState("96.0");

  // Output states
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [recipe, setRecipe] = useState<string | null>(null)
  const [isRecipeLoading, startRecipeTransition] = useTransition()

 const calculateSnf = useCallback((fat: number, clr: number) => {
    if (snfFormula === 'custom') {
        const multi = parseFloat(customSnfConstants.fatMultiplier);
        const constant = parseFloat(customSnfConstants.constant);
        if (!isNaN(multi) && !isNaN(constant)) {
            return (clr / 4) + (multi * fat) + constant;
        }
        return 0;
    }
    return snfFormulas[snfFormula as keyof typeof snfFormulas]?.calc(clr, fat) || 0;
  }, [snfFormula, customSnfConstants]);

  const currentSnf = useMemo(() => milkClr && milkFat ? calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) : 0, [milkFat, milkClr, calculateSnf]);
  const targetSnf = useMemo(() => calculateSnf(milkStandards[targetMilkType].fat, milkStandards[targetMilkType].clr), [targetMilkType, calculateSnf]);

  const handleCalculate = useCallback(() => {
    setError(null);
    setResults(null);
    setRecipe(null);

    const initialQty = parseFloat(milkQuantity);
    const initialFat = parseFloat(milkFat) / 100;
    const initialSnf = calculateSnf(parseFloat(milkFat), parseFloat(milkClr)) / 100;

    const targetFat = milkStandards[targetMilkType].fat / 100;
    const targetSnfValue = milkStandards[targetMilkType].snf / 100;

    const M_base = milkUnit === 'liters' ? initialQty * 1.03 : initialQty;

    if (isNaN(M_base) || isNaN(initialFat) || isNaN(initialSnf) || M_base <= 0) {
        setError('Kripya sabhi initial milk fields mein valid positive numbers enter karein.');
        return;
    }

    const F_p = parseFloat(smpFat) / 100;
    const S_p = (parseFloat(smpTs) - F_p * 100) / 100;
    const F_w = 0, S_w = 0;

    let mainComp: { name: string; F_m: number; S_m: number; };

    if (mainComponent === 'cream') {
        mainComp = { name: "Cream", F_m: parseFloat(creamFat)/100, S_m: parseFloat(creamSnf)/100 };
    } else if (mainComponent === 'rich_milk') {
        const richFatVal = parseFloat(richMilkFat);
        const richSnfVal = calculateSnf(richFatVal, parseFloat(richMilkClr));
        mainComp = { name: "Rich Milk", F_m: richFatVal/100, S_m: richSnfVal/100 };
    } else { // skim_milk
        const skimFatVal = parseFloat(skimMilkFat);
        const skimSnfVal = calculateSnf(skimFatVal, parseFloat(skimMilkClr));
        mainComp = { name: "Skim Milk", F_m: skimFatVal/100, S_m: skimSnfVal/100 };
    }

    if (isNaN(mainComp.F_m) || isNaN(mainComp.S_m)) {
        setError('Please enter valid properties for the selected main component.');
        return;
    }

    // Simultaneous equations to solve for Main Component (X) and SMP (Y)
    let det_smp = (mainComp.F_m - targetFat) * (S_p - targetSnfValue) - (F_p - targetFat) * (mainComp.S_m - targetSnfValue);
    let X_smp = 0;
    let Y_smp = 0;

    if (Math.abs(det_smp) > 1e-9) {
      X_smp = (M_base * ((targetFat - initialFat) * (S_p - targetSnfValue) - (targetSnfValue - initialSnf) * (F_p - targetFat))) / det_smp;
      Y_smp = (M_base * ((targetSnfValue - initialSnf) * (mainComp.F_m - targetFat) - (targetFat - initialFat) * (mainComp.S_m - targetSnfValue))) / det_smp;
    }

    // Simultaneous equations to solve for Main Component (X) and Water (Z)
    let det_water = (mainComp.F_m - targetFat) * (S_w - targetSnfValue) - (F_w - targetFat) * (mainComp.S_m - targetSnfValue);
    let X_water = 0;
    let Z_water = 0;

    if (Math.abs(det_water) > 1e-9) {
      X_water = (M_base * ((targetFat - initialFat) * (S_w - targetSnfValue) - (targetSnfValue - initialSnf) * (F_w - targetFat))) / det_water;
      Z_water = (M_base * ((targetSnfValue - initialSnf) * (mainComp.F_m - targetFat) - (targetFat - initialFat) * (mainComp.S_m - targetSnfValue))) / det_water;
    }

    let mainAmount = 0;
    let smpAmount = 0;
    let waterAmount = 0;
    let infoMsg = "";

    if (X_smp >= -1e-6 && Y_smp >= -1e-6) {
        mainAmount = X_smp;
        smpAmount = Y_smp;
        infoMsg = "Standardization achieved using Main Component and SMP.";
    } else if (X_water >= -1e-6 && Z_water >= -1e-6) {
        mainAmount = X_water;
        waterAmount = Z_water;
        infoMsg = "Standardization achieved using Main Component and Water.";
    } else {
        setError("Cannot achieve target with this combination. The required adjustment might be too large or the ingredient properties are not suitable.");
        return;
    }

    mainAmount = Math.max(0, mainAmount);
    smpAmount = Math.max(0, smpAmount);
    waterAmount = Math.max(0, waterAmount);

    const finalWeight = M_base + mainAmount + smpAmount + waterAmount;
    const finalFatMass = (initialFat * M_base) + (mainComp.F_m * mainAmount) + (F_p * smpAmount) + (F_w * waterAmount);
    const finalSnfMass = (initialSnf * M_base) + (mainComp.S_m * mainAmount) + (S_p * smpAmount) + (S_w * waterAmount);

    const finalFatPercent = (finalFatMass / finalWeight) * 100;
    const finalSnfPercent = (finalSnfMass / finalWeight) * 100;

    setResults({
      mainComponentAmount: mainAmount,
      smpAmount: smpAmount,
      waterAmount: waterAmount,
      finalWeight: finalWeight,
      finalFat: finalFatPercent,
      finalSnf: finalSnfPercent,
      infoMsg: infoMsg
    });

  }, [milkQuantity, milkUnit, milkFat, milkClr, targetMilkType, mainComponent, creamFat, creamSnf, richMilkFat, richMilkClr, skimMilkFat, skimMilkClr, smpFat, smpTs, calculateSnf]);

  const handleRecipe = () => {
    if (!results) return;
    startRecipeTransition(async () => {
      setRecipe("Sujhav la raha hu...");
      try {
        const res = await getRecipeSuggestions({
          milkType: milkStandards[targetMilkType].name,
          fatPercentage: results.finalFat,
          snfPercentage: results.finalSnf,
        })
        setRecipe(res.recipeSuggestions)
      } catch(e) {
        setRecipe("Oops! Recipe laane mein dikkat ho gayi. Fir se try karein.")
      }
    })
  }

  const mainComponentName = useMemo(() => {
    if (mainComponent === 'cream') return 'Cream';
    if (mainComponent === 'rich_milk') return 'Rich Milk';
    return 'Skim Milk';
  }, [mainComponent]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Milk Standardization</DialogTitle>
          <DialogDescription className="text-center">Automated Mass Balance Method se accurate calculation.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
          <div className="bg-muted/50 p-6 rounded-xl space-y-6">
            
            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 font-headline">1. Raw Milk</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="milkVolume">Raw Milk Quantity</Label>
                    <div className="flex gap-2">
                        <Input id="milkVolume" value={milkQuantity} onChange={(e) => setMilkQuantity(e.target.value)} placeholder="1000" />
                         <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                            <SelectTrigger className="w-[120px]"><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="liters">Liters</SelectItem>
                                <SelectItem value="kg">Kg</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="milkFat">Fat %</Label>
                    <Input id="milkFat" value={milkFat} onChange={(e) => setMilkFat(e.target.value)} step="0.1" placeholder="3.8" />
                  </div>
                  <div>
                    <Label htmlFor="milkClr">CLR</Label>
                    <Input id="milkClr" value={milkClr} onChange={(e) => setMilkClr(e.target.value)} step="0.1" placeholder="27.5" />
                  </div>
                   <div className="mt-4 space-y-2">
                    <Label>SNF Calculation Formula</Label>
                     <Select value={snfFormula} onValueChange={setSnfFormula}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                       <SelectContent>
                        {Object.entries(snfFormulas).map(([key, {name, formulaText}]) => (
                            <SelectItem key={key} value={key}>
                                <div className="flex flex-col break-words">
                                    <span className="font-semibold">{name}</span>
                                    <span className="text-xs text-muted-foreground">{formulaText}</span>
                                </div>
                            </SelectItem>
                        ))}
                         <SelectItem value="custom">Custom Formula</SelectItem>
                      </SelectContent>
                    </Select>
                     {snfFormula === 'custom' && (
                        <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg bg-indigo-50 mt-2">
                           <div>
                                <Label>Fat Multiplier</Label>
                                <Input value={customSnfConstants.fatMultiplier} onChange={(e) => setCustomSnfConstants(prev => ({...prev, fatMultiplier: e.target.value}))} placeholder="e.g., 0.25"/>
                           </div>
                           <div>
                                <Label>Constant (C)</Label>
                                <Input value={customSnfConstants.constant} onChange={(e) => setCustomSnfConstants(prev => ({...prev, constant: e.target.value}))} placeholder="e.g., 0.72"/>
                           </div>
                        </div>
                    )}
                  </div>
                  {currentSnf > 0 && (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-600 mb-1">Calculated SNF</p>
                      <p className="text-lg font-bold text-blue-700">{currentSnf.toFixed(2)}%</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 font-headline">2. Target</h3>
                <Label htmlFor="targetMilkType">Milk Type</Label>
                <Select value={targetMilkType} onValueChange={(v) => setTargetMilkType(v as MilkType)}>
                  <SelectTrigger><SelectValue/></SelectTrigger>
                  <SelectContent>
                    {Object.entries(milkStandards).map(([key, {name}]) => (
                      <SelectItem key={key} value={key}>{name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-3 mt-4 p-3 rounded-lg bg-primary/10">
                  <div className="text-center">
                    <p className="text-xs text-primary/80">Target Fat</p>
                    <p className="font-bold text-lg text-primary">{milkStandards[targetMilkType].fat.toFixed(1)}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-primary/80">Target SNF</p>
                    <p className="font-bold text-lg text-primary">{milkStandards[targetMilkType].snf.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* INGREDIENTS */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2 font-headline">3. Standardization Ingredients</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-3">
                    <Label>Main Component for Adjustment</Label>
                    <Select value={mainComponent} onValueChange={(v) => setMainComponent(v as MainComponent)}>
                      <SelectTrigger><SelectValue/></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cream">Cream (to increase fat)</SelectItem>
                        <SelectItem value="rich_milk">Rich Milk (to increase fat/snf)</SelectItem>
                        <SelectItem value="skim_milk">Skim Milk (to decrease fat)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {mainComponent === 'cream' && (<>
                    <div><Label>Cream Fat %</Label><Input value={creamFat} onChange={e => setCreamFat(e.target.value)} /></div>
                    <div><Label>Cream SNF %</Label><Input value={creamSnf} onChange={e => setCreamSnf(e.target.value)} /></div>
                  </>)}
                  {mainComponent === 'rich_milk' && (<>
                    <div><Label>Rich Milk Fat %</Label><Input value={richMilkFat} onChange={e => setRichMilkFat(e.target.value)} /></div>
                    <div><Label>Rich Milk CLR</Label><Input value={richMilkClr} onChange={e => setRichMilkClr(e.target.value)} /></div>
                  </>)}
                  {mainComponent === 'skim_milk' && (<>
                    <div><Label>Skim Milk Fat %</Label><Input value={skimMilkFat} onChange={e => setSkimMilkFat(e.target.value)} /></div>
                    <div><Label>Skim Milk CLR</Label><Input value={skimMilkClr} onChange={e => setSkimMilkClr(e.target.value)} /></div>
                  </>)}
              </div>
               <div className="mt-4 text-xs text-muted-foreground">
                <p><strong>Automatic Components:</strong> Calculator will automatically use SMP (Skimmed Milk Powder) or Water for final adjustment.</p>
                <div className="flex gap-4 mt-2">
                    <p>SMP Fat: <Input value={smpFat} onChange={(e)=>setSmpFat(e.target.value)} className="inline-block w-20 h-7 text-xs" /></p>
                    <p>SMP TS: <Input value={smpTs} onChange={(e)=>setSmpTs(e.target.value)} className="inline-block w-20 h-7 text-xs" /></p>
                </div>
              </div>
            </div>

            {/* CALCULATE BUTTON */}
            <div className="mt-6 md:col-span-2">
              <Button onClick={handleCalculate} className="w-full">Calculate Standardization</Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {results && (
            <div className="bg-muted/50 p-6 rounded-xl mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 font-headline">Results</h3>
              <Alert className="mb-4">
                <AlertDescription>{results.infoMsg}</AlertDescription>
              </Alert>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-gray-600">{mainComponentName} to Add</p>
                  <p className="text-2xl font-bold text-yellow-800">{results.mainComponentAmount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">kg</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-gray-600">SMP to Add</p>
                  <p className="text-2xl font-bold text-orange-800">{results.smpAmount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">kg</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg text-center shadow-sm">
                  <p className="text-sm text-gray-600">Water to Add</p>
                  <p className="text-2xl font-bold text-blue-800">{results.waterAmount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">kg</p>
                </div>
              </div>
              <h4 className="font-semibold text-gray-600 mb-3 mt-5 font-headline">Final Batch Summary</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                  <p className="text-sm text-gray-600">Final Volume</p>
                  <p className="text-lg font-bold text-gray-800">{(results.finalWeight / 1.03).toFixed(2)} L</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-300">
                  <p className="text-sm text-gray-600">Final Weight</p>
                  <p className="text-lg font-bold text-gray-800">{results.finalWeight.toFixed(2)} kg</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg border-2 border-green-400">
                  <p className="text-sm text-green-600">Final Fat %</p>
                  <p className="text-lg font-bold text-green-700">{results.finalFat.toFixed(2)}%</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg border-2 border-green-400">
                  <p className="text-sm text-green-600">Final SNF %</p>
                  <p className="text-lg font-bold text-green-700">{results.finalSnf.toFixed(2)}%</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button 
                  onClick={handleRecipe} 
                  disabled={isRecipeLoading} 
                  className="bg-gradient-to-r from-primary to-indigo-400 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {isRecipeLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading...</>
                  ) : (
                    <><Sparkles className="mr-2 h-4 w-4" />Isse kya banayein?</>
                  )}
                </Button>
              </div>
              {recipe && (
                <div 
                  className="mt-4 p-4 bg-primary/5 rounded-lg prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{__html: recipe.replace(/\n/g, '<br />')}} 
                />
              )}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

    
