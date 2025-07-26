"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, ExternalLink, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for projects
const projects = [
  {
    id: "iuh-student-portal",
    title: "IUH Student Portal",
    description:
      "Hệ thống quản lý sinh viên với giao diện hiện đại, tích hợp đầy đủ các tính năng cần thiết cho sinh viên và giảng viên.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web",
    year: "2024",
    type: "Nhóm",
    members: [
      { name: "Nguyễn Văn A", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Trần Thị B", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Lê Văn C", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/student-portal",
    demoUrl: "https://student-portal-demo.vercel.app",
  },
  {
    id: "bcn-mobile-app",
    title: "BCN Mobile App",
    description: "Ứng dụng di động kết nối thành viên BCN, quản lý hoạt động và chia sẻ thông tin nội bộ.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["React Native", "Firebase", "Redux", "Expo"],
    category: "App",
    year: "2024",
    type: "Nhóm",
    members: [
      { name: "Phạm Văn D", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Hoàng Thị E", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/bcn-mobile",
    demoUrl: null,
  },
  {
    id: "event-management-system",
    title: "Event Management System",
    description: "Hệ thống quản lý sự kiện cho CLB sinh viên, từ đăng ký tham gia đến theo dõi hoạt động.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    category: "Web",
    year: "2023",
    type: "Nhóm",
    members: [
      { name: "Vũ Văn F", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Đặng Thị G", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Bùi Văn H", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/event-management",
    demoUrl: "https://event-management-demo.vercel.app",
  },
  {
    id: "personal-portfolio-template",
    title: "Personal Portfolio Template",
    description: "Template portfolio cá nhân dành cho sinh viên IT, dễ dàng tùy chỉnh và triển khai.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["Vue.js", "Nuxt.js", "SCSS", "Netlify"],
    category: "Web",
    year: "2023",
    type: "Cá nhân",
    members: [{ name: "Ngô Văn I", avatar: "/placeholder.svg?height=40&width=40" }],
    githubUrl: "https://github.com/bcn-iuh/portfolio-template",
    demoUrl: "https://portfolio-template-demo.netlify.app",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc nhóm với tính năng real-time collaboration và notification.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["Flutter", "Dart", "Supabase", "GetX"],
    category: "App",
    year: "2023",
    type: "Nhóm",
    members: [
      { name: "Cao Thị J", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Lý Văn K", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/task-management",
    demoUrl: null,
  },
  {
    id: "bcn-website",
    title: "BCN Website",
    description: "Website chính thức của Ban Công Nghệ, giới thiệu thông tin và hoạt động của BCN.",
    image: "/placeholder.svg?height=200&width=400",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Web",
    year: "2024",
    type: "Nhóm",
    members: [
      { name: "Đinh Văn L", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Tô Thị M", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/bcn-website",
    demoUrl: "https://bcn-iuh.vercel.app",
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesYear = yearFilter === "all" || project.year === yearFilter
    const matchesType = typeFilter === "all" || project.type === typeFilter

    return matchesSearch && matchesCategory && matchesYear && matchesType
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

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h3 className="font-semibold">Bộ lọc dự án</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tìm kiếm dự án..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Loại dự án" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="Web">Web</SelectItem>
                <SelectItem value="App">Mobile App</SelectItem>
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Năm thực hiện" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả năm</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Loại nhóm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="Nhóm">Nhóm</SelectItem>
                <SelectItem value="Cá nhân">Cá nhân</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
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

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Team Members */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Thành viên tham gia:</p>
                  <div className="flex items-center gap-2">
                    {project.members.map((member, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span className="text-xs text-gray-600">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={`/projects/${project.id}`}>Chi Tiết</Link>
                  </Button>
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  )}
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

        {/* Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-gray-600">Tổng dự án</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter((p) => p.category === "Web").length}
              </div>
              <div className="text-gray-600">Dự án Web</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.filter((p) => p.category === "App").length}
              </div>
              <div className="text-gray-600">Ứng dụng Mobile</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {new Set(projects.flatMap((p) => p.members.map((m) => m.name))).size}
              </div>
              <div className="text-gray-600">Thành viên tham gia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
