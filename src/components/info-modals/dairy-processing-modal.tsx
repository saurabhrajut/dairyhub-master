
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Thermometer,
  Settings,
  Filter,
  Droplet,
  Layers,
  RotateCw,
  Zap,
  Clock,
  View,
  Power,
  ShieldCheck,
  ArrowLeft,
  Truck,
  BookOpen,
  CheckSquare
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { dairyProcessingContent } from "@/lib/content/dairy-processing-content";

function Section({ title, icon: Icon, children, id }: { title: string, icon: React.ElementType, children: React.ReactNode, id: string }) {
    return (
        <section id={id} className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline scroll-mt-24">
                <Icon className="w-7 h-7" />
                <span>{title}</span>
            </h3>
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                {children}
            </div>
        </section>
    );
}

// Content Components
function WorkflowContent({content}: {content: any}) {
    return (
        <div className="space-y-10">
        <Section title={content.workflow.title} icon={Settings} id="workflow-intro">
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.workflow.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p1 }} />
            
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.workflow.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p3 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.workflow.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p5 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.workflow.subtitle4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p6 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p7 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.workflow.subtitle5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p8 }} />
            <p><strong>{content.workflow.functional_req.title}</strong> {content.workflow.functional_req.description}</p>
            <ul>
                {content.workflow.functional_req.list.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <p><strong>{content.workflow.non_functional_req.title}</strong> {content.workflow.non_functional_req.description}</p>
             <ul>
                {content.workflow.non_functional_req.list.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.workflow.p9 }} />
        </Section>
        </div>
    )
}

function ReceptionContent({content}: {content: any}) {
    return (
        <Section title={content.reception.title} icon={Truck} id="reception">
            <p dangerouslySetInnerHTML={{ __html: content.reception.p1 }} />
            
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.reception.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p2 }} />
            
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.reception.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p3 }} />

            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.reception.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p4 }} />
            <ul>
                 {content.reception.tests.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.reception.p5 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.reception.subtitle4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p6 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p7 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.reception.subtitle5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p8 }} />
            
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.reception.subtitle6 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p9 }} />
            
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.reception.subtitle7 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p10 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p11 }} />

            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.reception.subtitle8 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p12 }} />
            <p dangerouslySetInnerHTML={{ __html: content.reception.p13 }} />
        </Section>
    );
}

function CentrifugalContent({content}: {content: any}) {
    return (
        <Section title={content.centrifugal.title} icon={RotateCw} id="centrifugal">
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p1 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p2 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p3 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p4 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p5 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p6 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle6 }} />
            <ul>
                <li><strong>{content.centrifugal.methods.batch.title}:</strong> {content.centrifugal.methods.batch.description}</li>
                <li><strong>{content.centrifugal.methods.continuous.title}:</strong> {content.centrifugal.methods.continuous.description}</li>
            </ul>

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle7 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p7 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle8 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p8 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p9 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle9 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p10 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p11 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle10 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p12 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle11 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p13 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p14 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.centrifugal.subtitle12 }} />
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p15 }} />
            <ul>
                 {content.centrifugal.applications.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.centrifugal.p16 }} />
        </Section>
    );
}

