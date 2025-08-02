import { Calendar, MapPin, Users, Clock, BookOpen, Trophy, Mic, Heart, Star, Filter, ChevronRight, ArrowRight } from "lucide-react";
import MinhVu from '../data/images/nguyen-minh-vu.webp';
import MinhQuy from '../data/images/nguyen-mai-minh-quy.webp';
import PhanLuan from '../data/images/phan-hoang-luan.webp';
export const activities = [
    {
        id: "workshop-c-2025",
        slug: "workshop-c-2025",
        title: "Workshop: Học Lập trình C cơ bản",
        type: "Workshop",
        category: "Technical",
        description: "Học cách xây dựng ứng dụng web hiện đại với React và Next.js từ cơ bản đến nâng cao",
        date: "2024-04-17",
        time: "19:00 - 22:00",
        duration: "3 tiếng",
        format: "Offline",
        location: "Discord",
        capacity: 30,
        registered: 25,
        status: "upcoming",
        allowRegistration: true,
        registrationDeadline: "2024-04-15",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/300px-ISO_C%2B%2B_Logo.svg.png",
        instructor: "Nguyễn Mai Minh Quý",
        level: "Beginner",
        tags: ["Workshop", "C", "Beginner"],

        // Mục tiêu học tập
        objectives: [
            "Giúp các bạn thành viên làm quen với ngôn ngữ lập trình C, tư duy lập trình hàm",
            "Thực hành các bài tập cơ bản để làm quen với tư duy lập trình",
        ],

        // Kế hoạch học tập chi tiết
        agenda: [
            {
                time: "19:00 - 19:30",
                title: "Giới thiệu React",
                description: "Tổng quan về React, Virtual DOM và ecosystem",
            },
            {
                time: "19:30 - 20:30",
                title: "Dạy lý thuyết cơ bản",
                description: "Setup môi trường và tạo project đầu tiên",
            },
            {
                time: "20:30 - 21:30",
                title: "Code cùng mini-project",
                description: "Xây dựng Todo App đơn giản với React",
            },
            {
                time: "21:30 - 22:00",
                title: "Hỏi đáp cuối buổi",
                description: "Q&A và chia sẻ kinh nghiệm",
            },
        ],

        gallery: [
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

        organizers: [
            {
                id: "nguyen-mai-minh-quy",
                name: "Nguyễn Mai Minh Quý",
                role: "Mentor chính",
                avatar: MinhQuy,
                bio: "Full-stack Developer với 3+ năm kinh nghiệm React",
            },
            {
                id: "nguyen-huu-khang",
                name: "Nguyễn Hữu Khang",
                role: "Con gà BCN",
                avatar: PhanLuan,
                bio: "Frontend Developer, chuyên về React và UI/UX",
            },
        ],

        results: {
            participants: 28,
            satisfaction: 4.8,
            completionRate: 95,
            feedback: [
                "Workshop rất bổ ích, giảng viên nhiệt tình!",
                "Nội dung dễ hiểu, thực hành nhiều",
                "Mong có thêm workshop nâng cao",
            ],
        },

        relatedActivities: ["workshop-js-2025", "techtalk-it-2025"],
    },
    {
        id: "workshop-js-2025",
        slug: "workshop-js-2025",
        title: "Workshop: Học Javascript cơ bản",
        type: "Workshop",
        category: "Technical",
        description: "Học về ngôn ngữ lập trình Javascript",
        date: "2024-04-17",
        time: "19:00 - 22:00",
        duration: "3 tiếng",
        format: "Offline",
        location: "Phòng Lab A1.101",
        capacity: 30,
        registered: 25,
        status: "upcoming",
        allowRegistration: true,
        registrationDeadline: "2024-04-15",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/250px-JavaScript-logo.png",
        instructor: "Nguyễn Hữu Khang",
        level: "Beginner",
        tags: ["Workshop", "Javascript", "Frontend", "Beginner"],

        // Mục tiêu học tập
        objectives: [
            "Giúp các bạn thành viên làm quen với Javacript",
            "Thực hành tạo dự án Javascript đầu tiên"
        ],

        // Kế hoạch học tập chi tiết
        agenda: [
            {
                time: "19:00 - 19:30",
                title: "Giới thiệu Javascript",
                description: "Tổng quan về Javascript",
            },
            {
                time: "19:30 - 20:30",
                title: "Tạo dự án với Javascript",
                description: "Setup môi trường và tạo project đầu tiên",
            },
            {
                time: "20:30 - 21:30",
                title: "Code cùng mini-project",
                description: "Xây dựng Todo App đơn giản với Javascript",
            },
            {
                time: "21:30 - 22:00",
                title: "Hỏi đáp cuối buổi",
                description: "Q&A và chia sẻ kinh nghiệm",
            },
        ],

        gallery: [
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

        organizers: [
            {
                id: "nguyen-huu-khang",
                name: "Nguyễn Hữu Khang",
                role: "Mentor chính",
                avatar: PhanLuan,
                bio: "Full-stack Developer với 3+ năm kinh nghiệm React",
            },
            {
                id: "nguyen-minh-vu",
                name: "Nguyễn Minh Vũ",
                role: "Hỗ trợ kỹ thuật",
                avatar: MinhVu,
                bio: "Frontend Developer, chuyên về React và UI/UX",
            },
        ],

        results: {
            participants: 28,
            satisfaction: 4.8,
            completionRate: 95,
            feedback: [
                "Workshop rất bổ ích, giảng viên nhiệt tình!",
                "Nội dung dễ hiểu, thực hành nhiều",
                "Mong có thêm workshop nâng cao",
            ],
        },

        relatedActivities: ["vue-workshop-2024", "javascript-fundamentals"],
    },
    {
        id: "techtalk-it-2025",
        slug: "techtalk-it-2025",
        title: "Tech Talk: Ứng dụng AI như thế nào cho sinh viên IT ?",
        type: "Tech Talk",
        category: "Technical",
        description: "Học cách ứng dụng AI vào việc học lập trình nói chung và học web, app nói riêng",
        date: "2024-04-17",
        time: "19:00 - 22:00",
        duration: "3 tiếng",
        format: "Online",
        location: "Discord",
        capacity: 30,
        registered: 25,
        status: "upcoming",
        allowRegistration: true,
        registrationDeadline: "2024-04-15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGofb2IC6Teb3fr97aHX1iAUyqBC1E8EoX3n1KJ8kc57cddObWpoSzHKn73Cgd8F3BPw&usqp=CAU",
        instructor: "Nguyễn Hữu Khang",
        level: "Beginner",
        tags: ["Workshop", "AI","Intermediate", "Beginner"],

        // Mục tiêu học tập
        objectives: [
            "Giúp các bạn thành viên làm quen với React, JSX và component-based thinking",
            "Thực hành tạo dự án React từ đầu với Vite",
            "Hiểu được cách quản lý state và props trong React components",
        ],

        // Kế hoạch học tập chi tiết
        agenda: [
            {
                time: "19:00 - 19:30",
                title: "Giới thiệu về các mô hình AI",
                description: "Tổng quan về React, Virtual DOM và ecosystem",
            },
            {
                time: "19:30 - 20:30",
                title: "giải thich cách họt động của từng mô hình AI",
                description: "Setup môi trường và tạo project đầu tiên",
            },
            {
                time: "20:30 - 21:30",
                title: "ứng dụng của từng mô hình AI như thế nào",
                description: "Xây dựng Todo App đơn giản với React",
            },
            {
                time: "21:30 - 22:00",
                title: "Hỏi đáp cuối buổi",
                description: "Q&A và chia sẻ kinh nghiệm",
            },
        ],

        gallery: [
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

        organizers: [
            {
                id: "nguyen-huu-khang",
                name: "Nguyễn Hữu Khang",
                role: "Mentor chính",
                avatar: PhanLuan,
                bio: "Full-stack Developer với 3+ năm kinh nghiệm React",
            },
            {
                id: "nguyen-minh-vu",
                name: "Nguyễn Minh Vũ",
                role: "Hỗ trợ kỹ thuật",
                avatar: MinhVu,
                bio: "Frontend Developer, chuyên về React và UI/UX",
            },
        ],

        results: {
            participants: 28,
            satisfaction: 4.8,
            completionRate: 95,
            feedback: [
                "Workshop rất bổ ích, giảng viên nhiệt tình!",
                "Nội dung dễ hiểu, thực hành nhiều",
                "Mong có thêm workshop nâng cao",
            ],
        },

        relatedActivities: ["vue-workshop-2024", "javascript-fundamentals"],
    }
]

export const upcomingEvents = [
    {
        title: "Git & GitHub Workshop",
        date: "2024-02-05",
        time: "19:00",
        type: "Workshop",
    },
    {
        title: "Career Talk: Làm việc tại Startup",
        date: "2024-02-12",
        time: "18:30",
        type: "Tech Talk",
    },
    {
        title: "Frontend challenge",
        date: "2024-02-18",
        time: "14:00",
        type: "Competition",
    },
    {
        title: "Leetcode challenge",
        date: "2024-02-18",
        time: "14:00",
        type: "Competition",
    }
]
    
export const activityTypes = [
    { id: "all", name: "Tất cả", icon: Calendar, color: "bg-gray-100 text-gray-800" },
    { id: "Workshop", name: "Workshop", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
    { id: "Tech Talk", name: "Tech Talk", icon: Mic, color: "bg-green-100 text-green-800" },
    { id: "Competition", name: "Cuộc thi", icon: Trophy, color: "bg-yellow-100 text-yellow-800" },
    { id: "Team Building", name: "Team Building", icon: Heart, color: "bg-pink-100 text-pink-800" },
    { id: "Study Group", name: "Nhóm học", icon: Users, color: "bg-purple-100 text-purple-800" },
]