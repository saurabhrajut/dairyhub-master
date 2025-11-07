
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Droplets, TestTube, Thermometer, Weight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { calibrationStandardizationContent } from "@/lib/content/calibration-standardization-content";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <section id={id} className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none text-gray-700 text-base leading-relaxed break-words">
            <div className="space-y-4">{children}</div>
        </div>
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);

const topicComponents = {
    definitions: ({ content }: { content: any }) => (
        <Section title={content.definitions.title} id="definitions">
            <SubHeading>{content.definitions.reagent}</SubHeading>
            <p>{content.definitions.reagent_desc}</p>
            
            <SubHeading>{content.definitions.solution}</SubHeading>
            <p>{content.definitions.solution_desc}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li dangerouslySetInnerHTML={{ __html: content.definitions.dilute_sol }}/>
                <li dangerouslySetInnerHTML={{ __html: content.definitions.concentrated_sol }}/>
                <li dangerouslySetInnerHTML={{ __html: content.definitions.saturated_sol }}/>
            </ul>

            <SubHeading>{content.definitions.standard_sol}</SubHeading>
            <p>{content.definitions.standard_sol_desc}</p>
            
            <SubHeading>{content.definitions.normal_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_desc }}/>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.normal_sol_formula }}/>

            <SubHeading>{content.definitions.molar_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.molar_sol_desc }}/>
            
            <SubHeading>{content.definitions.molal_sol}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.definitions.molal_sol_desc }}/>
            <p className="font-semibold mt-2">{content.definitions.note}</p>
        </Section>
    ),
    pipette: ({ content }: { content: any }) => (
         <Section title={content.pipette.title} id="pipette">
             <SubHeading>{content.pipette.comparison.title}</SubHeading>
             <p>{content.pipette.comparison.desc}</p>
             
             <SubHeading>{content.pipette.bis.title}</SubHeading>
             <p dangerouslySetInnerHTML={{ __html: content.pipette.bis.desc }}/>
             <ol className="list-decimal list-inside space-y-2 mt-2">
                 {content.pipette.bis.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
             </ol>
             
             <SubHeading>{content.pipette.mathematical.title}</SubHeading>
             <p>{content.pipette.mathematical.desc}</p>
        </Section>
    ),
    butyrometer: ({ content }: { content: any }) => (
         <Section title={content.butyrometer.title} id="butyrometer">
             <SubHeading>{content.butyrometer.principle.title}</SubHeading>
             <p dangerouslySetInnerHTML={{ __html: content.butyrometer.principle.desc }}/>

            <SubHeading>{content.butyrometer.methods.title}</SubHeading>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{content.butyrometer.methods.comparison.title}</h4>
            <p>{content.butyrometer.methods.comparison.desc}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                {content.butyrometer.methods.comparison.points.map((point: string, i: number) => <li key={i}>{point}</li>)}
            </ul>
            <p>{content.butyrometer.methods.comparison.conclusion}</p>

            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{content.butyrometer.methods.bis.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: content.butyrometer.methods.bis.desc }}/>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                 {content.butyrometer.methods.bis.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
            </ol>
            
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{content.butyrometer.methods.gravimetric.title}</h4>
            <p>{content.butyrometer.methods.gravimetric.desc}</p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                {content.butyrometer.methods.gravimetric.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
            </ol>

             <Table>
                <TableCaption>{content.butyrometer.table.caption}</TableCaption>
                <TableHeader>
                    <TableRow><TableHead>{content.butyrometer.table.header1}</TableHead><TableHead>{content.butyrometer.table.header2}</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                    {content.butyrometer.table.rows.map((row: any, i: number) => <TableRow key={i}><TableCell>{row.scale}</TableCell><TableCell>{row.product}</TableCell></TableRow>)}
                </TableBody>
             </Table>
        </Section>
    ),
    lactometer: ({ content }: { content: any }) => (
         <Section title={content.lactometer.title} id="lactometer">
            <SubHeading>{content.lactometer.principle.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.lactometer.principle.desc1 }}/>
            <p>{content.lactometer.principle.desc2}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                 {content.lactometer.principle.types.map((type: string, i: number) => <li key={i}>{type}</li>)}
            </ul>
            <p>{content.lactometer.principle.desc3}</p>

            <SubHeading>{content.lactometer.methods.title}</SubHeading>
            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{content.lactometer.methods.comparison.title}</h4>
            <p>{content.lactometer.methods.comparison.desc}</p>

            <h4 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{content.lactometer.methods.bis.title}</h4>
            <p>{content.lactometer.methods.bis.desc}</p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                 {content.lactometer.methods.bis.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
            </ol>
        </Section>
    ),
    other: ({ content }: { content: any }) => (
         <Section title={content.other_glassware.title} id="other-glassware">
            <p>{content.other_glassware.intro}</p>
            <SubHeading>{content.other_glassware.principle.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.other_glassware.principle.desc }}/>
            
            <SubHeading>{content.other_glassware.procedure.title}</SubHeading>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                 {content.other_glassware.procedure.steps.map((step: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
            </ol>
        </Section>
    ),
    thermometer: ({ content }: { content: any }) => (
         <Section title={content.thermometer.title} id="thermometer">
            <p>{content.thermometer.intro}</p>
            <SubHeading>{content.thermometer.ice_point.title}</SubHeading>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                {content.thermometer.ice_point.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
            </ol>
            <SubHeading>{content.thermometer.boiling_point.title}</SubHeading>
             <ol className="list-decimal list-inside space-y-2 mt-2">
                 {content.thermometer.boiling_point.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
            </ol>
        </Section>
    ),
    balance: ({ content }: { content: any }) => (
        <Section title={content.balance.title} id="balance">
            <p>{content.balance.intro}</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
                 {content.balance.tests.map((test: string, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: test}}/>)}
            </ul>
        </Section>
    )
};

const topics = [
    { value: 'definitions', title: "Key Definitions", icon: BookOpen },
    { value: 'pipette', title: "Pipette Calibration", icon: Droplets },
    { value: 'butyrometer', title: "Butyrometer Calibration", icon: TestTube },
    { value: 'lactometer', title: "Lactometer Calibration", icon: TestTube },
    { value: 'other', title: "Other Glassware", icon: TestTube },
    { value: 'thermometer', title: "Thermometer Calibration", icon: Thermometer },
    { value: 'balance', title: "Weighing Balance", icon: Weight },
];

export function CalibrationStandardizationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(calibrationStandardizationContent);


  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">{content.mainTitle}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {content.backToTopics}
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
            <section className="mb-8 space-y-4 p-4 sm:p-0">
                <p>{content.intro_p1}</p>
                <p>{content.intro_p2}</p>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
              {topics.map(topic => (
                <button
                  key={topic.value}
                  onClick={() => setActiveTopic(topic.value)}
                  className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                >
                  <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold font-headline text-card-foreground">{content.tabs[topic.value as keyof typeof content.tabs]}</span>
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
