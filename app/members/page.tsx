"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, ExternalLink, Filter } from "lucide-react"
import Link from "next/link"

// Sample members data
const members = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    role: "Leader",
    group: "Leader",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Full-stack developer với 3 năm kinh nghiệm. Đam mê xây dựng sản phẩm có tác động tích cực.",
    skills: ["React", "Node.js", "Python", "AWS"],
    joinYear: 2022,
    github: "https://github.com/nguyenvanan",
    linkedin: "https://linkedin.com/in/nguyenvanan",
    portfolio: "https://nguyenvanan.dev",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    role: "Core Team",
    group: "Core Team",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "UI/UX Designer và Frontend Developer. Yêu thích tạo ra những trải nghiệm người dùng tuyệt vời.",
    skills: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    joinYear: 2022,
    github: "https://github.com/tranthibinh",
    linkedin: "https://linkedin.com/in/tranthibinh",
    portfolio: null,
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    role: "Web Developer",
    group: "Web Team",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Frontend developer chuyên về React và Vue.js. Luôn cập nhật những công nghệ mới nhất.",
    skills: ["React", "Vue.js", "JavaScript", "CSS"],
    joinYear: 2023,
    github: "https://github.com/levancuong",
    linkedin: "https://linkedin.com/in/levancuong",
    portfolio: "https://levancuong.portfolio.dev",
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    role: "App Developer",
    group: "App Team",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Mobile developer với kinh nghiệm phát triển ứng dụng React Native và Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "TypeScript"],
    joinYear: 2023,
    github: "https://github.com/phamthidung",
    linkedin: "https://linkedin.com/in/phamthidung",
    portfolio: null,
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    role: "Backend Developer",
    group: "Web Team",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Backend developer chuyên về Node.js và Python. Đam mê xây dựng hệ thống scalable.",
    skills: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
    joinYear: 2024,
    github: "https://github.com/hoangvanem",
    linkedin: "https://linkedin.com/in/hoangvanem",
    portfolio: null,
  },
  {
    id: 6,
    name: "Võ Thị Phương",
    role: "Designer",
    group: "Core Team",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Graphic designer và UI/UX designer. Tạo ra những thiết kế đẹp mắt và thân thiện với người dùng.",
    skills: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping"],
    joinYear: 2024,
    github: null,
    linkedin: "https://linkedin.com/in/vothiphuong",
    portfolio: "https://vothiphuong.design",
  },
]

export default function MembersPage() {
  const [selectedGroup, setSelectedGroup] = useState("Tất cả")
  const [selectedRole, setSelectedRole] = useState("Tất cả")
  const [selectedYear, setSelectedYear] = useState("Tất cả")

  const groups = ["Tất cả", "Leader", "Core Team", "Web Team", "App Team"]
  const roles = ["Tất cả", "Leader", "Core Team", "Web Developer", "App Developer", "Backend Developer", "Designer"]
  const years = ["Tất cả", "2024", "2023", "2022"]

  const filteredMembers = members.filter((member) => {
    return (
      (selectedGroup === "Tất cả" || member.group === selectedGroup) &&
      (selectedRole === "Tất cả" || member.role === selectedRole) &&
      (selectedYear === "Tất cả" || member.joinYear.toString() === selectedYear)
    )
  })

  const groupedMembers = groups.slice(1).reduce(
    (acc, group) => {
      acc[group] = filteredMembers.filter((member) => member.group === group)
      return acc
    },
    {} as Record<string, typeof members>,
  )

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thành viên BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Làm quen với những thành viên tài năng của Ban Công Nghệ, những người đang cùng nhau xây dựng tương lai công
            nghệ
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Nhóm</label>
              <div className="flex flex-wrap gap-2">
                {groups.map((group) => (
                  <Button
                    key={group}
                    variant={selectedGroup === group ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGroup(group)}
                  >
                    {group}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vai trò</label>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <Button
                    key={role}
                    variant={selectedRole === role ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRole(role)}
                  >
                    {role}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Năm tham gia</label>
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
          </div>
        </div>

        {/* Members by Group */}
        {selectedGroup === "Tất cả" ? (
          Object.entries(groupedMembers).map(
            ([group, groupMembers]) =>
              groupMembers.length > 0 && (
                <div key={group} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{group}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupMembers.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              ),
          )
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không tìm thấy thành viên nào phù hợp với bộ lọc</p>
          </div>
        )}
      </div>
    </div>
  )
}

function MemberCard({ member }: { member: (typeof members)[0] }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <Badge variant="secondary" className="mt-2">
            {member.role}
          </Badge>
        </div>

        <p className="text-gray-600 text-sm mb-4 text-center">{member.description}</p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Kỹ năng</h4>
          <div className="flex flex-wrap gap-1">
            {member.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Join Year */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">Tham gia từ: {member.joinYear}</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 justify-center">
          {member.github && (
            <Button asChild variant="outline" size="sm">
              <Link href={member.github} target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {member.linkedin && (
            <Button asChild variant="outline" size="sm">
              <Link href={member.linkedin} target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {member.portfolio && (
            <Button asChild variant="outline" size="sm">
              <Link href={member.portfolio} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
