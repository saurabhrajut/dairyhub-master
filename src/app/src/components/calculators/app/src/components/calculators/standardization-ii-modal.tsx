
"use client";

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/context/language-context";

const FatSnfClrTsCalc = ({ inputs, setInputs, result, setResult, language }: any) => {
    const texts = {
        en: {
            title: "FAT, SNF, CLR & TS Calculator",
            fat: "FAT (%)",
            clr: "CLR",
            snf: "SNF (%)",
            ts: "Total Solids (%)",
            calculate: "Calculate",
            basedOn: "Calculate based on:",
            fatAndClr: "FAT and CLR",
            fatAndSnf: "FAT and SNF",
        },
        hi: {
            title: "FAT, SNF, CLR aur TS Calculator",
            fat: "FAT (%)",
            clr: "CLR",
            snf: "SNF (%)",
            ts: "Total Solids (%)",
            calculate: "Calculate karein",
            basedOn: "Kis aadhar par calculate karein:",
            fatAndClr: "FAT aur CLR",
            fatAndSnf: "FAT aur SNF",
        }
    };
    const t = texts[language];

    const [calculationBasis, setCalculationBasis] = useState<"fat_clr" | "fat_snf">("fat_clr");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prev: any) => ({ ...prev, [name]: value }));
    };

    const calculate = () => {
        const fat = parseFloat(inputs.fat);
        const clr = parseFloat(inputs.clr);
        const snf = parseFloat(inputs.snf);
        let newSnf = 0, newClr = 0, newTs = 0;

        if (calculationBasis === 'fat_clr' && !isNaN(fat) && !isNaN(clr)) {
            newSnf = (clr / 4) + (fat * 0.25) + 0.72;
            newTs = newSnf + fat;
            newClr = clr;
        } else if (calculationBasis === 'fat_snf' && !isNaN(fat) && !isNaN(snf)) {
            newClr = 4 * (snf - 0.72 - (0.25 * fat));
            newTs = snf + fat;
            newSnf = snf;
        }
        setResult({ snf: newSnf.toFixed(2), clr: newClr.toFixed(2), ts: newTs.toFixed(2) });
    };

    return (
        <div className="space-y-4 p-4 border rounded-md bg-gray-50">
            <h3 className="font-semibold text-lg">{t.title}</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label>{t.basedOn}</label>
                    <Select value={calculationBasis} onValueChange={(val: "fat_clr" | "fat_snf") => setCalculationBasis(val)}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fat_clr">{t.fatAndClr}</SelectItem>
                            <SelectItem value="fat_snf">{t.fatAndSnf}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label>{t.fat}</label>
                    <Input type="number" name="fat" value={inputs.fat} onChange={handleInputChange} placeholder="e.g., 3.5" />
                </div>
                {calculationBasis === 'fat_clr' && (
                    <div>
                        <label>{t.clr}</label>
                        <Input type="number" name="clr" value={inputs.clr} onChange={handleInputChange} placeholder="e.g., 28" />
                    </div>
                )}
                {calculationBasis === 'fat_snf' && (
                    <div>
                        <label>{t.snf}</label>
                        <Input type="number" name="snf" value={inputs.snf} onChange={handleInputChange} placeholder="e.g., 8.5" />
                    </div>
                )}
            </div>
            <Button onClick={calculate} className="w-full">{t.calculate}</Button>
            {result && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-bold text-center">Calculated Values</h4>
                    <div className="flex justify-around mt-2">
                        <p><strong>SNF:</strong> {result.snf}%</p>
                        <p><strong>CLR:</strong> {result.clr}</p>
                        <p><strong>TS:</strong> {result.ts}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};


export function StandardizationIIModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
    const { language } = useLanguage();
    const texts = {
        en: {
            title: "Standardization of Milk & Cream",
            description: "Calculate using Pearson Square method for milk and cream.",
            milkFat: "Milk FAT (%)",
            milkQty: "Milk Quantity (Kg/Ltr)",
            creamFat: "Cream FAT (%)",
            stdFat: "Standardized FAT (%)",
            calculate: "Calculate",
            results: "Results",
            requiredCream: "Required Cream (Kg)",
            requiredMilk: "Required Skim Milk (Kg)",
            totalMixture: "Total Mixture (Kg)",
            fatSnfTs: "FAT, SNF, CLR, TS Calculator"
        },
        hi: {
            title: "Doodh aur Cream ka Standardization",
            description: "Doodh aur cream ke liye Pearson Square method se calculate karein.",
            milkFat: "Doodh ka FAT (%)",
            milkQty: "Doodh ki Matra (Kg/Ltr)",
            creamFat: "Cream ka FAT (%)",
            stdFat: "Standardized FAT (%)",
            calculate: "Calculate karein",
            results: "Parinaam",
            requiredCream: "Zaruri Cream (Kg)",
            requiredMilk: "Zaruri Skim Milk (Kg)",
            totalMixture: "Kul Mixture (Kg)",
            fatSnfTs: "FAT, SNF, CLR, TS Calculator"
        }
    }
    const t = texts[language];
    const [inputs, setInputs] = useState({
        milkFat: '',
        milkQty: '',
        creamFat: '',
        stdFat: '',
        // For FatSnfClrTsCalc
        fat: '',
        clr: '',
        snf: '',
    });
    const [result, setResult] = useState<any>(null);
    const [fatSnfResult, setFatSnfResult] = useState<any>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const calculate = () => {
        const milkFat = parseFloat(inputs.milkFat);
        const milkQty = parseFloat(inputs.milkQty);
        const creamFat = parseFloat(inputs.creamFat);
        const stdFat = parseFloat(inputs.stdFat);

        if (isNaN(milkFat) || isNaN(milkQty) || isNaN(creamFat) || isNaN(stdFat)) {
            setResult(null);
            return;
        }

        // Pearson Square logic to standardize milk
        // Case 1: Standardized fat is LOWER than milk fat (removing cream / adding skim)
        // This calculator seems to be ADDING cream, so we are increasing fat.
        // We will assume we are standardizing UP.
        // stdFat must be between milkFat and creamFat.
        if (stdFat <= milkFat || stdFat >= creamFat) {
             toast({
                variant: "destructive",
                title: "Invalid Input",
                description: "Standardized FAT must be between Milk FAT and Cream FAT.",
            });
            setResult(null);
            return;
        }

        // Parts of cream needed = |Target Fat - Milk Fat|
        const partsOfCream = stdFat - milkFat;
        // Parts of milk needed = |Cream Fat - Target Fat|
        const partsOfMilk = creamFat - stdFat;

        // For a given quantity of milk (milkQty), how much cream to add?
        // Ratio is partsOfCream / partsOfMilk
        // Cream to add = milkQty * (partsOfCream / partsOfMilk)
        
        const creamToAdd = milkQty * (partsOfCream / partsOfMilk);
        const totalMixture = milkQty + creamToAdd;

        setResult({
            requiredCream: creamToAdd.toFixed(2),
            initialMilk: milkQty.toFixed(2),
            totalMixture: totalMixture.toFixed(2),
        });
    };


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-4xl">
                <ScrollArea className="max-h-[80vh] p-6">
                    <DialogHeader>
                        <DialogTitle>{t.title}</DialogTitle>
                        <DialogDescription>{t.description}</DialogDescription>
                    </DialogHeader>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="space-y-4">
                            <div>
                                <label>{t.milkFat}</label>
                                <Input type="number" name="milkFat" value={inputs.milkFat} onChange={handleInputChange} placeholder="e.g., 3.5" />
                            </div>
                            <div>
                                <label>{t.milkQty}</label>
                                <Input type="number" name="milkQty" value={inputs.milkQty} onChange={handleInputChange} placeholder="e.g., 100" />
                            </div>
                            <div>
                                <label>{t.creamFat}</label>
                                <Input type="number" name="creamFat" value={inputs.creamFat} onChange={handleInputChange} placeholder="e.g., 40" />
                            </div>
                            <div>
                                <label>{t.stdFat}</label>
                                <Input type="number" name="stdFat" value={inputs.stdFat} onChange={handleInputChange} placeholder="e.g., 4.5" />
                            </div>
                            <Button onClick={calculate} className="w-full">{t.calculate}</Button>

                            {result && (
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h3 className="font-semibold text-lg text-center mb-2">{t.results}</h3>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>{t.requiredCream} (to add)</TableCell>
                                                <TableCell className="font-bold">{result.requiredCream} Kg</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Initial Milk</TableCell>
                                                <TableCell className="font-bold">{result.initialMilk} Kg</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{t.totalMixture}</TableCell>
                                                <TableCell className="font-bold">{result.totalMixture} Kg</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>

                        <div>
                            <FatSnfClrTsCalc inputs={inputs} setInputs={setInputs} result={fatSnfResult} setResult={setFatSnfResult} language={language}/>
                        </div>

                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}


    