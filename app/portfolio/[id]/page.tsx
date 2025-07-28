import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Award, Code, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in real app, this would come from a database
const members = [
  {
    id: "nguyen-van-anh",
    name: "Nguyễn Văn Anh",
    role: "Leader",
    group: "Leader",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Passionate về Full-stack Development và Project Management. Có 3+ năm kinh nghiệm phát triển web và dẫn dắt đội nhóm. Mục tiêu trở thành Tech Lead tại các công ty công nghệ hàng đầu.",
    longBio:
      "Anh là một lập trình viên đầy đam mê với hơn 3 năm kinh nghiệm trong phát triển web. Anh đã dẫn dắt nhiều dự án thành công tại BCN và luôn tìm cách áp dụng những công nghệ mới nhất vào thực tiễn. Với tư duy chiến lược và kỹ năng lãnh đạo tốt, anh đã giúp BCN phát triển từ một nhóm nhỏ thành một cộng đồng công nghệ mạnh mẽ.",
    skills: ["React", "Node.js", "Python", "Leadership", "Project Management", "System Design"],
    joinYear: "2022",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
    github: "https://github.com/nguyenvananh",
    linkedin: "https://linkedin.com/in/nguyenvananh",
    portfolio: "https://nguyenvananh.dev",
    email: "anh.nguyen@student.iuh.edu.vn",
    achievements: [
      "Leader của BCN từ 2022",
      "Dẫn dắt 10+ dự án thành công",
      "Giải nhất Hackathon IUH 2023",
      "Speaker tại 5+ tech events",
    ],
    projects: [
      {
        id: "iuh-student-portal",
        title: "IUH Student Portal",
        role: "Tech Lead & Backend Developer",
        description: "Dẫn dắt đội ngũ 5 người phát triển hệ thống quản lý sinh viên",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["React", "Node.js", "MongoDB"],
        status: "Completed",
      },
      {
        id: "bcn-website",
        title: "BCN Website",
        role: "Project Manager & Full-stack Developer",
        description: "Thiết kế và phát triển website chính thức của BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Next.js", "Tailwind CSS", "Vercel"],
        status: "Completed",
      },
      {
        id: "event-management",
        title: "Event Management System",
        role: "System Architect",
        description: "Thiết kế kiến trúc hệ thống quản lý sự kiện quy mô lớn",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Next.js", "PostgreSQL", "Prisma"],
        status: "In Progress",
      },
    ],
    stats: {
      projectsCompleted: 12,
      yearsExperience: 3,
      teamMembers: 15,
      linesOfCode: "50K+",
    },
  },
  {
    id: "tran-thi-binh",
    name: "Trần Thị Bình",
    role: "Core Team",
    group: "Core",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Frontend Developer với đam mê UI/UX Design. Yêu thích tạo ra những giao diện người dùng đẹp và thân thiện.",
    longBio:
      "Bình là một Frontend Developer tài năng với khiếu thẩm mỹ cao và kỹ năng UI/UX Design xuất sắc. Cô đã thiết kế và phát triển nhiều giao diện người dùng ấn tượng cho các dự án của BCN. Với tinh thần học hỏi không ngừng, Bình luôn cập nhật những xu hướng thiết kế mới nhất và áp dụng vào công việc.",
    skills: ["React", "Vue.js", "Figma", "Tailwind CSS", "UI/UX Design", "Adobe Creative Suite"],
    joinYear: "2022",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Thiết kế Đồ họa",
    github: "https://github.com/tranthibinh",
    linkedin: "https://linkedin.com/in/tranthibinh",
    portfolio: null,
    email: "binh.tran@student.iuh.edu.vn",
    achievements: [
      "UI/UX Lead của BCN",
      "Thiết kế 15+ giao diện web/app",
      "Mentor cho 20+ thành viên",
      "Giải nhì Design Contest 2023",
    ],
    projects: [
      {
        id: "bcn-website",
        title: "BCN Website",
        role: "UI/UX Designer & Frontend Developer",
        description: "Thiết kế và phát triển giao diện website chính thức của BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Figma", "React", "Tailwind CSS"],
        status: "Completed",
      },
      {
        id: "mobile-app-ui",
        title: "BCN Mobile App UI",
        role: "UI/UX Designer",
        description: "Thiết kế giao diện ứng dụng mobile cho BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Figma", "Adobe XD", "Principle"],
        status: "Completed",
      },
    ],
    stats: {
      projectsCompleted: 8,
      yearsExperience: 2,
      teamMembers: 12,
      linesOfCode: "30K+",
    },
  },
  {
    id: "le-van-cuong",
    name: "Lê Văn Cường",
    role: "Web Developer",
    group: "Web",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Backend Developer chuyên về API development và database design. Mong muốn trở thành Solution Architect.",
    longBio:
      "Cường là một Backend Developer với kinh nghiệm sâu về API development và database design. Anh có khả năng thiết kế và triển khai các hệ thống backend phức tạp, đảm bảo hiệu suất và bảo mật cao. Cường luôn tìm hiểu các công nghệ mới và áp dụng best practices vào công việc.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"],
    joinYear: "2023",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
    github: "https://github.com/levancuong",
    linkedin: "https://linkedin.com/in/levancuong",
    portfolio: "https://levancuong.dev",
    email: "cuong.le@student.iuh.edu.vn",
    achievements: [
      "Backend Expert của BCN",
      "Phát triển 10+ API systems",
      "Code Review Lead",
      "AWS Certified Developer",
    ],
    projects: [
      {
        id: "iuh-student-portal",
        title: "IUH Student Portal",
        role: "Backend Developer",
        description: "Phát triển API và database cho hệ thống quản lý sinh viên",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Node.js", "MongoDB", "Express"],
        status: "Completed",
      },
      {
        id: "event-management-api",
        title: "Event Management API",
        role: "Lead Backend Developer",
        description: "Thiết kế và phát triển API cho hệ thống quản lý sự kiện",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Node.js", "PostgreSQL", "Docker"],
        status: "In Progress",
      },
    ],
    stats: {
      projectsCompleted: 6,
      yearsExperience: 2,
      teamMembers: 8,
      linesOfCode: "40K+",
    },
  },
  {
    id: "pham-thi-dung",
    name: "Phạm Thị Dung",
    role: "App Developer",
    group: "App",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Mobile App Developer với kinh nghiệm React Native và Flutter. Đam mê tạo ra những ứng dụng mobile hữu ích.",
    longBio:
      "Dung là một Mobile App Developer tài năng với kinh nghiệm phát triển ứng dụng trên cả hai nền tảng iOS và Android. Cô chuyên về React Native và Flutter, có khả năng tạo ra những ứng dụng mobile với hiệu suất cao và trải nghiệm người dùng tuyệt vời. Dung luôn theo dõi các xu hướng mobile development mới nhất.",
    skills: ["React Native", "Flutter", "Dart", "Firebase", "iOS", "Android"],
    joinYear: "2023",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
    github: "https://github.com/phamthidung",
    linkedin: "https://linkedin.com/in/phamthidung",
    portfolio: null,
    email: "dung.pham@student.iuh.edu.vn",
    achievements: [
      "Mobile Lead của BCN",
      "Phát triển 5+ ứng dụng mobile",
      "Cross-platform Specialist",
      "Google Play Developer",
    ],
    projects: [
      {
        id: "bcn-mobile-app",
        title: "BCN Mobile App",
        role: "Lead Mobile Developer",
        description: "Phát triển ứng dụng mobile chính thức của BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["React Native", "Firebase", "Redux"],
        status: "In Progress",
      },
      {
        id: "student-helper-app",
        title: "Student Helper App",
        role: "Flutter Developer",
        description: "Ứng dụng hỗ trợ sinh viên trong học tập",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Flutter", "Dart", "SQLite"],
        status: "Completed",
      },
    ],
    stats: {
      projectsCompleted: 5,
      yearsExperience: 1,
      teamMembers: 6,
      linesOfCode: "25K+",
    },
  },
  {
    id: "hoang-van-em",
    name: "Hoàng Văn Em",
    role: "Web Developer",
    group: "Web",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "Frontend Developer yêu thích JavaScript và các framework hiện đại. Mục tiêu trở thành Senior Frontend Developer.",
    longBio:
      "Em là một Frontend Developer trẻ tuổi nhưng đầy nhiệt huyết với JavaScript và các framework hiện đại. Anh có khả năng học hỏi nhanh chóng và áp dụng các công nghệ mới vào dự án. Em luôn chú trọng đến chất lượng code và trải nghiệm người dùng trong mọi sản phẩm mình tham gia.",
    skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
    joinYear: "2024",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
    github: "https://github.com/hoangvanem",
    linkedin: "https://linkedin.com/in/hoangvanem",
    portfolio: "https://hoangvanem.vercel.app",
    email: "em.hoang@student.iuh.edu.vn",
    achievements: [
      "Frontend Developer của BCN",
      "Hoàn thành 3+ dự án web",
      "JavaScript Enthusiast",
      "Open Source Contributor",
    ],
    projects: [
      {
        id: "portfolio-website",
        title: "Personal Portfolio",
        role: "Full-stack Developer",
        description: "Website portfolio cá nhân với Next.js",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "Completed",
      },
      {
        id: "todo-app",
        title: "Advanced Todo App",
        role: "Frontend Developer",
        description: "Ứng dụng quản lý công việc với React",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["React", "TypeScript", "Local Storage"],
        status: "Completed",
      },
    ],
    stats: {
      projectsCompleted: 3,
      yearsExperience: 1,
      teamMembers: 4,
      linesOfCode: "15K+",
    },
  },
  {
    id: "vu-thi-phuong",
    name: "Vũ Thị Phương",
    role: "Designer",
    group: "Web",
    avatar: "/placeholder.svg?height=200&width=200",
    coverImage: "/placeholder.svg?height=300&width=800",
    description:
      "UI/UX Designer với đam mê tạo ra những trải nghiệm người dùng tuyệt vời. Chuyên về Design System và User Research.",
    longBio:
      "Phương là một UI/UX Designer với tầm nhìn sáng tạo và khả năng nghiên cứu người dùng sâu sắc. Cô chuyên về việc tạo ra các Design System nhất quán và tiến hành User Research để hiểu rõ nhu cầu người dùng. Phương luôn đặt trải nghiệm người dùng lên hàng đầu trong mọi thiết kế.",
    skills: ["Figma", "Adobe XD", "Photoshop", "User Research", "Prototyping", "Design Systems"],
    joinYear: "2023",
    location: "TP. Hồ Chí Minh",
    education: "Đại học Công nghiệp TP.HCM - Thiết kế Đồ họa",
    github: null,
    linkedin: "https://linkedin.com/in/vuthiphuong",
    portfolio: "https://vuthiphuong.design",
    email: "phuong.vu@student.iuh.edu.vn",
    achievements: ["UI/UX Designer của BCN", "Thiết kế 8+ giao diện", "User Research Expert", "Design System Creator"],
    projects: [
      {
        id: "design-system",
        title: "BCN Design System",
        role: "Lead Designer",
        description: "Tạo design system thống nhất cho các dự án BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Figma", "Design Tokens", "Component Library"],
        status: "In Progress",
      },
      {
        id: "user-research",
        title: "Student App UX Research",
        role: "UX Researcher",
        description: "Nghiên cứu trải nghiệm người dùng cho ứng dụng sinh viên",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["User Interviews", "Surveys", "Analytics"],
        status: "Completed",
      },
    ],
    stats: {
      projectsCompleted: 4,
      yearsExperience: 1,
      teamMembers: 5,
      linesOfCode: "N/A",
    },
  },
]

