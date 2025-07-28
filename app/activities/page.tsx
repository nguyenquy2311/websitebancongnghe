"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Clock, BookOpen, Trophy, Mic, Heart, Star, Filter, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const activities = [
  {
    id: "workshop-react-2024",
    title: "Workshop React & Next.js",
    type: "Workshop",
    category: "Technical",
    description: "Học cách xây dựng ứng dụng web hiện đại với React và Next.js từ cơ bản đến nâng cao",
    date: "2024-02-15",
    time: "19:00 - 21:00",
    location: "Phòng Lab A1.101",
    capacity: 30,
    registered: 25,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Nguyễn Văn Anh",
    level: "Beginner",
    tags: ["React", "Next.js", "JavaScript"],
    agenda: [
      "Giới thiệu React và ecosystem",
      "Tạo component và state management",
      "Routing với Next.js",
      "Hands-on project",
    ],
  },
  {
    id: "hackathon-2024",
    title: "BCN Hackathon 2024",
    type: "Competition",
    category: "Event",
    description: "Cuộc thi lập trình 48 giờ với chủ đề 'AI for Education' - Giải thưởng lên đến 10 triệu đồng",
    date: "2024-03-20",
    time: "08:00 - 20:00",
    location: "Hội trường A",
    capacity: 100,
    registered: 85,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "BCN Team",
    level: "All Levels",
    tags: ["AI", "Machine Learning", "Competition"],
    agenda: [
      "Opening ceremony & team formation",
      "Coding phase (48 hours)",
      "Mentoring sessions",
      "Final presentation & judging",
    ],
  },
  {
    id: "tech-talk-ai",
    title: "Tech Talk: AI trong Thực Tiễn",
    type: "Tech Talk",
    category: "Knowledge",
    description: "Chia sẻ về ứng dụng AI trong các dự án thực tế và xu hướng công nghệ tương lai",
    date: "2024-01-25",
    time: "18:30 - 20:00",
    location: "Phòng hội thảo B2.201",
    capacity: 50,
    registered: 50,
    status: "completed",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Trần Minh Khoa (Google)",
    level: "Intermediate",
    tags: ["AI", "Machine Learning", "Career"],
    agenda: ["AI landscape overview", "Real-world AI applications", "Career opportunities in AI", "Q&A session"],
  },
  {
    id: "team-building-2024",
    title: "Team Building BCN 2024",
    type: "Team Building",
    category: "Social",
    description: "Hoạt động gắn kết đội nhóm với các trò chơi, thử thách và BBQ party",
    date: "2024-01-10",
    time: "08:00 - 17:00",
    location: "Khu du lịch Đại Nam",
    capacity: 80,
    registered: 75,
    status: "completed",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "BCN Core Team",
    level: "All Levels",
    tags: ["Team Building", "Networking", "Fun"],
    agenda: ["Ice breaking games", "Team challenges", "BBQ lunch", "Sharing & networking"],
  },
  {
    id: "mobile-dev-workshop",
    title: "Mobile Development với Flutter",
    type: "Workshop",
    category: "Technical",
    description: "Tìm hiểu cách phát triển ứng dụng mobile cross-platform với Flutter",
    date: "2024-02-28",
    time: "19:00 - 21:30",
    location: "Phòng Lab A2.102",
    capacity: 25,
    registered: 20,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Phạm Thị Dung",
    level: "Intermediate",
    tags: ["Flutter", "Mobile", "Dart"],
    agenda: ["Flutter fundamentals", "Widget system", "State management", "Build first app"],
  },
  {
    id: "code-review-session",
    title: "Code Review & Best Practices",
    type: "Study Group",
    category: "Technical",
    description: "Buổi học nhóm về code review, clean code và best practices trong lập trình",
    date: "2024-02-08",
    time: "19:30 - 21:00",
    location: "Online (Google Meet)",
    capacity: 40,
    registered: 35,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    instructor: "Lê Văn Cường",
    level: "Intermediate",
    tags: ["Code Review", "Best Practices", "Clean Code"],
    agenda: ["Code review principles", "Common code smells", "Refactoring techniques", "Live code review session"],
  },
]

