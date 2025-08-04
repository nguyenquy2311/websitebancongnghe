import type { StaticImageData } from "next/image"

export type Member = {
  id: string
  name: string
  role: string
  group: string
  department: string
  avatar: string | StaticImageData
  coverImage?: string | StaticImageData
  description: string
  longBio?: string
  skills: string[]
  joinYear: string
  location: string
  education?: string
  github?: string | null
  linkedin?: string | null
  portfolio?: string | null
  email: string
  achievements?: string[]
  projects?: {
    id: string
    title: string
    role: string
    description: string
    image: string | StaticImageData
    techStack: string[]
    status: "Completed" | "In Progress" | "Upcoming"
  }[]
  stats?: {
    projectsCompleted: number
    yearsExperience: number
    teamMembers: number
    linesOfCode: string
  }
}

export const memberGroups = [
  { id: "all", name: "Tất cả", color: "bg-gray-100 text-gray-800" },
  { id: "Leader", name: "Leader", color: "bg-red-100 text-red-800" },
  { id: "Core", name: "Core Team", color: "bg-blue-100 text-blue-800" },
  { id: "Web", name: "Nhóm Web", color: "bg-green-100 text-green-800" },
  { id: "App", name: "Nhóm App", color: "bg-purple-100 text-purple-800" },
]

export const memberRoles = ["Tất cả", "Leader", "Core Team", "Web Developer", "App Developer", "Designer"]





