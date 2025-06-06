'use client'

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "RUUT",
    description: "Development of the RUUT application backend from scratch, successfully launching it within eight months. Responsible for planning server architecture, implementation, and ensuring server stability.",
    imageUrl: "https://ruut.mx/_next/image?url=https://cdn.sanity.io/images/v9z61bf3/production/b52b314db15f1fc4fd38ecb748c4a1a13649a81c-568x1178.png&w=640&q=75",
    githubUrl: "https://ruut.mx/",
    liveUrl: "https://apps.apple.com/mx/app/ruut/id1636922548",
    tags: ["JavaScript", "Typescript", "NodeJS", "MongoDB", "Docker", "AWS"]
  },
  {
    id: "2",
    title: "Data Vault",
    description: "Cloud Storage Service",
    imageUrl: "https://raw.githubusercontent.com/tenapato/data-vault-frontend/main/docs/Screenshot%202024-02-28%20at%205.50.03%E2%80%AFp.m..png",
    githubUrl: "https://github.com/tenapato/data-vault-frontend?tab=readme-ov-file",
    liveUrl: "https://datavaults.app/",
    tags: ["NextJS", "R2", "JavaScript", "Workers"]
  },
  {
    id: "3",
    title: "Kanji App",
    description: "Kanji Learning App",
    imageUrl: "https://raw.githubusercontent.com/tenapato/kanji-app/main/files/Screenshot%202024-03-05%20at%209.54.31%E2%80%AFp.m..png",
    githubUrl: "https://github.com/tenapato/kanji-app",
    liveUrl: "https://kanji-app-mauve.vercel.app/",
    tags: ["ReactJS", "JavaScript"]
  },
  {
    id: "4",
    title: "Katanagatari",
    description: "Indie Fighting Game",
    imageUrl: "https://private-user-images.githubusercontent.com/56260951/373076048-79b63977-e922-42a9-be9d-10aadf1c9156.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkwNzkyNjUsIm5iZiI6MTc0OTA3ODk2NSwicGF0aCI6Ii81NjI2MDk1MS8zNzMwNzYwNDgtNzliNjM5NzctZTkyMi00MmE5LWJlOWQtMTBhYWRmMWM5MTU2LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYwNFQyMzE2MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MWRiNjg3ZDA0M2NhMDI5OWI0YmY5ZDBmYmUyZDBlZTljYjE2ZmM2OTY3ZDY0ODE5OWM0YmNmMzZkMGFlZjViJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AEH1w48IHunwhfsmQVjBeDoyl5i112lwWpksS7AiKu4",
    githubUrl: "https://github.com/tenapato/katanagatari",
    liveUrl: "",
    tags: ["Unity", "C#"]
  },
  {
    id: "5",
    title: "CLI Curl",
    description: "A command-line interface (CLI) tool for managing API requests. This tool provides a structured way to organize and execute curl commands through shell scripts.`",
    imageUrl: "https://github.com/tenapato/cli-curl/raw/main/img/logo.png",
    githubUrl: "https://github.com/tenapato/cli-curl",
    liveUrl: "",
    tags: ["Shell", "Curl", "API"]
  },
  {
    id: "6",
    title: "Profanity Filter",
    description: "An npm package that detects and filters offensive words and phrases from text. Features include multi-language support, leetspeak normalization, and customizable word lists.",
    imageUrl: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png",
    githubUrl: "https://github.com/tenapato/profanity-filter",
    liveUrl: "https://www.npmjs.com/package/@tenapato/profanity-filter",
    tags: ["JavaScript", "NPM", "NodeJS", "TypeScript"]
  },
  {
    id: "7",
    title: "Username Generator",
    description: "An npm package generates Docker-like unique usernames by combining a random adjective, a random surname, and a random 3-digit number.",
    imageUrl: "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png",
    githubUrl: "https://github.com/tenapato/username-generator",
    liveUrl: "https://www.npmjs.com/package/@tenapato/username-generator",
    tags: ["JavaScript", "NPM", "NodeJS", "TypeScript"]
  }
];

export default function CodingProjectsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800 flex flex-col border-none">
            <CardHeader>
            {project?.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              ) : null}
              {/* <CardTitle className="mt-4">{project.title}</CardTitle> */}
              <CardTitle><a className='text-green mr-2'>{"<"}</a><a className="font-bold text-white">{project.title}</a><a className='text-green ml-2'>{"/>"}</a></CardTitle>
              <CardDescription className="text-light-slate mb-4">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-600 text-green text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            {project.githubUrl ? (
              <Button asChild variant="outline">
                <Link href={project.githubUrl}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            ) : null}

            {project.liveUrl ? (
              <Button asChild>
                <Link href={project.liveUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}