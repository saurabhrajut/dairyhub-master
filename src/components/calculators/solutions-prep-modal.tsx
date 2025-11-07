
"use client";

import { useState, Fragment, useCallback, memo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { chemicals, reagentRecipes } from "@/lib/data";
import { ArrowLeft, ChevronsUp } from 'lucide-react';
import { AcidIcon, BaseIcon, DilutionIcon, IndicatorIcon, NormalityAdjustmentIcon, PercentageSolutionIcon, ReagentIcon, SpiritSolutionIcon, StandardizationIcon, StrengthIcon } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const sortedReagentKeys = Object.keys(reagentRecipes).sort((a,b) => reagentRecipes[a as keyof typeof reagentRecipes].name.localeCompare(reagentRecipes[b as keyof typeof reagentRecipes].name));

type CalculatorType = 'acid-solution' | 'base-solution' | 'indicator-solution' | 'reagent-calculator' | 'percentage-solution' | 'stock-solution' | 'standardization' | 'strength-calculator' | 'spirit-solution' | 'normality-adjustment';

const calculatorsInfo = {
  'acid-solution': { title: "Acids", icon: AcidIcon, component: AcidSolutionCalc },
  'base-solution': { title: "Bases", icon: BaseIcon, component: BaseSolutionCalc },
  'indicator-solution': { title: "Indicators", icon: IndicatorIcon, component: IndicatorCalc },
  'reagent-calculator': { title: "Reagents", icon: ReagentIcon, component: ReagentCalculator },
  'percentage-solution': { title: "Percentage Solution", icon: PercentageSolutionIcon, component: PercentageSolutionCalc },
  'stock-solution': { title: "Dilution", icon: DilutionIcon, component: DilutionCalc },
  'standardization': { title: "Standardization", icon: StandardizationIcon, component: StandardizationCalc },
  'strength-calculator': { title: "Strength", icon: StrengthIcon, component: StrengthCalc },
  'spirit-solution': { title: "Spirit Solution", icon: SpiritSolutionIcon, component: SpiritSolutionCalc },
  'normality-adjustment': { title: "Normality Adjustment", icon: NormalityAdjustmentIcon, component: CombinedNormalityAdjustmentCalc },
};

export function SolutionsPrepModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
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
                      <DialogDescription>Calculate specific solution parameters.</DialogDescription>
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
                  <DialogTitle className="text-3xl font-bold text-center font-headline">Solution Preparation</DialogTitle>
                  <DialogDescription className="text-center">Calculators for various lab solutions.</DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 mt-4 pr-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                      {Object.entries(calculatorsInfo).map(([key, { title, icon: Icon }]) => (
                          <button
                              key={key}
                              onClick={() => setActiveCalculator(key as CalculatorType)}
                              className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-xl shadow-sm border text-center aspect-square transition-all duration-200"
                          >
                              <Icon className="w-12 h-12 text-primary mb-3" />
                              <span className="font-semibold font-headline text-card-foreground text-sm">{title}</span>
                          </button>
                      ))}
                  </div>
              </ScrollArea>
            </>
        )}
      </DialogContent>
    </Dialog>
  );
}

const CalculatorCard = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="bg-card p-4 rounded-xl shadow-sm border mt-4">
        <h3 className="text-xl font-bold text-primary mb-2 font-headline">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
        {children}
    </div>
);