const projects = [
  {
    id: "iuh-student-portal",
    title: "IUH Student Portal",
  },
  {
    id: "bcn-website",
    title: "BCN Website",
  },
  {
    id: "event-management",
    title: "Event Management System",
  },
]

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-80 relative overflow-hidden">
          <Image
            src={member.coverImage || "/placeholder.svg"}
            alt={`${member.name} cover`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <div className="relative -mt-32 pb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 bg-white rounded-lg shadow-lg p-8 mt-8 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">{member.role}</Badge>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Tham gia từ {member.joinYear}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                    {member.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.linkedin} target="_blank">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {member.portfolio && (
                      <Button size="sm" asChild>
                        <Link href={member.portfolio} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Portfolio
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Giới Thiệu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{member.longBio}</p>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Dự Án Đã Tham Gia ({member.projects.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {member.projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex gap-6">
                        <div className="w-32 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
                              <Link href={`/projects/${project.id}`}>{project.title}</Link>
                            </h3>
                            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                              {project.status === "Completed" ? "Hoàn thành" : "Đang phát triển"}
                            </Badge>
                          </div>
                          <p className="text-blue-600 font-medium text-sm mb-2">{project.role}</p>
                          <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Thành Tích & Vinh Danh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Thống Kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{member.stats.projectsCompleted}</div>
                  <div className="text-sm text-gray-600">Dự án hoàn thành</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{member.stats.yearsExperience}</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{member.stats.teamMembers}</div>
                  <div className="text-sm text-gray-600">Thành viên đã mentor</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{member.stats.linesOfCode}</div>
                  <div className="text-sm text-gray-600">Dòng code đã viết</div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Kỹ Năng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Học Vấn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{member.education}</p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Liên Hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Gửi Email
                  </Link>
                </Button>
                {member.linkedin && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href={member.linkedin} target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                )}
                {member.github && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href={member.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