const activityTypes = [
  { id: "all", name: "Tất cả", icon: Calendar, color: "bg-gray-100 text-gray-800" },
  { id: "Workshop", name: "Workshop", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
  { id: "Tech Talk", name: "Tech Talk", icon: Mic, color: "bg-green-100 text-green-800" },
  { id: "Competition", name: "Cuộc thi", icon: Trophy, color: "bg-yellow-100 text-yellow-800" },
  { id: "Team Building", name: "Team Building", icon: Heart, color: "bg-pink-100 text-pink-800" },
  { id: "Study Group", name: "Nhóm học", icon: Users, color: "bg-purple-100 text-purple-800" },
]

const upcomingEvents = [
  {
    title: "Git & GitHub Workshop",
    date: "2024-02-05",
    time: "19:00",
    type: "Workshop",
  },
  {
    title: "Career Talk: Làm việc tại Startup",
    date: "2024-02-12",
    time: "18:30",
    type: "Tech Talk",
  },
  {
    title: "UI/UX Design Challenge",
    date: "2024-02-18",
    time: "14:00",
    type: "Competition",
  },
]

export default function ActivitiesPage() {
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredActivities = activities.filter((activity) => {
    const matchesType = typeFilter === "all" || activity.type === typeFilter
    const matchesStatus = statusFilter === "all" || activity.status === statusFilter
    const matchesCategory = categoryFilter === "all" || activity.category === categoryFilter

    return matchesType && matchesStatus && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800"
      case "ongoing":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Sắp diễn ra"
      case "ongoing":
        return "Đang diễn ra"
      case "completed":
        return "Đã kết thúc"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
            <div className="lg:sticky lg:top-16 lg:self-start lg:max-h-[calc(100vh-40px)] lg:overflow-auto lg:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Sự Kiện Sắp Tới
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(event.date).toLocaleDateString("vi-VN")}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {event.type}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Activity Types */}
            <Card>
              <CardHeader>
                <CardTitle>Loại Hoạt Động</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {activityTypes.map((type) => (
                  <Button
                      key={type.id}
                      variant={typeFilter === type.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setTypeFilter(type.id)}
                  >
                    <type.icon className="h-4 w-4 mr-2" />
                    {type.name}
                    <Badge variant="secondary" className="ml-auto">
                      {type.id === "all" ? activities.length : activities.filter((a) => a.type === type.id).length}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <h3 className="font-semibold">Bộ lọc hoạt động</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả trạng thái</SelectItem>
                    <SelectItem value="upcoming">Sắp diễn ra</SelectItem>
                    <SelectItem value="ongoing">Đang diễn ra</SelectItem>
                    <SelectItem value="completed">Đã kết thúc</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả danh mục</SelectItem>
                    <SelectItem value="Technical">Kỹ thuật</SelectItem>
                    <SelectItem value="Knowledge">Kiến thức</SelectItem>
                    <SelectItem value="Event">Sự kiện</SelectItem>
                    <SelectItem value="Social">Xã hội</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setTypeFilter("all")
                    setStatusFilter("all")
                    setCategoryFilter("all")
                  }}
                >
                  Xóa bộ lọc
                </Button>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="space-y-6">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square relative">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{activity.type}</Badge>
                            <Badge className={getStatusColor(activity.status)}>{getStatusText(activity.status)}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            {new Date(activity.date).toLocaleDateString("vi-VN")}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            {activity.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            {activity.location}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            {activity.registered}/{activity.capacity} người tham gia
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="h-4 w-4" />
                            Instructor: {activity.instructor}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <BookOpen className="h-4 w-4" />
                            Level: {activity.level}
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {activity.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Agenda Preview */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Nội dung chính:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {activity.agenda.slice(0, 2).map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="h-3 w-3 mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                          {activity.agenda.length > 2 && (
                            <li className="text-blue-600 text-xs">+{activity.agenda.length - 2} nội dung khác...</li>
                          )}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {activity.status === "upcoming" && (
                          <Button variant="default" className="flex-1">
                            Đăng Ký Tham Gia
                          </Button>
                        )}
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Link href={`/activities/${activity.id}`}>Chi Tiết</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredActivities.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy hoạt động</h3>
                <p className="text-gray-600">Thử thay đổi bộ lọc để xem thêm hoạt động</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* rgba(234, 233, 238, 0.95) */}

      {/* CTA Section */}
      <section className="py-20 bg-[rgba(234,233,238,0.95)] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tham Gia Cộng Đồng BCN</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Đừng bỏ lỡ các hoạt động thú vị và bổ ích. Tham gia BCN để cập nhật thông tin sớm nhất!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:text-white hover:bg-cyan-700 text-black" asChild>
              <Link href="/join">Tham Gia BCN</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
