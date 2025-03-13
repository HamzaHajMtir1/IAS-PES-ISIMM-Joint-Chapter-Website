'use client'

import { useState } from 'react'
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { ActivitiesTabs } from './ActivitiesTabs';


export interface Activities {
  id: string; // Add a unique ID field
  name: string;
  subject: string;
  date: string;
  imageUrl: string;
}

export function ActivitiesListComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const activities: Activities[] = [
    {
      id: "1", // Add unique IDs to each activity
      name: "Dr. Emily Chen",
      subject: "Web", 
      date: "Breast Cancer",
      imageUrl: "/test.png"
    },
    {
      id: "2",
      name: "Dr. Michael Johnson",
      subject: "Web",
      date: "Lung Cancer",
      imageUrl: "/test.png"
    },
    {
      id: "3",
      name: "Dr. Sarah Thompson",
      subject: "Web",
      date: "Cancer Patient Support",
      imageUrl: "/test.png"
    },
    {
      id: "4",
      name: "Dr. Alex Martinez",
      subject: "Web",
      date: "Hematologic Oncology",
      imageUrl: "/test.png"
    },
    {
      id: "5",
      name: "Dr. David Lee",
      subject: "Cloud",
      date: "Pediatric Oncology",
      imageUrl: "/test.png"
    },
    {
      id: "6",
      name: "Dr. Rachel Green",
      subject: "Cloud",
      date: "Grief Counseling",
      imageUrl: "/test.png"
    },
    {
      id: "7",
      name: "Dr. Alex Martinez",
      subject: "Blockchain",
      date: "Hematologic Oncology",
      imageUrl: "/test.png"
    }
  ]

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ActivitiesTabs activities={activities} searchTerm={searchTerm} />
      </main>
    </div>
  )
}