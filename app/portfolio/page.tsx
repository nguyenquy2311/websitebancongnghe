"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, ExternalLink, Mail, Filter, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for members
const members = [
  {
    id: "nguyen-van-anh",
    name: "Nguyễn Văn Anh",
    role: "Leader",
    group: "Leader",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Passionate về Full-stack Development và Project Management. Mục tiêu trở thành Tech Lead tại các công ty công nghệ hàng đầu.",
    skills: ["React", "Node.js", "Python", "Leadership"],
    joinYear: "2022",
    github: "https://github.com/nguyenvananh",
    linkedin: "https://linkedin.com/in/nguyenvananh",
    portfolio: "https://nguyenvananh.dev",
    email: "anh.nguyen@student.iuh.edu.vn",
  },
  {
    id: "tran-thi-binh",
    name: "Trần Thị Bình",
    role: "Core Team",
    group: "Core",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Frontend Developer với đam mê UI/UX Design. Yêu thích tạo ra những giao diện người dùng đẹp và thân thiện.",
    skills: ["React", "Vue.js", "Figma", "Tailwind CSS"],
    joinYear: "2022",
    github: "https://github.com/tranthibinh",
    linkedin: "https://linkedin.com/in/tranthibinh",
    portfolio: null,
    email: "binh.tran@student.iuh.edu.vn",
  },
  {
    id: "le-van-cuong",
    name: "Lê Văn Cường",
    role: "Web Developer",
    group: "Web",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Backend Developer chuyên về API development và database design. Mong muốn trở thành Solution Architect.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    joinYear: "2023",
    github: "https://github.com/levancuong",
    linkedin: "https://linkedin.com/in/levancuong",
    portfolio: "https://levancuong.dev",
    email: "cuong.le@student.iuh.edu.vn",
  },
  {
    id: "pham-thi-dung",
    name: "Phạm Thị Dung",
    role: "App Developer",
    group: "App",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Mobile App Developer với kinh nghiệm React Native và Flutter. Đam mê tạo ra những ứng dụng mobile hữu ích.",
    skills: ["React Native", "Flutter", "Dart", "Firebase"],
    joinYear: "2023",
    github: "https://github.com/phamthidung",
    linkedin: "https://linkedin.com/in/phamthidung",
    portfolio: null,
    email: "dung.pham@student.iuh.edu.vn",
  },
  {
    id: "hoang-van-em",
    name: "Hoàng Văn Em",
    role: "Web Developer",
    group: "Web",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Frontend Developer yêu thích JavaScript và các framework hiện đại. Mục tiêu trở thành Senior Frontend Developer.",
    skills: ["JavaScript", "React", "Next.js", "TypeScript"],
    joinYear: "2024",
    github: "https://github.com/hoangvanem",
    linkedin: "https://linkedin.com/in/hoangvanem",
    portfolio: "https://hoangvanem.vercel.app",
    email: "em.hoang@student.iuh.edu.vn",
  },
  {
    id: "vu-thi-phuong",
    name: "Vũ Thị Phương",
    role: "Designer",
    group: "Web",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "UI/UX Designer với đam mê tạo ra những trải nghiệm người dùng tuyệt vời. Chuyên về Design System và User Research.",
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
    joinYear: "2023",
    github: null,
    linkedin: "https://linkedin.com/in/vuthiphuong",
    portfolio: "https://vuthiphuong.design",
    email: "phuong.vu@student.iuh.edu.vn",
  },
  {
    id: "dang-van-giang",
    name: "Đặng Văn Giang",
    role: "App Developer",
    group: "App",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "iOS Developer với kinh nghiệm Swift và SwiftUI. Đam mê phát triển ứng dụng iOS native với performance cao.",
    skills: ["Swift", "SwiftUI", "iOS", "Xcode"],
    joinYear: "2024",
    github: "https://github.com/dangvangiang",
    linkedin: "https://linkedin.com/in/dangvangiang",
    portfolio: null,
    email: "giang.dang@student.iuh.edu.vn",
  },
  {
    id: "bui-thi-hoa",
    name: "Bùi Thị Hoa",
    role: "Web Developer",
    group: "Web",
    avatar: "/placeholder.svg?height=150&width=150",
    description:
      "Full-stack Developer với kinh nghiệm cả Frontend và Backend. Yêu thích làm việc với các công nghệ mới và thử thách bản thân.",
    skills: ["Python", "Django", "React", "PostgreSQL"],
    joinYear: "2024",
    github: "https://github.com/buithihoa",
    linkedin: "https://linkedin.com/in/buithihoa",
    portfolio: "https://buithihoa.dev",
    email: "hoa.bui@student.iuh.edu.vn",
  },
]

