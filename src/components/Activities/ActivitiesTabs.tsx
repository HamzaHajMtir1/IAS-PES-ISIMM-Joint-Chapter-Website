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
      <TabsList className="grid w-full grid-cols-3 mb-6 border-green-700">
        <TabsTrigger value="all" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">All</TabsTrigger>
        <TabsTrigger value="PES" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">PES</TabsTrigger>
        <TabsTrigger value="IAS" className="data-[state=active]:bg-green-300 data-[state=active]:text-green-800 text-black">IAS</TabsTrigger>
        </TabsList>
      <TabsContent value="all">
        <ActivitiesGrid activities={filteredActivities} />
      </TabsContent>
      <TabsContent value="PES">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.name === "PES")} />
      </TabsContent>
      <TabsContent value="IAS">
        <ActivitiesGrid activities={filteredActivities.filter(d => d.name === "IAS")} />
      </TabsContent>
    </Tabs>
  )
}
