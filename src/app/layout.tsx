import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LoadingProvider } from '@/context/LoadingContext'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IEEE IAS/PES ISIMM Joint Chapter',
  description: 'Official website of the IEEE IAS/PES ISIMM Joint Chapter',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <main>
            {children}
          </main>
        </LoadingProvider>
        <Analytics/>
      </body>
    </html>
  )
}

