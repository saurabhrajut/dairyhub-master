"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Droplet, Wind, ShieldCheck, Component, Factory, FlaskConical, Snowflake, Thermometer, Beaker, Archive } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { fssaiStandardsContent } from "@/lib/content/fssai-standards-content";

import { useState } from "react";
const ProductCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 font-headline">{title}</h2>
        </div>
        <div className="p-4 sm:p-6">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold mt-4 mb-3 text-gray-700 font-headline">{children}</h3>
);

const Note = ({ children }: { children: React.ReactNode }) => (
     <p className="text-xs italic mt-2 text-gray-500">*{children}</p>
);

function GeneralContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const generalContent = content.topics.general;
    return (
        <ProductCard title={generalContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <p className="font-medium leading-relaxed">{generalContent.p1}</p>
                <SectionTitle>{generalContent.definitions.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {generalContent?.definitions?.list?.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
                <SectionTitle>{generalContent.principles.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{generalContent.principles.p1}</p>
            </div>
        </ProductCard>
    )
}

function MilkContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const milkContent = content.topics.milk;
    return (
        <ProductCard title={milkContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{milkContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {milkContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{milkContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {milkContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {milkContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{milkContent.additives.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{milkContent.additives.p1}</p>
                <SectionTitle>{milkContent.hygiene.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{milkContent.hygiene.p1}</p>
                <SectionTitle>{milkContent.labeling.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{milkContent.labeling.p1}</p>
            </div>
        </ProductCard>
    )
}

function KhoaContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const khoaContent = content.topics.khoa;
    return (
        <ProductCard title={khoaContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{khoaContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{khoaContent.description.p1}</p>
                <SectionTitle>{khoaContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {khoaContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {khoaContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function CreamContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const creamContent = content.topics.cream;
    return (
        <ProductCard title={creamContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{creamContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {creamContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{creamContent.composition.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{creamContent.composition.p1}</p>
                <SectionTitle>{creamContent.labeling.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{creamContent.labeling.p1}</p>
            </div>
        </ProductCard>
    )
}

function FatProductsContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const fatContent = content.topics.fatProducts;
    return (
        <ProductCard title={fatContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{fatContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{fatContent.description.p1}</p>
                <SectionTitle>{fatContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                           {fatContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                           ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fatContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{fatContent.fattyAcid.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                             {fatContent?.fattyAcid?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                           ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fatContent?.fattyAcid?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{fatContent.note}</Note>
        </ProductCard>
    )
}

function ButterContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const butterContent = content.topics.butter;
    return (
        <ProductCard title={butterContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{butterContent.definition.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{butterContent.definition.p1}</p>
                <SectionTitle>{butterContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                             {butterContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                           ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {butterContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{butterContent.note}</Note>
        </ProductCard>
    )
}

function MilkPowdersContent() {
     const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const powderContent = content.topics.milkPowders;
    return (
        <ProductCard title={powderContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{powderContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{powderContent.description.p1}</p>
                <SectionTitle>{powderContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {powderContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {powderContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{powderContent.note}</Note>
        </ProductCard>
    )
}

function FermentedContent() {
     const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const fermentedContent = content.topics.fermented;
    return (
        <ProductCard title={fermentedContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{fermentedContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                     {fermentedContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{fermentedContent.yoghurt.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {fermentedContent?.yoghurt?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fermentedContent?.yoghurt?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{fermentedContent.chakka.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                           {fermentedContent?.chakka?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fermentedContent?.chakka?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function IceCreamContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const iceCreamContent = content.topics.iceCream;
    return (
        <ProductCard title={iceCreamContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{iceCreamContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{iceCreamContent.description.p1}</p>
                <SectionTitle>{iceCreamContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {iceCreamContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {iceCreamContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{iceCreamContent.milkIce.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                             {iceCreamContent?.milkIce?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {iceCreamContent?.milkIce?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{iceCreamContent.note}</Note>
        </ProductCard>
    )
}

function ChhanaPaneerContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const paneerContent = content.topics.chhanaPaneer;
    return (
        <ProductCard title={paneerContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{paneerContent.definition.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{paneerContent.definition.p1}</p>
                <SectionTitle>{paneerContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {paneerContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paneerContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{paneerContent.labeling.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{paneerContent.labeling.p1}</p>
            </div>
        </ProductCard>
    )
}

function CheeseContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const cheeseContent = content.topics.cheese;
    return (
        <ProductCard title={cheeseContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{cheeseContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {cheeseContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{cheeseContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {cheeseContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cheeseContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{cheeseContent.labeling.title}</SectionTitle>
                <p className="font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: cheeseContent.labeling.p1 }}></p>
            </div>
        </ProductCard>
    )
}

function CaseinContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const caseinContent = content.topics.casein;
    return (
        <ProductCard title={caseinContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{caseinContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {caseinContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{caseinContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                             {caseinContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {caseinContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{caseinContent.note}</Note>
        </ProductCard>
    )
}

function LactoseContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const lactoseContent = content.topics.lactose;
    return (
        <ProductCard title={lactoseContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{lactoseContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{lactoseContent.description.p1}</p>
                <SectionTitle>{lactoseContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                           {lactoseContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                         {lactoseContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ProductCard>
    )
}

function WheyProteinContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const wheyContent = content.topics.wheyProtein;
    return (
        <ProductCard title={wheyContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{wheyContent.description.title}</SectionTitle>
                <p className="font-medium leading-relaxed">{wheyContent.description.p1}</p>
                <SectionTitle>{wheyContent.composition.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {wheyContent?.composition?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {wheyContent?.composition?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{wheyContent.note}</Note>
        </ProductCard>
    )
}

function ColostrumContent() {
    const { t } = useLanguage();
    const content = t(fssaiStandardsContent);
    const colostrumContent = content.topics.colostrum;
    return (
        <ProductCard title={colostrumContent.title}>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{colostrumContent.description.title}</SectionTitle>
                <ul className="list-disc pl-5 space-y-1">
                    {colostrumContent?.description?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <SectionTitle>{colostrumContent.compositionColostrum.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {colostrumContent?.compositionColostrum?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {colostrumContent?.compositionColostrum?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="prose prose-sm max-w-none break-words">
                <SectionTitle>{colostrumContent.compositionPowder.title}</SectionTitle>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                           {colostrumContent?.compositionPowder?.headers?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {colostrumContent?.compositionPowder?.rows?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Note>{colostrumContent.note}</Note>
        </ProductCard>
    )
}

const topics = [
    { value: "general", icon: BookOpen, component: GeneralContent },
    { value: "milk", icon: Droplet, component: MilkContent },
    { value: "khoa", icon: Component, component: KhoaContent },
    { value: "cream", icon: Droplet, component: CreamContent },
    { value: "fat-products", icon: FlaskConical, component: FatProductsContent },
    { value: "butter", icon: Factory, component: ButterContent },
    { value: "milk-powders", icon: Wind, component: MilkPowdersContent },
    { value: "fermented", icon: Beaker, component: FermentedContent },
    { value: "ice-cream", icon: IceCreamIcon, component: IceCreamContent },
    { value: "chhana-paneer", icon: PaneerIcon, component: ChhanaPaneerContent },
    { value: "cheese", icon: Thermometer, component: CheeseContent },
    { value: "casein", icon: FlaskConical, component: CaseinContent },
    { value: "lactose", icon: Snowflake, component: LactoseContent },
    { value: "whey-protein", icon: Archive, component: WheyProteinContent },
    { value: "colostrum", icon: ShieldCheck, component: ColostrumContent },
];


export function FssaiStandardsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(fssaiStandardsContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-headline">
            {content.mainTitle}
          </DialogTitle>
           <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? content.topics[selectedTopic.value as keyof typeof content.topics]?.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                        <ArrowLeft className="mr-2" />
                        {content.backToTopics}
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <ActiveComponent />
                    </div>
                </ScrollArea>
            </div>
        ) : (
             <ScrollArea className="flex-1 mt-4 sm:pr-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
                    {topics.map(topic => (
                        <button
                        key={topic.value}
                        onClick={() => setActiveTopic(topic.value)}
                        className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                        >
                        <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                        <div>
                            <span className="font-semibold font-headline text-card-foreground">{content.topics[topic.value as keyof typeof content.topics]?.title}</span>
                        </div>
                        </button>
                    ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
