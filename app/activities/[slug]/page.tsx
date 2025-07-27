"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  CheckCircle,
  Star,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  ImageIcon,
  UserCheck,
  Target,
  Award,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock user authentication state
const useAuth = () => {
  const [user, setUser] = useState<{ id: string; name: string; avatar: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      // Mock logged in user
      setUser({
        id: "user123",
        name: "Nguyễn Văn A",
        avatar: "/placeholder.svg?height=40&width=40",
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  return { user, isLoading }
}

// Mock data for activities
const activities = [
  {
    slug: "workshop-react-2024",
    title: "Workshop: Làm web với React căn bản",
    date: "2024-04-17",
    time: "19:00 - 22:00",
    duration: "3 tiếng",
    format: "Offline",
    location: "Phòng Lab A1.101",
    status: "upcoming", // upcoming, ongoing, completed
    allowRegistration: true,
    registrationDeadline: "2024-04-15",
    capacity: 30,
    registered: 25,
    image: "/placeholder.svg?height=400&width=800",

    // Content
    objectives: [
      "Giúp các bạn thành viên làm quen với React, JSX và component-based thinking",
      "Thực hành tạo dự án React từ đầu với Vite",
      "Hiểu được cách quản lý state và props trong React components",
    ],

    agenda: [
      {
        time: "19:00 - 19:30",
        title: "Giới thiệu React",
        description: "Tổng quan về React, Virtual DOM và ecosystem",
      },
      {
        time: "19:30 - 20:30",
        title: "Tạo dự án với Vite",
        description: "Setup môi trường và tạo project đầu tiên",
      },
      {
        time: "20:30 - 21:30",
        title: "Code cùng mini-project",
        description: "Xây dựng Todo App đơn giản với React",
      },
      {
        time: "21:30 - 22:00",
        title: "Hỏi đáp cuối buổi",
        description: "Q&A và chia sẻ kinh nghiệm",
      },
    ],

    // Media
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    // Organizers
    organizers: [
      {
        id: "nguyen-van-anh",
        name: "Nguyễn Văn Anh",
        role: "Mentor chính",
        avatar: "/placeholder.svg?height=60&width=60",
        bio: "Full-stack Developer với 3+ năm kinh nghiệm React",
      },
      {
        id: "tran-thi-binh",
        name: "Trần Thị Bình",
        role: "Hỗ trợ kỹ thuật",
        avatar: "/placeholder.svg?height=60&width=60",
        bio: "Frontend Developer, chuyên về React và UI/UX",
      },
    ],

    // Results & Impact
    results: {
      participants: 28,
      satisfaction: 4.8,
      completionRate: 95,
      feedback: [
        "Workshop rất bổ ích, giảng viên nhiệt tình!",
        "Nội dung dễ hiểu, thực hành nhiều",
        "Mong có thêm workshop nâng cao",
      ],
    },

    // Tags
    tags: ["Workshop", "React", "Frontend", "Beginner"],

    // Related activities
    relatedActivities: ["vue-workshop-2024", "javascript-fundamentals"],
  },
]

// Mock registration data
const registrations = [
  { userId: "user456", userName: "Trần Văn B", avatar: "/placeholder.svg?height=40&width=40" },
  { userId: "user789", userName: "Lê Thị C", avatar: "/placeholder.svg?height=40&width=40" },
  // ... more registrations
]

export default function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const { user, isLoading: authLoading } = useAuth()
  const [isRegistered, setIsRegistered] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAllParticipants, setShowAllParticipants] = useState(false)

  const activity = activities.find((a) => a.slug === params.slug)

  useEffect(() => {
    if (user && activity) {
      // Check if user is already registered
      // This would be an API call in real app
      setIsRegistered(false) // Mock: user not registered yet
    }
  }, [user, activity])

  if (!activity) {
    notFound()
  }

  const handleRegistration = async () => {
    if (!user) {
      toast({
        title: "Cần đăng nhập",
        description: "Vui lòng đăng nhập để đăng ký tham gia hoạt động",
        variant: "destructive",
      })
      return
    }

    setIsRegistering(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsRegistered(true)
      toast({
        title: "Đăng ký thành công! ✅",
        description: "Bạn đã đăng ký tham gia hoạt động thành công. Chúng tôi sẽ gửi thông tin chi tiết qua email.",
      })
    } catch (error) {
      toast({
        title: "Đăng ký thất bại",
        description: "Có lỗi xảy ra, vui lòng thử lại sau",
        variant: "destructive",
      })
    } finally {
      setIsRegistering(false)
    }
  }

  const handleUnregister = async () => {
    setIsRegistering(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsRegistered(false)
      toast({
        title: "Hủy đăng ký thành công",
        description: "Bạn đã hủy đăng ký tham gia hoạt động",
      })
    } catch (error) {
      toast({
        title: "Hủy đăng ký thất bại",
        description: "Có lỗi xảy ra, vui lòng thử lại sau",
        variant: "destructive",
      })
    } finally {
      setIsRegistering(false)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.gallery.length) % activity.gallery.length)
  }

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

  const canRegister =
    activity.status === "upcoming" && activity.allowRegistration && new Date() < new Date(activity.registrationDeadline)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getStatusColor(activity.status)}>{getStatusText(activity.status)}</Badge>
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{activity.title}</h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(activity.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>
                      {activity.time} ({activity.duration})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>
                      {activity.format} - {activity.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>
                      {activity.registered}/{activity.capacity} người tham gia
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <Card className="sticky top-32">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5" />
                    Tham Gia Hoạt Động
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {authLoading ? (
                    <Button disabled className="w-full">
                      Đang tải...
                    </Button>
                  ) : !user ? (
                    <div className="space-y-3">
                      <Button disabled className="w-full opacity-50">
                        Đăng nhập để đăng ký
                      </Button>
                      <p className="text-sm text-gray-600 text-center">
                        <Link href="/login" className="text-blue-600 hover:underline">
                          Đăng nhập
                        </Link>{" "}
                        để tham gia hoạt động
                      </p>
                    </div>
                  ) : !canRegister ? (
                    <Button disabled className="w-full">
                      {activity.status === "completed" ? "Hoạt động đã kết thúc" : "Hết hạn đăng ký"}
                    </Button>
                  ) : isRegistered ? (
                    <div className="space-y-3">
                      <Button disabled className="w-full bg-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Đã đăng ký
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleUnregister}
                        disabled={isRegistering}
                        className="w-full bg-transparent"
                      >
                        {isRegistering ? "Đang hủy..." : "Hủy đăng ký"}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={handleRegistration} disabled={isRegistering} className="w-full">
                      {isRegistering ? "Đang đăng ký..." : "Đăng ký tham gia"}
                    </Button>
                  )}

                  <Separator />

                  {/* Quick Info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Số chỗ còn lại:</span>
                      <span className="font-medium">{activity.capacity - activity.registered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hạn đăng ký:</span>
                      <span className="font-medium">
                        {new Date(activity.registrationDeadline).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hình thức:</span>
                      <span className="font-medium">{activity.format}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Share */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" />
                      Chia sẻ
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Heart className="h-4 w-4 mr-2" />
                      Yêu thích
                    </Button>
                  </div>
                </CardContent>
                    <Card className="mt-10">
                    <CardHeader>
                    <CardTitle>Người Tổ Chức</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {activity.organizers.map((organizer) => (
                        <div key={organizer.id} className="flex items-start gap-3">
                        <Avatar>
                            <AvatarImage src={organizer.avatar || "/placeholder.svg"} alt={organizer.name} />
                            <AvatarFallback>{organizer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h4 className="font-semibold hover:text-blue-600 transition-colors">
                            <Link href={`/members/${organizer.id}`}>{organizer.name}</Link>
                            </h4>
                            <p className="text-sm text-blue-600 mb-1">{organizer.role}</p>
                            <p className="text-xs text-gray-600">{organizer.bio}</p>
                        </div>
                        </div>
                    ))}
                    </CardContent>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="agenda">Nội dung</TabsTrigger>
                <TabsTrigger value="gallery">Hình ảnh</TabsTrigger>
                <TabsTrigger value="participants">Thành viên</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                {/* Objectives */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Mục Tiêu Hoạt Động
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {activity.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Results (if completed) */}
                {activity.status === "completed" && activity.results && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Kết Quả & Giá Trị Mang Lại
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{activity.results.participants}</div>
                          <div className="text-sm text-gray-600">Người tham gia</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            {activity.results.satisfaction}/5
                          </div>
                          <div className="text-sm text-gray-600">Đánh giá trung bình</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">
                            {activity.results.completionRate}%
                          </div>
                          <div className="text-sm text-gray-600">Hoàn thành</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Phản hồi từ thành viên:</h4>
                        <div className="space-y-3">
                          {activity.results.feedback.map((feedback, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 italic">"{feedback}"</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Video */}
                {activity.videoUrl && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        Video Recap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video">
                        <iframe
                          src={activity.videoUrl}
                          title="Activity Video"
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Agenda Tab */}
              <TabsContent value="agenda">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Nội Dung Chi Tiết
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {activity.agenda.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{index + 1}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <Badge variant="outline">{item.time}</Badge>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Gallery Tab */}
              <TabsContent value="gallery">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" />
                      Hình Ảnh Hoạt Động
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Main Image Carousel */}
                    <div className="relative mb-6">
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <Image
                          src={activity.gallery[currentImageIndex] || "/placeholder.svg"}
                          alt={`Activity image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {activity.gallery.length > 1 && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                            onClick={nextImage}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </>
                      )}

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {activity.gallery.length}
                      </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {activity.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex ? "border-blue-500" : "border-transparent"
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform"
                          />
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Participants Tab */}
              <TabsContent value="participants">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Danh Sách Tham Gia ({registrations.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {registrations
                        .slice(0, showAllParticipants ? registrations.length : 8)
                        .map((registration, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Avatar>
                              <AvatarImage
                                src={registration.avatar || "/placeholder.svg"}
                                alt={registration.userName}
                              />
                              <AvatarFallback>{registration.userName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{registration.userName}</h4>
                              <p className="text-sm text-gray-600">Thành viên BCN</p>
                            </div>
                          </div>
                        ))}
                    </div>

                    {registrations.length > 8 && (
                      <div className="text-center mt-6">
                        <Button variant="outline" onClick={() => setShowAllParticipants(!showAllParticipants)}>
                          {showAllParticipants ? "Thu gọn" : `Xem thêm ${registrations.length - 8} người`}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Activities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Hoạt Động Liên Quan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mock related activities */}
              {[1, 2].map((item) => (
                <Card key={item} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Related activity"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Workshop Vue.js Fundamentals</h3>
                    <p className="text-sm text-gray-600 mb-3">Tìm hiểu framework Vue.js từ cơ bản đến nâng cao</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Workshop</Badge>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/activities/vue-workshop-2024">Xem chi tiết</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
