import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  BookOpen,
  Cloud,
  ChevronRight,
  Star,
  Users,
  LineChart,
  Zap,
  Calendar,
} from "lucide-react"
import BlogSection from "@/components/BlogSection"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CaseStudies } from "@/components/CaseStudies"
import { getRecentPosts, Post } from "@/lib/ghost"

export const revalidate = 3600 // Revalidate every hour

async function getGhostPosts(): Promise<Post[]> {
  return await getRecentPosts(3);
}

export default async function Home() {
  const posts = await getGhostPosts();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="full-width-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter">
                    <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">Transform Your Business</span> with Our <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">AI Consulting</span> and Integration Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Where expertise meets innovation to deliver impactful strategies for AI adoption.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-black/90 transition-all duration-200 hover:translate-x-1">
                    Explore Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse-slow">
                      <svg
                        width="400"
                        height="400"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-80"
                      >
                        <path
                          d="M200 0L230 60L270 20L280 90L330 70L320 140L380 140L340 200L380 260L320 260L330 330L280 310L270 380L230 340L200 400L170 340L130 380L120 310L70 330L80 260L20 260L60 200L20 140L80 140L70 70L120 90L130 20L170 60L200 0Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="20"
                            y1="40"
                            x2="380"
                            y2="360"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F4D03F" />
                            <stop offset="1" stopColor="#85C1E9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  Our Services
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive solutions to transform your organization&apos;s learning and development
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="rounded-lg border p-6 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">Artificial Intelligence Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Leverage the power of artificial intelligence to transform your business operations and
                    decision-making processes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary flex items-center">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="rounded-lg border p-6 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">Workforce Development & Corporate Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create effective learning strategies that empower your team and drive organizational growth.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary flex items-center">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="rounded-lg border p-6 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">Enterprise AI Product Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scalable, customizable learning management systems built on Moodle to deliver your educational
                    content.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-sm font-medium text-primary flex items-center">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="full-width-gradient"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Learning Strategy?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch to discover how we can help your organization thrive.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button className="border-2 border-transparent relative before:absolute before:inset-0 before:rounded-[inherit] before:p-[3px] before:bg-gradient-to-r before:from-yellow-400 before:to-blue-400 before:-z-10 after:absolute after:inset-[3px] after:rounded-[inherit] after:bg-white after:-z-10 text-black hover:before:from-yellow-500 hover:before:to-blue-500">
                Schedule a Consultation
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn more about our services</Button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudies />

        {/* About Section */}
        <section
          id="about"
          className="full-width-gradient"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                    About Beehive Advisors
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Beehive Advisors combines expertise in artificial intelligence and learning development to create
                    innovative solutions for modern businesses. We help organizations transform their approach to
                    knowledge management and skill development.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Zap className="h-4 w-4" />
                    </div>
                    <p className="font-medium">AI-First Approach</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Users className="h-4 w-4" />
                    </div>
                    <p className="font-medium">Human-Centered Design</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <LineChart className="h-4 w-4" />
                    </div>
                    <p className="font-medium">Evidence-Based Methods</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Star className="h-4 w-4" />
                    </div>
                    <p className="font-medium">Continuous Innovation</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image
                    src="/Utah.svg"
                    alt="Utah - Home of Beehive Advisors"
                    fill
                    className="p-4 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </div>
  )
}