
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLanguage } from "@/context/language-context";
import { dairyIndustryContent } from "@/lib/content/dairy-industry-content";
import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Users, TrendingUp, Ship, CheckCircle, BarChart4 } from "lucide-react";

const SectionTitle = ({ title, id }: { title: string, id: string }) => (
    <h2 id={id} className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">
        {title}
    </h2>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);

// Content Components for each topic
const IntroContent = ({ content }: { content: any }) => (
    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
        <p dangerouslySetInnerHTML={{ __html: content.intro1 }} />
        <p dangerouslySetInnerHTML={{ __html: content.intro2 }} />
    </div>
);

const OverviewContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.overview.title} id="overview" />
        <SubSection title={content.overview.market_size.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.market_size.text }} />
        </SubSection>
        <SubSection title={content.overview.contribution.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.contribution.text }} />
        </SubSection>
            <SubSection title={content.overview.production_trends.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text2 }} />
        </SubSection>
        <SubSection title={content.overview.drivers_challenges.title}>
            <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.drivers }} />
            <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.challenges }} />
            <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.opportunities }} />
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{content.overview.drivers_challenges.table.header1}</TableHead>
                            <TableHead>{content.overview.drivers_challenges.table.header2}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>{content.overview.drivers_challenges.table.row1_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row1_col2}</TableCell></TableRow>
                        <TableRow><TableCell>{content.overview.drivers_challenges.table.row2_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row2_col2}</TableCell></TableRow>
                        <TableRow><TableCell>{content.overview.drivers_challenges.table.row3_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row3_col2}</TableCell></TableRow>
                        <TableRow><TableCell>{content.overview.drivers_challenges.table.row4_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row4_col2}</TableCell></TableRow>
                        <TableRow><TableCell>{content.overview.drivers_challenges.table.row5_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row5_col2}</TableCell></TableRow>
                    </TableBody>
                </Table>
            </div>
        </SubSection>
    </>
);

const CooperativesContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.cooperatives.title} id="cooperatives" />
            <SubSection title={content.cooperatives.operation_flood.title}>
            <p dangerouslySetInnerHTML={{ __html: content.cooperatives.operation_flood.text }} />
                <h5 className="font-bold mt-2">{content.cooperatives.operation_flood.objectives_title}</h5>
                <ul className="list-disc pl-5">
                {content.cooperatives.operation_flood.objectives.map((obj: string, i: number) => <li key={i}>{obj}</li>)}
                </ul>
                <h5 className="font-bold mt-2">{content.cooperatives.operation_flood.phases_title}</h5>
                <ul className="list-disc pl-5">
                    {content.cooperatives.operation_flood.phases.map((phase: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: phase }} />)}
                </ul>
        </SubSection>
        <SubSection title={content.cooperatives.anand_pattern.title}>
            <p>{content.cooperatives.anand_pattern.intro}</p>
            <ul className="list-disc pl-5">
                {content.cooperatives.anand_pattern.tiers.map((tier: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: tier }} />)}
            </ul>
        </SubSection>
            <SubSection title={content.cooperatives.empowerment.title}>
            <p dangerouslySetInnerHTML={{ __html: content.cooperatives.empowerment.text }} />
        </SubSection>
    </>
);

const TrendsContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.trends.title} id="trends" />
            <SubSection title={content.trends.modernization.title}>
            <p dangerouslySetInnerHTML={{ __html: content.trends.modernization.text }} />
        </SubSection>
        <SubSection title={content.trends.startups.title}>
                <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text1 }} />
                <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text2 }} />
        </SubSection>
    </>
);

const ExportsContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.exports.title} id="exports" />
        <SubSection title={content.exports.status.title}>
            <p dangerouslySetInnerHTML={{ __html: content.exports.status.text1 }} />
            <p dangerouslySetInnerHTML={{ __html: content.exports.status.text2 }} />
        </SubSection>
    </>
);

const ConclusionContent = ({ content }: { content: any }) => (
    <>
        <SectionTitle title={content.conclusion.title} id="conclusion" />
        <p dangerouslySetInnerHTML={{ __html: content.conclusion.text }} />
    </>
);


const topicComponents = {
    intro: IntroContent,
    overview: OverviewContent,
    cooperatives: CooperativesContent,
    trends: TrendsContent,
    exports: ExportsContent,
    conclusion: ConclusionContent
};


export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const { t } = useLanguage();
  const content = t(dairyIndustryContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };
  
  if (!content) return null;

  const topics = [
    { value: "intro", title: "Introduction", icon: BookOpen },
    { value: "overview", title: content.overview.title, icon: BarChart4 },
    { value: "cooperatives", title: content.cooperatives.title, icon: Users },
    { value: "trends", title: content.trends.title, icon: TrendingUp },
    { value: "exports", title: content.exports.title, icon: Ship },
    { value: "conclusion", title: content.conclusion.title, icon: CheckCircle },
  ];

  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-5xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">{content.main_title}</DialogTitle>
          <DialogDescription className="text-center">
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
                    <div className="p-4 pt-0 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
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
  )
}
