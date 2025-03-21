'use client'

import { useState } from 'react'
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { ActivitiesTabs } from './ActivitiesTabs';


export interface Activities {
  id: string; // Add a unique ID field
  name: string;
  subject: string;
  imageUrl: string;
  desc: string;
  date: string;
  location: string;
  link: string;
}

export function ActivitiesListComponent() {
  const [searchTerm, setSearchTerm] = useState("")

  const activities: Activities[] = [
    {
      id: "1", // Add unique IDs to each activity
      name: "PES",
      subject: "PES Day Celebration 2024",
      imageUrl: "/eveents/pesday2024.webp",
      desc: "Our Joint Chapter has celebrated, in collaboration wwith other PES SBCs in Tunisia, organizing the Tunisia Greenwheels Forum.",
      date: "April 22-24, 2024",
      location: "Virtual",
      link: "https://www.facebook.com/profile.php?id=61558418187428",
    },
    {
      id: "2",
      name: "IAS",
      subject: "2024 IAS Annual Meeting",
      imageUrl: "/eveents/IASAM2024.webp",
      desc: "The IEEE IAS PES ISIMM SBJC chair's active participation in the prestigious IAS Annual Meeting and ECCE highlights the chapter's dedication to excellence.",
      date: "October 20-25, 2024",
      location: "Phoenix, Arizona",
      link: "https://ias-am.ieee.org/2025/",
    },
    {
      id: "3",
      name: "IAS",
      subject: "IAC Info Session",
      imageUrl: "/eveents/IACInfoSession.webp",
      desc: "An info session conducted by our ambassador for the IEEE IAS 60th Anniversary Conference organized by the IEEE IAS ISI SBC.",
      date: "March 13, 2025",
      location: "Virtual",
      link: "https://www.facebook.com/share/p/1BLFEzsVdt/",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ActivitiesTabs activities={activities} searchTerm={searchTerm} />
      </main>
    </div>
  )
}