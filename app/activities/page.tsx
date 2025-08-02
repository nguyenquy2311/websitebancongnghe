"use client"

import { useState, useEffect  } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Clock, BookOpen, Star, Filter, ChevronRight, ArrowRight } from "lucide-react"
import { activities, activityTypes,upcomingEvents } from "@/data/activities"
import { getUserByUserID, testGetAllUsers } from "@/lib/firestoreService"
import Image from "next/image"
import Link from "next/link"

export default function ActivitiesPage() {
  const userID = "I27yO92RsOOgF11QYVmA";
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserByUserID(userID)
      .then((data) => {
        console.log("📦 Received data:", data);
        setUser(data);
        setError(data ? null : "User not found");
      })
      .catch(() => setError("Failed to fetch user"))
      .finally(() => setLoading(false));
    
    // Test để xem có users nào không
    testGetAllUsers();
  }, [userID]);
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
                          className="object-contain rounded-t-lg md:rounded-l-lg md:rounded-t-none"
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
                              {item.title}
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
      <section className="py-20 bg-[#EBEAEF] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tham gia hành trình của BCN</h2>
          <p className="text-xl text-grey-100 mb-8 max-w-2xl mx-auto">
            Hãy trở thành một phần câu chuyện của BCN và cùng chúng tôi xây dựng tương lai công nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0E7490] text-white hover:bg-[#22D3EE]" asChild>
              <Link href="/join">
                Tham gia BCN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
