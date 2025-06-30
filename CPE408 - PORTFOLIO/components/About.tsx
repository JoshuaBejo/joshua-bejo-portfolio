"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    icon: Code,
    title: "Software Development",
    description: "Python, C++, JavaScript, React, Embedded Programming",
  },
  {
    icon: Zap,
    title: "Hardware Design",
    description: "Circuit Design, PCB Layout, Microcontrollers, FPGA",
  },
  {
    icon: Palette,
    title: "System Integration",
    description: "IoT Systems, Robotics, Digital Signal Processing",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated Computer Engineering student with a passion for both hardware and software development.
            Currently in my 3rd year, I'm constantly exploring new technologies and building projects that bridge the
            gap between digital and physical worlds.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              As a Computer Engineering student, I've discovered my passion for creating innovative solutions that
              combine hardware and software. Built a sleek, responsive login form with smooth animations, password
              toggle, and clean UI. Focused on both functionality and modern aesthetics for a better user experience.
            </p>
            <p className="text-muted-foreground">
              When I'm not studying or working on projects, you'll find me playing chess online, playing minesweeper,
              sudoku, or other games that sharpens your mind.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
