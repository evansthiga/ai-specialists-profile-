"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Workflow, Calendar, Users, Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WorkflowPage() {
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/" aria-label="Back to portfolio">
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI Workflow Automation</h1>
          <p className="text-muted-foreground">Automated booking system using n8n workflows and AI integration</p>
        </div>
        <Button asChild variant="outline" className="mr-2">
          <Link
            href="https://github.com/evansthiga?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="size-4" />
            View GitHub Projects
          </Link>
        </Button>
      </div>

      {/* Project Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Challenge</h3>
              <p className="text-sm text-muted-foreground">
                A healthcare clinic needed to streamline their appointment booking process, reduce manual scheduling
                work, and minimize booking errors while providing 24/7 availability for patients.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solution</h3>
              <p className="text-sm text-muted-foreground">
                Implemented an automated booking system using n8n workflows integrated with AI for natural language
                processing, calendar management, and intelligent scheduling optimization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Architecture */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="size-5" />
            n8n Workflow Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="n8n workflow diagram"
              fill
              className="object-cover"
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="trigger">
              <AccordionTrigger>1. Booking Request Handling</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• HTTP Webhook trigger for booking requests</li>
                  <li>• Form data validation and sanitization</li>
                  <li>• Initial availability check</li>
                  <li>• Request queueing system</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ai-processing">
              <AccordionTrigger>2. AI Processing & Optimization</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Natural language processing for patient requirements</li>
                  <li>• Smart scheduling algorithm for optimal time slots</li>
                  <li>• Provider matching based on expertise</li>
                  <li>• Conflict resolution handling</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="calendar">
              <AccordionTrigger>3. Calendar Management</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Google Calendar API integration</li>
                  <li>• Real-time availability updates</li>
                  <li>• Buffer time management</li>
                  <li>• Recurring appointment handling</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="notification">
              <AccordionTrigger>4. Notification System</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Email confirmation generation</li>
                  <li>• SMS reminders setup</li>
                  <li>• Provider notifications</li>
                  <li>• Rescheduling communications</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Calendar className="size-8 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Intelligent time slot allocation</li>
                  <li>• Automated conflict resolution</li>
                  <li>• Priority booking handling</li>
                  <li>• Multi-calendar sync</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="size-8 text-primary mb-2" />
                <CardTitle className="text-lg">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Patient profiles</li>
                  <li>• Provider availability</li>
                  <li>• Booking history</li>
                  <li>• Preference tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bot className="size-8 text-primary mb-2" />
                <CardTitle className="text-lg">AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Natural language processing</li>
                  <li>• Smart matching algorithm</li>
                  <li>• Predictive scheduling</li>
                  <li>• Learning capabilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Results & Impact */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Results & Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">85%</p>
              <p className="text-sm font-medium">Reduction in Manual Work</p>
              <p className="text-xs text-muted-foreground">Decreased administrative scheduling tasks</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">95%</p>
              <p className="text-sm font-medium">Booking Accuracy</p>
              <p className="text-xs text-muted-foreground">Improved scheduling accuracy rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm font-medium">Availability</p>
              <p className="text-xs text-muted-foreground">Round-the-clock booking capability</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">-50%</p>
              <p className="text-sm font-medium">No-show Rate</p>
              <p className="text-xs text-muted-foreground">Reduced missed appointments</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Implementation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">n8n Components</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Webhook nodes for request handling</li>
                <li>• Google Calendar nodes for scheduling</li>
                <li>• Function nodes for custom logic</li>
                <li>• HTTP Request nodes for API integrations</li>
                <li>• Email & SMS nodes for notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Integrations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Google Calendar API</li>
                <li>• Email service providers</li>
                <li>• SMS gateway services</li>
                <li>• Custom booking frontend</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

