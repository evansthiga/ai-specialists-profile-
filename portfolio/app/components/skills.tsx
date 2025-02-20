"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, X, Edit2 } from "lucide-react"

// Initial skills array
const defaultSkills = [
  "Machine Learning",
  "Natural Language Processing",
  "Prompt Engineering",
  "LLM Development",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Data Science",
  "AI Workflow & Automation",
]

export function Skills() {
  // Load skills from localStorage or use defaults
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const editInputRef = useRef<HTMLInputElement>(null)

  // Load skills from localStorage on component mount
  useEffect(() => {
    const savedSkills = localStorage.getItem("portfolio-skills")
    setSkills(savedSkills ? JSON.parse(savedSkills) : defaultSkills)
  }, [])

  // Save skills to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("portfolio-skills", JSON.stringify(skills))
  }, [skills])

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const startEditing = (index: number) => {
    setEditingIndex(index)
    // Focus the input after it's rendered
    setTimeout(() => {
      editInputRef.current?.focus()
    }, 0)
  }

  const handleEditComplete = (index: number, newValue: string) => {
    if (newValue.trim() && !skills.includes(newValue.trim())) {
      const newSkills = [...skills]
      newSkills[index] = newValue.trim()
      setSkills(newSkills)
    }
    setEditingIndex(null)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index?: number) => {
    if (e.key === "Enter") {
      if (typeof index === "number") {
        handleEditComplete(index, (e.target as HTMLInputElement).value)
      } else {
        addSkill()
      }
    } else if (e.key === "Escape" && typeof index === "number") {
      setEditingIndex(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1 rounded-full skill-tag px-3 py-1 text-sm transition-transform duration-200 hover:scale-105"
          >
            {editingIndex === index ? (
              <input
                ref={editInputRef}
                type="text"
                defaultValue={skill}
                onKeyDown={(e) => handleKeyPress(e, index)}
                onBlur={(e) => handleEditComplete(index, e.target.value)}
                className="w-24 bg-transparent outline-none text-white placeholder-white/70"
                autoFocus
              />
            ) : (
              <>
                {skill}
                <button
                  onClick={() => startEditing(index)}
                  className="ml-1 rounded-full p-0.5 hover:bg-white/20"
                  aria-label={`Edit ${skill}`}
                >
                  <Edit2 className="size-3" />
                </button>
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-1 rounded-full p-0.5 hover:bg-white/20"
                  aria-label={`Remove ${skill}`}
                >
                  <X className="size-3" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
          className="max-w-xs"
        />
        <Button onClick={addSkill} size="icon" className="gradient-bg text-white hover:opacity-90">
          <Plus className="size-4" />
          <span className="sr-only">Add skill</span>
        </Button>
      </div>
    </div>
  )
}

