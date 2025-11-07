
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
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Truck, Warehouse, Shield, CheckCircle, Droplet } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { milkHandlingPreservationContent } from "@/lib/content/milk-handling-preservation-content";


const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div id={id} className="prose max-w-none text-gray-700 text-base leading-relaxed">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">{title}</h2>
        <div className="space-y-4">{children}</div>
    </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);

const topicComponents = {
    introduction: ({ content }: { content: any }) => (
        <Section title={content.sections.introduction.title} id="introduction">
            <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.introduction.p3 }} />
        </Section>
    ),
    reception: ({ content }: { content: any }) => (
         <Section title={content.sections.reception.title} id="reception">
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.p1 }} />
            <SubHeading>{content.sections.reception.farm_practices.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.farm_practices.p3 }} />
            <SubHeading>{content.sections.reception.plant_reception.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p2 }} />
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="font-semibold">{content.sections.reception.plant_reception.measurement_methods.by_weight.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_weight.text}</li>
                <li><strong className="font-semibold">{content.sections.reception.plant_reception.measurement_methods.by_volume.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_volume.text}</li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.plant_reception.p3 }} />
            <SubHeading>{content.sections.reception.hygiene_cleaning.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.reception.hygiene_cleaning.p4 }} />
        </Section>
    ),
    transportation: ({ content }: { content: any }) => (
         <Section title={content.sections.transportation.title} id="transportation">
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.p1 }} />
            <SubHeading>{content.sections.transportation.tanker_design.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.tanker_design.p3 }} />
            <SubHeading>{content.sections.transportation.hygienic_transport.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.hygienic_transport.p3 }} />
            <SubHeading>{content.sections.transportation.temp_control.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.temp_control.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.temp_control.p2 }} />
            <SubHeading>{content.sections.transportation.monitoring_logistics.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.transportation.monitoring_logistics.p4 }} />
        </Section>
    ),
    storage: ({ content }: { content: any }) => (
         <Section title={content.sections.storage.title} id="storage">
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.p1 }} />
            <SubHeading>{content.sections.storage.raw_milk_silos.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.raw_milk_silos.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.raw_milk_silos.p2 }} />
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="font-semibold">{content.sections.storage.raw_milk_silos.sensors.temp.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.temp.text}</li>
                <li><strong className="font-semibold">{content.sections.storage.raw_milk_silos.sensors.level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.level.text}</li>
                <li><strong className="font-semibold">{content.sections.storage.raw_milk_silos.sensors.low_level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.low_level.text}</li>
                <li><strong className="font-semibold">{content.sections.storage.raw_milk_silos.sensors.overflow.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.overflow.text}</li>
            </ul>
            <SubHeading>{content.sections.storage.refrigerated_storage.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.refrigerated_storage.p3 }} />
            <SubHeading>{content.sections.storage.uht_storage.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.storage.uht_storage.p3 }} />
        </Section>
    ),
    preservation: ({ content }: { content: any }) => (
        <Section title={content.sections.preservation.title} id="chemical">
            <SubHeading>{content.sections.preservation.principles.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.principles.p1 }} />
            <SubHeading>{content.sections.preservation.chemicals.title}</SubHeading>
            <h4 className="font-semibold mt-2">{content.sections.preservation.chemicals.h2o2.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.h2o2.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.h2o2.p2 }} />
            <h4 className="font-semibold mt-2">{content.sections.preservation.chemicals.lp_system.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.lp_system.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.lp_system.p2 }} />
            <h4 className="font-semibold mt-2">{content.sections.preservation.chemicals.other.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.chemicals.other.p1 }} />
            <SubHeading>{content.sections.preservation.regulatory.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.regulatory.p3 }} />
            <SubHeading>{content.sections.preservation.comparison.title}</SubHeading>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.comparison.p1 }} />
            <h4 className="font-semibold mt-2">{content.sections.preservation.comparison.refrigeration.title}</h4>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.refrigeration.advantages.title}:</strong> {content.sections.preservation.comparison.refrigeration.advantages.text}</p>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.refrigeration.disadvantages.title}:</strong> {content.sections.preservation.comparison.refrigeration.disadvantages.text}</p>
            <h4 className="font-semibold mt-2">{content.sections.preservation.comparison.pasteurization.title}</h4>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.pasteurization.advantages.title}:</strong> {content.sections.preservation.comparison.pasteurization.advantages.text}</p>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.pasteurization.disadvantages.title}:</strong> {content.sections.preservation.comparison.pasteurization.disadvantages.text}</p>
            <h4 className="font-semibold mt-2">{content.sections.preservation.comparison.uht.title}</h4>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.uht.advantages.title}:</strong> {content.sections.preservation.comparison.uht.advantages.text}</p>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.uht.disadvantages.title}:</strong> {content.sections.preservation.comparison.uht.disadvantages.text}</p>
            <h4 className="font-semibold mt-2">{content.sections.preservation.comparison.chemical.title}</h4>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.chemical.advantages.title}:</strong> {content.sections.preservation.comparison.chemical.advantages.text}</p>
            <p><strong className="font-semibold">{content.sections.preservation.comparison.chemical.disadvantages.title}:</strong> {content.sections.preservation.comparison.chemical.disadvantages.text}</p>
            <p dangerouslySetInnerHTML={{ __html: content.sections.preservation.comparison.p2 }} />
        </Section>
    ),
    conclusions: ({ content }: { content: any }) => (
        <Section title={content.sections.conclusions.title} id="conclusions">
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.sections.conclusions.p6 }} />
        </Section>
    ),
};


export function MilkHandlingPreservationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(milkHandlingPreservationContent);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "introduction", title: content.tabs.introduction, icon: BookOpen, component: topicComponents.introduction },
    { value: "reception", title: content.tabs.reception, icon: Droplet, component: topicComponents.reception },
    { value: "transportation", title: content.tabs.transportation, icon: Truck, component: topicComponents.transportation },
    { value: "storage", title: content.tabs.storage, icon: Warehouse, component: topicComponents.storage },
    { value: "preservation", title: content.tabs.preservation, icon: Shield, component: topicComponents.preservation },
    { value: "conclusions", title: content.tabs.conclusions, icon: CheckCircle, component: topicComponents.conclusions },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
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
