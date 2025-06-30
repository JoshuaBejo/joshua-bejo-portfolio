"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const certificates = [
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "16 May 2024",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://www.netacad.com/",
    skills: ["Networking Fundamentals", "Network Protocols", "Cisco IOS"],
  },
  {
    title: "EF SET Certificate - C1 Advanced",
    issuer: "EF Education First",
    date: "19 Apr 2023",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://www.efset.org/cert/fTbAza",
    skills: ["English Proficiency", "Reading C1", "Listening B2"],
  },
  {
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    date: "17 Jan 2024",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://www.netacad.com/",
    skills: ["Hardware Troubleshooting", "Operating Systems", "PC Assembly"],
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "17 Dec 2024",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://www.netacad.com/",
    skills: ["Network Switching", "Routing Protocols", "Wireless Networks"],
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "12 May 2024",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://www.netacad.com/",
    skills: ["Network Security", "Threat Analysis", "Security Protocols"],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Certificates & Achievements</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying current in technology. Here are some of the certifications and courses
            I've completed to enhance my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <Image
                      src={certificate.image || "/placeholder.svg"}
                      alt={`${certificate.title} Certificate`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {certificate.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {certificate.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">Issued by {certificate.issuer}</p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Full Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Always learning and growing! More certifications coming soon.</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Currently pursuing additional certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