function SolutionCalculator({ chemType, title, idPrefix }: { chemType: 'acids' | 'bases' | 'other_reagents'; title: string; idPrefix: string; }) {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [chemicalKey, setChemicalKey] = useState("");
    const [normality, setNormality] = useState("");
    const [volume, setVolume] = useState("");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        const norm = parseFloat(normality);
        const vol = parseFloat(volume);

        if (!chemicalKey || isNaN(norm) || isNaN(vol) || norm <= 0 || vol <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const chemical = (chemicals as any)[chemType][chemicalKey];
        let resultText = '';

        if (chemical.type === 'solid') {
            const equivalentWeight = chemical.molarMass / chemical.nFactor;
            const weight = norm * equivalentWeight * (vol / 1000);
            resultText = `To prepare ${vol} mL of ${norm} N ${chemical.name}, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(3)} g</code> of the solid in distilled water and make the final volume up to <code class="font-bold">${vol} mL</code>.`;
        } else if (chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            const requiredVolume = (norm * vol) / stockNormality;
            resultText = `To prepare ${vol} mL of ${norm} N ${chemical.name}, take <code class="font-bold bg-green-100 p-1 rounded">${requiredVolume.toFixed(3)} mL</code> of the concentrated liquid (Purity: ${chemical.purity}%, Density: ${chemical.density} g/mL) and carefully add it to distilled water, then make the final volume up to <code class="font-bold">${vol} mL</code>. <strong class="block mt-2 text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Always add acid to water!</strong>`;
        }
        setResult(resultText);
    }, [chemicalKey, normality, volume, chemType]);
    
    return (
        <CalculatorCard title={title}>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor={`${idPrefix}-select`}>Select Chemical</Label>
                        <Select name={`${idPrefix}-select`} value={chemicalKey} onValueChange={setChemicalKey} required>
                            <SelectTrigger><SelectValue placeholder={`Select a chemical`} /></SelectTrigger>
                            <SelectContent>
                                {Object.entries((chemicals as any)[chemType]).map(([key, value]: [string, any]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor={`${idPrefix}-normality`}>Required Normality (N)</Label>
                        <Input type="number" name={`${idPrefix}-normality`} placeholder="e.g., 0.1" step="any" value={normality} onChange={(e) => setNormality(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor={`${idPrefix}-volume`}>Final Volume (mL)</Label>
                        <Input type="number" name={`${idPrefix}-volume`} placeholder="e.g., 1000" step="any" value={volume} onChange={(e) => setVolume(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full">Calculate</Button>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
}

function AcidSolutionCalc() { return <SolutionCalculator chemType="acids" title="Prepare Acid Solution (by Normality)" idPrefix="acid" />; }
function BaseSolutionCalc() { return <SolutionCalculator chemType="bases" title="Prepare Base Solution (by Normality)" idPrefix="base" />; }

function IndicatorCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [indicatorKey, setIndicatorKey] = useState("");
    const [volume, setVolume] = useState("100");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        if (!indicatorKey) { setError("Please select an indicator."); return; }
        const vol = parseFloat(volume);
        if (isNaN(vol) || vol <= 0) { setError("Please enter a valid positive volume."); return; }

        const indicator = chemicals.indicators[indicatorKey as keyof typeof chemicals.indicators];
        let resultText = '';
        const scaleFactor = vol / indicator.baseVolume;

        switch (indicator.type) {
            case 'w/v':
                const weight = indicator.weight! * scaleFactor;
                resultText = `To prepare ${vol}mL of ${indicator.name} indicator, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(3)}g</code> of the powder in ${vol}mL of ${indicator.solvent}.`;
                break;
            case 'v/v':
                const liquidVol = indicator.volume! * scaleFactor;
                 resultText = `To prepare ${vol}mL of ${indicator.name} indicator, take <code class="font-bold bg-green-100 p-1 rounded">${liquidVol.toFixed(2)}mL</code> of the stock solution and dilute with ${indicator.solvent} to a final volume of <code class="font-bold">${vol}mL</code>.`;
                break;
            case 'complex_liquid':
                const naohVol = indicator.naohVolume! * scaleFactor;
                const finalWeight = indicator.weight! * scaleFactor;
                resultText = `To prepare ${vol}mL of ${indicator.name} indicator, weigh <code class="font-bold bg-green-100 p-1 rounded">${finalWeight.toFixed(3)}g</code> of the indicator powder, add <code class="font-bold bg-blue-100 p-1 rounded">${naohVol.toFixed(2)}mL</code> of N/50 sodium hydroxide solution, and dilute with distilled water to a final volume of <code class="font-bold">${vol}mL</code>.`;
                break;
            case 'mixed':
                 resultText = `This is a mixed indicator with a fixed recipe and cannot be scaled easily. Please follow the standard preparation method: <br/>${indicator.note}`;
                 break;
            default:
                 resultText = indicator.note || "No specific instructions available.";
                 break;
        }

        setResult(resultText);
    }, [indicatorKey, volume]);

    return (
        <CalculatorCard title="Prepare Indicator Solution">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="md:col-span-1">
                        <Label htmlFor="indicator-select">Select Indicator</Label>
                        <Select name="indicator-select" value={indicatorKey} onValueChange={setIndicatorKey} required>
                            <SelectTrigger><SelectValue placeholder="Select an indicator" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.indicators).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="md:col-span-1">
                        <Label htmlFor="indicator-volume">Final Volume (mL)</Label>
                        <Input type="number" name="indicator-volume" placeholder="e.g., 100" step="any" value={volume} onChange={e => setVolume(e.target.value)} required />
                    </div>
                    <div className="md:col-span-1">
                        <Button type="submit" className="w-full">Get Instructions</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Preparation Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function ReagentCalculator() {
    const [selectedReagent, setSelectedReagent] = useState("");
    const [volume, setVolume] = useState("100");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = useCallback(() => {
        setError(null);
        setResult(null);

        const vol = parseFloat(volume);
        if (!selectedReagent) {
            setError("Please select a reagent first.");
            return;
        }
        if (isNaN(vol) || vol <= 0) {
            setError("Please enter a valid volume (in ml).");
            return;
        }

        const recipe = reagentRecipes[selectedReagent as keyof typeof reagentRecipes];
        let resultHTML = `<h4 class="font-bold text-lg mb-2">To make ${vol}ml of ${recipe.name}:</h4>`;
        
        const factor = vol / 100;

        switch(recipe.type) {
            case 'w/v':
            case 'v/v':
            case 'w/v_in_acid':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(3);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;
            
            case 'complex':
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (c.amount * factor).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ${c.unit}</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'ratio':
                const totalParts = recipe.components.reduce((sum, c) => sum + c.ratio, 0);
                resultHTML += '<ul class="list-disc list-inside space-y-1">';
                recipe.components.forEach(c => {
                    const calculatedAmount = (vol * c.ratio / totalParts).toFixed(2);
                    resultHTML += `<li><strong>${c.name}:</strong> ${calculatedAmount} ml</li>`;
                });
                resultHTML += '</ul>';
                resultHTML += `<p class="mt-3 text-sm text-gray-600">${recipe.instructions}</p>`;
                break;

            case 'fixed':
                resultHTML += `<p class="text-gray-700">${recipe.instructions}</p>`;
                break;
        }
        setResult(resultHTML);
    }, [selectedReagent, volume]);

    return (
        <CalculatorCard title="Reagent Calculator">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <Label htmlFor="reagent-select">Select Reagent:</Label>
                    <Select value={selectedReagent} onValueChange={setSelectedReagent}>
                        <SelectTrigger id="reagent-select"><SelectValue placeholder="-- Please select a reagent --" /></SelectTrigger>
                        <SelectContent>
                            {sortedReagentKeys.map((key, index) => {
                                const reagent = reagentRecipes[key as keyof typeof reagentRecipes];
                                return (
                                    <SelectItem key={key} value={key}>
                                        <div className="flex flex-col">
                                            <span className="font-semibold">{`${index + 1}. ${reagent.name}`}</span>
                                            <span className="text-xs text-muted-foreground">{`(${reagent.testName})`}</span>
                                        </div>
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="reagent-volume">Final Volume (ml)?</Label>
                    <Input type="number" id="reagent-volume" value={volume} onChange={e => setVolume(e.target.value)} placeholder="e.g., 100" />
                </div>
            </div>
            <div className="mt-4 text-center">
                <Button onClick={handleCalculate} className="w-full">
                    Calculate
                </Button>
            </div>
            {error && <Alert variant="destructive" className="mt-4"><AlertDescription>{error}</AlertDescription></Alert>}
            {result && (
                <Alert className="mt-6 prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: result }} />
                </Alert>
            )}
        </CalculatorCard>
    );
}

function StandardizationCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [primaryStd, setPrimaryStd] = useState<string>("");
    const [v1, setV1] = useState(""); // Primary std volume
    const [w1, setW1] = useState(""); // Primary std weight
    const [v2, setV2] = useState(""); // Titrant volume

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const primaryStdKey = primaryStd;
        const vol1 = parseFloat(v1);
        const weight1 = parseFloat(w1);
        const vol2 = parseFloat(v2);

        if (!primaryStdKey || isNaN(weight1) || isNaN(vol1) || isNaN(vol2) || vol1 <= 0 || weight1 <= 0 || vol2 <= 0) {
            setError('Please enter valid positive numbers in all fields.');
            return;
        }
        
        const std = chemicals.primaryStandards[primaryStdKey as keyof typeof chemicals.primaryStandards];
        const equivalentWeight = std.molarMass / std.nFactor;

        // N1 = (Weight of Primary Std * 1000) / (Eq. Wt. * Volume of solution in ml)
        const n1 = (weight1 * 1000) / (equivalentWeight * vol1);
        const n2 = (n1 * 10) / vol2; // Assuming 10ml of primary std is taken for titration

        setResult(`The normality of the secondary standard solution is <code class="font-bold bg-green-100 p-1 rounded">${n2.toFixed(4)} N</code>.`);
    }, [primaryStd, v1, w1, v2]);

    return (
         <CalculatorCard title="Standardize a Solution (Titration)" description="Use the formula N₁V₁ = N₂V₂ to find the exact normality (N₂) of your prepared solution.">
            <form onSubmit={handleSubmit}>
                <h3 className="font-bold text-lg mb-2 text-gray-700">1. Prepare Primary Standard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end p-4 bg-muted rounded-lg">
                    <div>
                        <Label htmlFor="std-select">Select Primary Standard</Label>
                        <Select value={primaryStd} onValueChange={setPrimaryStd} name="std-select" required>
                            <SelectTrigger><SelectValue placeholder="Select a standard" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.primaryStandards).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="std-weight">Weight taken (g)</Label>
                        <Input type="number" name="std-weight" value={w1} onChange={e => setW1(e.target.value)} placeholder="e.g., 0.53" step="any" required />
                    </div>
                    <div>
                        <Label htmlFor="std-vol1">Final Volume made (ml)</Label>
                        <Input type="number" name="std-vol1" value={v1} onChange={e => setV1(e.target.value)} placeholder="e.g., 100" step="any" required />
                    </div>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-2 text-gray-700">2. Titration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end p-4 bg-muted rounded-lg">
                    <div>
                        <Label htmlFor="std-v2">Titrant Volume used for 10ml Primary Std (V₂)</Label>
                        <Input type="number" name="std-v2" value={v2} onChange={e => setV2(e.target.value)} placeholder="e.g., 9.8" step="any" required />
                    </div>
                    <Button type="submit" className="w-full">Calculate Normality (N₂)</Button>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function StrengthCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [chemicalKey, setChemicalKey] = useState("");
    const [normality, setNormality] = useState("");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const norm = parseFloat(normality);
        
        if (!chemicalKey || isNaN(norm) || norm <= 0) {
            setError('Please select a chemical and enter a valid normality.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        const equivalentWeight = chemical.molarMass / chemical.nFactor;
        const strength = norm * equivalentWeight;
        
        setResult(`The strength of ${norm} N ${chemical.name} is <code class="font-bold bg-green-100 p-1 rounded">${strength.toFixed(3)} g/L</code>.`);
    }, [chemicalKey, normality, allChemicals]);

    return (
        <CalculatorCard title="Strength Calculator">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="strength-chemical">Select Chemical</Label>
                        <Select name="strength-chemical" value={chemicalKey} onValueChange={setChemicalKey} required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Other Reagents</Label>
                                    {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="strength-normality">Normality (N)</Label>
                        <Input type="number" name="strength-normality" placeholder="e.g., 0.1012" step="any" value={normality} onChange={e => setNormality(e.target.value)} required />
                    </div>
                    <div className="md:col-span-2">
                    <Button type="submit" className="w-full">Calculate Strength</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function SpiritSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [spiritKey, setSpiritKey] = useState("");
    const [reqStrength, setReqStrength] = useState("");
    const [reqVolume, setReqVolume] = useState("");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const requiredStrength = parseFloat(reqStrength);
        const requiredVolume = parseFloat(reqVolume);
        
        if (!spiritKey || isNaN(requiredStrength) || isNaN(requiredVolume) || requiredStrength <= 0 || requiredVolume <= 0) {
            setError('Please provide valid positive numbers for all fields.');
            return;
        }

        const spirit = chemicals.spirits[spiritKey as keyof typeof chemicals.spirits];
        if (requiredStrength > spirit.stockPurity) {
            setError(`Required strength cannot be higher than stock purity (${spirit.stockPurity}%).`);
            return;
        }

        const v1 = (requiredStrength * requiredVolume) / spirit.stockPurity;
        setResult(`To prepare ${requiredVolume} mL of ${requiredStrength}% ${spirit.name}, take <code class="font-bold bg-green-100 p-1 rounded">${v1.toFixed(2)} mL</code> of ${spirit.stockPurity}% stock solution and add <code class="font-bold bg-blue-100 p-1 rounded">${(requiredVolume - v1).toFixed(2)} mL</code> of distilled water.`);
    }, [spiritKey, reqStrength, reqVolume]);

    return (
        <CalculatorCard title="Spirit Solution (Alcohol Dilution)" description="Use the formula C₁V₁ = C₂V₂.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="spirit-select">Select Spirit</Label>
                        <Select name="spirit-select" value={spiritKey} onValueChange={setSpiritKey} required>
                            <SelectTrigger><SelectValue placeholder="Select a spirit" /></SelectTrigger>
                            <SelectContent>
                                {Object.entries(chemicals.spirits).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{`${value.name} (${value.stockPurity}%)`}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="spirit-required-strength">Required Strength (%)</Label>
                        <Input type="number" name="spirit-required-strength" placeholder="e.g., 70" step="any" value={reqStrength} onChange={e => setReqStrength(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="spirit-required-volume">Required Volume (mL)</Label>
                        <Input type="number" name="spirit-required-volume" placeholder="e.g., 1000" step="any" value={reqVolume} onChange={e => setReqVolume(e.target.value)} required />
                    </div>
                    <div className="md:col-span-2">
                        <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function CombinedNormalityAdjustmentCalc() {
    return (
        <CalculatorCard title="Normality Adjustment">
            <Tabs defaultValue="decrease">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="decrease">Decrease Normality</TabsTrigger>
                    <TabsTrigger value="increase">Increase Normality</TabsTrigger>
                </TabsList>
                <TabsContent value="decrease" className="pt-4">
                    <DecreaseNormalityCalc />
                </TabsContent>
                <TabsContent value="increase" className="pt-4">
                    <IncreaseNormalityCalc />
                </TabsContent>
            </Tabs>
        </CalculatorCard>
    )
}

function DecreaseNormalityCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [nHave, setNHave] = useState("");
    const [vHave, setVHave] = useState("");
    const [nReq, setNReq] = useState("");


    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const n_have = parseFloat(nHave);
        const v_have = parseFloat(vHave);
        const n_req = parseFloat(nReq);
        
        if (isNaN(n_have) || isNaN(v_have) || isNaN(n_req) || n_have <= 0 || v_have <= 0 || n_req <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }

        if (n_have <= n_req) {
            setError('Required normality must be lower than the normality you have.');
            return;
        }

        const v_add = v_have * ((n_have / n_req) - 1);
        setResult(`You need to add <code class="font-bold bg-green-100 p-1 rounded">${v_add.toFixed(2)} mL</code> of solvent to your <code class="font-bold">${v_have} mL</code> of <code class="font-bold">${n_have} N</code> solution to get a final normality of <code class="font-bold">${n_req} N</code>.`);
    }, [nHave, vHave, nReq]);

    return (
        <div>
            <p className="text-sm text-muted-foreground mb-4">Use this to dilute a solution of higher normality to a desired lower normality.</p>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div>
                        <Label htmlFor="adj-n-have">Normality you have (N₁)</Label>
                        <Input type="number" name="adj-n-have" placeholder="e.g., 0.1150" step="any" value={nHave} onChange={e => setNHave(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="adj-v-have">Volume you have (V₁)</Label>
                        <Input type="number" name="adj-v-have" placeholder="e.g., 950" step="any" value={vHave} onChange={e => setVHave(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="adj-n-req">Normality you want (N₂)</Label>
                        <Input type="number" name="adj-n-req" placeholder="e.g., 0.1000" step="any" value={nReq} onChange={e => setNReq(e.target.value)} required />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                    <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Result</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </div>
    );
};

function IncreaseNormalityCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [nHave, setNHave] = useState("");
    const [vHave, setVHave] = useState("");
    const [nReq, setNReq] = useState("");
    const [chemicalKey, setChemicalKey] = useState("");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);

        const n_have = parseFloat(nHave);
        const v_have = parseFloat(vHave);
        const n_req = parseFloat(nReq);
        
        if (isNaN(n_have) || isNaN(v_have) || isNaN(n_req) || !chemicalKey) {
            setError('Please fill all fields with valid numbers and select a chemical.');
            return;
        }

        if (n_req <= n_have) {
            setError('Required normality must be higher than the normality you have.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        const equivalentsNeeded = n_req * (v_have / 1000);
        const equivalentsHave = n_have * (v_have / 1000);
        const equivalentsToAdd = equivalentsNeeded - equivalentsHave;

        let resultText = '';
        if (chemical.type === 'solid') {
            const equivalentWeight = chemical.molarMass / chemical.nFactor;
            const weightToAdd = equivalentsToAdd * equivalentWeight;
            resultText = `To increase the normality of your ${v_have} mL solution from ${n_have} N to ${n_req} N, you need to add <code class="font-bold bg-green-100 p-1 rounded">${weightToAdd.toFixed(4)} g</code> of <strong>${chemical.name}</strong>.`;
        } else if (chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            const volumeToAdd = (equivalentsToAdd / stockNormality) * 1000;
            resultText = `To increase the normality of your ${v_have} mL solution from ${n_have} N to ${n_req} N, you need to add <code class="font-bold bg-green-100 p-1 rounded">${volumeToAdd.toFixed(3)} mL</code> of concentrated <strong>${chemical.name}</strong>.`;
        }
        setResult(resultText);
    }, [nHave, vHave, nReq, chemicalKey, allChemicals]);

    return (
        <div>
             <p className="text-sm text-muted-foreground mb-4">Calculate how much chemical to add to increase the normality of your solution.</p>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="inc-n-have">Normality you have (N₁)</Label>
                        <Input type="number" name="inc-n-have" placeholder="e.g., 0.0850" step="any" value={nHave} onChange={e => setNHave(e.target.value)} required />
                    </div>
                     <div>
                        <Label htmlFor="inc-v-have">Volume you have (V₁)</Label>
                        <Input type="number" name="inc-v-have" placeholder="e.g., 900" step="any" value={vHave} onChange={e => setVHave(e.target.value)} required />
                    </div>
                     <div>
                        <Label htmlFor="inc-n-req">Normality you want (N₂)</Label>
                        <Input type="number" name="inc-n-req" placeholder="e.g., 0.1000" step="any" value={nReq} onChange={e => setNReq(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="inc-chemical">Chemical to Add</Label>
                        <Select name="inc-chemical" value={chemicalKey} onValueChange={setChemicalKey} required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                             <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="lg:col-span-2">
                        <Button type="submit" className="w-full">Calculate Amount to Add</Button>
                    </div>
                </div>
                 {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </div>
    );
};


function PercentageSolutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const allChemicals = {...chemicals.acids, ...chemicals.bases, ...chemicals.other_reagents};
    const [chemicalKey, setChemicalKey] = useState("");
    const [percentage, setPercentage] = useState("");
    const [volume, setVolume] = useState("");

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const perc = parseFloat(percentage);
        const vol = parseFloat(volume);

        if (!chemicalKey || isNaN(perc) || isNaN(vol) || perc <= 0 || vol <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }
        
        const chemical = allChemicals[chemicalKey as keyof typeof allChemicals];
        let resultText = '';

        if (chemical.type === 'solid') {
            const weight = (perc / 100) * vol;
            resultText = `To prepare ${vol} mL of ${perc}% w/v ${chemical.name}, dissolve <code class="font-bold bg-green-100 p-1 rounded">${weight.toFixed(3)} g</code> of the solid in a solvent and make the final volume up to <code class="font-bold">${vol} mL</code>.`;
        } else if (chemical.type === 'liquid') {
            const pureWeightNeeded = (perc / 100) * vol;
            const stockWeightNeeded = pureWeightNeeded / (chemical.purity / 100);
            const stockVolumeNeeded = stockWeightNeeded / chemical.density;
            resultText = `To prepare ${vol} mL of ${perc}% w/v ${chemical.name}, take <code class="font-bold bg-green-100 p-1 rounded">${stockVolumeNeeded.toFixed(3)} mL</code> of the concentrated liquid and make the final volume up to <code class="font-bold">${vol} mL</code>.`;
        }
        setResult(resultText);
    }, [chemicalKey, percentage, volume, allChemicals]);
    
    return (
        <CalculatorCard title="% Solution Calculator (w/v)">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                    <div>
                        <Label htmlFor="percentage-chemical-select">Select Chemical</Label>
                        <Select name="percentage-chemical-select" value={chemicalKey} onValueChange={setChemicalKey} required>
                            <SelectTrigger><SelectValue placeholder="Select a chemical" /></SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Other Reagents</Label>
                                    {Object.entries(chemicals.other_reagents).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="percentage-required">Required Percentage (% w/v)</Label>
                        <Input type="number" name="percentage-required" placeholder="e.g., 10" step="any" value={percentage} onChange={e => setPercentage(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="percentage-volume">Final Volume (mL)</Label>
                        <Input type="number" name="percentage-volume" placeholder="e.g., 500" step="any" value={volume} onChange={e => setVolume(e.target.value)} required />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                        <Button type="submit" className="w-full">Calculate</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};

function DilutionCalc() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [v2, setV2] = useState("");
    const [chemicalKey, setChemicalKey] = useState("");
    const allChemicals = {...chemicals.acids, ...chemicals.bases};

    const handleChemChange = useCallback((key: string) => {
        setChemicalKey(key);
        const chemical = allChemicals[key as keyof typeof allChemicals];
        if (chemical && chemical.type === 'liquid') {
            const stockMolarity = (chemical.purity / 100 * chemical.density * 1000) / chemical.molarMass;
            const stockNormality = stockMolarity * chemical.nFactor;
            setN1(stockNormality.toFixed(4));
        } else {
            setN1("");
        }
    }, [allChemicals]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(null);
        setError(null);
        
        const n1Val = parseFloat(n1);
        const n2Val = parseFloat(n2);
        const v2Val = parseFloat(v2);

        if (isNaN(n1Val) || isNaN(n2Val) || isNaN(v2Val) || n1Val <= 0 || n2Val <= 0 || v2Val <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return;
        }

        if (n2Val > n1Val) {
            setError(`Final normality (N₂) cannot be greater than stock normality (N₁).`);
            return;
        }

        const v1 = (n2Val * v2Val) / n1Val;
        const resultText = `To prepare <code class="font-bold">${v2Val} mL</code> of <code class="font-bold">${n2Val} N</code> solution, you need to take <code class="font-bold bg-green-100 p-1 rounded">${v1.toFixed(3)} mL</code> of your <code class="font-bold">${n1Val} N</code> stock solution and dilute it with the solvent up to a final volume of <code class="font-bold">${v2Val} mL</code>.`;
        setResult(resultText);
    }, [n1, n2, v2]);

    return (
        <CalculatorCard title="Working with Stock Solutions (Dilution)" description="Use the dilution formula: N₁V₁ = N₂V₂. Calculate the initial volume (V₁) needed from a stock solution.">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <Label htmlFor="stock-chemical-select">Select Stock Chemical (Optional)</Label>
                        <Select name="stock-chemical-select" value={chemicalKey} onValueChange={handleChemChange}>
                            <SelectTrigger><SelectValue placeholder="Select an acid or base" /></SelectTrigger>
                            <SelectContent>
                                <ScrollArea className="h-72">
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Acids</Label>
                                    {Object.entries(chemicals.acids).filter(([,chem])=>chem.type === 'liquid').map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                <SelectGroup>
                                    <Label className="px-2 text-xs font-semibold text-muted-foreground">Bases</Label>
                                    {Object.entries(chemicals.bases).filter(([,chem])=>chem.type === 'liquid').map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                                </ScrollArea>
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="stock-normality">Stock Normality (N₁)</Label>
                        <Input type="number" name="stock-normality" placeholder="e.g., 1.0" step="any" value={n1} onChange={e => setN1(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="final-normality">Required Normality (N₂)</Label>
                        <Input type="number" name="final-normality" placeholder="e.g., 0.1" step="any" value={n2} onChange={e => setN2(e.target.value)} required />
                    </div>
                    <div>
                        <Label htmlFor="final-volume">Final Volume (V₂, mL)</Label>
                        <Input type="number" name="final-volume" placeholder="e.g., 1000" step="any" value={v2} onChange={e => setV2(e.target.value)} required />
                    </div>
                    <div className="md:col-span-2">
                    <Button type="submit" className="w-full">Calculate V₁</Button>
                    </div>
                </div>
                {error && <Alert variant="destructive" className="mt-8"><AlertDescription>{error}</AlertDescription></Alert>}
                {result && <Alert className="mt-8"><AlertTitle>Instructions</AlertTitle><AlertDescription dangerouslySetInnerHTML={{__html: result}} /></Alert>}
            </form>
        </CalculatorCard>
    );
};



