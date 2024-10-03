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
    title: "Katanagatari",
    description: "Indie Fighting Game",
    imageUrl: "https://private-user-images.githubusercontent.com/56260951/373076048-79b63977-e922-42a9-be9d-10aadf1c9156.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc5MTcwNjQsIm5iZiI6MTcyNzkxNjc2NCwicGF0aCI6Ii81NjI2MDk1MS8zNzMwNzYwNDgtNzliNjM5NzctZTkyMi00MmE5LWJlOWQtMTBhYWRmMWM5MTU2LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAwM1QwMDUyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NTNiNTNiYmI3OTZmMThmZTBjOTNjZGZmZTgyYTE4NzZhYzBiYjViMDhlN2EzNDNjYzMyN2IxMmJlNjczOWVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HcEAdbAwtQ2LxvTmz5wn2iOhFzTpVOFWD1QjploFTOg",
    githubUrl: "https://github.com/tenapato/katanagatari",
    liveUrl: "",
    tags: ["Unity", "C#"]
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
  }
  // Add more projects as needed
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