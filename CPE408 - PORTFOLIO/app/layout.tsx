import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joshua Bejo - Computer Engineering Student",
  description:
    "Personal portfolio of Joshua Bejo, a 3rd year Computer Engineering student passionate about technology and innovation, building both hardware and software projects.",
  keywords: "computer engineering, student, developer, hardware, software, technology, innovation",
  authors: [{ name: "Joshua Bejo" }],
  creator: "Joshua Bejo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshuabejo.dev",
    title: "Joshua Bejo - Computer Engineering Student",
    description: "Personal portfolio showcasing my projects and journey in computer engineering.",
    siteName: "Joshua Bejo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Bejo - Computer Engineering Student",
    description: "Personal portfolio showcasing my projects and journey in computer engineering.",
    creator: "@joshuabejo",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
