/**
 * Script để populate sample data vào Firestore
 * Chạy script này để thêm dữ liệu mẫu cho portfolios collection
 */

import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebaseConfig"

export const sampleProjects = [
  {
    title: "Website BCN Official",
    shortDescription: "Website chính thức của Ban Công Nghệ với đầy đủ tính năng quản lý",
    longDescription: "Website được xây dựng với Next.js và Firebase, bao gồm các tính năng quản lý thành viên, dự án, hoạt động và dashboard admin. Thiết kế responsive và tối ưu SEO.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    year: "2024",
    type: "Nhóm",
    status: "Completed",
    duration: "3 tháng",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    githubUrl: "https://github.com/minggquyt/websitebancongnghe",
    demoUrl: "https://bcn.iuh.edu.vn",
    goals: ["Tạo platform trung tâm cho BCN", "Quản lý thành viên hiệu quả", "Showcase các dự án"],
    objectives: ["Tăng 50% engagement", "Giảm 70% thời gian admin", "Tăng 30% số lượng đăng ký"],
    timeline: [
      {
        phase: "Planning & Design",
        duration: "2 tuần",
        description: "Phân tích yêu cầu và thiết kế UI/UX",
        status: "Completed",
        tasks: ["User research", "Wireframing", "UI Design", "Tech stack selection"]
      },
      {
        phase: "Development",
        duration: "8 tuần",
        description: "Phát triển frontend và backend",
        status: "Completed", 
        tasks: ["Setup project", "Implement components", "Firebase integration", "Testing"]
      },
      {
        phase: "Deployment",
        duration: "2 tuần",
        description: "Deploy và tối ưu hóa",
        status: "Completed",
        tasks: ["Production deployment", "Performance optimization", "SEO setup", "Monitoring"]
      }
    ],
    team: [
      {
        id: "1",
        name: "Nguyễn Minh Vũ",
        role: "Tech Lead",
        avatar: "./data/images/nguyen-minh-vu.webp",
        contributions: ["Architecture design", "Firebase setup", "Code review"],
        recognition: "Outstanding Leadership"
      },
      {
        id: "2", 
        name: "Nguyễn Mai Minh Quý",
        role: "Frontend Developer",
        avatar: "./data/images/nguyen-mai-minh-quy.webp",
        contributions: ["UI implementation", "Responsive design", "Component library"],
        recognition: "Best Frontend Implementation"
      }
    ],
    impact: {
      users: "500+ active users",
      satisfaction: "95% user satisfaction",
      timeReduction: "70% less admin time",
      errorReduction: "85% fewer errors"
    },
    lessonsLearned: [
      "Tầm quan trọng của planning kỹ lưỡng",
      "Firebase là giải pháp tuyệt vời cho MVP",
      "TypeScript giúp giảm bugs đáng kể"
    ],
    futurePlans: ["Mobile app companion", "AI-powered features", "Advanced analytics"]
  },
  {
    title: "BCN Mobile App",
    shortDescription: "Ứng dụng mobile chính thức của BCN cho iOS và Android",
    longDescription: "Ứng dụng được phát triển bằng React Native, cung cấp trải nghiệm mobile tối ưu cho thành viên BCN. Bao gồm tính năng push notification, offline support và real-time updates.",
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"],
    techStack: ["React Native", "Firebase", "Redux", "AsyncStorage"],
    category: "Mobile App",
    year: "2024",
    type: "Nhóm", 
    status: "In Progress",
    duration: "4 tháng",
    startDate: "2024-02-01",
    endDate: "2024-05-31",
    githubUrl: "https://github.com/bcn/mobile-app",
    demoUrl: null,
    goals: ["Mở rộng khả năng tiếp cận", "Tăng engagement mobile", "Cung cấp tính năng offline"],
    objectives: ["10K+ downloads trong 6 tháng", "4.5+ rating trên store", "60% daily active users"],
    team: [
      {
        id: "3",
        name: "Phan Hoàng Luân", 
        role: "Lead Mobile Developer",
        avatar: "./data/images/phan-hoang-luan.webp",
        contributions: ["React Native setup", "Navigation architecture", "Push notifications"],
        recognition: "Mobile Development Expert"
      }
    ],
    impact: {
      users: "1000+ beta users",
      satisfaction: "88% beta satisfaction", 
      timeReduction: "40% faster access",
      errorReduction: "90% fewer crashes"
    }
  },
  {
    title: "Study Tracker",
    shortDescription: "Ứng dụng theo dõi tiến độ học tập cho sinh viên",
    longDescription: "Ứng dụng iOS native giúp sinh viên theo dõi tiến độ học tập, quản lý thời gian biểu và nhắc nhở deadline. Sử dụng Core Data để lưu trữ offline và UserNotifications cho reminders.",
    image: "/placeholder.svg",
    techStack: ["Swift", "UIKit", "Core Data", "UserNotifications", "CloudKit"],
    category: "Mobile App",
    year: "2023",
    type: "Cá nhân",
    status: "Completed",
    duration: "2 tháng",
    startDate: "2023-09-01", 
    endDate: "2023-10-31",
    githubUrl: "https://github.com/dothanhttuong/study-tracker",
    demoUrl: "https://apps.apple.com/app/study-tracker",
    team: [
      {
        id: "4",
        name: "Đỗ Thành Tường",
        role: "iOS Developer", 
        avatar: "./data/images/do-thanh-tuong.webp",
        contributions: ["Full iOS development", "UI/UX design", "App Store submission"],
        recognition: "App Store Featured"
      }
    ],
    impact: {
      users: "2000+ downloads",
      satisfaction: "92% user rating",
      timeReduction: "30% better time management", 
      errorReduction: "95% fewer missed deadlines"
    }
  },
  {
    title: "Portfolio Management System",
    shortDescription: "Hệ thống quản lý portfolio cho thành viên BCN",
    longDescription: "Nền tảng web cho phép thành viên tạo và quản lý portfolio cá nhân. Xây dựng với Vue.js và Nuxt.js, tích hợp với headless CMS để quản lý nội dung dễ dàng.",
    image: "/placeholder.svg",
    techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
    category: "Web Development",
    year: "2023",
    type: "Nhóm",
    status: "Completed", 
    duration: "6 tuần",
    startDate: "2023-06-01",
    endDate: "2023-07-15",
    githubUrl: "https://github.com/bcn/portfolio-system",
    demoUrl: "https://portfolio.bcn.edu.vn",
    team: [
      {
        id: "5",
        name: "Nguyễn Mai Minh Quý",
        role: "Frontend Lead",
        avatar: "./data/images/nguyen-mai-minh-quy.webp", 
        contributions: ["Vue.js architecture", "Component system", "Performance optimization"],
        recognition: "Best Vue.js Implementation"
      }
    ],
    impact: {
      users: "100+ portfolios created",
      satisfaction: "89% creator satisfaction",
      timeReduction: "60% faster portfolio creation",
      errorReduction: "80% fewer broken links"
    }
  }
]

