"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Users, Code, Smartphone, Palette, Megaphone, CheckCircle, ArrowRight, Star } from "lucide-react"

const positions = [
  {
    id: "web-dev",
    title: "CTV Phát Triển Web",
    icon: Code,
    description: "Tham gia phát triển các ứng dụng web với React, Next.js, Node.js",
    requirements: [
      "Kiến thức cơ bản HTML, CSS, JavaScript",
      "Đam mê học hỏi công nghệ web",
      "Có thể commit 10-15h/tuần",
    ],
    benefits: ["Học các framework hiện đại", "Tham gia dự án thực tế", "Mentor 1-1 từ senior"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "app-dev",
    title: "CTV Phát Triển App",
    icon: Smartphone,
    description: "Phát triển ứng dụng di động với React Native, Flutter",
    requirements: ["Kiến thức lập trình cơ bản", "Quan tâm đến mobile development", "Sẵn sàng học công nghệ mới"],
    benefits: ["Học React Native/Flutter", "Publish app lên store", "Kinh nghiệm mobile dev"],
    color: "bg-green-100 text-green-800",
  },
  {
    id: "designer",
    title: "CTV Thiết Kế UI/UX",
    icon: Palette,
    description: "Thiết kế giao diện và trải nghiệm người dùng cho các sản phẩm",
    requirements: ["Có khiếu thẩm mỹ", "Biết sử dụng Figma hoặc Adobe XD", "Hiểu về UX principles"],
    benefits: ["Làm việc với designer senior", "Tham gia design system", "Portfolio chất lượng"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "marketing",
    title: "CTV Truyền Thông",
    icon: Megaphone,
    description: "Quản lý social media, viết content, tổ chức sự kiện",
    requirements: ["Kỹ năng viết content tốt", "Hiểu về social media", "Có tính sáng tạo"],
    benefits: ["Học digital marketing", "Xây dựng personal brand", "Networking rộng"],
    color: "bg-orange-100 text-orange-800",
  },
]

export default function JoinPage() {
  const [selectedPosition, setSelectedPosition] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    major: "",
    year: "",
    github: "",
    portfolio: "",
    experience: "",
    motivation: "",
    availability: "",
    agreeTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { ...formData, position: selectedPosition })
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tham Gia BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gia nhập cộng đồng BCN và cùng chúng tôi xây dựng những sản phẩm công nghệ tuyệt vời
          </p>
        </div>

        {/* Why Join BCN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tại Sao Nên Tham Gia BCN?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Dự Án Thực Tế",
                description: "Tham gia các dự án có ý nghĩa, xây dựng portfolio ấn tượng",
              },
              {
                icon: Users,
                title: "Cộng Đồng Mạnh",
                description: "Kết nối với những người bạn cùng đam mê công nghệ",
              },
              {
                icon: Star,
                title: "Mentor Chất Lượng",
                description: "Được hướng dẫn bởi các anh chị có kinh nghiệm",
              },
              {
                icon: CheckCircle,
                title: "Cơ Hội Nghề Nghiệp",
                description: "Tiếp cận với các cơ hội thực tập và việc làm",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Available Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Vị Trí Đang Tuyển</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position) => (
              <Card
                key={position.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPosition === position.id ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => setSelectedPosition(position.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${position.color}`}>
                      <position.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      {selectedPosition === position.id && <Badge className="mt-1">Đã chọn</Badge>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{position.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Lợi ích:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Đơn Đăng Ký Tham Gia BCN</CardTitle>
              <p className="text-center text-gray-600">
                Vui lòng điền đầy đủ thông tin để chúng tôi có thể đánh giá hồ sơ của bạn
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Thông Tin Cá Nhân</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Họ và tên *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Nguyễn Văn A"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentId">Mã số sinh viên *</Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => handleInputChange("studentId", e.target.value)}
                        placeholder="20123456"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="example@student.iuh.edu.vn"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="0123456789"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="major">Ngành học *</Label>
                      <Input
                        id="major"
                        value={formData.major}
                        onChange={(e) => handleInputChange("major", e.target.value)}
                        placeholder="Công nghệ thông tin"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="year">Năm học *</Label>
                      <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn năm học" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Năm 1</SelectItem>
                          <SelectItem value="2">Năm 2</SelectItem>
                          <SelectItem value="3">Năm 3</SelectItem>
                          <SelectItem value="4">Năm 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Position Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Vị Trí Ứng Tuyển</h3>
                  <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn vị trí muốn ứng tuyển" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position.id} value={position.id}>
                          {position.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Technical Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Thông Tin Kỹ Thuật</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="github">GitHub Profile</Label>
                      <Input
                        id="github"
                        value={formData.github}
                        onChange={(e) => handleInputChange("github", e.target.value)}
                        placeholder="https://github.com/username"
                      />
                    </div>
                    <div>
                      <Label htmlFor="portfolio">Portfolio/Website</Label>
                      <Input
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Experience & Motivation */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Kinh nghiệm lập trình/thiết kế (nếu có)</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="Mô tả ngắn gọn về kinh nghiệm, dự án đã làm, công nghệ đã sử dụng..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Tại sao bạn muốn tham gia BCN? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Chia sẻ động lực, mục tiêu và những gì bạn mong muốn đạt được khi tham gia BCN..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">Thời gian có thể tham gia hoạt động BCN *</Label>
                    <Textarea
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => handleInputChange("availability", e.target.value)}
                      placeholder="Ví dụ: Thứ 2, 4, 6 buổi tối; Cuối tuần; Khoảng 10-15h/tuần..."
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                    Tôi đồng ý với các điều khoản và cam kết tham gia đầy đủ các hoạt động của BCN. Tôi hiểu rằng việc
                    tham gia BCN đòi hỏi sự nghiêm túc và trách nhiệm.
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6">
                  <Button type="submit" size="lg" className="flex-1" disabled={!formData.agreeTerms}>
                    Gửi Đơn Đăng Ký
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Quy Trình Tuyển Chọn</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Nộp Đơn",
                description: "Điền form đăng ký và gửi hồ sơ",
              },
              {
                step: "2",
                title: "Sơ Tuyển",
                description: "BCN sẽ review hồ sơ trong 3-5 ngày",
              },
              {
                step: "3",
                title: "Phỏng Vấn",
                description: "Phỏng vấn trực tiếp hoặc online",
              },
              {
                step: "4",
                title: "Kết Quả",
                description: "Thông báo kết quả và onboarding",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
