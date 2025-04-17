import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  BookOpen,
  Cloud,
  ChevronRight,
  Star,
  Users,
  LineChart,
  Zap,
  ArrowRight,
  Quote,
  Calendar,
} from "lucide-react"
import BlogSection from "@/components/BlogSection"
import { getRecentPosts, Post } from "@/lib/ghost"

export const revalidate = 3600 // Revalidate every hour

async function getGhostPosts(): Promise<Post[]> {
  return await getRecentPosts(3);
}

export default async function Home() {
  const posts = await getGhostPosts();
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5 11s.5-2 2.5-2 2.5 2 2.5 2" />
                <path d="M9 11s.5-2 2.5-2 2.5 2 2.5 2" />
                <path d="M13 11s.5-2 2.5-2 2.5 2 2.5 2" />
                <path d="M11 13.5V17" />
                <path d="M8 13.5V17" />
                <path d="M14 13.5V17" />
                <path d="M11 5.5V9" />
                <path d="M8 5.5V9" />
                <path d="M14 5.5V9" />
                <path d="M6 9h12" />
                <path d="M6 13h12" />
              </svg>
            </div>
            <span className="text-xl font-bold">Beehive Advisors</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-primary">
              Case Studies
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-gradient-to-r from-yellow-400 to-blue-400 text-white hover:from-yellow-500 hover:to-blue-500">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
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
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-yellow-400/10 via-yellow-300/10 to-blue-400/10 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tighter bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                    Transform Your Business with AI-Powered Learning Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Where expertise meets innovation to deliver impactful learning and development strategies
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 text-white hover:from-yellow-500 hover:to-blue-500">
                    Explore Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
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

        {/* Blog Section */}
        <BlogSection posts={posts} />

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-blue-400/20"
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
              <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 text-white hover:from-yellow-500 hover:to-blue-500">
                Schedule a Consultation
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn more about our services</Button>
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
                  Comprehensive solutions to transform your organization's learning and development
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="rounded-lg border p-6 transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">AI Consulting</CardTitle>
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
                  <CardTitle className="text-xl font-bold mt-4">Learning & Development Consulting</CardTitle>
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
                  <CardTitle className="text-xl font-bold mt-4">Enterprise LMS Solutions</CardTitle>
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

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 bg-gradient-to-r from-yellow-400/5 via-yellow-300/5 to-blue-400/5"
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
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="About Beehive Advisors"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  Success Stories
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we've helped organizations transform their learning and development
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="case1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="case1">Global Tech Firm</TabsTrigger>
                  <TabsTrigger value="case2">Healthcare Provider</TabsTrigger>
                  <TabsTrigger value="case3">Financial Services</TabsTrigger>
                </TabsList>
                <TabsContent value="case1">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI-Powered Learning Platform</CardTitle>
                      <CardDescription>Global Technology Company</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Challenge</h3>
                          <p className="text-sm text-muted-foreground">
                            The client needed to upskill 5,000+ employees across 20 countries in emerging technologies,
                            facing challenges with inconsistent training quality and engagement.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Solution</h3>
                          <p className="text-sm text-muted-foreground">
                            We developed a custom AI-powered learning platform that personalized content delivery and
                            tracked skill development with adaptive learning paths.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Results</h3>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">87%</span>
                              <span className="text-xs text-muted-foreground">Completion Rate</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">42%</span>
                              <span className="text-xs text-muted-foreground">Productivity Increase</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Case Study"
                          width={400}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="case3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Regulatory Compliance Training</CardTitle>
                      <CardDescription>Global Financial Services Firm</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Challenge</h3>
                          <p className="text-sm text-muted-foreground">
                            The client faced increasing regulatory requirements and needed to ensure consistent
                            compliance training across 15,000 employees globally.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Solution</h3>
                          <p className="text-sm text-muted-foreground">
                            We developed an adaptive learning system that personalized regulatory training based on
                            role, region, and previous knowledge assessments.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Results</h3>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">99.8%</span>
                              <span className="text-xs text-muted-foreground">Compliance Rate</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">$2.4M</span>
                              <span className="text-xs text-muted-foreground">Annual Savings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Case Study"
                          width={400}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="case2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Clinical Training Transformation</CardTitle>
                      <CardDescription>Regional Healthcare Provider</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Challenge</h3>
                          <p className="text-sm text-muted-foreground">
                            The healthcare provider struggled with standardizing clinical training across multiple
                            facilities while meeting strict compliance requirements.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Solution</h3>
                          <p className="text-sm text-muted-foreground">
                            We implemented a comprehensive LMS with AI-driven compliance tracking and simulation-based
                            learning modules for clinical skills.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Results</h3>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">100%</span>
                              <span className="text-xs text-muted-foreground">Compliance Rate</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                              <span className="text-2xl font-bold text-primary">28%</span>
                              <span className="text-xs text-muted-foreground">Training Time Reduction</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Case Study"
                          width={400}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 11s.5-2 2.5-2 2.5 2 2.5 2" />
                    <path d="M9 11s.5-2 2.5-2 2.5 2 2.5 2" />
                    <path d="M13 11s.5-2 2.5-2 2.5 2 2.5 2" />
                    <path d="M11 13.5V17" />
                    <path d="M8 13.5V17" />
                    <path d="M14 13.5V17" />
                    <path d="M11 5.5V9" />
                    <path d="M8 5.5V9" />
                    <path d="M14 5.5V9" />
                    <path d="M6 9h12" />
                    <path d="M6 13h12" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Beehive Advisors</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses with AI-powered learning solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    AI Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    L&D Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Enterprise LMS Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Custom Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  123 Innovation Way
                  <br />
                  San Francisco, CA 94103
                </li>
                <li>
                  <Link href="mailto:info@beehiveadvisors.com" className="text-muted-foreground hover:text-foreground">
                    info@beehiveadvisors.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+14155551234" className="text-muted-foreground hover:text-foreground">
                    (415) 555-1234
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Beehive Advisors. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}