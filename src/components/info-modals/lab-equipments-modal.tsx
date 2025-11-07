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
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { labEquipmentsContent } from "@/lib/content/lab-equipments-content";
import { Button } from "../ui/button";

const EquipmentDetail = ({ equipment, content }: { equipment: any; content: any }) => {
  return (
    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-800 font-headline">{equipment.name}</h2>
        <h3 className="font-bold text-lg mt-4 not-prose">{content.purposeTitle}</h3>
        <p>{equipment.purpose}</p>

        <h3 className="font-bold text-lg mt-4 not-prose">{content.principleTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: equipment.principle }} />

        {equipment.parts && equipment.parts.length > 0 && (
            <>
                <h3 className="font-bold text-lg mt-4 not-prose">{content.partsTitle}</h3>
                <ul className="list-disc list-inside">
                    {equipment.parts.map((part:any, index:number) => (
                        <li key={index}><strong>{part.name}:</strong> {part.description}</li>
                    ))}
                </ul>
            </>
        )}
    </div>
  );
};


export function LabEquipmentsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const content = t(labEquipmentsContent);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeEquipmentId, setActiveEquipmentId] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveEquipmentId(null);
    }
    setIsOpen(open);
  };
  
  const selectedEquipment = activeEquipmentId ? content.equipments.find(e => e.id === activeEquipmentId) : null;

  const filteredEquipments = content.equipments.filter(equip => 
    equip.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    equip.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
             {selectedEquipment ? selectedEquipment.name : content.description}
          </DialogDescription>
        </DialogHeader>

        {selectedEquipment ? (
             <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveEquipmentId(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Equipments
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <EquipmentDetail equipment={selectedEquipment} content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="relative my-4 px-4 sm:px-0">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder={content.searchPlaceholder}
                        className="w-full pl-10 pr-4 py-2 rounded-full shadow-sm bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <ScrollArea className="flex-1 mt-2 sm:pr-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
                    {filteredEquipments.map((equip) => (
                         <button
                            key={equip.id}
                            onClick={() => setActiveEquipmentId(equip.id)}
                            className="p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                            >
                             <h4 className="font-semibold font-headline text-card-foreground">{equip.name}</h4>
                             <p className="text-xs text-muted-foreground mt-1">{equip.purpose}</p>
                         </button>
                    ))}
                    </div>
                    {filteredEquipments.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground">
                            <p>{content.noResults}</p>
                        </div>
                    )}
                </ScrollArea>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
