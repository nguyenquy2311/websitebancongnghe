"use client"

import { useState, useEffect } from "react"
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
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import img2 from '/public/images/homepage/img2.webp';
import { type Member } from "@/data/portfolio";
import { getAllMembers, getAllTimeline, getAllActivityGallery, type TimelineItem, type ActivityGalleryItem } from "@/lib/firestoreService"
import { getIconComponent } from "@/data/timeline"

export default function AboutPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])
  const [activityGallery, setActivityGallery] = useState<ActivityGalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersData, timelineDataFromFirestore, activityGalleryData] = await Promise.all([
          getAllMembers(),
          getAllTimeline(),
          getAllActivityGallery()
        ])
        setMembers(membersData)
        setTimelineData(timelineDataFromFirestore)
        setActivityGallery(activityGalleryData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className=" flex h-screen items-center w-full overflow-hidden overflow-y-auto max-sm:h-auto max-sm:min-h-screen max-sm:pb-8">
        <div className="overflow-hidden mx-auto gap-10 relative flex items-center justify-between max-xl:flex-col max-xl:items-center max-sm:py-0 max-sm:px-10 max-lg:gap-0 max-lg:mb-10 max-lg:mt-20">
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
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      {/* Our Story Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-quicksand font-normal text-[48px] leading-1.5 tracking-[-0.0025em] text-gray-600 max-sm:leading-[48px] max-sm:text-[2.2rem]">Câu chuyện của chúng tôi</h2>
            <p className="text-xl text-gray-600">Hành trình phát triển của BCN qua các cột mốc quan trọng</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <VerticalTimeline>
              {loading ? (
                <div className="text-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Đang tải timeline...</p>
                </div>
              ) : (
                timelineData.map((item: TimelineItem, index: number) => (
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
                  icon={(() => {
                    const IconComponent = getIconComponent(item.icon);
                    return <IconComponent />;
                  })()}
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
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" style={{ willChange: "transform", transform: "translateZ(0)" }} />
                    </div>
                  </div>
                </VerticalTimelineElement>
                ))
              )}
              <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<Star />} />
            </VerticalTimeline>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-quicksand font-normal text-[48px] leading-1.5 tracking-[-0.0025em] text-gray-600 max-sm:leading-[48px] max-sm:text-[2.2rem]">Đội ngũ cốt cán</h2>
              <p className="text-xl text-gray-600">Những người lãnh đạo và định hướng phát triển BCN</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <div className="col-span-full flex justify-center items-center py-20">
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Đang tải thông tin đội ngũ...</p>
                  </div>
                </div>
              ) : (
                members.map((member: Member) => (
                  <div
                    key={member.id}
                    className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer will-change-transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 group-hover:blur-sm">
                      <Image
                        src={member.avatar || "/placeholder.svg?height=400&width=300"}
                        alt={member.name}
                        fill
                        className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>

                    {/* Content Overlay - Initially positioned at bottom with partial visibility */}
                    <div className="absolute bottom-[5px] left-0 right-0 p-6 text-white transform translate-y-[calc(100%-88px)] group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      {/* Always visible content (Name, Role, Department) */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300 truncate">
                          {member.name}
                        </h3>
                        <p className="text-blue-200 font-medium mb-1">{member.role}</p>
                        <Badge variant="outline" className="border-white/50 text-white/90 w-fit">
                          {member.department}
                        </Badge>
                      </div>

                      {/* Hover content - Hidden initially and shown on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-3">{member.description}</p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-medium text-xs text-blue-200 mb-2">Thành tựu nổi bật:</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.achievements?.slice(0, 2).map((achievement: string, idx: number) => (
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
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center will-change-transform transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Message from BCN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-quicksand font-normal text-[48px] leading-1.5 tracking-[-0.0025em] text-gray-600 max-sm:leading-[48px] max-sm:text-[2.2rem]">Thông điệp từ BCN</h2>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <Quote className="h-12 w-12 text-blue-600 flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "Ban Công Nghệ là nơi hội tụ của những con người trẻ trung, nhiệt huyết và sáng tạo. Chúng tôi không chỉ học hỏi
                      từ những dự án thực tế mà còn xây dựng những mối quan hệ bền vững, cùng nhau phát triển và chinh phục
                      những thử thách mới. Đây là nơi mà mỗi thành viên đều có cơ hội để tỏa sáng và tạo nên giá trị."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://lflnpvqjxbtajywjtees.supabase.co/storage/v1/object/public/bancongnghe/bancongnghe/members/chokhang.png" alt="Nguyễn Hữu Khang" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">Nguyễn Hữu Khang</p>
                        <p className="text-sm text-gray-600">Thành viên Ban Công Nghệ</p>
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
                      "Ban Công Nghệ là nơi mà những ý tưởng sáng tạo được hiện thực hóa, nơi mà mỗi thành viên đều có cơ hội
                      phát triển bản thân và khám phá tiềm năng của mình. Chúng tôi luôn hướng tới việc xây dựng một
                      cộng đồng công nghệ gắn kết, nơi mọi người cùng nhau học hỏi, chia sẻ và tạo nên những giá trị
                      bền vững cho tương lai."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src="https://lflnpvqjxbtajywjtees.supabase.co/storage/v1/object/public/bancongnghe/bancongnghe/members/nguyen-mai-minh-quy.webp" alt="Nguyễn Văn Anh" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">Nguyễn Mai Minh Quý</p>
                        <p className="text-sm text-gray-600">Thành viên Ban Công Nghệ</p>
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
          <h2 className="text-3xl lg:text-4xl font-quicksand font-normal  mb-4">Tham gia hành trình của BCN</h2>
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
