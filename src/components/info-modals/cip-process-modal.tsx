
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
import { useLanguage } from "@/context/language-context";
import { cipProcessContent } from "@/lib/content/cip-process-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, ChevronsRight, Recycle, Settings, TestTube, Wind } from "lucide-react";


const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 font-headline">{title}</h2>
        <div className="prose prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

const topicComponents = {
    intro: function Content({ content }: { content: any }) {
        return <Section title={content.intro.title}><div dangerouslySetInnerHTML={{ __html: content.intro.htmlContent }} /></Section>
    },
    cip_cycle: function Content({ content }: { content: any }) {
        return (
            <Section title={content.cip_cycle.title}>
                <p>{content.cip_cycle.intro}</p>
                <ol className="list-decimal list-outside pl-5 mt-4 space-y-4">
                    {content.cip_cycle.steps.map((step: any, index: number) => (
                        <li key={index}>
                            <strong className="text-gray-800">{step.title}</strong>
                            <div className="pl-2" dangerouslySetInnerHTML={{ __html: step.details }} />
                        </li>
                    ))}
                </ol>
            </Section>
        )
    },
    chemicals: function Content({ content }: { content: any }) {
        return (
             <Section title={content.chemicals.title}>
              <p>{content.chemicals.intro}</p>
              {content.chemicals.types.map((type: any, index: number) => (
                  <div key={index} className="mt-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{type.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: type.details }} />
                  </div>
              ))}
          </Section>
        )
    },
    advantages: function Content({ content }: { content: any }) {
        return (
            <Section title={content.advantages.title}>
              <ul className="list-disc list-inside space-y-2">
                 {content.advantages.list.map((adv: string, index: number) => (
                    <li key={index}>{adv}</li>
                 ))}
              </ul>
          </Section>
        )
    },
    cleaning_procedures: function Content({ content }: { content: any }) {
        return (
             <Section title={content.cleaning_procedures.title}>
              {content.cleaning_procedures.sections.map((sec: any, index: number) => (
                  <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{sec.title}</h3>
                      <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: sec.content }} />
                  </div>
              ))}
          </Section>
        )
    },
    teepol_detergent: function Content({ content }: { content: any }) {
        return (
            <Section title={content.teepol_detergent.title}>
              <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.teepol_detergent.htmlContent }} />
          </Section>
        )
    },
    sip: function Content({ content }: { content: any }) {
        return (
            <Section title={content.sip.title}>
              <p>{content.sip.intro}</p>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: content.sip.process }} />
          </Section>
        )
    },
    solution_strength: function Content({ content }: { content: any }) {
        return (
            <Section title={content.solution_strength.title}>
                <p>{content.solution_strength.intro}</p>
                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.solution_strength.alkalinity_test.content }} />
            </Section>
        )
    }
}


export function CipProcessModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(cipProcessContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "intro", title: content.intro.title, icon: BookOpen },
    { value: "cip_cycle", title: content.cip_cycle.title, icon: Recycle },
    { value: "chemicals", title: content.chemicals.title, icon: TestTube },
    { value: "advantages", title: content.advantages.title, icon: ChevronsRight },
    { value: "cleaning_procedures", title: content.cleaning_procedures.title, icon: Settings },
    { value: "teepol_detergent", title: content.teepol_detergent.title, icon: Wind },
    { value: "sip", title: content.sip.title, icon: Settings },
    { value: "solution_strength", title: content.solution_strength.title, icon: TestTube },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.main_description}
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
