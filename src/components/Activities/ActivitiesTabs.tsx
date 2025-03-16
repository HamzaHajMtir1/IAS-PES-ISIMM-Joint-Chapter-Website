'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivitiesGrid } from "./ActivitiesGrid";
import { Activities } from "./ActivitiesListComponent";

interface ActivitiesTabsProps {
  activities: Activities [];
  searchTerm: string;
}

export function ActivitiesTabs({ activities, searchTerm }: ActivitiesTabsProps) {
  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-6 border-green-700">
        <TabsTrigger value="all" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">All</TabsTrigger>
        <TabsTrigger value="Web" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Web</TabsTrigger>
        <TabsTrigger value="Mobile" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Mobile</TabsTrigger>
        <TabsTrigger value="Cloud" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Cloud</TabsTrigger>
        <TabsTrigger value="Blockchain" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">Blockchain</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <ActivitiesGrid activities={filteredActivities} />
      </TabsContent>
      <TabsContent value="Web">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Web")} />
      </TabsContent>
      <TabsContent value="Mobile">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Mobile")} />
      </TabsContent>
      <TabsContent value="Cloud">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Cloud")} />
      </TabsContent>
      <TabsContent value="Blockchain">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.subject === "Blockchain")} />
      </TabsContent>
    </Tabs>
  )
}
