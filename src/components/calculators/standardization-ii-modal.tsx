
"use client"

import { useState, memo, useCallback, useEffect, useMemo } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { componentProps } from "@/lib/data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Blend, Milk, SlidersHorizontal, Combine, Bot, Calculator, Settings, ChevronsUp, Target, Droplets, Info, Weight, Thermometer, ShieldAlert, DollarSign } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { snfFormulas } from "@/lib/data"

type CalculatorType = 'fat-snf-clr-ts' | 'fat-blending' | 'reconstituted-milk' | 'recombined-milk' | 'clr-blending' | 'milk-blending' | 'clr-increase' | 'two-milk-blending-target' | 'clr-correction' | 'kg-fat-snf' | 'two-component-standardization' | 'fat-snf-adjustment';

const calculatorsInfo = {
    'fat-snf-clr-ts': { title: "Fat, SNF, CLR & TS", icon: Calculator, component: FatSnfClrTsCalc },
    'milk-blending': { title: "Milk Blending", icon: Blend, component: MilkBlendingCalc },
    'two-milk-blending-target': { title: "Two-Milk Blending (to Target)", icon: Target, component: TwoMilkBlendingToTargetCalc },
    'fat-snf-adjustment': { title: 'Fat & SNF Adjustment', icon: SlidersHorizontal, component: FatSnfAdjustmentCalc },
    'two-component-standardization': { title: "Automated Standardization", icon: Bot, component: TwoComponentStandardizationCalc },
    'clr-increase': { title: 'CLR Increase (by SMP)', icon: ChevronsUp, component: ClrIncreaseCalc },
    'fat-blending': { title: "Fat Blending (Pearson)", icon: Blend, component: FatBlendingCalc },
    'reconstituted-milk': { title: "Reconstituted Milk", icon: Milk, component: ReconstitutedMilkCalc },
    'recombined-milk': { title: "Recombined Milk", icon: Combine, component: RecombinedMilkCalc },
    'clr-blending': { title: "CLR Blending (Pearson)", icon: Bot, component: ClrBlendingCalc },
    'clr-correction': { title: "CLR Correction", icon: Thermometer, component: ClrCorrectionCalc },
    'kg-fat-snf': { title: "Kg Fat & SNF", icon: Weight, component: KgFatSnfCalc },
};

export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType | null>(null);

  const handleBack = useCallback(() => setActiveCalculator(null), []);

  const ActiveCalculatorComponent = activeCalculator ? calculatorsInfo[activeCalculator].component : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
            setIsOpen(false);
            setActiveCalculator(null);
        } else {
            setIsOpen(true);
        }
    }}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 sm:p-6">
        {activeCalculator && ActiveCalculatorComponent ? (
          <>
            <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0">
              <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <DialogTitle className="text-xl font-bold font-headline">{calculatorsInfo[activeCalculator].title}</DialogTitle>
                <DialogDescription>Calculate specific dairy parameters.</DialogDescription>
              </div>
            </DialogHeader>
            <ScrollArea className="h-full mt-4 pr-4">
              <div className="p-4 sm:p-0">
                <ActiveCalculatorComponent />
              </div>
            </ScrollArea>
          </>
        ) : (
          <>
            <DialogHeader className="p-4 sm:p-0">
              <DialogTitle className="text-3xl font-bold text-center font-headline">Advanced Standardization</DialogTitle>
              <DialogDescription className="text-center">Advanced calculators for precise dairy processing.</DialogDescription>
            </DialogHeader>
            <ScrollArea className="flex-1 mt-4 pr-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCalculator(key as CalculatorType)}
                    className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-xl shadow-sm border text-center aspect-square transition-all duration-200"
                  >
                    <Icon className="w-12 h-12 text-primary mb-3" />
                    <span className="font-semibold font-headline text-card-foreground">{title}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}


const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

const MemoizedInputField = memo(function InputField({ label, value, name, setter, unit, placeholder, inputClassName, type = "number", step = "any" }: { label: string, value: string, name: string, setter: (name: string, value: string) => void, unit?: string, placeholder?: string, inputClassName?: string, type?: string, step?: string }) {
    const [internalValue, setInternalValue] = useState(value);

    // Update internal state when props change, but not if the element has focus
    useEffect(() => {
      if (value !== internalValue && document.activeElement?.getAttribute('name') !== name) {
          setInternalValue(value);
      }
    }, [value, name, internalValue]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        setter(e.target.name, e.target.value); // Update parent state on change
    };
    
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <div className="flex items-center">
                <Input 
                    type={type} 
                    name={name} 
                    id={name} 
                    value={internalValue} 
                    onChange={handleChange}
                    className={cn(unit ? "rounded-r-none" : "", inputClassName || '')}
                    placeholder={placeholder} 
                    step={step}
                />
                {unit && <span className="p-2 bg-muted border border-l-0 rounded-r-md text-sm">{unit}</span>}
            </div>
        </div>
    );
});

