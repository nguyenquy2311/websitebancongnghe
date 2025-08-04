export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription?: string
  image: string
  gallery?: string[]
  techStack: string[]
  category: string
  year: string
  type: "Nhóm" | "Cá nhân"
  status?: string
  duration?: string
  startDate?: string
  endDate?: string
  githubUrl?: string
  demoUrl?: string

  goals?: string[]
  objectives?: string[]

  timeline?: {
    phase: string
    duration: string
    description: string
    status: string
    tasks: string[]
  }[]

  team?: {
    id: string
    name: string
    role: string
    avatar: string
    contributions: string[]
    recognition?: string
  }[]

  impact?: {
    users: string
    satisfaction: string
    timeReduction: string
    errorReduction: string
  }

  lessonsLearned?: string[]
  futurePlans?: string[]
}
