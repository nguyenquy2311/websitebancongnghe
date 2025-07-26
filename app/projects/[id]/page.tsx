import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Github, ExternalLink, Calendar, Users, Target, Lightbulb, CheckCircle, Clock, Star, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in real app, this would come from a database
const projects = [
  {
    id: "iuh-student-portal",
    title: "IUH Student Portal",
    shortDescription:
      "Hệ thống quản lý sinh viên với giao diện hiện đại, tích hợp đầy đủ các tính năng cần thiết cho sinh viên và giảng viên.",
    longDescription:
      "IUH Student Portal là một hệ thống quản lý sinh viên toàn diện được phát triển để hiện đại hóa quy trình quản lý học tập tại trường. Hệ thống cung cấp giao diện trực quan, dễ sử dụng cho cả sinh viên và giảng viên, tích hợp các tính năng từ đăng ký môn học, xem điểm số, đến quản lý thời khóa biểu.",
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI"],
    category: "Web",
    year: "2024",
    type: "Nhóm",
    status: "Completed",
    duration: "6 tháng",
    startDate: "2024-01-15",
    endDate: "2024-07-15",
    githubUrl: "https://github.com/bcn-iuh/student-portal",
    demoUrl: "https://student-portal-demo.vercel.app",

    // Project Goals & Objectives
    goals: [
      "Hiện đại hóa hệ thống quản lý sinh viên của trường",
      "Tạo ra giao diện thân thiện và dễ sử dụng",
      "Tích hợp đầy đủ các tính năng cần thiết",
      "Đảm bảo bảo mật và hiệu suất cao",
    ],

    objectives: [
      "Giảm 70% thời gian xử lý thủ tục hành chính",
      "Tăng 90% sự hài lòng của sinh viên và giảng viên",
      "Hỗ trợ 10,000+ sinh viên đồng thời",
      "Đạt 99.9% uptime",
    ],

    // Project Process/Timeline
    timeline: [
      {
        phase: "Nghiên cứu & Phân tích",
        duration: "2 tuần",
        description: "Khảo sát nhu cầu, phân tích yêu cầu và thiết kế hệ thống",
        status: "completed",
        tasks: [
          "Khảo sát sinh viên và giảng viên",
          "Phân tích hệ thống hiện tại",
          "Thiết kế database schema",
          "Lập kế hoạch dự án chi tiết",
        ],
      },
      {
        phase: "Thiết kế UI/UX",
        duration: "3 tuần",
        description: "Thiết kế giao diện người dùng và trải nghiệm",
        status: "completed",
        tasks: ["Wireframe và mockup", "Design system", "Prototype tương tác", "User testing"],
      },
      {
        phase: "Phát triển Backend",
        duration: "8 tuần",
        description: "Xây dựng API và logic xử lý phía server",
        status: "completed",
        tasks: ["Thiết lập database", "Phát triển REST API", "Xác thực và phân quyền", "Testing và optimization"],
      },
      {
        phase: "Phát triển Frontend",
        duration: "6 tuần",
        description: "Xây dựng giao diện người dùng",
        status: "completed",
        tasks: ["Component development", "State management", "API integration", "Responsive design"],
      },
      {
        phase: "Testing & Deployment",
        duration: "3 tuần",
        description: "Kiểm thử và triển khai hệ thống",
        status: "completed",
        tasks: ["Unit testing", "Integration testing", "User acceptance testing", "Production deployment"],
      },
    ],

    // Team Members with detailed roles
    team: [
      {
        id: "nguyen-van-anh",
        name: "Nguyễn Văn Anh",
        role: "Tech Lead & Backend Developer",
        avatar: "/placeholder.svg?height=80&width=80",
        contributions: [
          "Thiết kế kiến trúc hệ thống",
          "Phát triển API chính",
          "Quản lý database",
          "Code review và mentoring",
        ],
        recognition: "Xuất sắc trong việc dẫn dắt đội nhóm và đảm bảo chất lượng code",
      },
      {
        id: "tran-thi-binh",
        name: "Trần Thị Bình",
        role: "Frontend Developer & UI/UX Designer",
        avatar: "/placeholder.svg?height=80&width=80",
        contributions: [
          "Thiết kế giao diện người dùng",
          "Phát triển React components",
          "Responsive design",
          "User experience optimization",
        ],
        recognition: "Tạo ra giao diện đẹp và trải nghiệm người dùng tuyệt vời",
      },
      {
        id: "le-van-cuong",
        name: "Lê Văn Cường",
        role: "Backend Developer",
        avatar: "/placeholder.svg?height=80&width=80",
        contributions: [
          "Phát triển authentication system",
          "Database optimization",
          "API documentation",
          "Performance monitoring",
        ],
        recognition: "Đóng góp quan trọng trong việc đảm bảo bảo mật và hiệu suất",
      },
      {
        id: "hoang-van-em",
        name: "Hoàng Văn Em",
        role: "Frontend Developer",
        avatar: "/placeholder.svg?height=80&width=80",
        contributions: ["Component development", "State management", "Testing automation", "Bug fixing"],
        recognition: "Làm việc chăm chỉ và có tinh thần trách nhiệm cao",
      },
      {
        id: "vu-thi-phuong",
        name: "Vũ Thị Phương",
        role: "UI/UX Designer & Tester",
        avatar: "/placeholder.svg?height=80&width=80",
        contributions: ["User research", "Design system", "Usability testing", "Documentation"],
        recognition: "Đảm bảo sản phẩm có trải nghiệm người dùng tốt nhất",
      },
    ],

    // Project Impact & Results
    impact: {
      users: "5,000+",
      satisfaction: "95%",
      timeReduction: "70%",
      errorReduction: "85%",
    },

    // Lessons Learned
    lessonsLearned: [
      "Tầm quan trọng của việc thu thập feedback từ người dùng thực tế",
      "Cần có kế hoạch testing chi tiết từ đầu dự án",
      "Collaboration tools giúp team work hiệu quả hơn",
      "Documentation tốt giúp maintain dự án dễ dàng hơn",
    ],

    // Future Plans
    futurePlans: [
      "Tích hợp AI chatbot hỗ trợ sinh viên",
      "Mobile app cho iOS và Android",
      "Tính năng thông báo real-time",
      "Dashboard analytics cho quản lý",
    ],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const completedPhases = project.timeline.filter((phase) => phase.status === "completed").length
  const progressPercentage = (completedPhases / project.timeline.length) * 100

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.category}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.year}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.type}
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">{project.shortDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoUrl && (
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Xem Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  asChild
                >
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông Tin Dự Án</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Thời gian: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Đội ngũ: {project.team.length} thành viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">
                      Trạng thái: {project.status === "Completed" ? "Hoàn thành" : "Đang phát triển"}
                    </span>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm font-medium mb-2">Tiến độ dự án</p>
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {completedPhases}/{project.timeline.length} giai đoạn hoàn thành
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Công Nghệ Sử Dụng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tác Động & Kết Quả</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{project.impact.users}</div>
                    <div className="text-xs text-gray-600">Người dùng</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.impact.satisfaction}</div>
                    <div className="text-xs text-gray-600">Độ hài lòng</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{project.impact.timeReduction}</div>
                    <div className="text-xs text-gray-600">Giảm thời gian xử lý</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Project Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Mô Tả Chi Tiết</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
            </div>
          </section>

          {/* Goals & Objectives */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Mục Tiêu & Định Hướng</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Mục Tiêu Dự Án
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Chỉ Tiêu Cụ Thể
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Project Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Quy Trình Phát Triển</h2>
            <div className="space-y-6">
              {project.timeline.map((phase, index) => (
                <Card
                  key={index}
                  className={`${phase.status === "completed" ? "border-green-200 bg-green-50" : "border-gray-200"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          phase.status === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {phase.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{phase.phase}</h3>
                          <Badge variant={phase.status === "completed" ? "default" : "secondary"}>
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>

                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Recognition */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Đội Ngũ Phát Triển & Vinh Danh</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.team.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Award className="h-3 w-3 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">
                          <Link href={`/members/${member.id}`}>{member.name}</Link>
                        </h3>
                        <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>

                        <div className="mb-4">
                          <p className="text-xs font-medium text-gray-700 mb-2">Đóng góp chính:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {member.contributions.map((contribution, contribIndex) => (
                              <li key={contribIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-yellow-800 font-medium">{member.recognition}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Hình Ảnh Dự Án</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons Learned & Future Plans */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    Bài Học Kinh Nghiệm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.lessonsLearned.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Kế Hoạch Tương Lai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.futurePlans.map((plan, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Quan Tâm Đến Dự Án Này?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tìm hiểu thêm về các dự án khác của BCN hoặc tham gia cùng chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/projects">Xem Dự Án Khác</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/join">Tham Gia BCN</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
