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
import { CheckCircle, Users, Code, Smartphone, Palette, Megaphone, Star } from "lucide-react"

const positions = [
  {
    id: "web-dev",
    title: "CTV Phát triển Web",
    icon: Code,
    description: "Tham gia phát triển các website và ứng dụng web sử dụng công nghệ hiện đại",
    requirements: ["HTML, CSS, JavaScript cơ bản", "Hiểu biết về React hoặc Vue.js", "Đam mê học hỏi công nghệ mới"],
    benefits: ["Học hỏi từ senior developers", "Tham gia dự án thực tế", "Cơ hội thực tập tại các công ty"],
  },
  {
    id: "app-dev",
    title: "CTV Phát triển App",
    icon: Smartphone,
    description: "Phát triển ứng dụng di động cho iOS và Android sử dụng React Native hoặc Flutter",
    requirements: ["Kiến thức lập trình cơ bản", "Quan tâm đến mobile development", "Khả năng làm việc nhóm tốt"],
    benefits: ["Học React Native/Flutter", "Phát triển app thực tế", "Kết nối với cộng đồng mobile dev"],
  },
  {
    id: "designer",
    title: "CTV Thiết kế",
    icon: Palette,
    description: "Thiết kế UI/UX cho các sản phẩm của BCN, tạo ra trải nghiệm người dùng tuyệt vời",
    requirements: ["Kiến thức về UI/UX design", "Sử dụng Figma hoặc Adobe XD", "Tư duy sáng tạo và thẩm mỹ"],
    benefits: ["Làm việc với designer chuyên nghiệp", "Thiết kế cho sản phẩm thực tế", "Xây dựng portfolio mạnh"],
  },
  {
    id: "marketing",
    title: "CTV Truyền thông",
    icon: Megaphone,
    description: "Quản lý social media, viết content và tổ chức sự kiện cho BCN",
    requirements: ["Kỹ năng viết content tốt", "Hiểu biết về social media", "Khả năng tổ chức sự kiện"],
    benefits: ["Phát triển kỹ năng marketing", "Quản lý brand của BCN", "Kết nối với cộng đồng sinh viên"],
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
    agreeTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { ...formData, position: selectedPosition })
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tham gia BCN</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gia nhập Ban Công Nghệ và bắt đầu hành trình phát triển sự nghiệp công nghệ của bạn. Chúng tôi luôn chào đón
            những thành viên mới có đam mê và nhiệt huyết!
          </p>
        </div>

        {/* Why Join BCN */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao nên tham gia BCN?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Dự án thực tế</h3>
                <p className="text-gray-600 text-sm">
                  Tham gia các dự án có tác động thực tế, nâng cao kỹ năng lập trình
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cộng đồng mạnh</h3>
                <p className="text-gray-600 text-sm">Kết nối với những người bạn cùng chí hướng và học hỏi lẫn nhau</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mentor chất lượng</h3>
                <p className="text-gray-600 text-sm">Được hướng dẫn bởi các senior có kinh nghiệm trong ngành</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cơ hội nghề nghiệp</h3>
                <p className="text-gray-600 text-sm">Kết nối với nhà tuyển dụng và cơ hội thực tập tại các công ty</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Available Positions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vị trí đang tuyển</h2>
            <p className="text-xl text-gray-600">Chọn vị trí phù hợp với sở thích và kỹ năng của bạn</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position) => {
              const Icon = position.icon
              return (
                <Card key={position.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{position.description}</p>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Yêu cầu:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Lợi ích:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Đăng ký tham gia BCN</CardTitle>
              <p className="text-center text-gray-600">
                Điền thông tin của bạn để chúng tôi có thể liên hệ và đánh giá
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Position Selection */}
                <div className="space-y-2">
                  <Label htmlFor="position">Vị trí ứng tuyển *</Label>
                  <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn vị trí bạn muốn ứng tuyển" />
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

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Họ và tên *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                  <div className="space-y-2">
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
                  <div className="space-y-2">
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
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="0123456789"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="major">Ngành học *</Label>
                    <Input
                      id="major"
                      value={formData.major}
                      onChange={(e) => handleInputChange("major", e.target.value)}
                      placeholder="Công nghệ thông tin"
                      required
                    />
                  </div>
                  <div className="space-y-2">
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

                {/* Links */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <Input
                      id="github"
                      value={formData.github}
                      onChange={(e) => handleInputChange("github", e.target.value)}
                      placeholder="https://github.com/username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/CV</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="Link portfolio hoặc CV"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Kinh nghiệm và kỹ năng</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Mô tả về kinh nghiệm lập trình, các dự án đã làm, kỹ năng hiện tại..."
                    rows={4}
                  />
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <Label htmlFor="motivation">Lý do muốn tham gia BCN *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Chia sẻ lý do bạn muốn tham gia BCN và mục tiêu của bạn..."
                    rows={4}
                    required
                  />
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Tôi đồng ý với các điều khoản và cam kết tham gia đầy đủ các hoạt động của BCN *
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={
                    !selectedPosition ||
                    !formData.fullName ||
                    !formData.studentId ||
                    !formData.email ||
                    !formData.major ||
                    !formData.year ||
                    !formData.motivation ||
                    !formData.agreeTerms
                  }
                >
                  Gửi đăng ký
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Contact Info */}
        <section className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cần hỗ trợ?</h3>
            <p className="text-gray-600 mb-6">
              Nếu bạn có bất kỳ câu hỏi nào về quá trình đăng ký hoặc về BCN, đừng ngại liên hệ với chúng tôi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2">
                Email: bcn@iuh.edu.vn
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Facebook: Ban Công Nghệ IUH
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
