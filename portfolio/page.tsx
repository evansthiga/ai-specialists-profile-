import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Skills } from "./skills"
import { ThemeToggle } from "./theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <header className="container px-4 py-8 md:py-12">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="relative size-32 overflow-hidden rounded-full md:size-40 transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Profile picture"
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">John Doe</h1>
            <p className="text-xl text-muted-foreground">AI Specialist</p>
          </div>
        </div>
      </header>

      <main className="container space-y-12 px-4 pb-12">
        {/* Bio Section */}
        <section className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
          <p className="text-lg text-muted-foreground">
            As an AI Specialist, I focus on developing and implementing cutting-edge artificial intelligence solutions.
            With extensive experience in machine learning, natural language processing, and prompt engineering, I help
            organizations leverage AI to solve complex problems and drive innovation.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Completed Tasks</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="animate-fadeIn flex flex-col transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex-1 p-6">
                  <h3 className="mb-2 font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.sampleUrl} className="flex items-center gap-2">
                      View Samples
                      <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="flex gap-4">
            <Link
              href="mailto:john@example.com"
              className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Mail className="size-4" />
              <span>Email</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Linkedin className="size-4" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com"
              className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "AI Chatbot Development",
    description: "Developed an intelligent customer service chatbot using natural language processing.",
    tags: ["NLP", "Python", "Machine Learning"],
    sampleUrl: "/samples/chatbot",
  },
  {
    title: "Prompt Engineering Framework",
    description:
      "Created a systematic approach for designing and optimizing prompts for large language models, improving response accuracy by 40%.",
    tags: ["LLMs", "GPT", "Prompt Design"],
    sampleUrl: "/samples/prompt-engineering",
  },
  {
    title: "Predictive Analytics Platform",
    description: "Built a platform for predicting customer behavior using historical data.",
    tags: ["Data Science", "Analytics", "SQL"],
    sampleUrl: "/samples/analytics",
  },
  {
    title: "Recommendation Engine",
    description: "Created a personalized content recommendation system for an e-commerce platform.",
    tags: ["Machine Learning", "Python", "AWS"],
    sampleUrl: "/samples/recommendations",
  },
  {
    title: "Sentiment Analysis Tool",
    description: "Developed a tool for analyzing customer feedback and social media sentiment.",
    tags: ["NLP", "Text Analysis", "APIs"],
    sampleUrl: "/samples/sentiment-analysis",
  },
  {
    title: "AI Model Optimization",
    description: "Optimized machine learning models for improved performance and reduced latency.",
    tags: ["Optimization", "TensorFlow", "MLOps"],
    sampleUrl: "/samples/optimization",
  },
]

