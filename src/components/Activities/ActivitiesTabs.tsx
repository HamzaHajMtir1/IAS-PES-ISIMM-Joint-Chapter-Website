"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivitiesGrid } from "./ActivitiesGrid";
import { Activities } from "./ActivitiesListComponent";


interface ActivitiesTabsProps {
  activities: Activities [];
  searchTerm: string;
}

export function ActivitiesTabs({ activities, searchTerm }: ActivitiesTabsProps) {
  const filteredActivities = activities.filter(activities =>
    activities.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activities.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6 border-green-700">
        <TabsTrigger value="all" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">All</TabsTrigger>
        <TabsTrigger value="oncology" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Oncology</TabsTrigger>
        <TabsTrigger value="psychology" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Psychology</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <ActivitiesGrid activities={filteredActivities} />
      </TabsContent>
      <TabsContent value="oncology">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Oncology")} />
      </TabsContent>
      <TabsContent value="psychology">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Psychology")} />
      </TabsContent>
    </Tabs>
  )
}