"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Workflow, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RecommendationsPage() {
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/" aria-label="Back to portfolio">
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI-Powered Recommendation Engine</h1>
          <p className="text-muted-foreground">
            Personalized content recommendation system using AI agents and n8n workflows
          </p>
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
                An e-commerce platform needed to improve product recommendations to increase customer engagement and
                sales. The existing system lacked personalization and real-time adaptation to user behavior.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solution</h3>
              <p className="text-sm text-muted-foreground">
                Developed an AI-powered recommendation engine using n8n workflows and AI agents to analyze user
                behavior, process data in real-time, and deliver personalized product recommendations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Visualization */}
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
            <AccordionItem value="data-collection">
              <AccordionTrigger>1. Data Collection & Processing</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Captures user interactions (clicks, purchases, views)</li>
                  <li>• Processes historical purchase data</li>
                  <li>• Analyzes product metadata and categories</li>
                  <li>• Tracks session behavior and cart actions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ai-processing">
              <AccordionTrigger>2. AI Agent Processing</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Implements collaborative filtering algorithms</li>
                  <li>• Analyzes user preferences and patterns</li>
                  <li>• Generates similarity scores between products</li>
                  <li>• Creates user behavior profiles</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recommendation-generation">
              <AccordionTrigger>3. Recommendation Generation</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Combines multiple recommendation strategies</li>
                  <li>• Ranks products based on relevance scores</li>
                  <li>• Applies business rules and constraints</li>
                  <li>• Generates personalized product lists</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delivery">
              <AccordionTrigger>4. Delivery & Integration</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Exposes recommendations via REST API</li>
                  <li>• Updates recommendations in real-time</li>
                  <li>• Integrates with e-commerce platform</li>
                  <li>• Monitors recommendation performance</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Results & Metrics */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="size-5" />
            Impact & Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">+42%</CardTitle>
                <p className="text-sm font-medium">Click-through Rate</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Increase in recommendation click-through rates compared to previous system
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">+28%</CardTitle>
                <p className="text-sm font-medium">Conversion Rate</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Improvement in conversion rate for recommended products</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">+35%</CardTitle>
                <p className="text-sm font-medium">Average Order Value</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Increase in average order value through personalized recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Technical Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Implementation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">n8n Workflow Components</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• HTTP Trigger nodes for real-time data ingestion</li>
                <li>• Function nodes for data preprocessing and transformation</li>
                <li>• AI agent integration nodes for recommendation generation</li>
                <li>• Database nodes for storing user profiles and interactions</li>
                <li>• Webhook nodes for real-time updates to the e-commerce platform</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AI Agent Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom AI agents for user behavior analysis</li>
                <li>• Machine learning models for product similarity scoring</li>
                <li>• Natural language processing for product description analysis</li>
                <li>• Real-time learning and model updating capabilities</li>
                <li>• A/B testing framework for recommendation strategies</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

