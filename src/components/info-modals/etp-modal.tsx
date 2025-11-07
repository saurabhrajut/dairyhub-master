
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
import { etpModalContent } from "@/lib/content/etp-modal-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Settings, Award, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";


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
    intro: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.executive_summary.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }} />
                </Section>
                 <Section title={content.sections.introduction.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }} />
                    <SubSection title={content.sections.introduction.subsections.characteristics.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.characteristics.content }} />
                        <div className="overflow-x-auto">
                           <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header1}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header2}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header3}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header4}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header5}</TableHead>
                                        <TableHead>{content.sections.introduction.subsections.characteristics.table.header6}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.introduction.subsections.characteristics.table.rows.map((row: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell>{row.param}</TableCell>
                                        <TableCell>{row.butter}</TableCell>
                                        <TableCell>{row.cream}</TableCell>
                                        <TableCell>{row.milk}</TableCell>
                                        <TableCell>{row.cheese}</TableCell>
                                        <TableCell>{row.powdered}</TableCell>
                                      </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
            </div>
        )
    },
    processes: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.treatment_processes.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.content }} />
                    <SubSection title={content.sections.treatment_processes.subsections.preliminary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.preliminary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.primary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.primary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.secondary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.secondary.content }} />
                    </SubSection>
                    <SubSection title={content.sections.treatment_processes.subsections.tertiary.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.treatment_processes.subsections.tertiary.content }} />
                    </SubSection>
                </Section>
            </div>
        )
    },
    benefits: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.benefits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.content }} />
                    <SubSection title={content.sections.benefits.subsections.environmental.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.environmental.content }} />
                    </SubSection>
                        <SubSection title={content.sections.benefits.subsections.economic.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.economic.content }} />
                    </SubSection>
                    <SubSection title={content.sections.benefits.subsections.operational.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.benefits.subsections.operational.content }} />
                    </SubSection>
                </Section>
            </div>
        )
    },
    factors: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.key_factors.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.content }} />
                    <SubSection title={content.sections.key_factors.subsections.characteristics.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.characteristics.content }} />
                    </SubSection>
                    <SubSection title={content.sections.key_factors.subsections.compliance.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.compliance.content }} />
                            <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{content.sections.key_factors.subsections.compliance.table.header1}</TableHead>
                                        <TableHead>{content.sections.key_factors.subsections.compliance.table.header2}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {content.sections.key_factors.subsections.compliance.table.rows.map((row: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.param}</TableCell>
                                        <TableCell>{row.limit}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                    <SubSection title={content.sections.key_factors.subsections.technology.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.key_factors.subsections.technology.content }} />
                    </SubSection>
                </Section>
            </div>
        )
    },
    challenges: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.challenges.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.content }} />
                </Section>
            </div>
        )
    },
    future: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.future_outlook.title}>
                <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.content }} />
                <SubSection title={content.sections.future_outlook.subsections.innovations.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.innovations.content }} />
                </SubSection>
                    <SubSection title={content.sections.future_outlook.subsections.conclusion.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.future_outlook.subsections.conclusion.content }} />
                </SubSection>
                </Section>
            </div>
        )
    },
}

export function EtpModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(etpModalContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "intro", title: content.tabs.intro, icon: BookOpen, component: topicComponents.intro },
    { value: "processes", title: content.tabs.processes, icon: Settings, component: topicComponents.processes },
    { value: "benefits", title: content.tabs.benefits, icon: Award, component: topicComponents.benefits },
    { value: "factors", title: content.tabs.factors, icon: CheckCircle, component: topicComponents.factors },
    { value: "challenges", title: content.tabs.challenges, icon: AlertTriangle, component: topicComponents.challenges },
    { value: "future", title: content.tabs.future, icon: TrendingUp, component: topicComponents.future },
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
