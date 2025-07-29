"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Target,
  Users,
  Lightbulb,
  Heart,
  Code,
  Rocket,
  BookOpen,
  Building,
  Megaphone,
  FileText,
  FolderOpen,
  Star,
  Calendar,
  TrendingUp,
  Quote,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import img2 from '/public/images/homepage/img2.webp';
import { members, memberGroups, memberRoles, activityGallery } from "@/data/portfolio";
import { timelineData } from "@/data/timeline"


// Organization structure
const organizationStructure = [
  {
    name: "Ban Điều hành",
    icon: Building,
    color: "bg-red-100 text-red-800",
    description: "Dẫn dắt và quản lý các hoạt động chung của BCN",
    members: 3,
    responsibilities: ["Chiến lược Phát triển", "Quản lý Nguồn nhân lực", "Quan hệ Đối ngoại và Hợp tác"],
  },
  {
    name: "Nhóm Web",
    icon: Code,
    color: "bg-blue-100 text-blue-800",
    description: "Phát triển các ứng dụng web và website",
    members: 8,
    responsibilities: ["Phát triển Frontend", "Phát triển Backend", "Dự án Full-stack"],
  },
  {
    name: "Nhóm App",
    icon: Rocket,
    color: "bg-green-100 text-green-800",
    description: "Phát triển các ứng dụng di động cho iOS và Android",
    members: 5,
    responsibilities: ["React Native", "Flutter", "Phát triển Native"],
  },
  {
    name: "Ban Truyền thông",
    icon: Megaphone,
    color: "bg-purple-100 text-purple-800",
    description: "Quản lý thương hiệu và truyền thông cho BCN",
    members: 4,
    responsibilities: ["Mạng xã hội", "Tiếp thị nội dung", "Quảng bá sự kiện"],
  },
  {
    name: "Ban Nội dung",
    icon: FileText,
    color: "bg-orange-100 text-orange-800",
    description: "Tạo và quản lý nội dung giáo dục và tài liệu",
    members: 3,
    responsibilities: ["Viết tài liệu kỹ thuật", "Tạo hướng dẫn", "Quản lý tài liệu"],
  },
  {
    name: "Ban Dự án",
    icon: FolderOpen,
    color: "bg-indigo-100 text-indigo-800",
    description: "Quản lý và điều phối các dự án của BCN",
    members: 4,
    responsibilities: ["Quản lý dự án", "Đảm bảo chất lượng", "Quan hệ khách hàng"],
  },
]



// Achievements data
const achievements = [
  { number: "50+", label: "Thành viên tích cực", icon: Users, color: "text-blue-600" },
  { number: "15+", label: "Dự án đã hoàn thành", icon: Code, color: "text-green-600" },
  { number: "25+", label: "Workshop & Sự kiện", icon: Calendar, color: "text-purple-600" },
  { number: "5+", label: "Đối tác doanh nghiệp", icon: Building, color: "text-orange-600" },
  { number: "100+", label: "Lượt sinh viên tham gia", icon: BookOpen, color: "text-red-600" },
  { number: "10+", label: "Thành viên có việc làm", icon: Star, color: "text-yellow-600" },
]

