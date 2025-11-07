
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
import { packagingContent } from "@/lib/content/packaging-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Layers, Settings, TestTube } from "lucide-react";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        {children}
    </div>
);

const SubHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-gray-800 mt-6 mb-3 scroll-mt-24 font-headline">{children}</h3>
);

const TestProcedure = ({ test, content }: { test: any, content: any }) => {
    return (
        <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()}>
            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{test.title}</AccordionTrigger>
            <AccordionContent>
                <div className="prose prose-sm max-w-none">
                    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: test.procedure }} />
                    {test.calculation && (
                        <>
                            <h4 className="font-bold mt-4">{content.testing.calculation_title}</h4>
                            <pre className="bg-muted p-3 rounded-lg font-mono text-sm text-primary"><code>{test.calculation}</code></pre>
                        </>
                    )}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

const topicComponents = {
    introduction: ({ content }: { content: any }) => (
        <Section title={content.introduction.title} id="introduction">
            <div className="prose prose-sm max-w-none break-words">
            <p>{content.introduction.p1}</p>
            <p>{content.introduction.p2}</p>
            <h3 className="font-bold mt-4">{content.introduction.purpose_title}</h3>
                <ul className="list-disc list-inside space-y-2">
                {content.introduction.purposes.map((purpose:any, index:number) => <li key={index}>{purpose}</li>)}
            </ul>
                <p>{content.introduction.p3}</p>
            </div>
        </Section>
    ),
    materials: ({ content }: { content: any }) => (
        <Section title={content.materials.title} id="materials">
            <div className="prose prose-sm max-w-none break-words">
            <SubHeading id="glass">{content.materials.glass.title}</SubHeading>
            <p>{content.materials.glass.p1}</p>
            
            <SubHeading id="plastics">{content.materials.plastics.title}</SubHeading>
            <p>{content.materials.plastics.p1}</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
                {content.materials.plastics.types.map((type:any, index:number) => <li key={index} dangerouslySetInnerHTML={{ __html: type }}/>)}
            </ul>

            <SubHeading id="laminates">{content.materials.laminates.title}</SubHeading>
            <p>{content.materials.laminates.p1}</p>
            </div>
        </Section>
    ),
    forms: ({ content }: { content: any }) => (
        <Section title={content.forms.title} id="forms-processes">
            <div className="prose prose-sm max-w-none break-words">
            <p>{content.forms.p1}</p>
            
            <SubHeading id="aseptic">{content.forms.aseptic.title}</SubHeading>
            <p>{content.forms.aseptic.p1}</p>
            
            <SubHeading id="fino">{content.forms.fino.title}</SubHeading>
            <p>{content.forms.fino.p1}</p>

            <SubHeading id="pet">{content.forms.pet.title}</SubHeading>
            <p>{content.forms.pet.p1}</p>

            <SubHeading id="retort">{content.forms.retort.title}</SubHeading>
            <p>{content.forms.retort.p1}</p>
            </div>
        </Section>
    ),
    testing: ({ content }: { content: any }) => (
        <Section title={content.testing.title} id="testing">
            <div className="prose prose-sm max-w-none break-words">
            <p><strong>{content.testing.sampling_title}:</strong> {content.testing.sampling_text}</p>
            <p><strong>{content.testing.conditioning_title}:</strong> {content.testing.conditioning_text}</p>
            <Accordion type="single" collapsible className="w-full">
                {content.testing.tests.map((test:any) => <TestProcedure key={test.title} test={test} content={content} />)}
            </Accordion>
            </div>
        </Section>
    )
};


export function PackagingMaterialTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(packagingContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
      { value: "introduction", title: content.tabs.intro, icon: BookOpen, component: topicComponents.introduction },
      { value: "materials", title: content.tabs.materials, icon: Layers, component: topicComponents.materials },
      { value: "forms-processes", title: content.tabs.forms, icon: Settings, component: topicComponents.forms },
      { value: "testing", title: content.tabs.testing, icon: TestTube, component: topicComponents.testing },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">{content.title}</DialogTitle>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-0">
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