export const sampleMembers = [
  {
    name: "Nguyễn Minh Vũ",
    role: "Leader",
    group: "Leader", 
    department: "Công nghệ thông tin",
    avatar: "./data/images/nguyen-minh-vu.webp",
    coverImage: "./data/images/coverImage.jpg",
    description: "Leader BCN, chuyên về Full-stack Development và quản lý dự án.",
    longBio: "Với kinh nghiệm 3+ năm trong lĩnh vực phát triển web, Minh Vũ đã dẫn dắt BCN qua nhiều dự án thành công và xây dựng văn hóa học tập mạnh mẽ trong câu lạc bộ.",
    skills: ["React", "Node.js", "TypeScript", "Firebase", "Leadership", "Project Management"],
    joinYear: "2022",
    location: "Hồ Chí Minh, Việt Nam",
    education: "Đại học Công nghiệp TP.HCM",
    github: "https://github.com/minggquyt",
    linkedin: "https://linkedin.com/in/nguyenminhvu",
    portfolio: "https://nguyenminhvu.dev",
    email: "vu.nguyen@bcn.com",
    achievements: ["Dẫn dắt 15+ dự án thành công", "Xây dựng đội ngũ 50+ thành viên", "Speaker tại các workshop công nghệ"],
    projects: [
      {
        id: "website-bcn",
        title: "Website BCN Official",
        role: "Tech Lead",
        description: "Website chính thức của Ban Công Nghệ với đầy đủ tính năng quản lý thành viên và dự án",
        image: "/placeholder.svg",
        techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
        status: "Completed"
      }
    ],
    stats: {
      projectsCompleted: 15,
      yearsExperience: 3,
      teamMembers: 8,
      linesOfCode: "50K+"
    }
  },
  {
    name: "Phan Hoàng Luân",
    role: "Core Team",
    group: "Core",
    department: "Công nghệ thông tin", 
    avatar: "./data/images/phan-hoang-luan.webp",
    coverImage: "./data/images/coverImage.jpg",
    description: "Core team member, chuyên về Mobile Development và UI/UX Design.",
    longBio: "Luân có đam mê lớn với mobile development và design. Anh đã tham gia phát triển nhiều ứng dụng mobile cho câu lạc bộ và các dự án cộng đồng.",
    skills: ["React Native", "Flutter", "Figma", "Adobe XD", "Swift", "Kotlin"],
    joinYear: "2022",
    location: "Hồ Chí Minh, Việt Nam", 
    education: "Đại học Công nghiệp TP.HCM",
    github: "https://github.com/phanhoanglluan",
    linkedin: "https://linkedin.com/in/phanhoanglluan",
    portfolio: null,
    email: "luan.phan@bcn.com",
    achievements: ["Phát triển 5+ ứng dụng mobile", "Thiết kế UI/UX cho 10+ dự án", "Mentor cho 20+ junior developers"],
    projects: [
      {
        id: "bcn-mobile-app",
        title: "BCN Mobile App",
        role: "Lead Developer",
        description: "Ứng dụng mobile chính thức của BCN cho iOS và Android",
        image: "/placeholder.svg",
        techStack: ["React Native", "Firebase", "Redux"],
        status: "In Progress"
      }
    ],
    stats: {
      projectsCompleted: 8,
      yearsExperience: 2,
      teamMembers: 5,
      linesOfCode: "30K+"
    }
  },
  {
    name: "Nguyễn Mai Minh Quý",
    role: "Web Developer",
    group: "Web",
    department: "Công nghệ thông tin",
    avatar: "./data/images/nguyen-mai-minh-quy.webp", 
    coverImage: "./data/images/coverImage.jpg",
    description: "Frontend Developer chuyên về React và Vue.js, đam mê tạo ra những trải nghiệm người dùng tuyệt vời.",
    longBio: "Quý có niềm đam mê mãnh liệt với frontend development. Anh luôn theo đuổi những công nghệ mới nhất và áp dụng vào các dự án thực tế.",
    skills: ["React", "Vue.js", "JavaScript", "CSS3", "Sass", "Webpack"],
    joinYear: "2023",
    location: "Hồ Chí Minh, Việt Nam",
    education: "Đại học Công nghiệp TP.HCM", 
    github: "https://github.com/maiminhquy",
    linkedin: "https://linkedin.com/in/maiminhquy",
    portfolio: "https://maiminhquy.dev",
    email: "quy.nguyen@bcn.com",
    achievements: ["Phát triển 10+ website responsive", "Contributor cho 3+ open source projects", "Organizer Frontend Workshop"],
    projects: [
      {
        id: "portfolio-website",
        title: "Portfolio Management System",
        role: "Frontend Developer", 
        description: "Hệ thống quản lý portfolio cho thành viên BCN",
        image: "/placeholder.svg",
        techStack: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        status: "Completed"
      }
    ],
    stats: {
      projectsCompleted: 12,
      yearsExperience: 2,
      teamMembers: 3,
      linesOfCode: "25K+"
    }
  },
  {
    name: "Đỗ Thành Tường",
    role: "App Developer", 
    group: "App",
    department: "Công nghệ thông tin",
    avatar: "./data/images/do-thanh-tuong.webp",
    coverImage: "./data/images/coverImage.jpg",
    description: "Mobile App Developer với kinh nghiệm phát triển ứng dụng native cho iOS và Android.",
    longBio: "Tường chuyên về phát triển ứng dụng mobile native. Anh có kinh nghiệm làm việc với cả iOS và Android platform.",
    skills: ["Swift", "Kotlin", "Java", "Objective-C", "iOS", "Android Studio"],
    joinYear: "2023",
    location: "Hồ Chí Minh, Việt Nam",
    education: "Đại học Công nghiệp TP.HCM",
    github: "https://github.com/dothanhttuong",
    linkedin: null,
    portfolio: null,
    email: "tuong.do@bcn.com", 
    achievements: ["Phát triển 3+ ứng dụng native", "App Store approval rate 100%", "Google Play featured app"],
    projects: [
      {
        id: "study-tracker-app",
        title: "Study Tracker",
        role: "iOS Developer",
        description: "Ứng dụng theo dõi tiến độ học tập cho sinh viên",
        image: "/placeholder.svg", 
        techStack: ["Swift", "Core Data", "UserNotifications"],
        status: "Completed"
      }
    ],
    stats: {
      projectsCompleted: 6,
      yearsExperience: 1,
      teamMembers: 2,
      linesOfCode: "15K+"
    }
  }
]

export const populateMembersData = async () => {
  try {
    console.log("🚀 Starting to populate members data...")
    
    for (const member of sampleMembers) {
      const docRef = await addDoc(collection(db, "portfolios"), member)
      console.log(`✅ Added member: ${member.name} with ID: ${docRef.id}`)
    }
    
    console.log("🎉 Successfully populated all members data!")
    return { success: true, message: "All members data populated successfully" }
  } catch (error) {
    console.error("❌ Error populating members data:", error)
    return { success: false, error }
  }
}

// Uncomment to run:
// populateMembersData()
