import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CaseStudies() {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we've helped organizations transform their operations with AI
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="case2" className="w-full">
            <TabsList className="grid w-full grid-cols-3 p-0 bg-transparent">
              <TabsTrigger 
                value="case1" 
                className="rounded-t-lg border-2 border-b-0 data-[state=active]:border-border data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=inactive]:bg-muted/60 data-[state=inactive]:border-transparent transition-all duration-200"
              >
                Communications
              </TabsTrigger>
              <TabsTrigger 
                value="case2" 
                className="rounded-t-lg border-2 border-b-0 data-[state=active]:border-border data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=inactive]:bg-muted/60 data-[state=inactive]:border-transparent transition-all duration-200"
              >
                Healthcare
              </TabsTrigger>
              <TabsTrigger 
                value="case3" 
                className="rounded-t-lg border-2 border-b-0 data-[state=active]:border-border data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=inactive]:bg-muted/60 data-[state=inactive]:border-transparent transition-all duration-200"
              >
                Technology
              </TabsTrigger>
            </TabsList>
            <TabsContent value="case1" className="mt-0">
              <Card className="rounded-tl-none border-t-2">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <CardHeader>
                      <CardTitle>AI-Powered Call Center Interpreter</CardTitle>
                      <CardDescription>Global Communications Company</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium">Challenge</h3>
                        <p className="text-sm text-muted-foreground">
                          The client needed to provide real-time language interpretation services for their multinational call center operations, serving customers across 30+ languages. Traditional human interpreter services were costly, caused significant delays, and were not available 24/7.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Solution</h3>
                        <p className="text-sm text-muted-foreground">
                          We developed an AI-powered interpreter system featuring real-time speech recognition and translation across 40+ languages, natural-sounding voice synthesis, context-aware translation, and seamless handoff protocols between AI and human interpreters for complex cases.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Results</h3>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">93%</span>
                            <span className="text-xs text-muted-foreground text-center">Accuracy Rate</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">68%</span>
                            <span className="text-xs text-muted-foreground text-center">Cost Reduction</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">24/7</span>
                            <span className="text-xs text-muted-foreground text-center">Global Coverage</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6">
                    <Image
                      src="/Call center.png"
                      alt="Call Center Case Study"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="case2" className="mt-0">
              <Card className="rounded-tl-none border-t-2">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <CardHeader>
                      <CardTitle>AI Insurance Document Processing</CardTitle>
                      <CardDescription>Regional Healthcare Network</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium">Challenge</h3>
                        <p className="text-sm text-muted-foreground">
                          Front desk staff across 12 clinics spent hours manually processing insurance documents, verifying coverage, and extracting patient information. This led to long wait times, delayed appointments, and staff burnout from repetitive administrative tasks.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Solution</h3>
                        <p className="text-sm text-muted-foreground">
                          We implemented an intelligent document processing system using computer vision and NLP to automatically extract and validate insurance information, verify coverage details, and integrate with the clinic's EMR system. The solution included real-time verification and automated follow-up workflows.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Results</h3>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">95%</span>
                            <span className="text-xs text-muted-foreground text-center">Processing Accuracy</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">80%</span>
                            <span className="text-xs text-muted-foreground text-center">Time Saved</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">15min</span>
                            <span className="text-xs text-muted-foreground text-center">Check-in Time</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6">
                    <Image
                      src="/Insurance.png"
                      alt="Healthcare Document Processing Case Study"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="case3" className="mt-0">
              <Card className="rounded-tl-none border-t-2">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <CardHeader>
                      <CardTitle>Enterprise ChatGPT Upskilling Program</CardTitle>
                      <CardDescription>Global Technology Firm</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium">Challenge</h3>
                        <p className="text-sm text-muted-foreground">
                          The client needed to upskill 5,000+ employees across 20 countries in emerging AI technologies, facing challenges with inconsistent training quality and engagement in ChatGPT adoption across diverse roles and technical backgrounds.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Solution</h3>
                        <p className="text-sm text-muted-foreground">
                          We developed a custom AI-powered learning platform with role-specific training modules, hands-on labs, automated assessment of AI prompt engineering skills, peer learning communities, and seamless LMS integration.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Results</h3>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">87%</span>
                            <span className="text-xs text-muted-foreground text-center">Completion Rate</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">42%</span>
                            <span className="text-xs text-muted-foreground text-center">Productivity Gain</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-3">
                            <span className="text-2xl font-bold text-primary">76%</span>
                            <span className="text-xs text-muted-foreground text-center">AI Confidence</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6">
                    <Image
                      src="/Upskilling.png"
                      alt="ChatGPT Training Case Study"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 