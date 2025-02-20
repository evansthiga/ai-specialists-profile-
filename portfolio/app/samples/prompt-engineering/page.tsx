"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

interface Prompt {
  id: string
  title: string
  content: string
  createdAt: number
}

export default function PromptEngineeringPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load prompts from localStorage on mount
  useEffect(() => {
    const savedPrompts = localStorage.getItem("engineering-prompts")
    if (savedPrompts) {
      setPrompts(JSON.parse(savedPrompts))
    } else {
      // Set default prompts if none exist
      const defaultPrompts = [
        {
          id: "1",
          title: "Customer Service Response",
          content:
            "You are a helpful customer service representative. Your tone is professional yet friendly. Response format: 1) Acknowledge the issue 2) Provide solution 3) End with follow-up offer",
          createdAt: Date.now(),
        },
        {
          id: "2",
          title: "Technical Documentation",
          content:
            "You are a technical writer creating documentation. Use clear, concise language. Include: 1) Overview 2) Step-by-step instructions 3) Examples 4) Troubleshooting tips",
          createdAt: Date.now(),
        },
      ]
      setPrompts(defaultPrompts)
      localStorage.setItem("engineering-prompts", JSON.stringify(defaultPrompts))
    }
    setIsLoading(false)
  }, [])

  // Save prompts to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("engineering-prompts", JSON.stringify(prompts))
    }
  }, [prompts, isLoading])

  const addNewPrompt = () => {
    const newPrompt = {
      id: Date.now().toString(),
      title: `New Prompt`,
      content: "",
      createdAt: Date.now(),
    }
    setPrompts([...prompts, newPrompt])
    toast.success("New prompt added")
  }

  const updatePrompt = (id: string, field: keyof Prompt, value: string) => {
    setPrompts(prompts.map((prompt) => (prompt.id === id ? { ...prompt, [field]: value } : prompt)))
  }

  const deletePrompt = (id: string) => {
    setPrompts(prompts.filter((prompt) => prompt.id !== id))
    toast.success("Prompt deleted")
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

  return (
    <div className="container py-8 animate-fadeIn">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/" aria-label="Back to portfolio">
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Prompt Engineering Samples</h1>
          <p className="text-muted-foreground">
            A collection of optimized prompts for different use cases. Total prompts: {prompts.length}
          </p>
        </div>
        <Button onClick={addNewPrompt} className="flex items-center gap-2">
          <Plus className="size-4" />
          Add Prompt
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {prompts
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((prompt, index) => (
            <Card
              key={prompt.id}
              className="animate-fadeIn relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1 flex-1">
                  <Label htmlFor={`title-${prompt.id}`}>Prompt Title</Label>
                  <Input
                    id={`title-${prompt.id}`}
                    value={prompt.title}
                    onChange={(e) => updatePrompt(prompt.id, "title", e.target.value)}
                    className="font-semibold"
                    placeholder="Enter prompt title"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => deletePrompt(prompt.id)}
                >
                  <X className="size-4" />
                  <span className="sr-only">Delete prompt {prompt.title}</span>
                </Button>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor={`content-${prompt.id}`}>Prompt Content</Label>
                  <Textarea
                    id={`content-${prompt.id}`}
                    value={prompt.content}
                    onChange={(e) => updatePrompt(prompt.id, "content", e.target.value)}
                    placeholder="Enter your prompt here..."
                    className="min-h-[150px] resize-y"
                  />
                </div>
                <div className="text-xs text-muted-foreground flex items-center justify-between">
                  <span>
                    Prompt #{prompt.id} • {prompt.content.length} characters
                  </span>
                  <span>{new Date(prompt.createdAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {prompts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No prompts yet. Click &quot;Add Prompt&quot; to create one.</p>
        </div>
      )}
    </div>
  )
}

