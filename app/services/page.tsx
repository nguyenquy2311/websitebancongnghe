"use client"

import React from "react"

import { useState } from "react"
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
  Quote,
  ChevronRight,
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

// Dữ liệu cho phần quy trình làm việc mới
const workProcessSteps = [
  {
    step: 1,
    title: "Tư vấn ý tưởng",
    contentTitle: "Tư vấn ý tưởng",
    description:
      "Chia sẻ mong muốn và ý tưởng của bạn với đội ngũ chuyên gia của chúng tôi. Chúng tôi sẽ lắng nghe, phân tích và đưa ra những gợi ý, giải pháp tối ưu nhất, phù hợp với cá tính và phong cách riêng của bạn.",
    quote:
      "Tại BCN, mỗi dự án bắt đầu từ một ý tưởng tuyệt vời, và chúng tôi đảm bảo sẽ cùng bạn hiện thực hóa nó một cách hoàn hảo nhất.",
    quoteAuthor: "Nguyễn Văn Anh",
    quoteAuthorTitle: "Sáng lập & Trưởng ban BCN",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    step: 2,
    title: "Thiết kế riêng",
    contentTitle: "Thiết kế riêng",
    description:
      "Dựa trên ý tưởng đã thống nhất, đội ngũ thiết kế của chúng tôi sẽ tạo ra bản phác thảo và mockup chi tiết, đảm bảo giao diện trực quan và trải nghiệm người dùng tối ưu.",
    quote:
      "Thiết kế không chỉ là vẻ đẹp, mà còn là cách giải quyết vấn đề. Chúng tôi tạo ra những trải nghiệm người dùng mượt mà và hiệu quả.",
    quoteAuthor: "Trần Thị Bình",
    quoteAuthorTitle: "Phó Ban & Trưởng nhóm UI/UX",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    step: 3,
    title: "Báo giá & Hợp đồng",
    contentTitle: "Báo giá & Hợp đồng",
    description:
      "Sau khi thống nhất thiết kế, chúng tôi sẽ gửi báo giá chi tiết và minh bạch. Mọi điều khoản sẽ được ghi rõ trong hợp đồng để đảm bảo quyền lợi cho cả hai bên.",
    quote:
      "Sự minh bạch là chìa khóa cho mọi mối quan hệ hợp tác. Chúng tôi cam kết mang đến giá trị tốt nhất với chi phí hợp lý.",
    quoteAuthor: "Lê Văn Cường",
    quoteAuthorTitle: "Trưởng nhóm Kỹ thuật",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    step: 4,
    title: "Phát triển & Kiểm thử",
    contentTitle: "Phát triển & Kiểm thử",
    description:
      "Đội ngũ lập trình viên của BCN sẽ bắt tay vào phát triển sản phẩm theo thiết kế đã duyệt. Chúng tôi áp dụng quy trình kiểm thử nghiêm ngặt để đảm bảo chất lượng và hiệu suất tối ưu.",
    quote:
      "Mỗi dòng code đều được viết với sự tỉ mỉ và chuyên nghiệp. Chúng tôi không chỉ xây dựng sản phẩm, mà còn xây dựng niềm tin.",
    quoteAuthor: "Phạm Thị Dung",
    quoteAuthorTitle: "Trưởng nhóm Mobile",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    step: 5,
    title: "Bàn giao & Hỗ trợ",
    contentTitle: "Bàn giao & Hỗ trợ",
    description:
      "Sản phẩm hoàn thiện sẽ được bàn giao cùng với tài liệu hướng dẫn chi tiết. Chúng tôi cam kết hỗ trợ kỹ thuật và bảo trì sau bàn giao để đảm bảo sản phẩm hoạt động ổn định.",
    quote:
      "Hành trình của chúng tôi không kết thúc khi sản phẩm được bàn giao. Chúng tôi luôn đồng hành cùng bạn để đảm bảo sự thành công lâu dài.",
    quoteAuthor: "Hoàng Văn Em",
    quoteAuthorTitle: "Quản lý Nội dung",
    image: "/placeholder.svg?height=400&width=600",
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
  const [activeStep, setActiveStep] = useState(1)
  const currentStepData = workProcessSteps.find((step) => step.step === activeStep)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-6">
              Dịch Vụ Công Nghệ
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Dịch Vụ Của BCN</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Chúng tôi cung cấp các dịch vụ công nghệ chuyên nghiệp, từ phát triển website, mobile app đến tư vấn và
              đào tạo
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
              <Link href="#services">Khám Phá Dịch Vụ</Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* New Work Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Quy trình làm việc</h2>
            <p className="text-xl text-gray-400">Quy trình chuyên nghiệp, hiệu quả cho trải nghiệm tốt nhất.</p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
            {workProcessSteps.map((stepItem) => (
              <React.Fragment key={stepItem.step}>
                <div
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => setActiveStep(stepItem.step)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                      ${activeStep === stepItem.step ? "bg-blue-600 text-white shadow-lg" : "bg-gray-700 text-gray-300 group-hover:bg-gray-600 group-hover:text-white"}`}
                  >
                    {stepItem.step}
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium text-center transition-colors duration-300
                      ${activeStep === stepItem.step ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`}
                  >
                    {stepItem.title}
                  </p>
                </div>
                {stepItem.step < workProcessSteps.length && (
                  <ChevronRight className="h-6 w-6 text-gray-500 mx-2 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Content Card */}
          {currentStepData && (
            <Card className="max-w-6xl mx-auto bg-gray-800 text-white border-gray-700 overflow-hidden">
              <CardContent className="p-0 grid md:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center transition-opacity duration-500 ease-in-out">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-blue-400">{currentStepData.contentTitle}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">{currentStepData.description}</p>
                  <div className="border-l-4 border-blue-500 pl-4 py-2 mb-6">
                    <Quote className="h-6 w-6 text-blue-500 mb-2" />
                    <blockquote className="text-md italic text-gray-400 leading-relaxed">
                      "{currentStepData.quote}"
                    </blockquote>
                    <p className="mt-4 font-semibold text-blue-300">{currentStepData.quoteAuthor}</p>
                    <p className="text-sm text-gray-400">{currentStepData.quoteAuthorTitle}</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative aspect-video md:aspect-auto md:h-full transition-opacity duration-500 ease-in-out">
                  <Image
                    src={currentStepData.image || "/placeholder.svg"}
                    alt={currentStepData.contentTitle}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          )}
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
