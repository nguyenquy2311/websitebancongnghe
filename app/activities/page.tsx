"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Clock, BookOpen, Star, Filter, ChevronRight, Loader2 } from "lucide-react"
import { getAllActivities, activityTypes } from "@/data/activities"
import Image from "next/image"
import Link from "next/link"

interface Activity {
  id: string
  title: string
  type: string
  category: string
  description: string
  registrationStartDateTime?: string
  registrationDeadline?: string
  startDateTime?: string
  endDateTime?: string
  date?: string
  time?: string
  location: string
  capacity: number
  registered: number
  status: string
  allowRegistration?: boolean
  image?: string
  instructor: string
  level: string
  tags?: string[]
  agenda?: Array<{
    time: string
    title: string
    description: string
  }>
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllActivities()
      .then((data) => {
        setActivities(data as Activity[])
      })
      .finally(() => setLoading(false))
  }, [])

  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Tính trạng thái thực tế dựa trên 4 mốc thời gian
  const getActivityRealStatus = (activity: Activity) => {
    const currentTime = new Date()

    if (activity.registrationStartDateTime && activity.registrationDeadline &&
      activity.startDateTime && activity.endDateTime) {

      const registrationStart = new Date(activity.registrationStartDateTime)
      const registrationEnd = new Date(activity.registrationDeadline)
      const eventStart = new Date(activity.startDateTime)
      const eventEnd = new Date(activity.endDateTime)

      // Đã kết thúc sự kiện
      if (currentTime > eventEnd) {
        return "completed"
      }

      // Đang diễn ra sự kiện
      if (currentTime >= eventStart && currentTime <= eventEnd) {
        return "ongoing"
      }

      // Đã hết hạn đăng ký nhưng chưa bắt đầu sự kiện
      if (currentTime > registrationEnd && currentTime < eventStart) {
        return "registration_closed"
      }

      // Đang trong thời gian đăng ký
      if (currentTime >= registrationStart && currentTime <= registrationEnd) {
        return "upcoming"
      }

      // Chưa mở đăng ký
      if (currentTime < registrationStart) {
        return "waiting_registration"
      }
    }

    // Fallback về status gốc nếu thiếu thông tin
    return activity.status
  }

  const filteredActivities = activities.filter((activity) => {
    const matchesType = typeFilter === "all" || activity.type === typeFilter
    const matchesCategory = categoryFilter === "all" || activity.category === categoryFilter

    // Lọc theo trạng thái thực tế (sử dụng trạng thái động)
    const realStatus = getActivityRealStatus(activity)
    const matchesStatus = statusFilter === "all" || statusFilter === realStatus

    // Hiển thị tất cả sự kiện đã mở đăng ký (không ẩn sự kiện đã kết thúc)
    const currentTime = new Date()
    let shouldShowActivity = true

    if (activity.registrationStartDateTime) {
      const registrationStart = new Date(activity.registrationStartDateTime)

      // Chỉ ẩn những sự kiện chưa mở đăng ký
      const hasRegistrationStarted = registrationStart <= currentTime
      shouldShowActivity = hasRegistrationStarted
    }

    return matchesType && matchesStatus && matchesCategory && shouldShowActivity
  })

  // Get upcoming events from activities
  const getUpcomingEvents = () => {
    const currentTime = new Date()

    const filtered = activities.filter((activity) => {

      // Chỉ hiển thị sự kiện chưa mở đăng ký (registration start > now)
      if (activity.registrationStartDateTime) {
        const registrationStart = new Date(activity.registrationStartDateTime)
        const hasRegistrationNotStarted = registrationStart > currentTime

        // Chỉ hiển thị nếu chưa mở đăng ký
        return hasRegistrationNotStarted
      }

      return false
    })

    return filtered
      .sort((a, b) => {
        // Sort by registration start time (earliest first)
        const getRegistrationStartTime = (activity: Activity) => {
          if (activity.registrationStartDateTime) {
            return new Date(activity.registrationStartDateTime).getTime()
          }
          return 0
        }
        return getRegistrationStartTime(a) - getRegistrationStartTime(b)
      })
      .slice(0, 5) // Get only next 5 upcoming events
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800"
      case "ongoing":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      case "registration_closed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Đang chờ đăng ký"
      case "ongoing":
        return "Đang diễn ra"
      case "completed":
        return "Đã kết thúc"
      case "registration_closed":
        return "Hết hạn đăng ký"
      default:
        return status
    }
  }

  // Loading Component
  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="animate-pulse">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="aspect-video md:aspect-square bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none"></div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                    <div className="h-4 w-36 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-gray-200 rounded"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )

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
                {loading ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="border-l-4 border-gray-200 pl-4 animate-pulse">
                        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-1/3 bg-gray-200 rounded mb-2"></div>
                        <div className="h-5 w-16 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : getUpcomingEvents().length > 0 ? (
                  getUpcomingEvents().map((event, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      {event.registrationStartDateTime && (
                        <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                          <Clock className="h-3 w-3" />
                          Mở đăng ký: {new Date(event.registrationStartDateTime).toLocaleDateString("en-GB")} {new Date(event.registrationStartDateTime).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                      <Badge variant="outline" className="mt-2 text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500 text-sm">
                    Không có sự kiện sắp tới
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Activity Types */}
            <Card>
              <CardHeader>
                <CardTitle>Loại Hoạt Động</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {activityTypes.map((type) => {
                  // Chỉ đếm những hoạt động đã mở đăng ký
                  const getRegistrationOpenedActivitiesCount = (typeId: string) => {
                    const currentTime = new Date()

                    const activitiesForType = typeId === "all" ? activities : activities.filter((a) => a.type === typeId)

                    return activitiesForType.filter((activity) => {
                      // Chỉ tính những hoạt động đã mở đăng ký
                      if (activity.registrationStartDateTime) {
                        const registrationStart = new Date(activity.registrationStartDateTime)
                        return registrationStart <= currentTime
                      }
                      return true // Nếu không có thời gian đăng ký thì vẫn tính
                    }).length
                  }

                  return (
                    <Button
                      key={type.id}
                      variant={typeFilter === type.id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setTypeFilter(type.id)}
                      disabled={loading}
                    >
                      <type.icon className="h-4 w-4 mr-2" />
                      {type.name}
                      <Badge variant="secondary" className="ml-auto">
                        {loading ? "..." : getRegistrationOpenedActivitiesCount(type.id)}
                      </Badge>
                    </Button>
                  )
                })}
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
                {loading && <Loader2 className="h-4 w-4 animate-spin text-blue-500" />}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Select value={statusFilter} onValueChange={setStatusFilter} disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả trạng thái</SelectItem>
                    <SelectItem value="upcoming">Đang chờ đăng ký</SelectItem>
                    <SelectItem value="ongoing">Đang diễn ra</SelectItem>
                    <SelectItem value="registration_closed">Hết hạn đăng ký</SelectItem>
                    <SelectItem value="completed">Đã kết thúc</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={categoryFilter} onValueChange={setCategoryFilter} disabled={loading}>
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
                  disabled={loading}
                >
                  Xóa bộ lọc
                </Button>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="space-y-8">
                <div className="flex items-center justify-center py-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span>Đang tải hoạt động...</span>
                  </div>
                </div>
                <LoadingSkeleton />
              </div>
            ) : (
              <>
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
                          <Link href={`/activities/${activity.id}`}>
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="outline">{activity.type}</Badge>
                                  <Badge className={getStatusColor(getActivityRealStatus(activity))}>{getStatusText(getActivityRealStatus(activity))}</Badge>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="space-y-2">
                                {activity.registrationStartDateTime && (
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar className="h-4 w-4" />
                                    Mở đăng ký: {new Date(activity.registrationStartDateTime).toLocaleDateString("en-GB")} {new Date(activity.registrationStartDateTime).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}
                                  </div>
                                )}
                                {activity.registrationDeadline && (
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="h-4 w-4" />
                                    Hạn đăng ký: {new Date(activity.registrationDeadline).toLocaleDateString("en-GB")} {new Date(activity.registrationDeadline).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Calendar className="h-4 w-4" />
                                  Bắt đầu: {activity.startDateTime
                                    ? `${new Date(activity.startDateTime).toLocaleDateString("en-GB")} ${new Date(activity.startDateTime).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}`
                                    : activity.date ? `${new Date(activity.date).toLocaleDateString("en-GB")} ${activity.time?.split(' - ')[0] || activity.time}` : 'N/A'
                                  }
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Clock className="h-4 w-4" />
                                  Kết thúc: {activity.endDateTime
                                    ? `${new Date(activity.endDateTime).toLocaleDateString("en-GB")} ${new Date(activity.endDateTime).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}`
                                    : activity.date ? `${new Date(activity.date).toLocaleDateString("en-GB")} ${activity.time?.split(' - ')[1] || activity.time}` : 'N/A'
                                  }
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
                              {(activity.tags ?? []).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Agenda Preview */}
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm mb-2">Nội dung chính:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {(activity.agenda ?? []).slice(0, 2).map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <ChevronRight className="h-3 w-3 mt-1 flex-shrink-0" />
                                    {item.title}
                                  </li>
                                ))}
                                {(activity.agenda?.length ?? 0) > 2 && (
                                  <li className="text-blue-600 text-xs">+{(activity.agenda?.length ?? 0) - 2} nội dung khác...</li>
                                )}
                              </ul>
                            </div>
                          </Link>


                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            {getActivityRealStatus(activity) === "upcoming" && (
                              <Button variant="default" className="flex-1">
                                Đăng Ký Tham Gia
                              </Button>
                            )}
                            {getActivityRealStatus(activity) === "registration_closed" && (
                              <Button variant="secondary" className="flex-1" disabled>
                                Hết Hạn Đăng Ký
                              </Button>
                            )}
                            {getActivityRealStatus(activity) === "ongoing" && (
                              <Button variant="default" className="flex-1 bg-blue-600">
                                Đang Diễn Ra
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}