function FatSnfClrTsCalc() {
    const [inputs, setInputs] = useState({
        fat: '4.5',
        clr: '28.0',
        snf: '8.94',
    });
    const [result, setResult] = useState<{ snf: string, clr: string, ts: string } | null>(null);
    const [formula, setFormula] = useState('isi');
    const [basis, setBasis] = useState<'fat_clr' | 'fat_snf'>('fat_clr');
    const [customConstants, setCustomConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleCustomConstChange = useCallback((name: string, value: string) => {
        setCustomConstants(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        const fat = parseFloat(inputs.fat);
        const clr = parseFloat(inputs.clr);
        const snf = parseFloat(inputs.snf);
        
        let newSnf = NaN, newTs = NaN, newClr = NaN;
        
        let selectedFormula;
        if (formula === 'custom') {
            const multi = parseFloat(customConstants.fatMultiplier) || 0;
            const constFactor = parseFloat(customConstants.constant) || 0;
            selectedFormula = {
                calc: (c: number, f: number) => (c / 4) + (f * multi) + constFactor,
                inverse: (s: number, f: number) => (s - (f * multi) - constFactor) * 4
            };
        } else {
            selectedFormula = snfFormulas[formula] || snfFormulas['isi'];
        }

        if (basis === 'fat_clr') {
            if (!isNaN(fat) && !isNaN(clr)) {
                newSnf = selectedFormula.calc(clr, fat);
                newTs = newSnf + fat;
                newClr = clr;
            }
        } else if (basis === 'fat_snf') {
            if (!isNaN(fat) && !isNaN(snf)) {
                newClr = selectedFormula.inverse(snf, fat);
                newTs = snf + fat;
                newSnf = snf;
            }
        }

        setResult({
            snf: !isNaN(newSnf) ? newSnf.toFixed(2) : '...',
            ts: !isNaN(newTs) ? newTs.toFixed(2) : '...',
            clr: !isNaN(newClr) ? newClr.toFixed(2) : '...'
        });

    }, [inputs, basis, formula, customConstants]);
    
    return (
        <CalculatorCard title="Fat, SNF, CLR & TS Calculator" description="Enter any two values to calculate the others. You can also select different industry-standard formulas for SNF calculation.">
            <div className="mb-4 space-y-4">
                <div>
                    <Label>Select SNF Formula</Label>
                    <Select value={formula} onValueChange={setFormula}>
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
                </div>
                {formula === 'custom' && (
                <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg bg-indigo-50">
                    <MemoizedInputField 
                        label="Fat Multiplier" 
                        value={customConstants.fatMultiplier} 
                        name="fatMultiplier" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.25"
                    />
                     <MemoizedInputField 
                        label="Constant (C)" 
                        value={customConstants.constant} 
                        name="constant" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.72"
                    />
                    <p className="col-span-2 text-xs text-muted-foreground">Custom Formula: SNF % = (CLR/4) + (Fat % * Fat Multiplier) + Constant</p>
                </div>
            )}
                 <div>
                    <Label>Calculate based on:</Label>
                    <Select value={basis} onValueChange={(val: 'fat_clr' | 'fat_snf') => setBasis(val)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fat_clr">FAT and CLR</SelectItem>
                            <SelectItem value="fat_snf">FAT and SNF</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} />
                {basis === 'fat_clr' ? (
                    <MemoizedInputField label="CLR" value={inputs.clr} name="clr" setter={handleInputChange} />
                ) : (
                    <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} />
                )}
            </div>
            <Button onClick={calculate} className="w-full mt-6">Calculate</Button>
             {result && <Alert className="mt-6 bg-primary/10">
                <AlertTitle className="text-center font-bold text-lg">Calculated Values</AlertTitle>
                <AlertDescription>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-2">
                        <div>
                            <p className="text-sm text-muted-foreground">Calculated CLR</p>
                            <p className="text-2xl font-bold">{result.clr}</p>
                        </div>
                         <div>
                            <p className="text-sm text-muted-foreground">Calculated SNF %</p>
                            <p className="text-2xl font-bold">{result.snf}</p>
                        </div>
                         <div>
                            <p className="text-sm text-muted-foreground">Calculated TS %</p>
                            <p className="text-2xl font-bold">{result.ts}</p>
                        </div>
                    </div>
                </AlertDescription>
            </Alert>}
        </CalculatorCard>
    );
}

const MemoizedMilkInputGroup = memo(function MilkInputGroup({
    milkNum,
    onInputChange,
    initialValues,
}: {
    milkNum: 1 | 2;
    onInputChange: (milkNum: 1 | 2, field: string, value: string) => void;
    initialValues: { qty: string; fat: string; clr: string, unit: 'kg' | 'liters' };
}) {

    return (
        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-gray-700 font-headline">Milk Source {milkNum}</h3>
             <div>
                <Label>Quantity</Label>
                <div className="flex">
                    <Input 
                        type="number" 
                        value={initialValues.qty} 
                        onChange={(e) => onInputChange(milkNum, 'qty', e.target.value)} 
                        className="rounded-r-none"
                    />
                    <Select value={initialValues.unit} onValueChange={(val) => onInputChange(milkNum, 'unit', val)}>
                        <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="liters">Liters</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <MemoizedInputField label="Fat %" value={initialValues.fat} name="fat" setter={(name, val) => onInputChange(milkNum, name, val)} />
            <MemoizedInputField label="CLR" value={initialValues.clr} name="clr" setter={(name, val) => onInputChange(milkNum, name, val)} />
        </div>
    );
});

function MilkBlendingCalc() {
    const [milk1, setMilk1] = useState({ qty: '500', fat: '6.5', clr: '29', unit: 'kg' as 'kg' | 'liters' });
    const [milk2, setMilk2] = useState({ qty: '500', fat: '2.5', clr: '27', unit: 'kg' as 'kg' | 'liters' });

    const [result, setResult] = useState<{ finalQty: number; finalFat: number; finalClr: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((milkNum: 1 | 2, field: string, value: string) => {
        const setter = milkNum === 1 ? setMilk1 : setMilk2;
        setter(prev => ({ ...prev, [field]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const q1_val = parseFloat(milk1.qty);
        const q2_val = parseFloat(milk2.qty);
        
        const q1 = milk1.unit === 'liters' ? q1_val * componentProps.milkDensity : q1_val;
        const f1 = parseFloat(milk1.fat);
        const c1 = parseFloat(milk1.clr);
        
        const q2 = milk2.unit === 'liters' ? q2_val * componentProps.milkDensity : q2_val;
        const f2 = parseFloat(milk2.fat);
        const c2 = parseFloat(milk2.clr);

        if ([q1, f1, c1, q2, f2, c2].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (q1 <= 0 || q2 <= 0) {
            setError("Quantities must be positive numbers.");
            return;
        }

        const finalQty = q1 + q2;
        const finalFat = ((q1 * f1) + (q2 * f2)) / finalQty;
        const finalClr = ((q1 * c1) + (q2 * c2)) / finalQty;

        setResult({ finalQty, finalFat, finalClr });
    }, [milk1, milk2]);

    return (
        <CalculatorCard title="Milk Blending Calculator" description="Calculate the final Fat% and CLR after mixing two different milk sources.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <MemoizedMilkInputGroup 
                    milkNum={1} 
                    onInputChange={handleInputChange} 
                    initialValues={milk1}
                />
                <MemoizedMilkInputGroup 
                    milkNum={2}
                    onInputChange={handleInputChange} 
                    initialValues={milk2}
                />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                <Alert className="mt-4">
                    <AlertTitle>Blend Result</AlertTitle>
                    <AlertDescription>
                        <div className="space-y-2 mt-2">
                           <p><strong>Total Quantity:</strong> {result.finalQty.toFixed(2)} kg</p>
                           <p><strong>Final Fat:</strong> {result.finalFat.toFixed(2)} %</p>
                           <p><strong>Final CLR:</strong> {result.finalClr.toFixed(2)}</p>
                        </div>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

function FatSnfAdjustmentCalc() {
    const [adjustmentComponent, setAdjustmentComponent] = useState<'cream' | 'rich_milk' | 'skim_milk'>('cream');
    const [baseUnit, setBaseUnit] = useState<'kg' | 'liters'>('kg');
    const [snfFormula, setSnfFormula] = useState('isi');
    const [customConstants, setCustomConstants] = useState({ fatMultiplier: "0.25", constant: "0.72" });

    const [inputs, setInputs] = useState({
        baseQty: '1000',
        baseFat: '3.5',
        baseClr: '28',
        targetFat: '4.5',
        targetSnf: '8.7',
        creamFat: '40',
        creamClr: '15',
        richMilkFat: '6.0',
        richMilkClr: '29.5',
        skimMilkFat: '0.1',
        skimMilkClr: '35',
    });

    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({ ...prev, [name]: value }));
    }, []);
    
    const handleCustomConstChange = useCallback((name: string, value: string) => {
        setCustomConstants(prev => ({ ...prev, [name]: value }));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        if (snfFormula === 'custom') {
            const multi = parseFloat(customConstants.fatMultiplier) || 0;
            const constFactor = parseFloat(customConstants.constant) || 0;
            return (clr / 4) + (fat * multi) + constFactor;
        }
        const formula = snfFormulas[snfFormula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [snfFormula, customConstants]);

    const baseSnf = useMemo(() => {
        const fat = parseFloat(inputs.baseFat);
        const clr = parseFloat(inputs.baseClr);
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [inputs.baseFat, inputs.baseClr, calculateSnf]);
    
    const adjustmentCompSnf = useMemo(() => {
        let fat=0, clr=0;
        switch(adjustmentComponent) {
            case 'cream': fat = parseFloat(inputs.creamFat); clr = parseFloat(inputs.creamClr); break;
            case 'rich_milk': fat = parseFloat(inputs.richMilkFat); clr = parseFloat(inputs.richMilkClr); break;
            case 'skim_milk': fat = parseFloat(inputs.skimMilkFat); clr = parseFloat(inputs.skimMilkClr); break;
        }
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [adjustmentComponent, inputs, calculateSnf]);

    const calculate = useCallback(() => {
        setError(null);
        setResult(null);

        const baseQtyValue = parseFloat(inputs.baseQty);
        const Qm = baseUnit === 'liters' ? baseQtyValue * componentProps.milkDensity : baseQtyValue;

        const Fm_percent = parseFloat(inputs.baseFat);
        const Sm_percent = baseSnf;
        const Ft_percent = parseFloat(inputs.targetFat);
        const St_percent = parseFloat(inputs.targetSnf);

        if ([Qm, Fm_percent, Sm_percent, Ft_percent, St_percent].some(isNaN) || Qm <= 0 || Sm_percent <= 0) {
            setError("Please fill all base and target fields with valid numbers, and ensure Base SNF is calculated.");
            return;
        }

        let mainComp: { name: string; F_percent: number; S_percent: number; };
        switch(adjustmentComponent) {
            case 'rich_milk':
                mainComp = { name: "Rich Milk", F_percent: parseFloat(inputs.richMilkFat), S_percent: adjustmentCompSnf };
                break;
            case 'skim_milk':
                mainComp = { name: "Skim Milk", F_percent: parseFloat(inputs.skimMilkFat), S_percent: adjustmentCompSnf };
                break;
            case 'cream':
            default:
                mainComp = { name: "Cream", F_percent: parseFloat(inputs.creamFat), S_percent: adjustmentCompSnf };
                break;
        }

        if (isNaN(mainComp.F_percent) || isNaN(mainComp.S_percent) || adjustmentCompSnf <= 0) {
            setError("Please enter valid properties for the selected adjustment component and ensure its SNF is calculated.");
            return;
        }

        const F_m = Fm_percent / 100, S_m = Sm_percent / 100;
        const F_t = Ft_percent / 100, S_t = St_percent / 100;
        const F_adj = mainComp.F_percent / 100, S_adj = mainComp.S_percent / 100;
        const F_smp = componentProps.smp.fat / 100, S_smp = componentProps.smp.ts / 100 - F_smp;
        const F_w = 0, S_w = 0;

        let comp2: { name: string; F: number; S: number; };
        let comp2Needed = 0, mainCompNeeded = 0;
        
        const fatDifference = F_t - F_m;
        const snfDifference = S_t - S_m;

        let determinant = (F_adj - F_t) * (S_smp - S_t) - (F_smp - F_t) * (S_adj - S_t);
        if (Math.abs(determinant) > 1e-9) {
            mainCompNeeded = (Qm * (fatDifference * (S_smp - S_t) - snfDifference * (F_smp - F_t))) / determinant;
            comp2Needed = (Qm * (snfDifference * (F_adj - F_t) - fatDifference * (S_adj - S_t))) / determinant;
            comp2 = { name: "SMP", F: F_smp, S: S_smp };

            if (mainCompNeeded < -1e-6 || comp2Needed < -1e-6) {
                 determinant = (F_adj - F_t) * (S_w - S_t) - (F_w - F_t) * (S_adj - S_t);
                 if(Math.abs(determinant) > 1e-9) {
                    mainCompNeeded = (Qm * (fatDifference * (S_w - S_t) - snfDifference * (F_w - F_t))) / determinant;
                    comp2Needed = (Qm * (snfDifference * (F_adj - F_t) - fatDifference * (S_adj - S_t))) / determinant;
                    comp2 = { name: "Water", F: F_w, S: S_w };
                 } else {
                     mainCompNeeded = -1;
                 }
            }
        } else {
             setError("Cannot calculate with the given components. The components may be too similar, or the target is unachievable.");
             return;
        }

        if (mainCompNeeded < -1e-6 || comp2Needed < -1e-6) {
             setError(`The target is not achievable by adding ${mainComp.name} and a second component (SMP/Water). You might need to use a different combination.`);
             return;
        }

        mainCompNeeded = Math.max(0, mainCompNeeded);
        comp2Needed = Math.max(0, comp2Needed);

        const finalWeight = Qm + mainCompNeeded + comp2Needed;
        
        let resultHTML = `To standardize <strong>${inputs.baseQty} ${baseUnit}</strong> of milk, you need to add:<br/>
        - <strong class='text-green-700'>${mainCompNeeded.toFixed(3)} kg</strong> of ${mainComp.name}<br/>`;

        if (comp2Needed > 0.001) {
            resultHTML += `- <strong class='text-green-700'>${comp2Needed.toFixed(3)} kg</strong> of ${comp2.name}<br/>`;
        }
        
        resultHTML += `<hr class='my-2'/><strong>Final Batch:</strong> ${finalWeight.toFixed(2)} kg with ~${(Ft_percent).toFixed(2)}% Fat and ~${(St_percent).toFixed(2)}% SNF.`;
        setResult(resultHTML);

    }, [inputs, adjustmentComponent, baseUnit, baseSnf, adjustmentCompSnf, calculateSnf]);

    return (
        <CalculatorCard title="Fat & SNF Adjustment" description="Calculate the amount of a primary component (Cream, Rich Milk, or Skim Milk) and a secondary component (SMP or Water) needed to standardize milk to a target Fat and SNF content.">
             <div className="mb-4">
                <Label>Select SNF Formula</Label>
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
            </div>
             {snfFormula === 'custom' && (
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 border rounded-lg bg-indigo-50">
                    <MemoizedInputField 
                        label="Fat Multiplier" 
                        value={customConstants.fatMultiplier} 
                        name="customFatMultiplier" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.25"
                    />
                     <MemoizedInputField 
                        label="Constant (C)" 
                        value={customConstants.constant} 
                        name="constant" 
                        setter={handleCustomConstChange}
                        placeholder="e.g., 0.72"
                    />
                </div>
            )}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                 <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700">Base Milk</h3>
                    <div>
                        <Label>Quantity</Label>
                        <div className="flex">
                            <Input
                                type="number"
                                value={inputs.baseQty}
                                onChange={(e) => handleInputChange('baseQty', e.target.value)}
                                className="rounded-r-none"
                            />
                            <Select value={baseUnit} onValueChange={(val) => setBaseUnit(val as 'kg' | 'liters')}>
                                <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kg</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <MemoizedInputField label="Fat %" value={inputs.baseFat} name="baseFat" setter={handleInputChange} />
                    <MemoizedInputField label="CLR" value={inputs.baseClr} name="baseClr" setter={handleInputChange} />
                    <div className="text-sm p-2 bg-blue-100 rounded">Calculated SNF: <strong className="font-bold">{baseSnf > 0 ? baseSnf.toFixed(2) + '%' : '...'}</strong></div>
                </div>
                 <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700">Target Milk</h3>
                    <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                    <MemoizedInputField label="Target SNF %" value={inputs.targetSnf} name="targetSnf" setter={handleInputChange} />
                </div>
             </div>

             <div className="bg-yellow-50 p-4 rounded-lg space-y-3 my-4">
                 <h3 className="font-semibold text-gray-700">Select Adjustment Component</h3>
                  <Select value={adjustmentComponent} onValueChange={(val) => setAdjustmentComponent(val as any)}>
                    <SelectTrigger><SelectValue/></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cream">Cream</SelectItem>
                        <SelectItem value="rich_milk">Rich Milk</SelectItem>
                        <SelectItem value="skim_milk">Skim Milk</SelectItem>
                    </SelectContent>
                  </Select>
                 <div className="grid grid-cols-2 gap-4">
                     {adjustmentComponent === 'cream' && (<>
                        <MemoizedInputField label="Cream Fat %" value={inputs.creamFat} name="creamFat" setter={handleInputChange} />
                        <MemoizedInputField label="Cream CLR" value={inputs.creamClr} name="creamClr" setter={handleInputChange} />
                     </>)}
                      {adjustmentComponent === 'rich_milk' && (<>
                        <MemoizedInputField label="Rich Milk Fat %" value={inputs.richMilkFat} name="richMilkFat" setter={handleInputChange} />
                        <MemoizedInputField label="Rich Milk CLR" value={inputs.richMilkClr} name="richMilkClr" setter={handleInputChange} />
                     </>)}
                      {adjustmentComponent === 'skim_milk' && (<>
                        <MemoizedInputField label="Skim Milk Fat %" value={inputs.skimMilkFat} name="skimMilkFat" setter={handleInputChange} />
                        <MemoizedInputField label="Skim Milk CLR" value={inputs.skimMilkClr} name="skimMilkClr" setter={handleInputChange} />
                     </>)}
                 </div>
                 <div className="text-sm p-2 bg-yellow-100 rounded">Calculated Component SNF: <strong className="font-bold">{adjustmentCompSnf > 0 ? adjustmentCompSnf.toFixed(2) + '%' : '...'}</strong></div>
                 <p className="text-xs text-muted-foreground">Note: The calculator will automatically use SMP (0.5% Fat, 96% TS) or Water to achieve the final target.</p>
             </div>

             <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
             {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
             {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function TwoComponentStandardizationCalc() {
    const [correctionType, setCorrectionType] = useState('cream');
    const [milkUnit, setMilkUnit] = useState<'liters' | 'kg'>('kg');
    const [inputs, setInputs] = useState({
        V0: '700', Fi: '3.5', CLRi: '28',
        Ft: '4.5', CLRt: '28.5',
        Fc: '40', CLRc: '10', // Cream
        Fr: '6', CLRr: '30',   // Rich Milk
        Fs: '0.1', CLRs: '27', // Skim Milk
        smpSnf: '96', smpFat: '0.5'
    });
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResults(null);
        setError(null);
        
        let V0 = parseFloat(inputs.V0) || 0;
        if (milkUnit === 'liters') {
            V0 = V0 * componentProps.milkDensity;
        }

        const Fi = parseFloat(inputs.Fi) / 100;
        const CLRi = parseFloat(inputs.CLRi) || 0;
        const Ft = parseFloat(inputs.Ft) / 100;
        const CLRt = parseFloat(inputs.CLRt) || 0;
        const smpSnf = parseFloat(inputs.smpSnf) / 100;
        const smpFat = parseFloat(inputs.smpFat) / 100;

        if ([V0, Fi, CLRi, Ft, CLRt, smpSnf, smpFat].some(isNaN)) {
             setError("Please fill all initial and target fields with valid numbers.");
             return;
        }

        const formula = (clr: number, fat: number) => clr / 4 + 0.25 * fat + 0.44; // Using ISI
        const SNFi = formula(CLRi, Fi * 100) / 100;
        const SNFt = formula(CLRt, Ft * 100) / 100;
        
        let mainIng: { F: number, SNF: number, name: string };
        switch(correctionType) {
            case 'cream':
                const Fc = parseFloat(inputs.Fc);
                mainIng = { F: Fc/100, SNF: formula(parseFloat(inputs.CLRc), Fc)/100, name: "Cream"};
                break;
            case 'rich_milk':
                const Fr = parseFloat(inputs.Fr);
                mainIng = { F: Fr/100, SNF: formula(parseFloat(inputs.CLRr), Fr)/100, name: "Rich Milk"};
                break;
            case 'skim_milk':
                 const Fs = parseFloat(inputs.Fs);
                mainIng = { F: Fs/100, SNF: formula(parseFloat(inputs.CLRs), Fs)/100, name: "Skimmed Milk"};
                break;
            default:
                setError("Invalid correction ingredient selected.");
                return;
        }
        
        const water = { F: 0, SNF: 0, name: "Water" };
        const smp = { F: smpFat, SNF: smpSnf, name: "SMP" };

        const C = [V0 * (Ft - Fi), V0 * (SNFt - SNFi)];

        // System 1: Main Ingredient (X) and Water (Y)
        const det1 = (mainIng.F - Ft) * (water.SNF - SNFt) - (water.F - Ft) * (mainIng.SNF - SNFt);
        let X1 = Infinity, Y1 = Infinity;
        if (Math.abs(det1) > 1e-9) {
            X1 = (C[0] * (water.SNF - SNFt) - (water.F - Ft) * C[1]) / det1;
            Y1 = ((mainIng.F - Ft) * C[1] - C[0] * (mainIng.SNF - SNFt)) / det1;
        }

        // System 2: Main Ingredient (X) and SMP (Z)
        const det2 = (mainIng.F - Ft) * (smp.SNF - SNFt) - (smp.F - Ft) * (mainIng.SNF - SNFt);
        let X2 = Infinity, Z2 = Infinity;
        if (Math.abs(det2) > 1e-9) {
            X2 = (C[0] * (smp.SNF - SNFt) - (smp.F - Ft) * C[1]) / det2;
            Z2 = ((mainIng.F - Ft) * C[1] - C[0] * (mainIng.SNF - SNFt)) / det2;
        }
        
        let X = 0, Y = 0, Z = 0;

        if (X1 >= -1e-6 && Y1 >= -1e-6) { // Prefer Water if it's a valid solution
            X = X1; Y = Y1;
        } else if (X2 >= -1e-6 && Z2 >= -1e-6) { // Fallback to SMP
            X = X2; Z = Z2;
        } else {
             setError("Cannot find a simple solution with two ingredients. The required adjustment may need a combination of Water and SMP, or is impossible with the given components.");
             return;
        }

        X = Math.max(0, X);
        Y = Math.max(0, Y);
        Z = Math.max(0, Z);
        
        const Vf = V0 + X + Y + Z;
        const finalFatMass = (Fi * V0) + (mainIng.F * X) + (water.F * Y) + (smp.F * Z);
        const finalFatPercent = (finalFatMass / Vf) * 100;
        const finalSnfMass = (SNFi * V0) + (mainIng.SNF * X) + (water.SNF * Y) + (smp.SNF * Z);
        const finalSnfPercent = finalSnfMass / Vf * 100;
        const finalClrCheck = 4 * (finalSnfPercent/100 - 0.25 * finalFatPercent/100 - 0.0044); // Inverse of ISI

        setResults({ x: X, y: Y, z: Z, Vf, finalFatPercent, finalSnfPercent, finalClrCheck, ing_name: mainIng.name });

    }, [inputs, correctionType, milkUnit]);

    return (
        <CalculatorCard title="Automated Standardization" description="Standardize milk by selecting one main ingredient. The calculator will automatically use Water or Skimmed Milk Powder (SMP) for fine-tuning.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Initial Milk</h4>
                    <div>
                        <Label>Volume (V₀)</Label>
                        <div className="flex">
                            <Input type="number" value={inputs.V0} onChange={e => handleInputChange('V0', e.target.value)} className="rounded-r-none" />
                            <Select value={milkUnit} onValueChange={(v) => setMilkUnit(v as 'liters' | 'kg')}>
                                <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kg</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <MemoizedInputField label="Fat (Fᵢ) %" value={inputs.Fi} name="Fi" setter={handleInputChange} />
                    <MemoizedInputField label="CLR (CLRᵢ)" value={inputs.CLRi} name="CLRi" setter={handleInputChange} />
                </div>
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold text-gray-700">Target Milk</h4>
                    <MemoizedInputField label="Target Fat (Fₜ) %" value={inputs.Ft} name="Ft" setter={handleInputChange} />
                    <MemoizedInputField label="Target CLR (CLRₜ)" value={inputs.CLRt} name="CLRt" setter={handleInputChange} />
                </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg space-y-3 mb-4">
                <h4 className="font-semibold text-gray-700">Correction Ingredient</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label>Select Main Ingredient</Label>
                        <Select value={correctionType} onValueChange={(v) => setCorrectionType(v)}>
                            <SelectTrigger><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cream">Cream</SelectItem>
                                <SelectItem value="rich_milk">Rich Milk</SelectItem>
                                <SelectItem value="skim_milk">Skimmed Milk</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {correctionType === 'cream' && (<>
                        <MemoizedInputField label="Cream Fat (F꜀) %" value={inputs.Fc} name="Fc" setter={handleInputChange} />
                        <MemoizedInputField label="Cream CLR (CLR꜀)" value={inputs.CLRc} name="CLRc" setter={handleInputChange} />
                    </>)}
                    {correctionType === 'rich_milk' && (<>
                        <MemoizedInputField label="Rich Milk Fat (Fᵣ) %" value={inputs.Fr} name="Fr" setter={handleInputChange} />
                        <MemoizedInputField label="Rich Milk CLR (CLRᵣ)" value={inputs.CLRr} name="CLRr" setter={handleInputChange} />
                    </>)}
                     {correctionType === 'skim_milk' && (<>
                        <MemoizedInputField label="Skim Milk Fat (Fₛ) %" value={inputs.Fs} name="Fs" setter={handleInputChange} />
                        <MemoizedInputField label="Skim Milk CLR (CLRₛ)" value={inputs.CLRs} name="CLRs" setter={handleInputChange} />
                    </>)}
                </div>
                 <p className="text-xs text-muted-foreground mt-2">Note: Water (0% Fat, 0 CLR) and SMP (0.5% Fat, 96% SNF) will be used automatically for fine-tuning.</p>
            </div>

            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {results && (
                <Alert className="mt-4">
                    <AlertTitle>Standardization Plan</AlertTitle>
                    <AlertDescription>
                        <p className="font-semibold">To reach your target, add the following:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {results.x > 0.001 && <li><strong>{results.ing_name}:</strong> {results.x.toFixed(2)} kg</li>}
                            {results.y > 0.001 && <li><strong>Water:</strong> {results.y.toFixed(2)} kg</li>}
                            {results.z > 0.001 && <li><strong>SMP:</strong> {results.z.toFixed(2)} kg</li>}
                        </ul>
                        <hr className="my-2"/>
                        <p className="font-semibold">Final Batch Summary:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>Final Volume:</strong> {results.Vf.toFixed(2)} kg</li>
                            <li><strong>Final Fat:</strong> {results.finalFatPercent.toFixed(2)}% (Target: {inputs.Ft}%)</li>
                            <li><strong>Final CLR:</strong> {results.finalClrCheck.toFixed(2)} (Target: {inputs.CLRt})</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
};

function TwoMilkBlendingToTargetCalc() {
    const [inputs, setInputs] = useState({
        f1: '6.5', c1: '29',
        f2: '2.5', c2: '27',
        fTarget: '4.5', cTarget: '28.5',
        qTotal: '1000'
    });
    const [totalQtyUnit, setTotalQtyUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value }));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const F1 = parseFloat(inputs.f1);
        const C1 = parseFloat(inputs.c1);
        const F2 = parseFloat(inputs.f2);
        const C2 = parseFloat(inputs.c2);
        const FT = parseFloat(inputs.fTarget);
        const CT = parseFloat(inputs.cTarget);
        const qTotalVal = parseFloat(inputs.qTotal);

        const QT = totalQtyUnit === 'liters' ? qTotalVal * componentProps.milkDensity : qTotalVal;

        if ([F1, C1, F2, C2, FT, CT, QT].some(isNaN)) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (QT <= 0) {
            setError("Total Batch Quantity must be a positive number.");
            return;
        }

        if ( (FT > Math.max(F1,F2)) || (FT < Math.min(F1,F2)) ) {
            setError("The target Fat % is not achievable. It must be between the Fat % of the source milks.");
            return;
        }

        // --- Step 1: Calculate milk quantities to achieve Target Fat ---
        let q1, q2;

        if (Math.abs(F1 - F2) < 1e-9) { // If both milks have same fat
            if (Math.abs(F1 - FT) > 1e-9) { // and it's not the target fat
                 setError("Cannot achieve target fat as both source milks have the same fat percentage, which is different from the target.");
                 return;
            }
            // If fat is same and matches target, we can't solve for ratio based on fat.
            // Arbitrarily set q1 to half and check CLR later.
            q1 = QT / 2;
            q2 = QT / 2;
        } else {
            q1 = QT * (FT - F2) / (F1 - F2);
            q2 = QT - q1;
        }
        
        if (q1 < 0 || q2 < 0) {
             setError("Calculation error: Negative milk quantity resulted. This can happen if target fat is outside the range of source milks.");
             return;
        }

        // --- Step 2: Check the resulting CLR and adjust if necessary ---
        const finalClrCheck = (q1 * C1 + q2 * C2) / QT;
        const clrDifference = CT - finalClrCheck;

        let resultHTML = `<p>To achieve the target Fat of <strong>${FT}%</strong> in a <strong>${inputs.qTotal} ${totalQtyUnit}</strong> batch, you need to blend:</p><ul class='list-disc list-inside mt-2 text-lg'>
                <li>Milk Source 1: <strong class='text-green-700'>${q1.toFixed(3)} kg</strong></li>
                <li>Milk Source 2: <strong class='text-green-700'>${q2.toFixed(3)} kg</strong></li>
            </ul>
            <p class='mt-3'>This blend will result in a CLR of approximately <strong>${finalClrCheck.toFixed(2)}</strong>.</p>
            <hr class='my-4' />
        `;

        if (Math.abs(clrDifference) < 0.05) { // If CLR is already close enough
            resultHTML += "<h4 class='font-bold text-md text-blue-700'>No CLR adjustment needed.</h4>";
        } else if (clrDifference > 0) { // If CLR is LOW and needs to be increased
            const smpSolidsPercent = 96;
            const smpNeeded = (QT * clrDifference * 0.25) / smpSolidsPercent;
            resultHTML += `<h4 class='font-bold text-md'>CLR Adjustment Required:</h4>
            To increase CLR from <strong>${finalClrCheck.toFixed(2)}</strong> to <strong>${CT}</strong>, you need to add:
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Skimmed Milk Powder (SMP): <strong class='text-blue-700'>${smpNeeded.toFixed(3)} kg</strong></li>
            </ul>
            `;
        } else { // If CLR is HIGH and needs to be decreased
            const clrToDecrease = finalClrCheck - CT;
            const waterNeeded = (clrToDecrease * QT) / 50; // Simplified from (clrToDecrease * 20 * QT) / 1000
            resultHTML += `<h4 class='font-bold text-md'>CLR Adjustment Required:</h4>
            To decrease CLR from <strong>${finalClrCheck.toFixed(2)}</strong> to <strong>${CT}</strong>, you need to add:
            <ul class='list-disc list-inside mt-2 text-lg'>
                <li>Water: <strong class='text-blue-700'>${waterNeeded.toFixed(3)} kg</strong></li>
            </ul>
            `;
        }
        
        setResult(resultHTML);

    }, [inputs, totalQtyUnit]);

    return (
        <CalculatorCard title="Advanced Two-Milk Blending to Target" description="Calculate required quantities of two milk sources to hit a target Fat %, with automatic adjustment for CLR using SMP or water.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 1</h3>
                    <MemoizedInputField label="Fat % (F₁)" value={inputs.f1} name="f1" setter={handleInputChange} />
                    <MemoizedInputField label="CLR (C₁)" value={inputs.c1} name="c1" setter={handleInputChange} />
                </div>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <h3 className="font-semibold text-gray-700 font-headline">Milk Source 2</h3>
                    <MemoizedInputField label="Fat % (F₂)" value={inputs.f2} name="f2" setter={handleInputChange} />
                    <MemoizedInputField label="CLR (C₂)" value={inputs.c2} name="c2" setter={handleInputChange} />
                </div>
                <div className="bg-primary/10 p-4 rounded-lg space-y-3 md:col-span-2">
                    <h3 className="font-semibold text-gray-700 font-headline">Target Batch</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <div>
                            <Label>Total Batch Qty (Qᴛ)</Label>
                            <div className="flex">
                                <Input type="number" value={inputs.qTotal} onChange={e => handleInputChange('qTotal', e.target.value)} className="rounded-r-none" />
                                <Select value={totalQtyUnit} onValueChange={(val) => setTotalQtyUnit(val as 'kg' | 'liters')}>
                                    <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg">Kg</SelectItem>
                                        <SelectItem value="liters">Liters</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <MemoizedInputField label="Target Fat % (Fᴛ)" value={inputs.fTarget} name="fTarget" setter={handleInputChange} />
                        <MemoizedInputField label="Target CLR (Cᴛ)" value={inputs.cTarget} name="cTarget" setter={handleInputChange} />
                    </div>
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Blend &amp; Adjust</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                 <Alert className="mt-4">
                    <AlertTitle>Blending &amp; Adjustment Plan</AlertTitle>
                    <AlertDescription>
                        <div className="mt-2 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: result }}/>
                    </AlertDescription>
                </Alert>
            )}
        </CalculatorCard>
    );
}

const PearsonSquareCalc = ({ unit, calcType }: { unit: string, calcType: 'Fat' | 'CLR' }) => {
    const [inputs, setInputs] = useState({ high: "", low: "", target: "", qty: "" });
    const [totalQtyUnit, setTotalQtyUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const handleCalc = useCallback(() => {
        const highVal = parseFloat(inputs.high);
        const lowVal = parseFloat(inputs.low);
        const targetVal = parseFloat(inputs.target);
        const qtyVal = parseFloat(inputs.qty);
        const qtyInKg = totalQtyUnit === 'liters' ? qtyVal * componentProps.milkDensity : qtyVal;
        
        setResult(null);
        setError(null);

        if (isNaN(highVal) || isNaN(lowVal) || isNaN(targetVal) || isNaN(qtyInKg)) {
            setError("Please fill all fields with numbers.");
            return;
        }

        if (targetVal > highVal || targetVal < lowVal) {
            setError(`Target ${calcType} must be between the High and Low values.`);
            return;
        }

        const highParts = targetVal - lowVal;
        const lowParts = highVal - targetVal;
        const totalParts = highParts + lowParts;

        if (totalParts === 0) {
            setError("Cannot calculate, total parts is zero. Check your inputs.");
            return;
        }

        const highQty = (qtyInKg * highParts) / totalParts;
        const lowQty = (qtyInKg * lowParts) / totalParts;

        setResult(`To get ${qtyInKg.toFixed(2)} Kg of ${targetVal}${unit} product, you need to mix:<br/><strong class="text-green-700">${highQty.toFixed(2)} Kg</strong> of High ${calcType} milk and <strong class="text-green-700">${lowQty.toFixed(2)} Kg</strong> of Low ${calcType} milk.`);
    }, [inputs, unit, calcType, totalQtyUnit]);

    return (
         <CalculatorCard title={`${calcType} Blending Calculator`} description={`Blend two milks with different ${calcType}% to create a new product.`}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 1 (High ${calcType})</h3>
                    <MemoizedInputField label={`${calcType} ${unit}`} value={inputs.high} name="high" setter={handleInputChange} placeholder="e.g., 5.0" />
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 font-headline">Source Milk 2 (Low ${calcType})</h3>
                    <MemoizedInputField label={`${calcType} ${unit}`} value={inputs.low} name="low" setter={handleInputChange} placeholder="e.g., 0.5" />
                </div>
            </div>
             <div className="bg-primary/10 p-4 rounded-lg mb-4">
                 <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MemoizedInputField label={`Target ${calcType} ${unit}`} value={inputs.target} name="target" setter={handleInputChange} placeholder="e.g., 3.0" />
                    <div>
                        <Label>Target Batch Qty</Label>
                        <div className="flex">
                            <Input type="number" value={inputs.qty} onChange={(e) => handleInputChange('qty', e.target.value)} placeholder="e.g., 100" className="rounded-r-none" />
                            <Select value={totalQtyUnit} onValueChange={(val) => setTotalQtyUnit(val as 'kg' | 'liters')}>
                                <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kg</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={handleCalc} className="w-full">Calculate Blend</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function FatBlendingCalc() { return <PearsonSquareCalc unit="%" calcType="Fat" /> }
function ClrBlendingCalc() { return <PearsonSquareCalc unit="" calcType="CLR" /> }

function ReconstitutedMilkCalc() {
    const [inputs, setInputs] = useState({ batchQty: '100', targetTS: '12.5', powderTS: '96' });
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        const qtyVal = parseFloat(inputs.batchQty);
        const qty = batchUnit === 'liters' ? qtyVal * componentProps.milkDensity : qtyVal;
        const tTS = parseFloat(inputs.targetTS) / 100;
        const pTS = parseFloat(inputs.powderTS) / 100;

        if ([qty, tTS, pTS].some(isNaN) || qty <= 0 || tTS <= 0 || pTS <= 0) {
            setError("Please fill all fields with valid positive numbers.");
            return;
        }

        if (pTS < tTS) {
            setError("Powder TS% cannot be less than Target TS%. Please check your inputs.");
            return;
        }

        const totalSolidsNeeded = qty * tTS;
        const powderNeeded = totalSolidsNeeded / pTS;
        const waterNeeded = qty - powderNeeded;

        if (waterNeeded < 0) {
            setError("Calculation resulted in negative water. Please check your inputs.");
            return;
        }

        setResult(`To make <strong>${inputs.batchQty} ${batchUnit}</strong> of milk with <strong>${inputs.targetTS}% TS</strong>, you need:<br/>- <strong class='text-green-700'>${powderNeeded.toFixed(3)} kg</strong> of Milk Powder (${inputs.powderTS}%)<br/>- <strong class='text-green-700'>${waterNeeded.toFixed(3)} kg</strong> of Water`);
    }, [inputs, batchUnit]);

    return (
        <CalculatorCard title="Reconstituted Milk Calculator" description="Calculate how much Milk Powder and Water are needed to create milk of a specific Total Solids (TS) content.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                 <div>
                    <Label>Target Batch Quantity</Label>
                    <div className="flex">
                        <Input type="number" value={inputs.batchQty} onChange={(e) => handleInputChange('batchQty', e.target.value)} placeholder="e.g., 100" className="rounded-r-none" />
                        <Select value={batchUnit} onValueChange={(val) => setBatchUnit(val as any)}>
                            <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="kg">Kg</SelectItem>
                                <SelectItem value="liters">Liters</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <MemoizedInputField label="Target Total Solids (TS) %" value={inputs.targetTS} name="targetTS" setter={handleInputChange} />
                <MemoizedInputField label="Milk Powder Total Solids (TS) %" value={inputs.powderTS} name="powderTS" setter={handleInputChange} />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function RecombinedMilkCalc() {
    const [inputs, setInputs] = useState({
        batchQty: '100',
        targetFat: '3.5',
        targetClr: '28.5',
        smpFat: '1.0',
        smpSNF: '95.0',
        fatSourceFat: '99.8',
        formula: 'isi',
        customFatMultiplier: '0.25',
        customConstant: '0.72'
    });
    const [batchUnit, setBatchUnit] = useState<'kg' | 'liters'>('kg');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculateSnf = useCallback((clr: number, fat: number) => {
        if (inputs.formula === 'custom') {
            const multi = parseFloat(inputs.customFatMultiplier) || 0;
            const constFactor = parseFloat(inputs.customConstant) || 0;
            return (clr / 4) + (fat * multi) + constFactor;
        }
        const formula = snfFormulas[inputs.formula as keyof typeof snfFormulas] || snfFormulas.isi;
        return formula.calc(clr, fat);
    }, [inputs.formula, inputs.customFatMultiplier, inputs.customConstant]);
    
    const targetSnf = useMemo(() => {
        const fat = parseFloat(inputs.targetFat);
        const clr = parseFloat(inputs.targetClr);
        return !isNaN(fat) && !isNaN(clr) ? calculateSnf(clr, fat) : 0;
    }, [inputs.targetFat, inputs.targetClr, calculateSnf]);


    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const Q_val = parseFloat(inputs.batchQty);
        const Q = batchUnit === 'liters' ? Q_val * componentProps.milkDensity : Q_val;

        const Ft = parseFloat(inputs.targetFat) / 100;
        const St = targetSnf / 100; // Calculated SNF
        const Fp = parseFloat(inputs.smpFat) / 100;
        const Sp = parseFloat(inputs.smpSNF) / 100;
        const Fb = parseFloat(inputs.fatSourceFat) / 100;

        if ([Q, Ft, St, Fp, Sp, Fb].some(isNaN) || Q <= 0) {
            setError("Please fill all fields with valid numbers.");
            return;
        }

        if (St <= 0) {
             setError("Calculated Target SNF is zero or negative. Please check Fat and CLR values.");
            return;
        }

        const P = (Q * St) / Sp; // Powder needed
        const B = (Q * Ft - P * Fp) / Fb; // Butter oil needed
        const W = Q - P - B; // Water needed

        if (P < 0 || B < 0 || W < 0) {
            setError("Calculation resulted in negative values. Please check your inputs. This can happen if ingredient compositions are not logical (e.g., SMP fat is higher than target fat).");
            return;
        }

        setResult(`To make <strong>${inputs.batchQty} ${batchUnit}</strong> of milk with <strong>${inputs.targetFat}% Fat</strong> and <strong>${targetSnf.toFixed(2)}% SNF</strong>, you need:<br/>
        - <strong class='text-green-700'>${P.toFixed(3)} kg</strong> of Skim Milk Powder<br/>
        - <strong class='text-green-700'>${B.toFixed(3)} kg</strong> of Butter Oil/AMF<br/>
        - <strong class='text-green-700'>${W.toFixed(3)} kg</strong> of Water`);
    }, [inputs, batchUnit, targetSnf]);

    return (
        <CalculatorCard title="Recombined Milk Calculator" description="Calculate the required Skim Milk Powder (SMP), Butter Oil (or other fat source), and Water to create milk of a desired composition.">
             <div className="mb-4">
                 <Label>Select SNF Calculation Formula</Label>
                 <Select value={inputs.formula} onValueChange={(val) => handleInputChange('formula', val)}>
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
                 {inputs.formula === 'custom' && (
                     <div className="grid grid-cols-2 gap-4 mt-4 p-4 border rounded-lg bg-indigo-50">
                        <MemoizedInputField label="Fat Multiplier" value={inputs.customFatMultiplier} name="customFatMultiplier" setter={(name, val) => handleInputChange(name, val)} />
                        <MemoizedInputField label="Constant (C)" value={inputs.customConstant} name="customConstant" setter={(name, val) => handleInputChange(name, val)} />
                     </div>
                 )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Target Milk</h3>
                     <div>
                        <Label>Target Batch Quantity</Label>
                        <div className="flex">
                            <Input type="number" value={inputs.batchQty} onChange={(e) => handleInputChange('batchQty', e.target.value)} placeholder="e.g., 100" className="rounded-r-none" />
                            <Select value={batchUnit} onValueChange={(val) => setBatchUnit(val as any)}>
                                <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="kg">Kg</SelectItem>
                                    <SelectItem value="liters">Liters</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <MemoizedInputField label="Target Fat %" value={inputs.targetFat} name="targetFat" setter={handleInputChange} />
                    <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                    <div className="text-sm p-2 bg-green-100 rounded">Calculated Target SNF: <strong className="font-bold">{targetSnf > 0 ? targetSnf.toFixed(2) + '%' : '...'}</strong></div>
                </div>
                 <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                     <h3 className="font-semibold text-gray-700 mb-2 font-headline">Ingredients Composition</h3>
                     <MemoizedInputField label="Skim Milk Powder (SMP) Fat %" value={inputs.smpFat} name="smpFat" setter={handleInputChange} />
                     <MemoizedInputField label="Skim Milk Powder (SMP) SNF %" value={inputs.smpSNF} name="smpSNF" setter={handleInputChange} />
                     <MemoizedInputField label="Fat Source (e.g., Butter Oil) Fat %" value={inputs.fatSourceFat} name="fatSourceFat" setter={handleInputChange} />
                </div>
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate Recombined Milk</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function ClrCorrectionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [olr, setOlr] = useState("28.5");
    const [temp, setTemp] = useState("29");

    const handleCalc = () => {
        const olrNum = parseFloat(olr);
        const tempNum = parseFloat(temp);
        if (isNaN(olrNum) || isNaN(tempNum)) {
            setResult('Invalid Input'); return;
        }
        const clr = olrNum + (tempNum - 27) * 0.2;
        setResult(clr.toFixed(2));
    }

    return (
        <CalculatorCard title="CLR Correction Calculator" description="Correct Lactometer Reading based on temperature.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <div><Label>Observed Lactometer Reading (OLR)</Label><Input type="number" value={olr} onChange={e => setOlr(e.target.value)} placeholder="28.5" /></div>
                <div><Label>Milk Temperature (°C)</Label><Input type="number" value={temp} onChange={e => setTemp(e.target.value)} placeholder="29" /></div>
                <p className="text-xs text-gray-500">Note: Standard calibration temperature is 27°C.</p>
            </div>
            <Button onClick={handleCalc} className="w-full mt-4">Correct CLR</Button>
            {result && <div className="mt-4 text-center"><p className="text-gray-600">Corrected Lactometer Reading (CLR):</p><p className="text-3xl font-bold text-green-700">{result}</p></div>}
        </CalculatorCard>
    );
}

function KgFatSnfCalc() {
    const [inputs, setInputs] = useState({
        qty: "1000",
        fat: "4.5",
        snf: "8.5",
    });
    const [unit, setUnit] = useState<'liter' | 'kg'>('liter');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        const qtyVal = parseFloat(inputs.qty);
        const fatVal = parseFloat(inputs.fat);
        const snfVal = parseFloat(inputs.snf);
        setResult(null); setError(null);

        if ([qtyVal, fatVal, snfVal].some(isNaN)) {
            setError("Please fill all fields with numbers.");
            return;
        }

        const milkWeight = unit === 'liter' ? qtyVal * componentProps.milkDensity : qtyVal;
        const fatKg = milkWeight * (fatVal / 100);
        const snfKg = milkWeight * (snfVal / 100);
        setResult(`In <strong>${qtyVal} ${unit === 'liter' ? 'Ltr' : 'Kg'}</strong> of milk:<br/>- <strong>Total Fat:</strong> ${fatKg.toFixed(2)} Kg<br/>- <strong>Total SNF (Powder):</strong> ${snfKg.toFixed(2)} Kg`);
    }, [inputs, unit]);

    return (
        <CalculatorCard title="Kg Fat & SNF Calculator" description="Find out the amount (in Kg) of Fat and Powder (SNF) from a given quantity of milk.">
            <div className="bg-muted/50 p-4 rounded-lg space-y-4">
                 <div>
                    <Label>Milk Quantity</Label>
                    <div className="flex">
                       <Input 
                            type="number" 
                            name="qty" 
                            value={inputs.qty} 
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)} 
                            className="rounded-r-none" 
                            placeholder="1000"
                        />
                         <Select value={unit} onValueChange={(v) => setUnit(v as 'liter' | 'kg')}>
                            <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="liter">Liters</SelectItem>
                                <SelectItem value="kg">Kg</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <MemoizedInputField label="Fat %" value={inputs.fat} name="fat" setter={handleInputChange} placeholder="4.5" />
                <MemoizedInputField label="SNF %" value={inputs.snf} name="snf" setter={handleInputChange} placeholder="8.5" />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate</Button>
            
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
        </CalculatorCard>
    );
}

function ClrIncreaseCalc() {
    const [inputs, setInputs] = useState({
        initialVolume: '1000',
        initialClr: '27',
        targetClr: '29',
        smpSnf: '96'
    });
    const [volumeUnit, setVolumeUnit] = useState<'kg' | 'liters'>('liters');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((name: string, value: string) => {
        setInputs(prev => ({...prev, [name]: value}));
    }, []);

    const calculate = useCallback(() => {
        setResult(null);
        setError(null);
        
        const initialVolumeValue = parseFloat(inputs.initialVolume);
        
        const C0 = parseFloat(inputs.initialClr);
        const Ct = parseFloat(inputs.targetClr);
        const Ps = parseFloat(inputs.smpSnf);

        if ([initialVolumeValue, C0, Ct, Ps].some(isNaN) || initialVolumeValue <= 0 || Ps <=0) {
            setError("Please fill all fields with valid positive numbers.");
            return;
        }
        if (Ct <= C0) {
            setError("Target CLR must be higher than the initial CLR.");
            return;
        }
        
        const volumeInLiters = volumeUnit === 'kg' ? initialVolumeValue / componentProps.milkDensity : initialVolumeValue;
        
        const snfKgToAdd = (volumeInLiters * (Ct - C0) * 0.25) / 100;
        const smpNeeded = (snfKgToAdd * 100) / Ps;
        
        setResult(`To increase CLR from <strong>${C0}</strong> to <strong>${Ct}</strong> in <strong>${inputs.initialVolume} ${volumeUnit}</strong> of milk, you need to add approximately <strong>${smpNeeded.toFixed(2)} kg</strong> of SMP (${inputs.smpSnf}% SNF).`);
    }, [inputs, volumeUnit]);

    return (
         <CalculatorCard title="CLR Increase Calculator" description="Calculate the amount of Skimmed Milk Powder (SMP) needed to increase the CLR of a milk batch.">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label>Initial Milk Volume</Label>
                    <div className="flex">
                        <Input type="number" value={inputs.initialVolume} onChange={(e) => handleInputChange('initialVolume', e.target.value)} className="rounded-r-none" />
                        <Select value={volumeUnit} onValueChange={(v) => setVolumeUnit(v as any)}>
                            <SelectTrigger className="w-[100px] rounded-l-none"><SelectValue/></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="liters">Liters</SelectItem>
                                <SelectItem value="kg">Kg</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <MemoizedInputField label="Initial CLR" value={inputs.initialClr} name="initialClr" setter={handleInputChange} />
                <MemoizedInputField label="Target CLR" value={inputs.targetClr} name="targetClr" setter={handleInputChange} />
                <MemoizedInputField label="SNF in SMP (%)" value={inputs.smpSnf} name="smpSnf" setter={handleInputChange} />
            </div>
            <Button onClick={calculate} className="w-full mt-4">Calculate SMP Needed</Button>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && <Alert className="mt-4"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
         </CalculatorCard>
    );
}
    
    







    

    






    



