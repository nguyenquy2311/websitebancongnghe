"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample projects data
const projects = [
  {
    id: 1,
    name: "IUH Student Portal",
    description: "Hệ thống quản lý sinh viên hiện đại với giao diện thân thiện",
    image: "/placeholder.svg?height=300&width=400",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    category: "Web",
    year: 2024,
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
    id: 2,
    name: "BCN Mobile App",
    description: "Ứng dụng di động cho thành viên BCN, quản lý hoạt động và sự kiện",
    image: "/placeholder.svg?height=300&width=400",
    techStack: ["React Native", "Firebase", "TypeScript"],
    category: "App",
    year: 2024,
    type: "Nhóm",
    members: [
      { name: "Phạm Văn D", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Hoàng Thị E", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/bcn-mobile",
    demoUrl: null,
  },
  {
    id: 3,
    name: "E-commerce Dashboard",
    description: "Dashboard quản lý bán hàng online với analytics chi tiết",
    image: "/placeholder.svg?height=300&width=400",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
    category: "Web",
    year: 2023,
    type: "Cá nhân",
    members: [{ name: "Võ Văn F", avatar: "/placeholder.svg?height=40&width=40" }],
    githubUrl: "https://github.com/bcn-iuh/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dashboard-demo.vercel.app",
  },
  {
    id: 4,
    name: "Smart Attendance System",
    description: "Hệ thống điểm danh thông minh sử dụng AI và computer vision",
    image: "/placeholder.svg?height=300&width=400",
    techStack: ["Python", "OpenCV", "TensorFlow", "Flask"],
    category: "AI",
    year: 2023,
    type: "Nhóm",
    members: [
      { name: "Đặng Thị G", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Bùi Văn H", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    githubUrl: "https://github.com/bcn-iuh/smart-attendance",
    demoUrl: null,
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [selectedYear, setSelectedYear] = useState("Tất cả")
  const [selectedType, setSelectedType] = useState("Tất cả")

  const categories = ["Tất cả", "Web", "App", "AI"]
  const years = ["Tất cả", "2024", "2023", "2022"]
  const types = ["Tất cả", "Nhóm", "Cá nhân"]

  const filteredProjects = projects.filter((project) => {
    return (
      (selectedCategory === "Tất cả" || project.category === selectedCategory) &&
      (selectedYear === "Tất cả" || project.year.toString() === selectedYear) &&
      (selectedType === "Tất cả" || project.type === selectedType)
    )
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dự án của BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các sản phẩm và dự án mà thành viên BCN đã triển khai, từ website đến ứng dụng mobile và các giải
            pháp AI
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Bộ lọc</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Năm</label>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loại</label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge variant="outline">{project.year}</Badge>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Members */}
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Thành viên</h4>
                  <div className="flex -space-x-2">
                    {project.members.map((member, index) => (
                      <Avatar key={index} className="border-2 border-white w-8 h-8">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild size="sm">
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không tìm thấy dự án nào phù hợp với bộ lọc</p>
          </div>
        )}
      </div>
    </div>
  )
}
