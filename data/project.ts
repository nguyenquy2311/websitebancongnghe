export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription?: string
  image: string
  gallery?: string[]
  techStack: string[]
  category: string
  year: string
  type: "Nhóm" | "Cá nhân"
  status?: string
  duration?: string
  startDate?: string
  endDate?: string
  githubUrl?: string
  demoUrl?: string

  goals?: string[]
  objectives?: string[]

  timeline?: {
    phase: string
    duration: string
    description: string
    status: string
    tasks: string[]
  }[]

  team?: {
    id: string
    name: string
    role: string
    avatar: string
    contributions: string[]
    recognition?: string
  }[]

  impact?: {
    users: string
    satisfaction: string
    timeReduction: string
    errorReduction: string
  }

  lessonsLearned?: string[]
  futurePlans?: string[]
}


export const projects: Project[] = [
  {
    id: "club-finder",
    title: "Club Finder",
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
    team: [
      {
        id: "nguyen-huu-khang",
        name: "Đỗ Thanh Tường",
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
    impact: {
      users: "5,000+",
      satisfaction: "95%",
      timeReduction: "70%",
      errorReduction: "85%",
    },
    lessonsLearned: [
      "Tầm quan trọng của việc thu thập feedback từ người dùng thực tế",
      "Cần có kế hoạch testing chi tiết từ đầu dự án",
      "Collaboration tools giúp team work hiệu quả hơn",
      "Documentation tốt giúp maintain dự án dễ dàng hơn",
    ],
    futurePlans: [
      "Tích hợp AI chatbot hỗ trợ sinh viên",
      "Mobile app cho iOS và Android",
      "Tính năng thông báo real-time",
      "Dashboard analytics cho quản lý",
    ],
  },
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
    team: [
      {
        id: "nguyen-huu-khang",
        name: "Đỗ Thanh Tường",
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
    impact: {
      users: "5,000+",
      satisfaction: "95%",
      timeReduction: "70%",
      errorReduction: "85%",
    },
    lessonsLearned: [
      "Tầm quan trọng của việc thu thập feedback từ người dùng thực tế",
      "Cần có kế hoạch testing chi tiết từ đầu dự án",
      "Collaboration tools giúp team work hiệu quả hơn",
      "Documentation tốt giúp maintain dự án dễ dàng hơn",
    ],
    futurePlans: [
      "Tích hợp AI chatbot hỗ trợ sinh viên",
      "Mobile app cho iOS và Android",
      "Tính năng thông báo real-time",
      "Dashboard analytics cho quản lý",
    ],
  },
]
