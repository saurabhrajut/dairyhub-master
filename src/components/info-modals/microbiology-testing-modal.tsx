
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/language-context";
import { microbiologyContent } from "@/lib/content/microbiology-content";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { ArrowLeft, TestTube, Bug, ShieldOff, FlaskConical, Proportions, Dna, Thermometer } from "lucide-react";


const TestProcedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.id}>
        <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{test.title}</AccordionTrigger>
        <AccordionContent>
            <div className="prose prose-sm max-w-none break-words">
                <h4 className="font-bold">Siddhant (Principle):</h4>
                <p>{test.principle}</p>
                <h4 className="font-bold mt-4">Prakriya (Procedure):</h4>
                <div dangerouslySetInnerHTML={{ __html: test.procedure }} />
                <h4 className="font-bold mt-4">Ganana (Calculation):</h4>
                <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary overflow-x-auto" dangerouslySetInnerHTML={{ __html: test.calculation }}/>
            </div>
        </AccordionContent>
    </AccordionItem>
);

const Section = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: React.ElementType }) => (
    <div>
        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline">
            {Icon && <Icon className="w-6 h-6" />}
            <span>{title}</span>
        </h3>
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed prose max-w-none break-words">
            {children}
        </div>
    </div>
);

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
    intro: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'intro');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    thermophilic_thermoduric: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'thermophilic_thermoduric');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    psychrotrophic: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'psychrotrophic');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
     lactic_acid_bacteria: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'lactic_acid_bacteria');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    spoilage_pathogenic: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'spoilage_pathogenic');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    enterobacteriaceae: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'enterobacteriaceae');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    cronobacter: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'cronobacter');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    sources_of_contamination: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'sources_of_contamination');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    hygienic_measures: function Content({ content }: { content: any }) {
        const section = content.sections.find((s:any) => s.id === 'hygienic_measures');
        if (!section) return null;
        return <Section title={section.title}><div dangerouslySetInnerHTML={{ __html: section.content }} /></Section>;
    },
    test_methods: function Content({ content }: { content: any }) {
        const section = content.testMethods;
        if (!section) return null;
        return (
            <Section title={section.title} icon={TestTube}>
                <p>{section.intro}</p>
                 <Accordion type="single" collapsible className="w-full mt-4">
                    {section.tests.map((test: any, index: number) => (
                       <TestProcedure key={index} test={test} />
                    ))}
                </Accordion>
            </Section>
        );
    }
};


export function MicrobiologyTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(microbiologyContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
      { value: "intro", title: "Introduction", icon: Bug },
      { value: "thermophilic_thermoduric", title: "Thermophilic & Thermoduric Bacteria", icon: Thermometer },
      { value: "psychrotrophic", title: "Psychrotrophic Bacteria", icon: Bug },
      { value: "lactic_acid_bacteria", title: "Lactic Acid Bacteria", icon: Dna },
      { value: "spoilage_pathogenic", title: "Spoilage & Pathogenic Organisms", icon: ShieldOff },
      { value: "enterobacteriaceae", title: "Enterobacteriaceae Family", icon: Bug },
      { value: "cronobacter", title: "Cronobacter", icon: Bug },
      { value: "sources_of_contamination", title: "Sources of Contamination", icon: FlaskConical },
      { value: "hygienic_measures", title: "Hygienic Measures", icon: Proportions },
      { value: "test_methods", title: "Common Test Methods", icon: TestTube }
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

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
              <div className="p-4 pt-0 sm:p-0">
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
