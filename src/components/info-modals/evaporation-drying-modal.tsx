
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { evaporationDryingContent } from "@/lib/content/evaporation-drying-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, ChevronsRight, Component, Factory, FlaskConical, Snowflake, Thermometer, Wind, Beaker, Archive } from "lucide-react";


const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        {children}
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{title}</h3>
        {children}
    </>
);

const topicComponents = {
    intro: function IntroContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.introduction.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} />
                <div className="overflow-x-auto mt-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {content.sections.introduction.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.sections.introduction.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{row.product_type}</TableCell>
                                    <TableCell>{row.base_material}</TableCell>
                                    <TableCell>{row.water_reduction}</TableCell>
                                    <TableCell>{row.characteristics}</TableCell>
                                    <TableCell>{row.fat_content}</TableCell>
                                    <TableCell>{row.protein_content}</TableCell>
                                    <TableCell>{row.shelf_life}</TableCell>
                                    <TableCell>{row.refrigeration_required}</TableCell>
                                    <TableCell>{row.primary_uses}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Section>
        )
    },
    evaporated_milk: function EvaporatedMilkContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.evaporated_milk.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.content }} />
                <SubSection title={content.sections.evaporated_milk.subsections.pre_treatment.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.pre_treatment.content }} />
                </SubSection>
                <SubSection title={content.sections.evaporated_milk.subsections.evaporation.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.evaporation.content }} />
                </SubSection>
                    <SubSection title={content.sections.evaporated_milk.subsections.evaporator_types.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.evaporator_types.content }} />
                </SubSection>
                <SubSection title={content.sections.evaporated_milk.subsections.sterilization.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.evaporated_milk.subsections.sterilization.content }} />
                </SubSection>
            </Section>
        )
    },
    milk_powder: function MilkPowderContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.milk_powder.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.milk_powder.content }} />
                <SubSection title={content.sections.milk_powder.subsections.initial_processing.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.milk_powder.subsections.initial_processing.content }} />
                </SubSection>
                    <SubSection title={content.sections.milk_powder.subsections.composition.title}>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {content.sections.milk_powder.subsections.composition.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {content.sections.milk_powder.subsections.composition.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.component}</TableCell>
                                        <TableCell>{row.wmp}</TableCell>
                                        <TableCell>{row.smp}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </SubSection>
            </Section>
        )
    },
    whey_processing: function WheyProcessingContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.whey_processing.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.content }} />
                <SubSection title={content.sections.whey_processing.subsections.initial_separation.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.initial_separation.content }} />
                </SubSection>
                <SubSection title={content.sections.whey_processing.subsections.protein_concentration.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.protein_concentration.content }} />
                </SubSection>
                <SubSection title={content.sections.whey_processing.subsections.drying_applications.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.whey_processing.subsections.drying_applications.content }} />
                </SubSection>
            </Section>
        )
    },
    casein_production: function CaseinProductionContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.casein_production.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.casein_production.content }} />
                <SubSection title={content.sections.casein_production.subsections.precipitation_methods.title}>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader><TableRow>
                                {content.sections.casein_production.subsections.precipitation_methods.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                            </TableRow></TableHeader>
                            <TableBody>
                                {content.sections.casein_production.subsections.precipitation_methods.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{row.stage}</TableCell>
                                    <TableCell>{row.acid_casein}</TableCell>
                                    <TableCell>{row.rennet_casein}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </SubSection>
                <SubSection title={content.sections.casein_production.subsections.drying_applications.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.casein_production.subsections.drying_applications.content }} />
                </SubSection>
            </Section>
        )
    },
    drying_principles: function DryingPrinciplesContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.drying_principles.title}>
                    <SubSection title={content.sections.drying_principles.subsections.technologies.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.technologies.content }} />
                        <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {content.sections.drying_principles.subsections.technologies.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {content.sections.drying_principles.subsections.technologies.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                    <TableCell>{row.technology}</TableCell>
                                    <TableCell>{row.principle}</TableCell>
                                    <TableCell>{row.product_form}</TableCell>
                                    <TableCell>{row.advantages}</TableCell>
                                    <TableCell>{row.limitations}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </SubSection>
                <SubSection title={content.sections.drying_principles.subsections.post_drying.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.post_drying.content }} />
                </SubSection>
                    <SubSection title={content.sections.drying_principles.subsections.conclusion.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.drying_principles.subsections.conclusion.content }} />
                </SubSection>
            </Section>
        )
    }
}


export function EvaporationDryingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(evaporationDryingContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "intro", title: content.tabs.intro, icon: BookOpen, component: topicComponents.intro },
    { value: "evaporated-milk", title: content.tabs.evaporated_milk, icon: Thermometer, component: topicComponents.evaporated_milk },
    { value: "milk-powder", title: content.tabs.milk_powder, icon: Archive, component: topicComponents.milk_powder },
    { value: "whey-processing", title: content.tabs.whey_processing, icon: Beaker, component: topicComponents.whey_processing },
    { value: "casein-production", title: content.tabs.casein_production, icon: FlaskConical, component: topicComponents.casein_production },
    { value: "drying-principles", title: content.tabs.drying_principles, icon: Wind, component: topicComponents.drying_principles }
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none break-words">
                <ActiveComponent content={content} />
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
                    <span className="font-semibold font-headline text-card-foreground">{topic.title}</span>
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

