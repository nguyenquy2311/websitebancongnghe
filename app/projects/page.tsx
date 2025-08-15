"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/data/project" // Import Project interface only
import { getAllProjects } from "@/lib/firestoreService" // Import the function from firestoreService

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, index) => (
      <Card key={index} className="overflow-hidden animate-pulse">
        <div className="aspect-video bg-gray-200"></div>
        <CardHeader>
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-16 bg-gray-200 rounded"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-6 bg-gray-200 rounded w-14"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 bg-gray-200 rounded flex-1"></div>
            <div className="h-8 bg-gray-200 rounded flex-1"></div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

// Mock data for projects
// const projects = [
//   {
//     id: "iuh-student-portal",
//     title: "IUH Student Portal",
//     description:
//       "Hệ thống quản lý sinh viên với giao diện hiện đại, tích hợp đầy đủ các tính năng cần thiết cho sinh viên và giảng viên.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["React", "Node.js", "MongoDB", "Express"],
//     category: "Web",
//     year: "2024",
//     type: "Nhóm",
//     members: [
//       { name: "Nguyễn Văn A", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Trần Thị B", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Lê Văn C", avatar: "/placeholder.svg?height=40&width=40" },
//     ],
//     githubUrl: "https://github.com/bcn-iuh/student-portal",
//     demoUrl: "https://student-portal-demo.vercel.app",
//   },
//   {
//     id: "bcn-mobile-app",
//     title: "BCN Mobile App",
//     description: "Ứng dụng di động kết nối thành viên BCN, quản lý hoạt động và chia sẻ thông tin nội bộ.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["React Native", "Firebase", "Redux", "Expo"],
//     category: "App",
//     year: "2024",
//     type: "Nhóm",
//     members: [
//       { name: "Phạm Văn D", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Hoàng Thị E", avatar: "/placeholder.svg?height=40&width=40" },
//     ],
//     githubUrl: "https://github.com/bcn-iuh/bcn-mobile",
//     demoUrl: null,
//   },
//   {
//     id: "event-management-system",
//     title: "Event Management System",
//     description: "Hệ thống quản lý sự kiện cho CLB sinh viên, từ đăng ký tham gia đến theo dõi hoạt động.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
//     category: "Web",
//     year: "2023",
//     type: "Nhóm",
//     members: [
//       { name: "Vũ Văn F", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Đặng Thị G", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Bùi Văn H", avatar: "/placeholder.svg?height=40&width=40" },
//     ],
//     githubUrl: "https://github.com/bcn-iuh/event-management",
//     demoUrl: "https://event-management-demo.vercel.app",
//   },
//   {
//     id: "personal-portfolio-template",
//     title: "Personal Portfolio Template",
//     description: "Template portfolio cá nhân dành cho sinh viên IT, dễ dàng tùy chỉnh và triển khai.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["Vue.js", "Nuxt.js", "SCSS", "Netlify"],
//     category: "Web",
//     year: "2023",
//     type: "Cá nhân",
//     members: [{ name: "Ngô Văn I", avatar: "/placeholder.svg?height=40&width=40" }],
//     githubUrl: "https://github.com/bcn-iuh/portfolio-template",
//     demoUrl: "https://portfolio-template-demo.netlify.app",
//   },
//   {
//     id: "task-management-app",
//     title: "Task Management App",
//     description: "Ứng dụng quản lý công việc nhóm với tính năng real-time collaboration và notification.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["Flutter", "Dart", "Supabase", "GetX"],
//     category: "App",
//     year: "2023",
//     type: "Nhóm",
//     members: [
//       { name: "Cao Thị J", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Lý Văn K", avatar: "/placeholder.svg?height=40&width=40" },
//     ],
//     githubUrl: "https://github.com/bcn-iuh/task-management",
//     demoUrl: null,
//   },
//   {
//     id: "bcn-website",
//     title: "BCN Website",
//     description: "Website chính thức của Ban Công Nghệ, giới thiệu thông tin và hoạt động của BCN.",
//     image: "/placeholder.svg?height=200&width=400",
//     techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
//     category: "Web",
//     year: "2024",
//     type: "Nhóm",
//     members: [
//       { name: "Đinh Văn L", avatar: "/placeholder.svg?height=40&width=40" },
//       { name: "Tô Thị M", avatar: "/placeholder.svg?height=40&width=40" },
//     ],
//     githubUrl: "https://github.com/bcn-iuh/bcn-website",
//     demoUrl: "https://bcn-iuh.vercel.app",
//   },
// ]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch projects from Firestore on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const firestoreProjects = await getAllProjects()
        setProjects(firestoreProjects)

        if (firestoreProjects.length > 0) {
          console.log("✅ Projects loaded from Firestore:", firestoreProjects.length)
        } else {
          console.log("⚠️ No projects found in Firestore")
        }
      } catch (error) {
        console.error("❌ Error fetching projects:", error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter((project: Project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech: string) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesType = typeFilter === "all" || project.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Dự Án BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các sản phẩm và dự án công nghệ mà thành viên BCN đã phát triển
          </p>
        </div>

        {/* Loading state */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {/* Filters */}
            <div className="space-y-6 mb-8">
              {/* Filter Tags in grid layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Loại dự án</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      variant={categoryFilter === "all" ? "default" : "outline"}
                      onClick={() => setCategoryFilter("all")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Tất cả
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.length}
                      </Badge>
                    </Button>
                    <Button
                      variant={categoryFilter === "Web" ? "default" : "outline"}
                      onClick={() => setCategoryFilter("Web")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Web
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.filter((p: Project) => p.category === "Web").length}
                      </Badge>
                    </Button>
                    <Button
                      variant={categoryFilter === "App" ? "default" : "outline"}
                      onClick={() => setCategoryFilter("App")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Mobile App
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.filter((p: Project) => p.category === "App").length}
                      </Badge>
                    </Button>
                  </div>
                </div>

                {/* Type Filter */}
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Loại nhóm</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      variant={typeFilter === "all" ? "default" : "outline"}
                      onClick={() => setTypeFilter("all")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Tất cả
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.length}
                      </Badge>
                    </Button>
                    <Button
                      variant={typeFilter === "Nhóm" ? "default" : "outline"}
                      onClick={() => setTypeFilter("Nhóm")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Nhóm
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.filter((p: Project) => p.type === "Nhóm").length}
                      </Badge>
                    </Button>
                    <Button
                      variant={typeFilter === "Cá nhân" ? "default" : "outline"}
                      onClick={() => setTypeFilter("Cá nhân")}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      Cá nhân
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {projects.filter((p: Project) => p.type === "Cá nhân").length}
                      </Badge>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Tìm kiếm dự án theo tên, mô tả hoặc công nghệ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full rounded-full border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  />
                  {searchTerm && (
                    <Button
                      onClick={() => setSearchTerm("")}
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <Link href={`/projects/${project.id}`} >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant={project.category === "Web" ? "default" : "secondary"}>{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90">
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
                            {project.title}
                          </Link>
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">
                          {project.type}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Link>


                  <CardContent className="space-y-4">
                    <Link href={`/projects/${project.id}`} >
                      <p className="text-gray-600 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] text text-sm leading-relaxed">{project.shortDescription}</p>

                      {/* Tech Stack */}
                      <div className="flex overflow-hidden flex-wrap  gap-2">
                        {(() => {
                          // Lấy danh sách technologies
                          const uniqueNames = Array.from(new Set((project.techStack ?? []).map((tech: string) => tech)));
                          return uniqueNames.slice(0, 3).map((tech: string, index: number) => (
                            <Badge key={`${tech}-${index}`} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ));
                        })()}
                        {project.techStack && new Set(project.techStack.map((tech: string) => tech)).size > 2 && (
                          <span className="text-xs text-gray-500 font-semibold">
                            +{new Set(project.techStack.map((tech: string) => tech)).size - 2}
                          </span>
                        )}
                      </div>

                      {/* Team Members */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Thành viên tham gia:</p>
                        <div className="flex items-center flex-wrap gap-2">
                          {(() => {
                            // Lấy danh sách tên không trùng lặp từ team
                            const uniqueNames = Array.from(new Set((project.team ?? []).map((m) => m.name)));
                            return uniqueNames.slice(0, 2).map((name: string, index: number) => (
                              <span key={index} className="text-xs whitespace-nowrap text-gray-600 font-semibold bg-gray-200 rounded px-2 py-1">
                                {name}
                              </span>
                            ));
                          })()}
                          {project.team && new Set(project.team.map((m) => m.name)).size > 2 && (
                            <span className="text-xs text-gray-500 font-semibold">
                              +{new Set(project.team.map((m) => m.name)).size - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>


                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/projects/${project.id}`}>Chi Tiết</Link>
                      </Button>
                      {project.demoUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Link href={project.demoUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy dự án</h3>
                <p className="text-gray-600">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}