function ThermalPrinciplesContent({content}: {content: any}) {
    return (
        <Section title={content.thermal.title} icon={Thermometer} id="thermal">
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p1 }} />
            
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p3 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p4 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.d_value.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.d_value.description }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.z_value.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.z_value.description }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.f_value.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.f_value.description }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p5 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.phes.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.phes.p1 }} />
            <ul>
                <li><strong>{content.thermal.phes.design_function.title}:</strong> {content.thermal.phes.design_function.description}</li>
                <li><strong>{content.thermal.phes.regeneration.title}:</strong> {content.thermal.phes.regeneration.description}</li>
                <li><strong>{content.thermal.phes.hygienic_design.title}:</strong> {content.thermal.phes.hygienic_design.description}</li>
            </ul>

            <h4 className="font-bold text-gray-800 text-base mt-6" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p6 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.htst.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.htst.p1 }} />
            <ul>
                <li><strong>{content.thermal.htst.parameters.title}:</strong> {content.thermal.htst.parameters.description}</li>
                <li><strong>{content.thermal.htst.components.title}:</strong> {content.thermal.htst.components.description}</li>
                <li><strong>{content.thermal.htst.validation.title}:</strong> {content.thermal.htst.validation.description}</li>
            </ul>

            <h4 className="font-bold text-gray-800 text-base mt-6" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p7 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p8 }} />

            <h4 className="font-bold text-gray-800 text-base mt-6" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle6 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p9 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.uht_params.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.uht_params.p1 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.uht_systems.title }} />
            <ul>
                <li><strong>{content.thermal.uht_systems.indirect.title}:</strong> {content.thermal.uht_systems.indirect.description}</li>
                <li><strong>{content.thermal.uht_systems.direct.title}:</strong> {content.thermal.uht_systems.direct.description}</li>
            </ul>

             <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.thermal.nutritional_impact.title }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.nutritional_impact.p1 }} />
            
            <h4 className="font-bold text-gray-800 text-base mt-6" dangerouslySetInnerHTML={{ __html: content.thermal.subtitle7 }} />
            <p dangerouslySetInnerHTML={{ __html: content.thermal.p10 }} />
             <div className="overflow-x-auto">
                <Table>
                    <caption className="mt-4 text-sm text-center text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.thermal.table.caption }} />
                    <TableHeader>
                        <TableRow>
                            <TableHead>{content.thermal.table.headers.method}</TableHead>
                            <TableHead>{content.thermal.table.headers.time_temp}</TableHead>
                            <TableHead>{content.thermal.table.headers.target}</TableHead>
                            <TableHead>{content.thermal.table.headers.shelf_life}</TableHead>
                            <TableHead>{content.thermal.table.headers.impact}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {content.thermal.table.rows.map((row: any, index: number) => (
                            <TableRow key={index}>
                                <TableCell>{row.method}</TableCell>
                                <TableCell>{row.time_temp}</TableCell>
                                <TableCell>{row.target}</TableCell>
                                <TableCell>{row.shelf_life}</TableCell>
                                <TableCell>{row.impact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
    );
}

function PackagingContent({content}: {content: any}) {
    return (
        <div className="space-y-10">
        <Section title={content.packaging.title} icon={ShieldCheck} id="downstream">
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p1 }} />
            
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p2 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p4 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p5 }} />
            <ul>
                 {content.packaging.process_steps.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p6 }} />

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle4 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p7 }} />
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle5 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p8 }} />
            <ul>
                 {content.packaging.aseptic_system.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>
            <h5 className="font-semibold mt-4" dangerouslySetInnerHTML={{ __html: content.packaging.subtitle6 }} />
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p9 }} />
            <ul>
                 {content.packaging.materials.map((item: any, index: number) => (
                    <li key={index}><strong>{item.layer}:</strong> {item.purpose}</li>
                ))}
            </ul>
            <p dangerouslySetInnerHTML={{ __html: content.packaging.p10 }} />
        </Section>
        <Section title={content.quality_assurance.title} icon={CheckSquare} id="quality-assurance">
            <p dangerouslySetInnerHTML={{ __html: content.quality_assurance.p1 }} />
            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.quality_assurance.subtitle1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.quality_assurance.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.quality_assurance.p3 }} />
            <ul>
                 {content.quality_assurance.pillars.map((item: any, index: number) => (
                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                ))}
            </ul>

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.quality_assurance.subtitle2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.quality_assurance.p4 }} />
            <ul>
                <li><strong>{content.quality_assurance.framework.govt.title}:</strong> {content.quality_assurance.framework.govt.description}</li>
                <li><strong>{content.quality_assurance.framework.sops.title}:</strong> {content.quality_assurance.framework.sops.description}</li>
                <li><strong>{content.quality_assurance.framework.traceability.title}:</strong> {content.quality_assurance.framework.traceability.description}</li>
            </ul>

            <h4 className="font-bold text-gray-800 text-base" dangerouslySetInnerHTML={{ __html: content.quality_assurance.subtitle3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.quality_assurance.p5 }} />
            <ul>
                 <li><strong>{content.quality_assurance.automation.data_collection.title}:</strong> {content.quality_assurance.automation.data_collection.description}</li>
                 <li><strong>{content.quality_assurance.automation.notifications.title}:</strong> {content.quality_assurance.automation.notifications.description}</li>
                 <li><strong>{content.quality_assurance.automation.compliance.title}:</strong> {content.quality_assurance.automation.compliance.description}</li>
            </ul>
        </Section>
        <Section title={content.conclusion.title} icon={Zap} id="conclusion">
            <p dangerouslySetInnerHTML={{ __html: content.conclusion.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.conclusion.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: content.conclusion.p3 }} />
            <p dangerouslySetInnerHTML={{ __html: content.conclusion.p4 }} />
        </Section>
        </div>
    );
}

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const { t } = useLanguage();
  const content = t(dairyProcessingContent);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const processingTopics = [
    { value: "intro", title: content.tabs.intro, icon: BookOpen, component: <WorkflowContent content={content} /> },
    { value: "reception", title: content.tabs.reception, icon: Truck, component: <ReceptionContent content={content} /> },
    { value: "centrifugal", title: content.tabs.centrifugal, icon: RotateCw, component: <CentrifugalContent content={content} /> },
    { value: "thermal", title: content.tabs.thermal, icon: Thermometer, component: <ThermalPrinciplesContent content={content} /> },
    { value: "packaging", title: content.tabs.packaging, icon: ShieldCheck, component: <PackagingContent content={content} /> },
  ];
  
  const selectedTopic = processingTopics.find(t => t.value === activeTopic);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
            {content.main_title}
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : content.main_description}
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
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                {selectedTopic.component}
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
              {processingTopics.map(topic => (
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
