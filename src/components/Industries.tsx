"use client"

import type React from "react"

import Link from "next/link"
import { Building2, Zap, Landmark, Stethoscope } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface IndustryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
}

const IndustryCard = ({ title, description, icon, href, className }: IndustryCardProps) => {
  return (
    <Card
      className={cn("border rounded-lg transition-all duration-300 hover:shadow-md h-full flex flex-col", className)}
    >
      <CardHeader className="flex items-center justify-center pt-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white">{icon}</div>
      </CardHeader>
      <CardContent className="text-center px-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex justify-center pb-6">
        <Link href={href} passHref>
          <Button variant="link" className="text-black font-medium group">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default function IndustriesSection() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setColumns(1)
      } else if (width < 1024) {
        setColumns(2)
      } else {
        setColumns(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const industries = [
    {
      title: "Commercial Real Estate",
      description:
        "Transforming property management and investment strategies through AI-powered analytics and automation solutions.",
      icon: (
        <div className="bg-[#D4B742] w-16 h-16 rounded-full flex items-center justify-center">
          <Building2 className="h-8 w-8" />
        </div>
      ),
      href: "/blog/generative-ai-in-commercial-real-estate-the-strategic-implementation-playbook",
    },
    {
      title: "Utilities",
      description:
        "Revolutionizing critical infrastructure operations with AI-driven predictive maintenance and resource optimization.",
      icon: (
        <div className="bg-[#8EBDC5] w-16 h-16 rounded-full flex items-center justify-center">
          <Zap className="h-8 w-8" />
        </div>
      ),
      href: "/blog/transforming-critical-infrastructure-how-generative-ai-is-revolutionizing-utility-operations-2",
    },
    {
      title: "Banking & Credit Unions",
      description:
        "Enhancing financial services through AI-powered risk assessment, customer service, and operational efficiency.",
      icon: (
        <div className="bg-[#D4B742] w-16 h-16 rounded-full flex items-center justify-center">
          <Landmark className="h-8 w-8" />
        </div>
      ),
      href: "/blog/generative-ai-in-banking-credit-unions-a-strategic-case-study-of-implementation-excellence",
    },
    {
      title: "Medical Practices",
      description:
        "Improving patient care and operational workflows with AI solutions tailored for healthcare providers.",
      icon: (
        <div className="bg-[#8EBDC5] w-16 h-16 rounded-full flex items-center justify-center">
          <Stethoscope className="h-8 w-8" />
        </div>
      ),
      href: "/blog/generative-ai-in-medical-practices-a-strategic-case-study-on-technology-adoption-and-transformation",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Industries </span>
          <span className="text-[#D4B742]">We </span>
          <span className="text-[#8EBDC5]">Serve</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Comprehensive AI solutions tailored to transform operations and drive innovation across diverse sectors
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            title={industry.title}
            description={industry.description}
            icon={industry.icon}
            href={industry.href}
          />
        ))}
      </div>
    </section>
  )
}
