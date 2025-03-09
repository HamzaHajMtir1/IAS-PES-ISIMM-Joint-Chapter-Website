'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'


export default function Navbar() {

  return (
        <header className="sticky top-0 z-50 w-full border-b bg-green-100/95 backdrop-blur supports-[backdrop-filter]:bg-green-200/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 ml-8">
                <Image
                  src="/IASPESISIMMlogo.png"
                  alt="IEEE Logo"
                  width={150}
                  height={100}
                  className="rounded"
                />
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                  About
                </Link>
                <Link href="/activities" className="text-sm font-medium hover:underline underline-offset-4">
                  Activities
                </Link>
                <Link href="/resources" className="text-sm font-medium hover:underline underline-offset-4">
                  Articles
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                  Contact
                </Link>
              </nav>
              <Button variant="outline" size="sm" className="hidden md:flex bg-[#00943a] text-white">
                Join IEEE IAS/PES
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </header>
  )
}