'use client'

import { useState } from 'react'
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { ActivitiesTabs } from './ActivitiesTabs';


export interface Activities {
  name: string;
  subject: string;
  date: string;
  imageUrl: string;
}

export function ActivitiesListComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const activities: Activities[] = [
    {
      name: "Dr. Emily Chen",
      subject: "Oncology", 
      date: "Breast Cancer",
      imageUrl: "/test.png"
    },
    {
      name: "Dr. Michael Johnson",
      subject: "Oncology",
      date: "Lung Cancer",
      imageUrl: "/test.png"
    },
    {
      name: "Dr. Sarah Thompson",
      subject: "Psychology",
      date: "Cancer Patient Support",
      imageUrl: "/test.png"
    },
    {
      name: "Dr. David Lee",
      subject: "Oncology",
      date: "Pediatric Oncology",
      imageUrl: "/test.png"
    },
    {
      name: "Dr. Rachel Green",
      subject: "Psychology",
      date: "Grief Counseling",
      imageUrl: "/test.png"
    },
    {
      name: "Dr. Alex Martinez",
      subject: "Oncology",
      date: "Hematologic Oncology",
      imageUrl: "/test.png"
    }
  ]

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ActivitiesTabs activities={activities} searchTerm={searchTerm} />
      </main>
    </div>
  )
}