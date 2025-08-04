"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, ExternalLink, Mail, Filter, Search, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { memberGroups, memberRoles, type Member } from "@/data/portfolio"
import { getAllMembers } from "@/lib/firestoreService"



export default function MembersPage() {
  const [roleFilter, setRoleFilter] = useState("Tất cả")
  const [searchQuery, setSearchQuery] = useState("")
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersData = await getAllMembers()
        setMembers(membersData)
      } catch (error) {
        console.error("Error fetching members:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  const filteredMembers = members.filter((member: Member) => {
    const matchesRole = roleFilter === "Tất cả" || member.role === roleFilter
    const matchesSearch = searchQuery === "" || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.skills.some((skill: string) => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      member.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesRole && matchesSearch
  })

  const getGroupColor = (group: string) => {
    const groupInfo = memberGroups.find((g) => g.id === group)
    return groupInfo?.color || "bg-gray-100 text-gray-800"
  }

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Thành Viên BCN</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gặp gỡ đội ngũ tài năng của Ban Công Nghệ - những người đang cùng nhau xây dựng tương lai công nghệ
            </p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Đang tải thông tin thành viên...</p>
            </div>
          </div>
        </div>
      </div>
    )
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

        {/* Filters */}
        <div className="space-y-6 mb-8">
          {/* Role Filter */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Vai trò</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {memberRoles.map((role) => (
                <Button
                  key={role}
                  variant={roleFilter === role ? "default" : "outline"}
                  onClick={() => setRoleFilter(role)}
                  className="rounded-full text-sm"
                  size="sm"
                >
                  {role}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {role === "Tất cả" 
                      ? members.length 
                      : members.filter((m: Member) => m.role === role).length
                    }
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Tìm kiếm theo tên, kỹ năng hoặc mô tả..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-full border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
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

          {/* Reset Button */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => {
                setRoleFilter("Tất cả")
                setSearchQuery("")
              }}
              className="rounded-full"
            >
              <Filter className="h-4 w-4 mr-2" />
              Xóa tất cả bộ lọc
            </Button>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member: Member) => (
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
                    <Link href={`/portfolio/${member.id}`}>{member.name}</Link>
                  </h3>
                  <Badge className={getGroupColor(member.group)}>{member.role}</Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 mb-2">Kỹ năng:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill: string) => (
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
            <p className="text-gray-600 mb-4">
              {searchQuery 
                ? `Không có kết quả nào cho "${searchQuery}". Thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc.`
                : "Thử thay đổi bộ lọc để xem thêm thành viên"
              }
            </p>
            {(searchQuery || roleFilter !== "Tất cả") && (
              <Button
                onClick={() => {
                  setRoleFilter("Tất cả")
                  setSearchQuery("")
                }}
                variant="outline"
                className="rounded-full"
              >
                Xóa tất cả bộ lọc
              </Button>
            )}
          </div>
        )}

        {/* Stats */}
        {/* <div className="mt-16 bg-gray-50 rounded-lg p-8">
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
        </div> */}
      </div>
    </div>
  )
}
