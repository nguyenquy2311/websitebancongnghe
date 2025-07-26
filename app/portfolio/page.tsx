"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, ExternalLink, Mail, Filter } from "lucide-react"
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

const roles = ["Tất cả", "Leader", "Core Team", "Web Developer", "App Developer", "Designer"]

export default function MembersPage() {
  const [groupFilter, setGroupFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("Tất cả")
  const [yearFilter, setYearFilter] = useState("all")

  const filteredMembers = members.filter((member) => {
    const matchesGroup = groupFilter === "all" || member.group === groupFilter
    const matchesRole = roleFilter === "Tất cả" || member.role === roleFilter
    const matchesYear = yearFilter === "all" || member.joinYear === yearFilter

    return matchesGroup && matchesRole && matchesYear
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

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <h3 className="font-semibold">Bộ lọc thành viên</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Vai trò" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Năm tham gia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả năm</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setGroupFilter("all")
                setRoleFilter("Tất cả")
                setYearFilter("all")
              }}
            >
              Xóa bộ lọc
            </Button>
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
                    <Link href={`/members/${member.id}`}>Xem Profile</Link>
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
            <p className="text-gray-600">Thử thay đổi bộ lọc để xem thêm thành viên</p>
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
