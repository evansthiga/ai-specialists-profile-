"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Plus, Send } from "lucide-react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface ChatbotProject {
  id: string
  title: string
  description: string
  messages: ChatMessage[]
}

export default function ChatbotPage() {
  const [projects, setProjects] = useState<ChatbotProject[]>([
    {
      id: "psychiatric-booking",
      title: "Psychiatric Appointment Booking Chatbot",
      description:
        "An empathetic chatbot designed to help patients book psychiatric appointments while providing emotional support.",
      messages: [
        {
          role: "assistant",
          content: "Hello! I'm here to help you book a psychiatric appointment. How are you feeling today?",
        },
        {
          role: "user",
          content: "I've been feeling anxious lately and would like to speak with someone.",
        },
        {
          role: "assistant",
          content:
            "I understand that anxiety can be challenging. You're taking a positive step by seeking help. Would you prefer a morning or afternoon appointment?",
        },
        {
          role: "user",
          content: "Morning would be better for me.",
        },
        {
          role: "assistant",
          content:
            "I have the following morning slots available:\n- Monday 9:00 AM with Dr. Sarah Chen\n- Wednesday 10:00 AM with Dr. Michael Rodriguez\n- Friday 11:00 AM with Dr. Emily Thompson\nWhich would you prefer?",
        },
      ],
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [activeProject, setActiveProject] = useState<string>(projects[0].id)

  const addNewProject = () => {
    const newProject: ChatbotProject = {
      id: `project-${Date.now()}`,
      title: "New Chatbot Project",
      description: "Add your chatbot project description here.",
      messages: [
        {
          role: "assistant",
          content: "Hello! How can I assist you today?",
        },
      ],
    }
    setProjects([...projects, newProject])
    setActiveProject(newProject.id)
  }

  const sendMessage = (projectId: string) => {
    if (!newMessage.trim()) return

    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        return {
          ...project,
          messages: [
            ...project.messages,
            { role: "user", content: newMessage },
            {
              role: "assistant",
              content: "I understand your request. Let me help you with that. [AI response would be generated here]",
            },
          ],
        }
      }
      return project
    })

    setProjects(updatedProjects)
    setNewMessage("")
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">AI Chatbot Development</h1>
          <p className="text-muted-foreground">
            Sample chatbots demonstrating different use cases and conversation flows.
          </p>
        </div>
        <Button onClick={addNewProject} className="flex items-center gap-2">
          <Plus className="size-4" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {project.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={message.role === "assistant" ? "/placeholder.svg?height=32&width=32" : undefined}
                          alt={message.role}
                        />
                        <AvatarFallback>{message.role === "assistant" ? "AI" : "U"}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg px-3 py-2 max-w-[80%] ${
                          message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground ml-auto"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(project.id)
                }}
                className="flex w-full gap-2"
              >
                <Input
                  placeholder="Type your message..."
                  value={project.id === activeProject ? newMessage : ""}
                  onChange={(e) => {
                    setActiveProject(project.id)
                    setNewMessage(e.target.value)
                  }}
                />
                <Button type="submit" size="icon">
                  <Send className="size-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No chatbot projects yet. Click &quot;Add Project&quot; to create one.</p>
        </div>
      )}
    </div>
  )
}

