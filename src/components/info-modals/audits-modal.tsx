
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
import { auditsModalContent } from "@/lib/content/audits-modal-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, CheckCircle, Shield, Building, Search, AlertTriangle, FileText, Award } from "lucide-react";


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
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.executive_summary.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.executive_summary.content }}/>
                </Section>
                <Section title={content.sections.introduction.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.content }}/>
                    <SubSection title={content.sections.introduction.subsections.purpose_and_benefits.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.purpose_and_benefits.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.introduction.subsections.distinction_audits.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.introduction.subsections.distinction_audits.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    regulatory: function RegulatoryContent({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.regulatory_frameworks.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.content }}/>
                    <SubSection title={content.sections.regulatory_frameworks.subsections.fssai.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.fssai.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.regulatory_frameworks.subsections.iso22000.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.iso22000.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.regulatory_frameworks.subsections.haccp.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.regulatory_frameworks.subsections.haccp.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    internal: function InternalAuditsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.internal_audits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.content }}/>
                    <SubSection title={content.sections.internal_audits.subsections.purpose.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.purpose.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.internal_audits.subsections.process.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.internal_audits.subsections.process.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    external: function ExternalAuditsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.external_audits.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.content }}/>
                     <SubSection title={content.sections.external_audits.subsections.types.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.types.content }}/>
                    </SubSection>
                     <SubSection title={content.sections.external_audits.subsections.process.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.process.content }}/>
                    </SubSection>
                     <SubSection title={content.sections.external_audits.subsections.fssai_system.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.external_audits.subsections.fssai_system.content }}/>
                         <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow><TableHead>Audit Score Range</TableHead><TableHead>Recommended Audit Frequency (Dairy)</TableHead></TableRow></TableHeader>
                                <TableBody>
                                    <TableRow><td>81-100%</td><td>Once in 12 months</td></TableRow>
                                    <TableRow><td>51-80%</td><td>Once in 9 months</td></TableRow>
                                    <TableRow><td>&lt;50%</td><td>Once in 6 months</td></TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </SubSection>
                </Section>
            </div>
        )
    },
    focus_areas: function FocusAreasContent({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.focus_areas.title}>
                     <div dangerouslySetInnerHTML={{ __html: content.sections.focus_areas.content }}/>
                </Section>
            </div>
        )
    },
    challenges: function ChallengesContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.challenges.title}>
                     <SubSection title={content.sections.challenges.subsections.common_challenges.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.common_challenges.content }}/>
                    </SubSection>
                    <SubSection title={content.sections.challenges.subsections.best_practices.title}>
                         <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.best_practices.content }}/>
                    </SubSection>
                     <SubSection title={content.sections.challenges.subsections.fostering_culture.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.challenges.subsections.fostering_culture.content }}/>
                    </SubSection>
                </Section>
            </div>
        )
    },
    conclusion: function ConclusionContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.conclusion.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.conclusion.content }}/>
                </Section>
            </div>
        )
    },
    recommendations: function RecommendationsContent({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.recommendations.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.recommendations.content }}/>
                </Section>
            </div>
        )
    }
}


export function AuditsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(auditsModalContent);
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
    { value: "regulatory", title: content.tabs.regulatory, icon: Shield, component: topicComponents.regulatory },
    { value: "internal", title: content.tabs.internal, icon: Search, component: topicComponents.internal },
    { value: "external", title: content.tabs.external, icon: Building, component: topicComponents.external },
    { value: "focus_areas", title: content.tabs.focus_areas, icon: FileText, component: topicComponents.focus_areas },
    { value: "challenges", title: content.tabs.challenges, icon: AlertTriangle, component: topicComponents.challenges },
    { value: "conclusion", title: content.tabs.conclusion, icon: CheckCircle, component: topicComponents.conclusion },
    { value: "recommendations", title: content.tabs.recommendations, icon: Award, component: topicComponents.recommendations }
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 sm:p-0">
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
