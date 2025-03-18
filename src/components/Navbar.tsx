'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-100/95 backdrop-blur supports-[backdrop-filter]:bg-green-200/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/IASPESISIMMlogo.png"
              alt="IEEE Logo"
              width={150}
              height={100}
              className="rounded w-auto h-auto max-h-12 sm:max-h-14"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === '/' 
                ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                : 'hover:underline underline-offset-4'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === '/about' 
                ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                : 'hover:underline underline-offset-4'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/activities" 
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === '/activities' 
                ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                : 'hover:underline underline-offset-4'
            }`}
          >
            Activities
          </Link>
          <Link 
            href="/resources" 
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === '/resources' 
                 ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                : 'hover:underline underline-offset-4'
            }`}
          >
            Ressouces
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
              pathname === '/contact' 
                ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                : 'hover:underline underline-offset-4'
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <Button variant="outline" size="sm" className="hidden md:flex bg-[#00943a] text-white">
          Join IEEE IAS/PES
        </Button>
        
        {/* Mobile Menu Button */}
        <Button variant="outline" size="icon" className="md:hidden bg-white" onClick={toggleMenu}>
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 !bg-green-100/95 md:hidden">
          <div className="container h-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16 border-b">
              <div className="flex items-center gap-2">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src="/IASPESISIMMlogo.png"
                    alt="IEEE Logo"
                    width={150}
                    height={100}
                    className="rounded w-auto h-auto max-h-12"
                  />
                </Link>
              </div>
              <Button variant="outline" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center gap-8 flex-1 pb-16 bg-green-100/95">
              <Link 
                href="/" 
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors w-full text-center ${
                  pathname === '/' 
                    ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                    : 'hover:bg-green-200/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors w-full text-center ${
                  pathname === '/about' 
                    ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                    : 'hover:bg-green-200/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/activities" 
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors w-full text-center ${
                  pathname === '/activities' 
                    ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                    : 'hover:bg-green-200/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </Link>
              <Link 
                href="/resources" 
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors w-full text-center ${
                  pathname === '/resources' 
                    ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                    : 'hover:bg-green-200/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link 
                href="/contact" 
                className={`text-lg font-medium px-4 py-2 rounded-md transition-colors w-full text-center ${
                  pathname === '/contact' 
                    ? 'bg-green-600/50 backdrop-blur-sm text-black font-bold' 
                    : 'hover:bg-green-200/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-[#00943a] text-white mt-4 w-full max-w-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                Join IEEE IAS/PES
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}