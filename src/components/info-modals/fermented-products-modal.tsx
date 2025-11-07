
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
import { fermentedProductsModalContent } from "@/lib/content/fermented-products-modal-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, CheckSquare, BarChart, FlaskConical, Lightbulb, ShieldAlert, Sparkles, SlidersHorizontal, Package, Leaf } from "lucide-react";


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
                    <SubSection title={content.sections.introduction.table.title}>
                        <p>{content.sections.introduction.table.description}</p>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader><TableRow>
                                  {content.sections.introduction.table.headers.map((h: string) => <TableHead key={h}>{h}</TableHead>)}
                                </TableRow></TableHeader>
                                <TableBody>
                                    {content.sections.introduction.table.rows.map((row: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell>{row[0]}</TableCell>
                                            <TableCell>{row[1]}</TableCell>
                                            <TableCell>{row[2]}</TableCell>
                                            <TableCell>{row[3]}</TableCell>
                                            <TableCell>{row[4]}</TableCell>
                                            <TableCell>{row[5]}</TableCell>
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
    processing: function Content({ content }: { content: any }) {
        return (
             <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.processing.title}>
                    <div dangerouslySetInnerHTML={{ __html: content.sections.processing.content }} />
                    <SubSection title={content.sections.processing.subsections.raw_milk_prep.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.raw_milk_prep.content }} />
                    </SubSection>
                     <SubSection title={content.sections.processing.subsections.pre_fermentation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.pre_fermentation.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.fermentation_process.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.fermentation_process.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.post_fermentation.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.post_fermentation.content }} />
                     </SubSection>
                     <SubSection title={content.sections.processing.subsections.packaging.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.processing.subsections.packaging.content }} />
                     </SubSection>
                 </Section>
             </div>
        )
    },
    quality_control: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                  <Section title={content.sections.quality_control.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.content }} />
                        <SubSection title={content.sections.quality_control.subsections.assessment.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.subsections.assessment.content }} />
                        </SubSection>
                         <SubSection title={content.sections.quality_control.subsections.hygiene.title}>
                             <div dangerouslySetInnerHTML={{ __html: content.sections.quality_control.subsections.hygiene.content }} />
                        </SubSection>
                  </Section>
            </div>
        )
    },
    defects: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                  <Section title={content.sections.defects.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.defects.content }} />
                        <SubSection title={content.sections.defects.subsections.sourness.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.sourness.content }} />
                        </SubSection>
                        <SubSection title={content.sections.defects.subsections.bitterness.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.bitterness.content }} />
                        </SubSection>
                         <SubSection title={content.sections.defects.subsections.syneresis.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.defects.subsections.syneresis.content }} />
                        </SubSection>
                  </Section>
            </div>
        )
    },
    shelf_life: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                <Section title={content.sections.shelf_life.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.content }} />
                         <SubSection title={content.sections.shelf_life.subsections.lactic_acid.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.lactic_acid.content }} />
                        </SubSection>
                        <SubSection title={content.sections.shelf_life.subsections.thermization.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.thermization.content }} />
                        </SubSection>
                        <SubSection title={content.sections.shelf_life.subsections.aseptic.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.shelf_life.subsections.aseptic.content }} />
                        </SubSection>
                  </Section>
            </div>
        )
    },
    yield: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                  <Section title={content.sections.yield.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.yield.content }} />
                        <SubSection title={content.sections.yield.subsections.composition.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.composition.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.parameters.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.parameters.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.culture.title}>
                           <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.culture.content }} />
                        </SubSection>
                         <SubSection title={content.sections.yield.subsections.stabilizers.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.yield.subsections.stabilizers.content }} />
                        </SubSection>
                  </Section>
            </div>
        )
    },
    innovations: function Content({ content }: { content: any }) {
        return (
            <div className="prose prose-sm max-w-none break-words">
                 <Section title={content.sections.innovations.title}>
                        <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.content }} />
                        <SubSection title={content.sections.innovations.subsections.techniques.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.techniques.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.fortification.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.fortification.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.technologies.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.technologies.content }} />
                        </SubSection>
                        <SubSection title={content.sections.innovations.subsections.packaging.title}>
                            <div dangerouslySetInnerHTML={{ __html: content.sections.innovations.subsections.packaging.content }} />
                        </SubSection>
                  </Section>
            </div>
        )
    }
}

export function FermentedProductsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(fermentedProductsModalContent);
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
    { value: "processing", title: content.tabs.processing, icon: SlidersHorizontal, component: topicComponents.processing },
    { value: "quality_control", title: content.tabs.quality_control, icon: CheckSquare, component: topicComponents.quality_control },
    { value: "defects", title: content.tabs.defects, icon: ShieldAlert, component: topicComponents.defects },
    { value: "shelf_life", title: content.tabs.shelf_life, icon: Package, component: topicComponents.shelf_life },
    { value: "yield", title: content.tabs.yield, icon: BarChart, component: topicComponents.yield },
    { value: "innovations", title: content.tabs.innovations, icon: Sparkles, component: topicComponents.innovations }
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