// Activity gallery


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex items-center w-full overflow-hidden overflow-y-auto max-sm:h-auto max-sm:min-h-screen max-sm:pb-8">
        <div className="overflow-hidden m-auto gap-10 relative flex items-center justify-between max-xl:flex-col-reverse max-xl:items-center max-sm:py-0 max-sm:px-10 max-lg:gap-0 max-lg:my-10">
          {/* Content */}
          <div className="w-[600px] max-xl:w-[90vw] max-xl:max-w-[550px] max-sm:max-w-full text-center">
            <h2 className="font-quicksand font-normal text-[48px] leading-[58px] tracking-[-0.0025em] text-gray-600 max-sm:leading-[48px] max-sm:text-[2.2rem]">
              BAN CÔNG NGHỆ
            </h2>
            <p className="font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-8 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.05rem] max-sm:leading-[1.6rem] max-sm:my-4 max-sm:text-center">
              Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là nơi kết nối các bạn sinh viên đam mê công nghệ.
              Chúng tôi tập trung vào việc phát triển phần mềm, tổ chức các hoạt động đào tạo kỹ năng IT,
              và tạo ra một cộng đồng học hỏi, hợp tác. Với mục tiêu giúp sinh viên nâng cao kỹ năng công nghệ,
              tham gia các dự án thực tế và phát triển nghề nghiệp, Ban Công Nghệ luôn chào đón những bạn trẻ nhiệt huyết
              gia nhập để cùng nhau sáng tạo và học hỏi.
            </p>
            <button className="m-auto flex justify-center items-center w-[157px] h-10 bg-cyan-700 shadow-[-9px_-6px_25px_#ffffff,_6px_7px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded font-quicksand font-medium text-sm leading-5 tracking-[0.001em] text-white transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:scale-10 hover:shadow-xl active:scale-95 active:bg-gray-200 active:text-gray-500 active:shadow-[inset_-4px_-4px_4px_rgba(255,255,255,0.75),_inset_4px_4px_4px_rgba(0,0,0,0.25)] max-xl:mx-auto max-sm:mt-6 max-sm:w-[fit-content] max-sm:px-[20px] max-sm:h-[50px] max-sm:text-[18px]">
              Bắt đầu ngay
            </button>
          </div>

          {/* Image */}
          <div className="w-[686px] h-auto md:mt-12 xl:mt-0 max-xl:w-[70vw] max-xl:mt-6 max-sm:w-full max-sm:my-[50px]">
            <Image
              src={img2}
              alt="Khóa học"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      {/* <section id="mission" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">🧭 Sứ mệnh & Tầm nhìn</h2>
              <p className="text-xl text-gray-600">Định hướng phát triển và mục tiêu của BCN</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "Tạo ra môi trường học tập – thực hành – phát triển cho sinh viên yêu công nghệ tại IUH."
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "Trở thành nơi ươm mầm các lập trình viên, designer, PM tương lai, với hệ sinh thái học – chơi – làm
                    việc thực tế."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Câu chuyện của chúng tôi</h2>
            <p className="text-xl text-gray-600">Hành trình phát triển của BCN qua các cột mốc quan trọng</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <VerticalTimeline>
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#fff",
                    color: "#333",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)", // giảm shadow cho mượt
                    border: "1px solid #e5e7eb",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #fff" }}
                  date={item.date}
                  iconStyle={{ background: item.color, color: "#fff", willChange: "transform", transform: "translateZ(0)" }}
                  icon={<item.icon />}
                >
                  <div className="flex flex-col md:flex-row gap-4" style={{ willChange: "transform", transform: "translateZ(0)" }}>
                    <div className="flex-1">
                      <h3 className="vertical-timeline-element-title text-xl font-bold">{item.title}</h3>
                      <h4 className="vertical-timeline-element-subtitle text-blue-600 font-medium mb-3">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden" style={{ willChange: "transform", transform: "translateZ(0)" }}>
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" style={{ willChange: "transform", transform: "translateZ(0)" }} />
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<Star />} />
            </VerticalTimeline>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">🧠 Giá trị cốt lõi</h2>
              <p className="text-xl text-gray-600">Những nguyên tắc định hướng mọi hoạt động của BCN</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Học từ thực tiễn",
                  description: "Áp dụng kiến thức vào dự án thực tế, học hỏi từ kinh nghiệm thực hành",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: Code,
                  title: "Xây dựng từ kinh nghiệm",
                  description: "Phát triển sản phẩm dựa trên kinh nghiệm và thực hành tốt nhất từ cộng đồng",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Heart,
                  title: "Trách nhiệm và hỗ trợ",
                  description: "Luôn sẵn sàng hỗ trợ lẫn nhau và chịu trách nhiệm với nhiệm vụ được giao",
                  color: "bg-red-100 text-red-600",
                },
                {
                  icon: Rocket,
                  title: "Cởi mở và tiến bộ",
                  description: "Luôn học hỏi, tiếp thu phản hồi và không ngừng cải thiện bản thân",
                  color: "bg-purple-100 text-purple-600",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${value.color.split(" ")[0]}`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color.split(" ")[1]}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Organization Structure */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Cơ cấu tổ chức</h2>
              <p className="text-xl text-gray-600">Mô hình hoạt động: Tình nguyện viên → Thành viên → Chuyên gia</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizationStructure.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${dept.color.split(" ")[0]}`}
                      >
                        <dept.icon className={`h-6 w-6 ${dept.color.split(" ")[1]}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{dept.name}</h3>
                        <Badge variant="outline">{dept.members} thành viên</Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{dept.description}</p>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Trách nhiệm chính:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {dept.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Đội ngũ cốt cán</h2>
              <p className="text-xl text-gray-600">Những người lãnh đạo và định hướng phát triển BCN</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={member.avatar || "/placeholder.svg?height=400&width=300"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    {/* Always visible content */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-0">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-200 font-medium mb-1">{member.role}</p>
                      <Badge variant="outline" className="border-white/50 text-white/90 mb-4 w-fit">
                        {member.department}
                      </Badge>
                    </div>

                    {/* Hover content */}
                    <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-3">{member.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-xs text-blue-200 mb-2">Thành tựu nổi bật:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.achievements?.slice(0, 2).map((achievement, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs bg-white/20 text-white border-white/30"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                          asChild
                        >
                          <Link href={`mailto:${member.email}`}>
                            <Mail className="h-4 w-4" />
                          </Link>
                        </Button>
                        {member.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                            asChild
                          >
                            <Link href={member.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.linkedin && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                            asChild
                          >
                            <Link href={member.linkedin} target="_blank">
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Profile Link */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full" asChild>
                        <Link href={`/portfolio/${member.id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Star Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">📈 Thành tựu nổi bật</h2>
              <p className="text-xl text-gray-600">Những con số ấn tượng trong hành trình phát triển của BCN</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${achievement.color}`}>{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Message from BCN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Thông điệp từ BCN</h2>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <Quote className="h-12 w-12 text-blue-600 flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "Chúng tôi tin rằng mỗi sinh viên đều xứng đáng có cơ hội học hỏi và phát triển trong một môi
                      trường năng động, sáng tạo và thực tiễn. BCN không chỉ là nơi để code, mà còn là nơi để rèn luyện
                      tư duy, kỹ năng làm việc nhóm và tinh thần khởi nghiệp. Chúng tôi hy vọng mỗi thành viên BCN sẽ
                      trở thành những chuyên gia công nghệ có tâm, có tầm và có khả năng đóng góp tích cực cho xã hội."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48&text=NVA" alt="Nguyễn Văn Anh" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">Nguyễn Hữu Khang</p>
                        <p className="text-sm text-gray-600">Sáng lập & Trưởng ban BCN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <Quote className="h-12 w-12 text-blue-600 flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "Chúng tôi tin rằng mỗi sinh viên đều xứng đáng có cơ hội học hỏi và phát triển trong một môi
                      trường năng động, sáng tạo và thực tiễn. BCN không chỉ là nơi để code, mà còn là nơi để rèn luyện
                      tư duy, kỹ năng làm việc nhóm và tinh thần khởi nghiệp. Chúng tôi hy vọng mỗi thành viên BCN sẽ
                      trở thành những chuyên gia công nghệ có tâm, có tầm và có khả năng đóng góp tích cực cho xã hội."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48&text=NVA" alt="Nguyễn Văn Anh" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">Nguyễn Mai Minh Quý</p>
                        <p className="text-sm text-gray-600">Con gà của BCN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Khoảnh khắc đáng nhớ</h2>
              <p className="text-xl text-gray-600">Những khoảnh khắc đáng nhớ trong hành trình phát triển của BCN</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activityGallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            {/* <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/projects">Xem dự án</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Liên hệ hợp tác</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
