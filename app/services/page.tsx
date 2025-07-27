import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Lightbulb,
  BookOpen,
  Clock,
  CheckCircle,
  Star,
  Smartphone,
  Globe,
  Palette,
  Database,
  Shield,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "web-development",
    title: "Phát Triển Website",
    icon: Globe,
    description: "Thiết kế và phát triển website chuyên nghiệp cho doanh nghiệp và cá nhân",
    features: [
      "Website responsive trên mọi thiết bị",
      "Tối ưu SEO và tốc độ loading",
      "Quản trị nội dung dễ dàng",
      "Bảo mật cao và ổn định",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress"],
    pricing: "Từ 5,000,000 VNĐ",
    duration: "2-4 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "mobile-development",
    title: "Phát Triển Ứng Dụng Mobile",
    icon: Smartphone,
    description: "Tạo ra các ứng dụng mobile hiện đại cho iOS và Android",
    features: [
      "Cross-platform development",
      "UI/UX tối ưu cho mobile",
      "Tích hợp API và database",
      "Push notification và offline support",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    pricing: "Từ 8,000,000 VNĐ",
    duration: "4-8 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "ui-ux-design",
    title: "Thiết Kế UI/UX",
    icon: Palette,
    description: "Thiết kế giao diện và trải nghiệm người dùng chuyên nghiệp",
    features: [
      "User research và wireframing",
      "Prototype tương tác",
      "Design system hoàn chỉnh",
      "Testing và optimization",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    pricing: "Từ 3,000,000 VNĐ",
    duration: "1-3 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "system-development",
    title: "Phát Triển Hệ Thống",
    icon: Database,
    description: "Xây dựng các hệ thống quản lý và ứng dụng doanh nghiệp",
    features: [
      "Hệ thống quản lý tùy chỉnh",
      "API development và integration",
      "Database design và optimization",
      "Cloud deployment và scaling",
    ],
    technologies: ["Python", "Java", "PostgreSQL", "MongoDB", "AWS"],
    pricing: "Từ 15,000,000 VNĐ",
    duration: "6-12 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "consulting",
    title: "Tư Vấn Công Nghệ",
    icon: Lightbulb,
    description: "Tư vấn giải pháp công nghệ và chuyển đổi số cho doanh nghiệp",
    features: [
      "Phân tích nhu cầu và đề xuất giải pháp",
      "Technology stack selection",
      "Project planning và roadmap",
      "Code review và quality assurance",
    ],
    technologies: ["Architecture Design", "DevOps", "Security", "Performance"],
    pricing: "Từ 2,000,000 VNĐ",
    duration: "1-2 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "training",
    title: "Đào Tạo & Workshop",
    icon: BookOpen,
    description: "Các khóa học và workshop về công nghệ cho sinh viên và doanh nghiệp",
    features: [
      "Khóa học lập trình từ cơ bản đến nâng cao",
      "Workshop về công nghệ mới",
      "Corporate training cho doanh nghiệp",
      "Mentoring 1-on-1",
    ],
    technologies: ["JavaScript", "Python", "React", "Mobile Development"],
    pricing: "Từ 500,000 VNĐ/người",
    duration: "1-8 tuần",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-indigo-100 text-indigo-800",
  },
]

const process = [
  {
    step: 1,
    title: "Tư Vấn & Phân Tích",
    description: "Gặp gỡ, tìm hiểu nhu cầu và đưa ra giải pháp phù hợp",
    duration: "1-2 ngày",
  },
  {
    step: 2,
    title: "Lập Kế Hoạch",
    description: "Thiết kế chi tiết, timeline và phân công nhóm phát triển",
    duration: "2-3 ngày",
  },
  {
    step: 3,
    title: "Phát Triển",
    description: "Triển khai dự án theo kế hoạch với báo cáo tiến độ định kỳ",
    duration: "2-12 tuần",
  },
  {
    step: 4,
    title: "Testing & Delivery",
    description: "Kiểm thử, hoàn thiện và bàn giao sản phẩm",
    duration: "3-5 ngày",
  },
  {
    step: 5,
    title: "Hỗ Trợ & Bảo Trì",
    description: "Hỗ trợ kỹ thuật và bảo trì sản phẩm sau bàn giao",
    duration: "3-6 tháng",
  },
]

const testimonials = [
  {
    name: "Nguyễn Văn A",
    company: "Startup XYZ",
    content:
      "BCN đã giúp chúng tôi phát triển website và mobile app chất lượng cao trong thời gian ngắn. Đội ngũ rất chuyên nghiệp!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Trần Thị B",
    company: "Công ty ABC",
    content:
      "Dịch vụ tư vấn công nghệ của BCN rất hữu ích. Họ đã giúp chúng tôi chọn được tech stack phù hợp và tiết kiệm chi phí.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lê Văn C",
    company: "E-commerce DEF",
    content: "Hệ thống quản lý do BCN phát triển đã giúp tăng hiệu quả làm việc của công ty lên 300%. Rất đáng đầu tư!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
     
      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dịch Vụ Chuyên Nghiệp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BCN cung cấp đầy đủ các dịch vụ công nghệ từ thiết kế đến phát triển và triển khai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color}`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Tính năng chính:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Công nghệ:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Giá từ</p>
                      <p className="font-semibold text-blue-600">{service.pricing}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Thời gian</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/contact">Liên Hệ Tư Vấn</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quy Trình Làm Việc</h2>
            <p className="text-xl text-gray-600">Quy trình chuyên nghiệp đảm bảo chất lượng và tiến độ dự án</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BCN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tại Sao Chọn BCN?</h2>
            <p className="text-xl text-gray-600">Những lợi thế vượt trội khi sử dụng dịch vụ của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Đội Ngũ Chuyên Nghiệp",
                description: "Sinh viên tài năng được đào tạo bài bản và có kinh nghiệm thực tế",
              },
              {
                icon: Zap,
                title: "Công Nghệ Mới Nhất",
                description: "Luôn cập nhật và áp dụng các công nghệ tiên tiến nhất",
              },
              {
                icon: Clock,
                title: "Giao Hàng Đúng Hạn",
                description: "Cam kết hoàn thành dự án đúng timeline đã thỏa thuận",
              },
              {
                icon: Shield,
                title: "Bảo Mật & Chất Lượng",
                description: "Đảm bảo bảo mật thông tin và chất lượng sản phẩm cao",
              },
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Khách Hàng Nói Gì</h2>
            <p className="text-xl text-gray-600">Phản hồi từ các khách hàng đã sử dụng dịch vụ của BCN</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bắt Đầu Dự Án Của Bạn</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/contact">Liên Hệ Ngay</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/projects">Xem Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
