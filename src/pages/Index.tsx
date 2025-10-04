import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Calendar,
  Award,
  Code,
} from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hampus Svensson",
    jobTitle: "Industrial Engineering & Management",
    email: "mailto:hampus.svensson@outlook.com",
    telephone: "+46706188848",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      postalCode: "114 15",
      addressCountry: "SE",
    },
    sameAs: ["https://linkedin.com/in/hampus-svensson-a154681a4"],
  };

  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* ABOUT */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">About</h2>
            </Reveal>
            <Reveal>
              <p className="text-muted-foreground max-w-3xl mb-8">
                I'm an engineering professional focused on quality, analytics,
                and thoughtful systems design. I enjoy turning complex problems
                into clear, robust solutions and collaborating across
                disciplines.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="text-accent" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                      <Mail className="text-accent" />
                      <a
                        href="mailto:hampus.svensson@outlook.com"
                        className="story-link"
                      >
                        hampus.svensson@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                      <Phone className="text-accent" />
                      <a href="tel:+46706188848" className="story-link">
                        +46 70 618 8848
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                      <Linkedin className="text-accent" />
                      <a
                        href="https://linkedin.com/in/hampus-svensson-a154681a4"
                        target="_blank"
                        rel="noreferrer"
                        className="story-link"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal>
                <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="text-accent" />
                      Quick Facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <Badge variant="secondary">Stockholm, Sweden</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Languages</span>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs">
                          Swedish (C2)
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          English (C2)
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          French (B1)
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Driver's License
                      </span>
                      <Badge variant="secondary">Yes (2020)</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>
        {/* EXPERIENCE */}
        <section id="experience" className="py-16 md:py-24 border-t">
          {" "}
          <div className="container mx-auto px-6">
            {" "}
            <Reveal>
              {" "}
              <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                Experience
              </h2>{" "}
            </Reveal>{" "}
            <Reveal>
              {" "}
              <Accordion type="single" collapsible className="w-full space-y-4">
                {" "}
                <AccordionItem
                  value="vattenfall"
                  className="border border-border rounded-lg px-6 hover:shadow-elegant transition-all duration-300"
                >
                  {" "}
                  <AccordionTrigger className="hover:no-underline">
                    {" "}
                    <div className="flex items-center justify-between w-full mr-4">
                      {" "}
                      <div className="text-left">
                        {" "}
                        <h3 className="font-medium">
                          Master's Thesis — Vattenfall, Stockholm
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground">2025</p>{" "}
                      </div>{" "}
                      <Badge variant="outline">Thesis</Badge>{" "}
                    </div>{" "}
                  </AccordionTrigger>{" "}
                  <AccordionContent className="pt-4">
                    {" "}
                    <div className="space-y-3">
                      {" "}
                      <p className="text-muted-foreground">
                        Conducted a comprehensive techno-economic analysis on
                        nuclear district heating, evaluating feasibility and
                        economic impact.
                      </p>{" "}
                      <div className="flex flex-wrap gap-2">
                        {" "}
                        <Badge variant="outline" className="text-xs">
                          Economic Analysis
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Nuclear Energy
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          District Heating
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Research
                        </Badge>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionContent>{" "}
                </AccordionItem>{" "}
                <AccordionItem
                  value="saab"
                  className="border border-border rounded-lg px-6 hover:shadow-elegant transition-all duration-300"
                >
                  {" "}
                  <AccordionTrigger className="hover:no-underline">
                    {" "}
                    <div className="flex items-center justify-between w-full mr-4">
                      {" "}
                      <div className="text-left">
                        {" "}
                        <h3 className="font-medium">
                          Quality Assurance Technician — SAAB, Järfälla
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground">
                          2024 – 2025
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionTrigger>{" "}
                  <AccordionContent className="pt-4">
                    {" "}
                    <div className="space-y-3">
                      {" "}
                      <p className="text-muted-foreground">
                        Performing quality controls and collaborating with
                        engineering teams to identify and resolve manufacturing
                        defects, contributing to process improvements.
                      </p>{" "}
                      <div className="flex flex-wrap gap-2">
                        {" "}
                        <Badge variant="outline" className="text-xs">
                          Quality Control
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Process Improvement
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Team Collaboration
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Manufacturing
                        </Badge>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionContent>{" "}
                </AccordionItem>{" "}
                <AccordionItem
                  value="dahlgren"
                  className="border border-border rounded-lg px-6 hover:shadow-elegant transition-all duration-300"
                >
                  {" "}
                  <AccordionTrigger className="hover:no-underline">
                    {" "}
                    <div className="flex items-center justify-between w-full mr-4">
                      {" "}
                      <div className="text-left">
                        {" "}
                        <h3 className="font-medium">
                          Administrator — Bengt Dahlgren, Stockholm
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground">
                          2022 – 2023
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionTrigger>{" "}
                  <AccordionContent className="pt-4">
                    {" "}
                    <div className="space-y-3">
                      {" "}
                      <p className="text-muted-foreground">
                        Supported a newly created R&D unit, developed internal
                        data libraries, and standardized document templates to
                        improve efficiency.
                      </p>{" "}
                      <div className="flex flex-wrap gap-2">
                        {" "}
                        <Badge variant="outline" className="text-xs">
                          R&D Support
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Data Management
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Documentation
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Process Standardization
                        </Badge>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionContent>{" "}
                </AccordionItem>{" "}
                <AccordionItem
                  value="pelles"
                  className="border border-border rounded-lg px-6 hover:shadow-elegant transition-all duration-300"
                >
                  {" "}
                  <AccordionTrigger className="hover:no-underline">
                    {" "}
                    <div className="text-left">
                      {" "}
                      <h3 className="font-medium">
                        Shop Assistant — Pelles Sjöbod, Karlskrona
                      </h3>{" "}
                      <p className="text-sm text-muted-foreground">
                        2016 – 2020
                      </p>{" "}
                    </div>{" "}
                  </AccordionTrigger>{" "}
                  <AccordionContent className="pt-4">
                    {" "}
                    <div className="space-y-3">
                      {" "}
                      <p className="text-muted-foreground">
                        Provided excellent customer service and operations
                        support in a retail environment.
                      </p>{" "}
                      <div className="flex flex-wrap gap-2">
                        {" "}
                        <Badge variant="outline" className="text-xs">
                          Customer Service
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Operations
                        </Badge>{" "}
                        <Badge variant="outline" className="text-xs">
                          Retail
                        </Badge>{" "}
                      </div>{" "}
                    </div>{" "}
                  </AccordionContent>{" "}
                </AccordionItem>{" "}
              </Accordion>{" "}
            </Reveal>{" "}
          </div>{" "}
        </section>
        {/* SKILLS */}
        <Skills />
        {/* EDUCATION */}
        <section id="education" className="py-16 md:py-24 border-t">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Education
              </h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-[1fr_auto] gap-2">
                <div>
                  <h3 className="font-medium">
                    Master of Science, Industrial Engineering and Management —
                    KTH Royal Institute of Technology, Stockholm
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Minor in Energy Systems and Sustainable Development</li>
                    <li>Exchange semester at INSA Lyon (2023)</li>
                  </ul>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  2020 – 2025
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        {/* <-- qui includi il componente Skills */}
        {/* PROJECTS */}
        <section id="projects" className="py-16 md:py-24 border-t">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                Selected Projects
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <ProjectCard
                  title="Technoeconomical analysis of Nuclear district heating"
                  description="A case study of connecting the Forsmark Nuclear Power Plant to Stockholm and Uppsala District heating networks using a moddeling framework to evaluate district heating scenarios with sensitivity analyses and visual reporting."
                  tags={["Python", "Energy Systems", "Modeling"]}
                />
              </Reveal>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24 border-t">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let's work together
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                I'm open to roles in engineering, quality, and analytics. Reach
                out and I'll reply shortly.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="mailto:hampus.svensson@outlook.com">
                  <Button size="lg" variant="hero" className="hover-scale">
                    <Mail className="mr-2" size={20} />
                    Email me
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/hampus-svensson-a154681a4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="outline" className="hover-scale">
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="py-10 border-t">
          <div className="container mx-auto px-6 text-sm text-muted-foreground flex items-center justify-between">
            <span>© {new Date().getFullYear()} Hampus Svensson</span>
            <a href="#top" className="story-link">
              Back to top
            </a>
          </div>
        </footer>
      </main>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;
