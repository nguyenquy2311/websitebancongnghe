import { Rocket, BookOpen, Users, Code, Trophy, Building, Star, TrendingUp } from "lucide-react"
import FitImage from "./images/activitygallery/fit.jpg";
import a from "./images/activitygallery/2.jpg";
import b from "./images/activitygallery/3.jpg";
import c from "./images/activitygallery/4.jpg";
import d from "./images/activitygallery/5.jpg";
import e from "./images/activitygallery/6.jpg";
import f from "./images/activitygallery/7.jpg";
import g from "./images/activitygallery/8.jpg";

export const timelineData = [
  {
    date: "Tháng 9 năm 2022",
    title: "Thành lập BCN",
    subtitle: "Khởi đầu hành trình",
    description:
      "Ban Công Nghệ được thành lập với 5 thành viên đầu tiên, bắt nguồn từ mong muốn tạo ra một cộng đồng học tập công nghệ tại IUH.",
    icon: Rocket,
    color: "rgb(33, 150, 243)",
    image: FitImage.src,
  },
  {
    date: "Tháng 12 năm 2022",
    title: "Workshop đầu tiên",
    subtitle: "Bắt đầu chia sẻ kiến thức",
    description:
      "Tổ chức workshop đầu tiên về HTML/CSS với 15 sinh viên tham dự, đánh dấu bước đi đầu tiên trong việc chia sẻ kiến thức.",
    icon: BookOpen,
    color: "rgb(33, 150, 243)",
    image: a.src,
  },
  {
    date: "Tháng 3 năm 2023",
    title: "Mở rộng đội ngũ",
    subtitle: "Phát triển cộng đồng",
    description:
      "BCN chính thức mở rộng với hơn 20 thành viên, chia thành hai nhóm chuyên môn: Phát triển Web và Phát triển Ứng dụng Di động.",
    icon: Users,
    color: "rgb(33, 150, 243)",
    image: b.src,
  },
  {
    date: "Tháng 6 năm 2023",
    title: "Dự án nội bộ đầu tiên",
    subtitle: "Từ lý thuyết đến thực hành",
    description:
      "Ra mắt dự án nội bộ đầu tiên - Cổng thông tin sinh viên IUH, đánh dấu sự chuyển đổi từ học tập sang phát triển dự án thực tế.",
    icon: Code,
    color: "rgb(76, 175, 80)",
    image: c.src,
  },
  {
    date: "Tháng 10 năm 2023",
    title: "BCN Hackathon 2023",
    subtitle: "Sự kiện lớn đầu tiên",
    description:
      "Tổ chức hackathon đầu tiên với hơn 50 sinh viên tham gia, thu hút sự chú ý từ cộng đồng sinh viên IUH.",
    icon: Trophy,
    color: "rgb(255, 193, 7)",
    image: d.src,
  },
  {
    date: "Tháng 2 năm 2024",
    title: "Hợp tác Doanh nghiệp",
    subtitle: "Mở rộng cơ hội",
    description:
      "Thiết lập quan hệ đối tác với các công ty công nghệ, mở ra cơ hội thực tập và việc làm cho thành viên.",
    icon: Building,
    color: "rgb(156, 39, 176)",
    image: e.src,
  },
  {
    date: "Tháng 6 năm 2024",
    title: "Thành viên đầu tiên có việc làm",
    subtitle: "Thành tựu đầu tiên",
    description:
      "Thành viên đầu tiên của BCN đã có được vị trí thực tập tại một công ty công nghệ lớn, khẳng định chất lượng đào tạo.",
    icon: Star,
    color: "rgb(76, 175, 80)",
    image: f.src,
  },
  {
    date: "Tháng 12 năm 2024",
    title: "Hơn 50 thành viên",
    subtitle: "Cộng đồng ngày càng lớn mạnh",
    description:
      "BCN đạt mốc hơn 50 thành viên với hơn 15 dự án đã hoàn thành, trở thành một trong những cộng đồng công nghệ lớn nhất tại IUH.",
    icon: TrendingUp,
    color: "rgb(33, 150, 243)",
    image: g.src,
  },
]