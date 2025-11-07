
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
import { validationVerificationContent } from "@/lib/content/validation-verification-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Droplet, Settings, FolderClock, CheckCircle } from "lucide-react";


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
                <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                <SubSection title={content.sections.introduction.subsections.defining.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.defining.content }}/>
                </SubSection>

                <SubSection title={content.sections.introduction.subsections.indispensable_role.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.indispensable_role.content }}/>
                </SubSection>

                <SubSection title={content.sections.introduction.subsections.regulatory_frameworks.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.regulatory_frameworks.content }}/>
                </SubSection>
                
                <div className="overflow-x-auto mt-6">
                <Table>
                    <TableHeader><TableRow><TableHead colSpan={3} className="text-center">Table 1: Key Distinctions: Validation vs. Verification</TableHead></TableRow></TableHeader>
                    <TableBody>
                        <TableRow><TableCell className="font-bold">Feature</TableCell><TableCell className="font-bold">Validation</TableCell><TableCell className="font-bold">Verification</TableCell></TableRow>
                        <TableRow><TableCell>Definition</TableCell><TableCell>Gathering scientific and technical evidence to prove a control measure or plan is capable of controlling a specific food safety hazard.</TableCell><TableCell>Routine checks, tests, and observations to confirm a validated plan is implemented correctly and consistently.</TableCell></TableRow>
                        <TableRow><TableCell>Primary Question</TableCell><TableCell>"Is our plan effective?"</TableCell><TableCell>"Are we following our plan?"</TableCell></TableRow>
                        <TableRow><TableCell>Focus</TableCell><TableCell>Design and accuracy of the food safety plan; theoretical soundness.</TableCell><TableCell>Implementation and consistency of the food safety plan; practical adherence.</TableCell></TableRow>
                        <TableRow><TableCell>Timing</TableCell><TableCell>Primarily before implementation of a new process or control; also upon significant changes.</TableCell><TableCell>Ongoing, routine activities performed daily, weekly, or at other defined frequencies.</TableCell></TableRow>
                        <TableRow><TableCell>Methods (Examples)</TableCell><TableCell>Citing scientific literature, regulatory guidance, mathematical models, in-plant tests, expert consultation, challenge studies.</TableCell><TableCell>Calibration checks, product sampling, record review, visual inspections, environmental monitoring, audits.</TableCell></TableRow>
                    </TableBody>
                </Table>
                </div>
            </Section>
        )
    },
    raw_milk: function RawMilkContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.raw_milk_handling.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.content }}/>
                <SubSection title={content.sections.raw_milk_handling.subsections.quality_control.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.quality_control.content }}/>
                </SubSection>
                <SubSection title={content.sections.raw_milk_handling.subsections.tanker_cleaning.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.raw_milk_handling.subsections.tanker_cleaning.content }}/>
                </SubSection>
            </Section>
        )
    },
    processing: function ProcessingContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.processing.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.processing.content }}/>
                <SubSection title={content.sections.processing.subsections.thermal.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.thermal.content }}/>
                </SubSection>
                <SubSection title={content.sections.processing.subsections.non_thermal.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.non_thermal.content }}/>
                </SubSection>
                <SubSection title={content.sections.processing.subsections.homogenization.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.homogenization.content }}/>
                </SubSection>
                <SubSection title={content.sections.processing.subsections.cip_cop.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.cip_cop.content }}/>
                </SubSection>
            </Section>
        )
    },
    storage: function StorageContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.storage.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.content }}/>
                <SubSection title={content.sections.storage.subsections.cold_chain.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.cold_chain.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.calibration.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.calibration.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.microbiological.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.microbiological.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.allergen.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.allergen.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.shelf_life.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.shelf_life.content }}/>
                </SubSection>
                <SubSection title={content.sections.storage.subsections.documentation.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.storage.subsections.documentation.content }}/>
                </SubSection>
            </Section>
        )
    },
    conclusion: function ConclusionContent({ content }: { content: any }) {
        return (
            <Section title={content.sections.conclusion.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
            </Section>
        )
    }
}


export function ValidationVerificationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(validationVerificationContent);
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
    { value: "raw_milk", title: content.tabs.raw_milk, icon: Droplet, component: topicComponents.raw_milk },
    { value: "processing", title: content.tabs.processing, icon: Settings, component: topicComponents.processing },
    { value: "storage", title: content.tabs.storage, icon: FolderClock, component: topicComponents.storage },
    { value: "conclusion", title: content.tabs.conclusion, icon: CheckCircle, component: topicComponents.conclusion }
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
