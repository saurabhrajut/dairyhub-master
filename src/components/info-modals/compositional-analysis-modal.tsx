
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
import { Button } from "../ui/button";
import { ArrowLeft, Beaker, Droplet, Wind, ShieldCheck, Component, FlaskConical, Snowflake, Thermometer, Archive } from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { compositionalAnalysisContent } from "@/lib/content/compositional-analysis-content";


const InfoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card p-4 sm:p-6 rounded-xl shadow-sm border mt-6 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <h3 id={id} className="text-xl font-semibold text-primary scroll-mt-24 font-headline">
        {children}
    </h3>
);

const Procedure = ({ test }: { test: any }) => (
    <AccordionItem value={test.title.replace(/\s+/g, '-').toLowerCase()}>
        <AccordionTrigger className="text-left hover:no-underline">
            <div className="flex flex-col text-left">
                <span className="font-bold text-base sm:text-lg">{test.title}</span>
                <span className="text-xs text-muted-foreground font-normal">{test.purpose}</span>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="text-sm break-words">
                {test.procedure && <div dangerouslySetInnerHTML={{ __html: test.procedure }} />}
                {test.reference && <p className="text-xs text-muted-foreground mt-4"><strong>Ref:</strong> {test.reference}</p>}
            </div>
        </AccordionContent>
    </AccordionItem>
);

const analysisTopics = [
    { value: "processed-milk", title: "Milk", icon: Droplet },
    { value: "cream", title: "Cream", icon: Droplet },
    { value: "cream-powder", title: "Cream Powder", icon: Wind },
    { value: "butter", title: "Butter", icon: Component },
    { value: "ghee-butter-oil", title: "Ghee / Butter Oil", icon: FlaskConical },
    { value: "cheese-paneer", title: "Paneer / Cheese", icon: PaneerIcon },
    { value: "dahi-yoghurt", title: "Dahi / Yoghurt", icon: Beaker },
    { value: "chakka-shrikhand", title: "Chakka / Shrikhand", icon: Beaker },
    { value: "khoa", title: "Khoa", icon: Component },
    { value: "ice-cream", title: "Ice Cream", icon: IceCreamIcon },
    { value: "condensed-milk", title: "Condensed Milk", icon: Thermometer },
    { value: "milk-powder", title: "Milk Powder", icon: Wind },
    { value: "casein", title: "Casein", icon: FlaskConical },
    { value: "whey-powder", title: "Whey Powder", icon: Archive },
];


export function CompositionalAnalysisModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(compositionalAnalysisContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = analysisTopics.find(t => t.value === activeTopic);
  const selectedContent = selectedTopic ? content.topics[selectedTopic.value as keyof typeof content.topics] : null;

  const renderContent = () => {
    if (!selectedContent) return null;
    return (
      <div className="min-h-0">
          <InfoCard>
              <SectionTitle id={`${activeTopic}-analysis`}>{selectedContent.title}</SectionTitle>
              <Accordion type="single" collapsible className="w-full">
                  {selectedContent.tests.map((test, index) => (
                      <Procedure key={index} test={test} />
                  ))}
              </Accordion>
          </InfoCard>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[calc(100dvh-4rem)] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
             {selectedContent ? selectedContent.title : content.main_description}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic ? (
             <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {content.back_to_topics}
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4 min-h-0 overflow-auto">
                    <div className="p-4 pt-0 sm:p-0 min-h-0">
                       {renderContent()}
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4 min-h-0 overflow-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 sm:p-0">
                    {analysisTopics.map(topic => (
                        <button
                            key={topic.value}
                            onClick={() => setActiveTopic(topic.value)}
                            className="flex flex-col items-center justify-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200 aspect-square"
                        >
                            <topic.icon className="w-10 h-10 text-primary mb-3 shrink-0" />
                            <span className="font-semibold font-headline text-card-foreground text-sm">{content.topics[topic.value as keyof typeof content.topics].title}</span>
                        </button>
                    ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
