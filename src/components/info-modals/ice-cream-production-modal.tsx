
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
import { iceCreamProductionContent } from "@/lib/content/ice-cream-production-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, ChevronsRight, Component, Factory, FlaskConical, Snowflake, Thermometer, Wind } from "lucide-react";

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
             <Section title={content.introduction.title}>
                <div dangerouslySetInnerHTML={{ __html: content.introduction.p1 }} />
                <div dangerouslySetInnerHTML={{ __html: content.introduction.p2 }} />
                <div dangerouslySetInnerHTML={{ __html: content.introduction.p3 }} />
                <div dangerouslySetInnerHTML={{ __html: content.introduction.p4 }} />
                <div className="overflow-x-auto mt-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{content.introduction.table.headers.category}</TableHead>
                                <TableHead>{content.introduction.table.headers.examples}</TableHead>
                                <TableHead>{content.introduction.table.headers.role}</TableHead>
                                <TableHead>{content.introduction.table.headers.impact}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {content.introduction.table.rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.examples}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.impact}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Section>
        )
    },
    diff: function DiffContent({ content }: { content: any }) {
        return (
             <Section title={content.iceCreamVsFrozenDessert.title}>
                <div dangerouslySetInnerHTML={{ __html: content.iceCreamVsFrozenDessert.intro }}/>
                <SubSection title={content.iceCreamVsFrozenDessert.definitions.title}>
                   <p><strong>{content.iceCreamVsFrozenDessert.definitions.iceCream.title}:</strong> <span dangerouslySetInnerHTML={{ __html: content.iceCreamVsFrozenDessert.definitions.iceCream.content }}/></p>
                   <p><strong>{content.iceCreamVsFrozenDessert.definitions.frozenDessert.title}:</strong> <span dangerouslySetInnerHTML={{ __html: content.iceCreamVsFrozenDessert.definitions.frozenDessert.content }}/></p>
                </SubSection>
                <SubSection title={content.iceCreamVsFrozenDessert.impact.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.iceCreamVsFrozenDessert.impact.content }} />
                </SubSection>
            </Section>
        )
    },
    process: function ProcessContent({ content }: { content: any }) {
        return (
            <Section title={content.manufacturingProcess.title}>
                <div dangerouslySetInnerHTML={{ __html: content.manufacturingProcess.intro }} />
                <div dangerouslySetInnerHTML={{ __html: content.manufacturingProcess.steps }} />
            </Section>
        )
    },
    ingredients: function IngredientsContent({ content }: { content: any }) {
        return (
            <Section title={content.ingredientFunctionality.title}>
                <div dangerouslySetInnerHTML={{ __html: content.ingredientFunctionality.intro }} />
                <SubSection title={content.ingredientFunctionality.stabilizers.title}>
                   <div dangerouslySetInnerHTML={{ __html: content.ingredientFunctionality.stabilizers.content }} />
                </SubSection>
                <SubSection title={content.ingredientFunctionality.emulsifiers.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.ingredientFunctionality.emulsifiers.content }} />
                </SubSection>
            </Section>
        )
    },
    factors: function FactorsContent({ content }: { content: any }) {
        return (
            <Section title={content.physicochemicalFactors.title}>
                <div dangerouslySetInnerHTML={{ __html: content.physicochemicalFactors.intro }} />
                <SubSection title={content.physicochemicalFactors.fatEmulsion.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.physicochemicalFactors.fatEmulsion.content }} />
                </SubSection>
                <SubSection title={content.physicochemicalFactors.waterActivity.title}>
                   <div dangerouslySetInnerHTML={{ __html: content.physicochemicalFactors.waterActivity.content }}/>
                </SubSection>
            </Section>
        )
    },
    crystallization: function CrystallizationContent({ content }: { content: any }) {
        return (
            <Section title={content.crystallization.title}>
                 <div dangerouslySetInnerHTML={{ __html: content.crystallization.intro }} />
                <SubSection title={content.crystallization.ice.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.crystallization.ice.content }} />
                </SubSection>
                <SubSection title={content.crystallization.lactose.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.crystallization.lactose.content }} />
                </SubSection>
            </Section>
        )
    },
    other: function OtherFactorsContent({ content }: { content: any }) {
        return (
            <Section title={content.otherFactors.title}>
                <div dangerouslySetInnerHTML={{ __html: content.otherFactors.intro }} />
                 <SubSection title={content.otherFactors.melting.title}>
                   <div dangerouslySetInnerHTML={{ __html: content.otherFactors.melting.content }} />
                </SubSection>
                <SubSection title={content.otherFactors.tempControl.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.otherFactors.tempControl.content }} />
                </SubSection>
                 <SubSection title={content.otherFactors.equipment.title}>
                   <div dangerouslySetInnerHTML={{ __html: content.otherFactors.equipment.content }} />
                </SubSection>
                 <SubSection title={content.otherFactors.packaging.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.otherFactors.packaging.content }} />
                </SubSection>
            </Section>
        )
    },
    implementation: function ImplementationContent({ content }: { content: any }) {
        return (
            <Section title={content.implementation.title}>
                <div dangerouslySetInnerHTML={{ __html: content.implementation.intro }} />
                <div dangerouslySetInnerHTML={{ __html: content.implementation.strategies }} />
            </Section>
        )
    },
    conclusion: function ConclusionContent({ content }: { content: any }) {
        return (
            <Section title={content.conclusion.title}>
                <div dangerouslySetInnerHTML={{ __html: content.conclusion.content }} />
            </Section>
        )
    }
}


export function IceCreamProductionModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(iceCreamProductionContent);
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
    { value: "diff", title: content.tabs.diff, icon: Thermometer, component: topicComponents.diff },
    { value: "process", title: content.tabs.process, icon: Factory, component: topicComponents.process },
    { value: "ingredients", title: content.tabs.ingredients, icon: Component, component: topicComponents.ingredients },
    { value: "factors", title: content.tabs.factors, icon: FlaskConical, component: topicComponents.factors },
    { value: "crystallization", title: content.tabs.crystallization, icon: Snowflake, component: topicComponents.crystallization },
    { value: "other", title: content.tabs.other, icon: Wind, component: topicComponents.other },
    { value: "implementation", title: content.tabs.implementation, icon: ChevronsRight, component: topicComponents.implementation },
    { value: "conclusion", title: content.tabs.conclusion, icon: BookOpen, component: topicComponents.conclusion }
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
            <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none break-words">
              <Section title={content.summary.title}>
                  <div dangerouslySetInnerHTML={{ __html: content.summary.content }} />
              </Section>
            </div>
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
