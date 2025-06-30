"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Cookbook",
    description:
      "A comprehensive digital cookbook application with recipe management, user authentication, and responsive design. Built with modern web technologies for an intuitive cooking experience.",
    image: "/images/cookbook-project.jpg",
    technologies: ["React", "Node.js", "Tailwind", "JavaScript", "Django"],
    github: "https://github.com/Meowers22/ninang-rhobby-cookbook-final.git",
    demo: "https://github.com/Meowers22/ninang-rhobby-cookbook-final.git",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's my recent project that showcases my skills and passion for development.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={projects[0].image || "/placeholder.svg"}
                      alt={projects[0].title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{projects[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={projects[0].github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={projects[0].demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