const groups = [
  { id: "all", name: "Tất cả", color: "bg-gray-100 text-gray-800" },
  { id: "Leader", name: "Leader", color: "bg-red-100 text-red-800" },
  { id: "Core", name: "Core Team", color: "bg-blue-100 text-blue-800" },
  { id: "Web", name: "Nhóm Web", color: "bg-green-100 text-green-800" },
  { id: "App", name: "Nhóm App", color: "bg-purple-100 text-purple-800" },
]

export default function MembersPage() {
  const [groupFilter, setGroupFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMembers = members.filter((member) => {
    const matchesGroup = groupFilter === "all" || member.group === groupFilter
    const matchesSearch = searchQuery === "" || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      member.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesGroup && matchesSearch
  })

  const getGroupColor = (group: string) => {
    const groupInfo = groups.find((g) => g.id === group)
    return groupInfo?.color || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Thành Viên BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gặp gỡ đội ngũ tài năng của Ban Công Nghệ - những người đang cùng nhau xây dựng tương lai công nghệ
          </p>
        </div>

        {/* Group Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {groups.map((group) => (
            <Button
              key={group.id}
              variant={groupFilter === group.id ? "default" : "outline"}
              onClick={() => setGroupFilter(group.id)}
              className="rounded-full"
            >
              {group.name}
              <Badge variant="secondary" className="ml-2">
                {group.id === "all" ? members.length : members.filter((m) => m.group === group.id).length}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Tìm kiếm theo tên, kỹ năng hoặc mô tả..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-0 bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
            {searchQuery && (
              <Button
                onClick={() => setSearchQuery("")}
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </Button>
            )}
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Avatar and Basic Info */}
                <div className="text-center mb-4">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 hover:text-blue-600 transition-colors">
                    <Link href={`/members/${member.id}`}>{member.name}</Link>
                  </h3>
                  <Badge className={getGroupColor(member.group)}>{member.role}</Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Kỹ năng:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Join Year */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500">Tham gia BCN từ năm {member.joinYear}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`/portfolio/${member.id}`}>
                      Xem chi tiết
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>

                  {member.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={member.github} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {member.linkedin && (
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={member.linkedin} target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {member.portfolio && (
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={member.portfolio} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Không tìm thấy thành viên</h3>
            <p className="text-gray-600">
              {searchQuery 
                ? `Không có kết quả nào cho "${searchQuery}". Thử tìm kiếm với từ khóa khác.`
                : "Thử thay đổi bộ lọc để xem thêm thành viên"
              }
            </p>
            {searchQuery && (
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="mt-4"
              >
                Xóa tìm kiếm
              </Button>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{members.length}</div>
              <div className="text-gray-600">Tổng thành viên</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {members.filter((m) => m.group === "Web").length}
              </div>
              <div className="text-gray-600">Nhóm Web</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {members.filter((m) => m.group === "App").length}
              </div>
              <div className="text-gray-600">Nhóm App</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {new Set(members.flatMap((m) => m.skills)).size}
              </div>
              <div className="text-gray-600">Kỹ năng đa dạng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
