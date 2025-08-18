// pages/Thesis.tsx
"use client";

import React from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Thesis = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <p className="mb-3 text-sm text-gray-500 md:text-base">
              Master's Thesis — Industrial Engineering & Management
            </p>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Techno-Economic Analysis of Nuclear District Heating
            </h1>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 md:text-xl">
              Comprehensive evaluation of feasibility, cost, and environmental
              impact of nuclear district heating systems.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#content">
                <Button
                  size="lg"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  Read Thesis
                  <ArrowUpRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  Back Home
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-16 md:py-24 border-t">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Abstract
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-8">
              This thesis presents a techno-economic study of nuclear district
              heating in Sweden. We evaluate the feasibility, costs, and
              environmental impact of different nuclear heating scenarios and
              provide recommendations for implementation.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Methodology
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle>Data Analysis & Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  Developed simulation models to estimate energy output, costs,
                  and efficiency across multiple scenarios.
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle>Economic Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  Applied cost-benefit analysis and sensitivity analysis to
                  assess economic feasibility of nuclear district heating.
                </CardContent>
              </Card>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Key Findings
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                Nuclear district heating can reduce CO₂ emissions significantly
                compared to conventional systems.
              </li>
              <li>
                Initial investment is high, but long-term operation is
                economically favorable.
              </li>
              <li>
                Policy incentives and technological improvements enhance
                feasibility.
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <a href="/files/Thesis.pdf" target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  Download PDF
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Thesis;
