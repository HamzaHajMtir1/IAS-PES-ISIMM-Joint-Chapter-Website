import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IEEE IAS/PES Joint Chapter",
  description: "Official website of the IEEE Industry Applications Society and Power & Energy Society Joint Chapter",
}

// Add the LoadingProvider to your layout
import { LoadingProvider } from "@/context/LoadingContext";
import { RouteChangeListener } from "@/components/RouteChangeListener";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <RouteChangeListener />
          {/* Your existing layout components */}
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}

