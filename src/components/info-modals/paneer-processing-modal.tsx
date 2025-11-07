
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "../ui/button";
import { ArrowLeft, Beaker, CheckSquare, Settings, BarChart } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { paneerProcessingContent } from "@/lib/content/paneer-processing-modal-content";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-700 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700 font-headline">{title}</h2>
        <div className="mt-4 space-y-4 text-gray-600 leading-relaxed prose prose-sm max-w-none break-words">
            {children}
        </div>
    </section>
);


const topicComponents = {
    process: ({ content }: { content: any }) => {
      const processContent = content.topics.process;
      return (
        <Section title={processContent.title}>
            <p className="mb-6">{processContent.description}</p>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader><TableRow>
                        {processContent.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                    </TableRow></TableHeader>
                    <TableBody>
                        {processContent.table.rows.map((item: any) => (
                            <TableRow key={item.step}>
                                <TableCell>{item.step}</TableCell>
                                <TableCell className="font-medium">{item.stage}</TableCell>
                                <TableCell dangerouslySetInnerHTML={{__html: item.params}} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
      )
    },
    quality_control: ({ content }: { content: any }) => {
      const qcContent = content.topics.quality_control;
      return (
        <Section title={qcContent.title}>
            <p className="mb-6">{qcContent.description}</p>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader><TableRow>
                       {qcContent.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                    </TableRow></TableHeader>
                    <TableBody>
                        {qcContent.table.rows.map((item: any) => (
                            <TableRow key={item.param}>
                                <TableCell className="font-medium">{item.param}</TableCell>
                                <TableCell>{item.buffalo}</TableCell>
                                <TableCell>{item.cow}</TableCell>
                                <TableCell>{item.importance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
      )
    },
    coagulants: ({ content }: { content: any }) => {
        const coagulantsContent = content.topics.coagulants;
        return (
            <Section title={coagulantsContent.title}>
                <p className="mb-4">{coagulantsContent.description}</p>
                <div className="space-y-4">
                    {coagulantsContent.types.map((coagulant: any) => (
                         <div key={coagulant.name} className="p-4 border rounded-lg bg-card">
                            <h4 className="font-bold text-card-foreground">{coagulant.name}</h4>
                            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: coagulant.details }} />
                        </div>
                    ))}
                </div>
            </Section>
        )
    },
    yield_texture: ({ content_en, content_hi }: { content_en: any, content_hi: any }) => {
        const { t } = useLanguage();
        const yieldContent = t({ en: content_en.topics.yield_texture, hi: content_hi.topics.yield_texture });
        
        return (
            <>
                <Section title={yieldContent.yield.title}>
                    <p className="mb-4">{yieldContent.yield.description}</p>
                    <ul className="list-disc list-outside pl-5 space-y-3 text-muted-foreground">
                        {yieldContent.yield.methods.map((method: string, index: number) => <li key={index} dangerouslySetInnerHTML={{ __html: method }} />)}
                    </ul>
                </Section>

                 <Section title={yieldContent.safeIncreasers.title}>
                    <p className="mb-4">{yieldContent.safeIncreasers.description}</p>
                    <Alert variant="default" className="bg-green-50 border-green-500 text-green-800">
                        <AlertDescription dangerouslySetInnerHTML={{ __html: yieldContent.safeIncreasers.wpc_info }} />
                    </Alert>
                </Section>

                 <Section title={yieldContent.texture.title}>
                    <p className="mb-4">{yieldContent.texture.description}</p>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader><TableRow>
                                {yieldContent.texture.table.headers.map((header: string) => <TableHead key={header}>{header}</TableHead>)}
                            </TableRow></TableHeader>
                            <TableBody>
                                {yieldContent.texture.table.rows.map((row: any) => (
                                    <TableRow key={row.texture}>
                                        <TableCell className={`font-medium ${row.colorClass}`}>{row.texture}</TableCell>
                                        <TableCell>{row.causes}</TableCell>
                                        <TableCell>{row.result}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Section>
            </>
        )
    }
};

export function PaneerProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(paneerProcessingContent);

  const topics = [
    { value: "process", title: content.tabs.process, icon: Settings, component: topicComponents.process },
    { value: "quality_control", title: content.tabs.quality_control, icon: CheckSquare, component: topicComponents.quality_control },
    { value: "coagulants", title: content.tabs.coagulants, icon: Beaker, component: topicComponents.coagulants },
    { value: "yield_texture", title: content.tabs.yield_texture, icon: BarChart, component: topicComponents.yield_texture },
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">{content.mainTitle}</DialogTitle>
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
                        <ActiveComponent content={content} content_en={paneerProcessingContent.en} content_hi={paneerProcessingContent.hi} />
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
