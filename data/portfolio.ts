import type { StaticImageData } from "next/image"
import TT from "./images/do-thanh-tuong.png"
import MinhVu from "./images/nguyen-minh-vu.png"
import MinhQuy from "./images/nguyen-mai-minh-quy.png"

export type Member = {
  id: string
  name: string
  role: string
  group: string
  department: string
  avatar: string | StaticImageData
  coverImage?: string | StaticImageData
  description: string
  longBio?: string
  skills: string[]
  joinYear: string
  location: string
  education?: string
  github?: string | null
  linkedin?: string | null
  portfolio?: string | null
  email: string
  achievements?: string[]
  projects?: {
    id: string
    title: string
    role: string
    description: string
    image: string | StaticImageData
    techStack: string[]
    status: "Completed" | "In Progress" | "Upcoming"
  }[]
  stats?: {
    projectsCompleted: number
    yearsExperience: number
    teamMembers: number
    linesOfCode: string
  }
}

export const members: Member[] = [
  {
    id: "nguyen-huu-khang",
    name: "Đỗ Thanh Tường",
    role: "Leader",
    group: "Leader",
    department: "Ban Điều hành",
    avatar: TT.src,
    coverImage: "/placeholder.svg?height=300&width=800&text=Nguyễn+Văn+Anh+Cover",
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
      "Sáng lập BCN",
      "Dẫn dắt 10+ dự án thành công",
      "Giải nhất Hackathon IUH 2023",
      "Speaker tại 5+ tech events",
    ],
    projects: [
      {
        id: "club-finder",
        title: "Club Finder",
        role: "Tech Lead & Backend Developer",
        description: "Dẫn dắt đội ngũ 5 người phát triển hệ thống quản lý sinh viên",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["React", "Node.js", "MongoDB"],
        status: "Completed",
      },
      {
        id: "bcn-website",
        title: "Website Ban Công Nghệ",
        role: "Project Manager & Full-stack Developer",
        description: "Thiết kế và phát triển website chính thức của BCN",
        image: "/placeholder.svg?height=150&width=250",
        techStack: ["Next.js", "Tailwind CSS", "Vercel"],
        status: "Completed",
      },
      {
        id: "event-management-system",
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
    id: "nguyen-mai-minh-quy",
    name: "Nguyễn Mai Minh Quý",
    role: "Core Team",
    group: "Core",
    department: "Ban Điều Hành",
    avatar: MinhQuy.src,
    coverImage: "/placeholder.svg?height=300&width=800&text=Trần+Thị+Bình+Cover",
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
    id: "nguyen-minh-vu",
    name: "Nguyễn Minh Vũ",
    role: "Web Developer",
    group: "Web",
    department: "Ban Phát triển Web",
    avatar: MinhVu.src,
    coverImage: "/placeholder.svg?height=300&width=800&text=Lê+Văn+Cường+Cover",
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
      "Trưởng nhóm Code Review",
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
        id: "event-management-system",
        title: "Event Management System",
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
  // {
  //   id: "chung-ngo-minh-hoang",
  //   name: "Chung Ngô Minh Hoàng",
  //   role: "App Developer",
  //   group: "App",
  //   department: "Ban Phát triển Web",
  //   avatar: "/placeholder.svg?height=200&width=200&text=Phạm+Thị+Dung",
  //   coverImage: "/placeholder.svg?height=300&width=800&text=Phạm+Thị+Dung+Cover",
  //   description:
  //     "Mobile App Developer với kinh nghiệm React Native và Flutter. Đam mê tạo ra những ứng dụng mobile hữu ích.",
  //   longBio:
  //     "Dung là một Mobile App Developer tài năng với kinh nghiệm phát triển ứng dụng trên cả hai nền tảng iOS và Android. Cô chuyên về React Native và Flutter, có khả năng tạo ra những ứng dụng mobile với hiệu suất cao và trải nghiệm người dùng tuyệt vời. Dung luôn theo dõi các xu hướng mobile development mới nhất.",
  //   skills: ["React Native", "Flutter", "Dart", "Firebase", "iOS", "Android"],
  //   joinYear: "2023",
  //   location: "TP. Hồ Chí Minh",
  //   education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
  //   github: "https://github.com/phamthidung",
  //   linkedin: "https://linkedin.com/in/phamthidung",
  //   portfolio: null,
  //   email: "dung.pham@student.iuh.edu.vn",
  //   achievements: [
  //     "Mobile Lead của BCN",
  //     "Phát triển 5+ ứng dụng mobile",
  //     "Cross-platform Specialist",
  //     "Google Play Developer",
  //   ],
  //   projects: [
  //     {
  //       id: "bcn-mobile-app",
  //       title: "BCN Mobile App",
  //       role: "Lead Mobile Developer",
  //       description: "Phát triển ứng dụng mobile chính thức của BCN",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["React Native", "Firebase", "Redux"],
  //       status: "In Progress",
  //     },
  //     {
  //       id: "student-helper-app",
  //       title: "Student Helper App",
  //       role: "Flutter Developer",
  //       description: "Ứng dụng hỗ trợ sinh viên trong học tập",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["Flutter", "Dart", "SQLite"],
  //       status: "Completed",
  //     },
  //   ],
  //   stats: {
  //     projectsCompleted: 5,
  //     yearsExperience: 1,
  //     teamMembers: 6,
  //     linesOfCode: "25K+",
  //   },
  // },
  // {
  //   id: "hoang-van-em",
  //   name: "Hoàng Văn Em",
  //   role: "Web Developer",
  //   group: "Web",
  //   department: "Ban Phát triển Frontend",
  //   avatar: "/placeholder.svg?height=200&width=200&text=Hoàng+Văn+Em",
  //   coverImage: "/placeholder.svg?height=300&width=800&text=Hoàng+Văn+Em+Cover",
  //   description:
  //     "Frontend Developer yêu thích JavaScript và các framework hiện đại. Mục tiêu trở thành Senior Frontend Developer.",
  //   longBio:
  //     "Em là một Frontend Developer trẻ tuổi nhưng đầy nhiệt huyết với JavaScript và các framework hiện đại. Anh có khả năng học hỏi nhanh chóng và áp dụng các công nghệ mới vào dự án. Em luôn chú trọng đến chất lượng code và trải nghiệm người dùng trong mọi sản phẩm mình tham gia.",
  //   skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  //   joinYear: "2024",
  //   location: "TP. Hồ Chí Minh",
  //   education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
  //   github: "https://github.com/hoangvanem",
  //   linkedin: "https://linkedin.com/in/hoangvanem",
  //   portfolio: "https://hoangvanem.vercel.app",
  //   email: "em.hoang@student.iuh.edu.vn",
  //   achievements: [
  //     "Frontend Developer của BCN",
  //     "Hoàn thành 3+ dự án web",
  //     "JavaScript Enthusiast",
  //     "Open Source Contributor",
  //   ],
  //   projects: [
  //     {
  //       id: "personal-portfolio-template",
  //       title: "Personal Portfolio Template",
  //       role: "Full-stack Developer",
  //       description: "Website portfolio cá nhân với Next.js",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //       status: "Completed",
  //     },
  //     {
  //       id: "todo-app",
  //       title: "Advanced Todo App",
  //       role: "Frontend Developer",
  //       description: "Ứng dụng quản lý công việc với React",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["React", "TypeScript", "Local Storage"],
  //       status: "Completed",
  //     },
  //   ],
  //   stats: {
  //     projectsCompleted: 3,
  //     yearsExperience: 1,
  //     teamMembers: 4,
  //     linesOfCode: "15K+",
  //   },
  // },
  // {
  //   id: "vu-thi-phuong",
  //   name: "Vũ Thị Phương",
  //   role: "Designer",
  //   group: "Web",
  //   department: "Ban Thiết kế",
  //   avatar: "/placeholder.svg?height=200&width=200&text=Vũ+Thị+Phương",
  //   coverImage: "/placeholder.svg?height=300&width=800&text=Vũ+Thị+Phương+Cover",
  //   description:
  //     "UI/UX Designer với đam mê tạo ra những trải nghiệm người dùng tuyệt vời. Chuyên về Design System và User Research.",
  //   longBio:
  //     "Phương là một UI/UX Designer với tầm nhìn sáng tạo và khả năng nghiên cứu người dùng sâu sắc. Cô chuyên về việc tạo ra các Design System nhất quán và tiến hành User Research để hiểu rõ nhu cầu người dùng. Phương luôn đặt trải nghiệm người dùng lên hàng đầu trong mọi thiết kế.",
  //   skills: ["Figma", "Adobe XD", "Photoshop", "User Research", "Prototyping", "Design Systems"],
  //   joinYear: "2023",
  //   location: "TP. Hồ Chí Minh",
  //   education: "Đại học Công nghiệp TP.HCM - Thiết kế Đồ họa",
  //   github: null,
  //   linkedin: "https://linkedin.com/in/vuthiphuong",
  //   portfolio: "https://vuthiphuong.design",
  //   email: "phuong.vu@student.iuh.edu.vn",
  //   achievements: ["UI/UX Designer của BCN", "Thiết kế 8+ giao diện", "User Research Expert", "Design System Creator"],
  //   projects: [
  //     {
  //       id: "design-system",
  //       title: "BCN Design System",
  //       role: "Lead Designer",
  //       description: "Tạo design system thống nhất cho các dự án BCN",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["Figma", "Design Tokens", "Component Library"],
  //       status: "In Progress",
  //     },
  //     {
  //       id: "user-research",
  //       title: "Student App UX Research",
  //       role: "UX Researcher",
  //       description: "Nghiên cứu trải nghiệm người dùng cho ứng dụng sinh viên",
  //       image: "/placeholder.svg?height=150&width=250",
  //       techStack: ["User Interviews", "Surveys", "Analytics"],
  //       status: "Completed",
  //     },
  //   ],
  //   stats: {
  //     projectsCompleted: 4,
  //     yearsExperience: 1,
  //     teamMembers: 5,
  //     linesOfCode: "N/A",
  //   },
  // },
  // {
  //   id: "dang-van-giang",
  //   name: "Đặng Văn Giang",
  //   role: "App Developer",
  //   group: "App",
  //   department: "Ban Phát triển Ứng dụng",
  //   avatar: "/placeholder.svg?height=150&width=150&text=Đặng+Văn+Giang",
  //   description:
  //     "iOS Developer với kinh nghiệm Swift và SwiftUI. Đam mê phát triển ứng dụng iOS native với performance cao.",
  //   skills: ["Swift", "SwiftUI", "iOS", "Xcode"],
  //   joinYear: "2024",
  //   location: "TP. Hồ Chí Minh",
  //   education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
  //   github: "https://github.com/dangvangiang",
  //   linkedin: "https://linkedin.com/in/dangvangiang",
  //   portfolio: null,
  //   email: "giang.dang@student.iuh.edu.vn",
  // },
  // {
  //   id: "bui-thi-hoa",
  //   name: "Bùi Thị Hoa",
  //   role: "Web Developer",
  //   group: "Web",
  //   department: "Ban Phát triển Frontend",
  //   avatar: "/placeholder.svg?height=150&width=150&text=Bùi+Thị+Hoa",
  //   description:
  //     "Full-stack Developer với kinh nghiệm cả Frontend và Backend. Yêu thích làm việc với các công nghệ mới và thử thách bản thân.",
  //   skills: ["Python", "Django", "React", "PostgreSQL"],
  //   joinYear: "2024",
  //   location: "TP. Hồ Chí Minh",
  //   education: "Đại học Công nghiệp TP.HCM - Công nghệ Thông tin",
  //   github: "https://github.com/buithihoa",
  //   linkedin: "https://linkedin.com/in/buithihoa",
  //   portfolio: "https://buithihoa.dev",
  //   email: "hoa.bui@student.iuh.edu.vn",
  // },
]

export const memberGroups = [
  { id: "all", name: "Tất cả", color: "bg-gray-100 text-gray-800" },
  { id: "Leader", name: "Leader", color: "bg-red-100 text-red-800" },
  { id: "Core", name: "Core Team", color: "bg-blue-100 text-blue-800" },
  { id: "Web", name: "Nhóm Web", color: "bg-green-100 text-green-800" },
  { id: "App", name: "Nhóm App", color: "bg-purple-100 text-purple-800" },
]

export const memberRoles = ["Tất cả", "Leader", "Core Team", "Web Developer", "App Developer", "Designer"]

import FitImage from "./images/activitygallery/fit.jpg";
import a from "./images/activitygallery/2.jpg";
import b from "./images/activitygallery/3.jpg";
import c from "./images/activitygallery/4.jpg";
import d from "./images/activitygallery/5.jpg";
import e from "./images/activitygallery/6.jpg";
import f from "./images/activitygallery/7.jpg";
import g from "./images/activitygallery/8.jpg";



export const activityGallery = [
  { src: FitImage.src, alt: "Workshop React" },
  { src: a.src, alt: "Team Building" },
  { src: b.src, alt: "Hackathon" },
  { src: c.src, alt: "Tech Talk" },
  { src: d.src, alt: "Project Demo" },
  { src: e.src, alt: "Networking Event" },
  { src: f.src, alt: "Code Review Session" },
  { src: g.src, alt: "Member Graduation" },
]