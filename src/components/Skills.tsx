import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Reveal from "./Reveal";
import {
  Cpu,
  BarChart2,
  GitBranch,
  FileText,
  Database,
  Box,
  Code,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-t">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Skills & Expertise
          </h2>
        </Reveal>

        <Reveal>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            {/* Technical Skills */}
            <TabsContent value="technical" className="space-y-6">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {[
                  { name: "Python Programming", icon: Cpu },
                  { name: "Data Analysis", icon: BarChart2 },
                  { name: "Matlab", icon: Code },
                  { name: "Process Improvement", icon: GitBranch },
                  { name: "Quality Control", icon: FileText },
                  { name: "Statistical Analysis", icon: Database },
                ].map(({ name, icon: Icon }) => (
                  <motion.div key={name} variants={child}>
                    <Card className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                      <Icon className="text-accent" size={20} />
                      <span className="font-medium">{name}</span>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Soft Skills */}
            <TabsContent value="soft" className="space-y-6">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {[
                  { name: "Problem Solving", icon: BarChart2 },
                  { name: "Team Collaboration", icon: GitBranch },
                  { name: "Critical Thinking", icon: Cpu },
                  { name: "Communication", icon: FileText },
                  { name: "Project Management", icon: Box },
                  { name: "Attention to Detail", icon: Code },
                ].map(({ name, icon: Icon }) => (
                  <motion.div key={name} variants={child}>
                    <Card className="p-4 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                      <Icon className="text-accent" size={20} />
                      <span className="font-medium">{name}</span>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Tools */}
            <TabsContent value="tools" className="space-y-6">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-3"
              >
                {[
                  { name: "Excel Advanced", icon: BarChart },
                  { name: "PowerBI", icon: BarChart2 },
                  { name: "Git", icon: GitBranch },
                  { name: "AutoCAD", icon: Box },
                  { name: "Statistical Software", icon: Database },
                  { name: "Jupyter Notebooks", icon: Code },
                  { name: "LaTeX", icon: Cpu },
                ].map(({ name, icon: Icon }) => (
                  <motion.div key={name} variants={child}>
                    <Badge
                      variant="secondary"
                      className="stagger-child px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default flex items-center gap-2"
                    >
                      <Icon className="text-accent" size={16} />
                      {name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
