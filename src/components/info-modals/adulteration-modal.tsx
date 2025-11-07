
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "../ui/button"
import { FlaskConical, Microscope, Shield, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { adulterationContent } from "@/lib/content/adulteration-content"

type AdulterationCategory = 'platform-tests' | 'preservatives' | 'adulterants';

export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [activeCategory, setActiveCategory] = useState<AdulterationCategory | null>(null);
  const { t } = useLanguage();
  const content = t(adulterationContent);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCategory(null);
    }
    setIsOpen(open);
  };
  
  if (!content?.tabs || !content?.platformTests) return null;

  const categories = [
    { id: 'platform-tests', title: content.tabs.platform, description: content.tabs.platform_desc, data: content.platformTests, icon: Microscope, intro: content.intros.platform },
    { id: 'preservatives', title: content.tabs.preservatives, description: content.tabs.preservatives_desc, data: content.preservatives, icon: Shield, intro: content.intros.preservatives },
    { id: 'adulterants', title: content.tabs.adulterants, description: content.tabs.adulterants_desc, data: content.adulterants, icon: FlaskConical, intro: content.intros.adulterants },
  ];
  
  const selectedCategory = categories.find(c => c.id === activeCategory);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl sm:text-3xl text-center">{content.main_title}</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
             {selectedCategory ? selectedCategory.title : content.main_description}
          </DialogDescription>
        </DialogHeader>
        
        {selectedCategory ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                  <Button variant="ghost" onClick={() => setActiveCategory(null)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {content.back_to_categories}
                  </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            {selectedCategory.intro}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                            {selectedCategory.data.map((item) => (
                                <AccordionItem key={item.title} value={item.title.replace(/\s/g, '-')}>
                                    <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="prose prose-sm max-w-none break-words" dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </ScrollArea>
            </div>
        ) : (
             <ScrollArea className="flex-1 mt-4 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-0">
                    {categories.map(category => {
                        const Icon = category.icon;
                        return (
                            <button
                            key={category.id}
                            type="button"
                            onClick={() => setActiveCategory(category.id as AdulterationCategory)}
                            className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200"
                            >
                                <Icon className="w-12 h-12 text-primary mb-3" />
                                <h3 className="font-semibold font-headline text-card-foreground">{category.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                            </button>
                        )
                    })}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  )
}
    