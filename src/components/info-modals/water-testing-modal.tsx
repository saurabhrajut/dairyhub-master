
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
import { waterTestingContent } from "@/lib/content/water-testing-content";
import { Button } from "../ui/button";
import { ArrowLeft, TestTube } from "lucide-react";


const Formula = ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-muted/50 rounded-lg text-center font-mono text-sm my-4 text-primary"
     dangerouslySetInnerHTML={{ __html: children as string }} />
);

const WaterTestSection = ({ test }: { test: any }) => {
    return (
        <section className="p-1">
            <h2 className="text-2xl font-bold text-blue-800 font-headline">{test.title}</h2>
            <p className="mt-2 text-gray-600">{test.intro}</p>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Prakriya (Procedure)</h3>
            <ol className="list-decimal list-inside space-y-2 mt-2 text-gray-600">
                {test.procedure.map((step: any, i: number) => <li key={i} dangerouslySetInnerHTML={{__html: step}}/>)}
            </ol>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Ganana (Calculation)</h3>
            <Formula>{test.calculation}</Formula>
        </section>
    );
};


export function WaterTestingModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(waterTestingContent);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTestId(null);
    }
    setIsOpen(open);
  };

  const selectedTest = content.tests.find(t => t.id === activeTestId);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center font-headline">{content.title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTest ? selectedTest.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedTest ? (
             <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTestId(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {content.backToTopics}
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                        <WaterTestSection test={selectedTest} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
                 <div className="p-4 pt-0 sm:p-0 prose max-w-none text-gray-700 text-base leading-relaxed">
                    <p className="text-center"><strong>{content.important_note.title}</strong> {content.important_note.text}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0 mt-4">
                    {content.tests.map(test => (
                        <button
                          key={test.id}
                          onClick={() => setActiveTestId(test.id)}
                          className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                        >
                          <TestTube className="w-8 h-8 text-primary mr-4 shrink-0" />
                          <div>
                            <span className="font-semibold font-headline text-card-foreground">{test.title}</span>
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
