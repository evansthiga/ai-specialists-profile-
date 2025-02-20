"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Github } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Ensure data is always defined with proper typing
const defaultData = [
  { month: "Jan", actual: 4000, predicted: 4400 },
  { month: "Feb", actual: 3000, predicted: 3200 },
  { month: "Mar", actual: 2000, predicted: 2400 },
  { month: "Apr", actual: 2780, predicted: 2900 },
  { month: "May", actual: 1890, predicted: 2100 },
  { month: "Jun", actual: 2390, predicted: 2500 },
  { month: "Jul", actual: 3490, predicted: 3600 },
] as const

interface DataPoint {
  month: string
  actual: number
  predicted: number
}

interface AnalyticsProject {
  id: string
  title: string
  description: string
  metric: string
  data: DataPoint[]
  chartType: "line" | "area" | "bar"
}

const chartConfig = {
  actual: {
    label: "Actual",
    color: "hsl(var(--chart-1))",
  },
  predicted: {
    label: "Predicted",
    color: "hsl(var(--chart-2))",
  },
} as const

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [projects, setProjects] = useState<AnalyticsProject[]>([])

  useEffect(() => {
    try {
      // Simulate loading initial data
      setIsLoading(true)
      setProjects([
        {
          id: "customer-purchases",
          title: "Customer Purchase Predictions",
          description: "Monthly purchase behavior analysis with ML-based predictions",
          metric: "Purchase Value ($)",
          data: [...defaultData],
          chartType: "line",
        },
      ])
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load data"))
    } finally {
      setIsLoading(false)
    }
  }, [])

  const addNewProject = () => {
    try {
      const newProject: AnalyticsProject = {
        id: `project-${Date.now()}`,
        title: "New Analytics Project",
        description: "Add your analytics project description here",
        metric: "Value",
        data: [...defaultData],
        chartType: "line",
      }
      setProjects((prev) => [...prev, newProject])
    } catch (err) {
      console.error("Failed to add new project:", err)
    }
  }

  const updateChartType = (projectId: string, type: "line" | "area" | "bar") => {
    try {
      setProjects(projects.map((project) => (project.id === projectId ? { ...project, chartType: type } : project)))
    } catch (err) {
      console.error("Failed to update chart type:", err)
    }
  }

  const renderChart = (project: AnalyticsProject) => {
    if (!project?.data) return null

    try {
      const ChartComponent = {
        line: LineChart,
        area: AreaChart,
        bar: BarChart,
      }[project.chartType]

      const DataComponent = {
        line: Line,
        area: Area,
        bar: Bar,
      }[project.chartType]

      if (!ChartComponent || !DataComponent) return null

      return (
        <ResponsiveContainer width="100%" height={350}>
          <ChartComponent data={project.data}>
            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null

                return (
                  <ChartTooltipContent>
                    {payload.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor:
                              item.dataKey === "actual" ? chartConfig.actual.color : chartConfig.predicted.color,
                          }}
                        />
                        <span className="font-medium">{item.dataKey === "actual" ? "Actual" : "Predicted"}:</span>
                        <span>${item.value}</span>
                      </div>
                    ))}
                  </ChartTooltipContent>
                )
              }}
            />
            <DataComponent
              type="monotone"
              dataKey="actual"
              stroke={chartConfig.actual.color}
              fill={project.chartType === "area" ? `${chartConfig.actual.color}33` : "transparent"}
              strokeWidth={2}
            />
            <DataComponent
              type="monotone"
              dataKey="predicted"
              stroke={chartConfig.predicted.color}
              fill={project.chartType === "area" ? `${chartConfig.predicted.color}33` : "transparent"}
              strokeWidth={2}
            />
          </ChartComponent>
        </ResponsiveContainer>
      )
    } catch (err) {
      console.error("Failed to render chart:", err)
      return (
        <div className="flex items-center justify-center h-[350px]">
          <p className="text-muted-foreground">Failed to load chart</p>
        </div>
      )
    }
  }

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-muted rounded"></div>
            <div className="h-4 w-48 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container flex min-h-[400px] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground">{error.message}</p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Try again
        </Button>
      </div>
    )
  }

  // Rest of the component remains the same...
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/" aria-label="Back to portfolio">
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Predictive Analytics Platform</h1>
          <p className="text-muted-foreground">Customer behavior analysis and predictions based on historical data.</p>
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
        <Button onClick={addNewProject} className="flex items-center gap-2">
          <Plus className="size-4" />
          Add Project
        </Button>
      </div>

      {/* Business Overview Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>TechStyle E-commerce Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Business Overview</h3>
              <p className="text-sm text-muted-foreground">
                TechStyle is a leading e-commerce platform specializing in tech-inspired fashion and accessories. With
                over 50,000 monthly active users and 15,000 products, the platform serves fashion-forward tech
                enthusiasts across North America.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Prediction Purpose</h3>
              <p className="text-sm text-muted-foreground">
                The predictive analytics platform was implemented to forecast customer purchase patterns, optimize
                inventory management, and personalize marketing strategies. The system analyzes historical purchase
                data, user behavior, and market trends.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Overview Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-semibold">Revenue Impact</h3>
              <p className="text-2xl font-bold text-primary">+27%</p>
              <p className="text-sm text-muted-foreground">
                Increase in monthly revenue through optimized inventory and targeted marketing
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Customer Retention</h3>
              <p className="text-2xl font-bold text-primary">+35%</p>
              <p className="text-sm text-muted-foreground">
                Improvement in customer retention rate through personalized engagement
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Inventory Efficiency</h3>
              <p className="text-2xl font-bold text-primary">-22%</p>
              <p className="text-sm text-muted-foreground">
                Reduction in overstock situations while maintaining optimal stock levels
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Key Benefits</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {[
                "Improved inventory turnover rate by predicting demand patterns",
                "Reduced marketing costs through targeted campaign optimization",
                "Enhanced customer satisfaction with better product availability",
                "Increased average order value through personalized recommendations",
                "Optimized pricing strategies based on demand forecasting",
                "Reduced storage costs through improved inventory management",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="size-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Recommended Growth Strategies</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Short-term Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Implement dynamic pricing based on demand predictions</li>
                    <li>• Launch personalized email campaigns for high-value customers</li>
                    <li>• Optimize stock levels for trending products</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Long-term Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Expand product lines based on predicted market trends</li>
                    <li>• Develop loyalty program using customer behavior insights</li>
                    <li>• Establish automated inventory management system</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Purchase Predictions Chart */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{project.metric}</p>
                <Select
                  value={project.chartType}
                  onValueChange={(value: "line" | "area" | "bar") => updateChartType(project.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select chart type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="area">Area Chart</SelectItem>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ChartContainer config={chartConfig}>{renderChart(project)}</ChartContainer>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(var(--chart-1))]" />
                  <span className="text-sm text-muted-foreground">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-[hsl(var(--chart-2))]" />
                  <span className="text-sm text-muted-foreground">Predicted</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

