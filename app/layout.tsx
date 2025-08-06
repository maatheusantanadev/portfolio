import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Matheus Santana | Portfolio",
  description: "Portfolio website for Matheus Santana, a programmer from Brazil",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}



import './globals.css'