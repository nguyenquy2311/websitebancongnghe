import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Award, Heart, Code, Rocket, BookOpen } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-6">
              Về Ban Công Nghệ
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Câu Chuyện Của BCN</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ban Công Nghệ (BCN) được thành lập với sứ mệnh tạo ra một cộng đồng học tập và phát triển công nghệ mạnh
              mẽ tại Trường Đại học Công nghiệp TP.HCM (IUH)
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Sứ Mệnh & Tầm Nhìn</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sứ Mệnh</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tạo ra một môi trường học tập và phát triển công nghệ tích cực, nơi sinh viên có thể nâng cao kỹ
                      năng lập trình, làm việc nhóm và triển khai các dự án thực tế.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tầm Nhìn</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Trở thành cộng đồng công nghệ hàng đầu tại IUH, đào tạo ra những lập trình viên chất lượng cao và
                      đóng góp tích cực vào sự phát triển của ngành công nghệ Việt Nam.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Giá Trị Cốt Lõi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Học tập liên tục, chia sẻ kiến thức, hợp tác nhóm, sáng tạo và đổi mới, cùng nhau phát triển và
                      thành công.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="BCN Mission"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organization Model */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mô Hình Hoạt Động</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BCN hoạt động theo mô hình phân cấp rõ ràng, tạo cơ hội phát triển cho mọi thành viên
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CTV Level */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cộng Tác Viên (CTV)</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600">• Tham gia các buổi học và workshop</p>
                  <p className="text-gray-600">• Học hỏi kỹ năng cơ bản</p>
                  <p className="text-gray-600">• Tham gia dự án nhỏ</p>
                  <p className="text-gray-600">• Thời gian: 3-6 tháng</p>
                </div>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Cấp độ 1</Badge>
              </CardContent>
            </Card>

            {/* Member Level */}
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Thành Viên Chính Thức</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600">• Tham gia dự án lớn</p>
                  <p className="text-gray-600">• Có chuyên môn Web/App</p>
                  <p className="text-gray-600">• Mentor cho CTV mới</p>
                  <p className="text-gray-600">• Thời gian: 6+ tháng</p>
                </div>
                <Badge className="mt-4 bg-green-100 text-green-800">Cấp độ 2</Badge>
              </CardContent>
            </Card>

            {/* Core Team Level */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Core Team & Leader</h3>
                <div className="space-y-3 text-left">
                  <p className="text-gray-600">• Quản lý và điều hành BCN</p>
                  <p className="text-gray-600">• Dẫn dắt các dự án lớn</p>
                  <p className="text-gray-600">• Đào tạo thành viên</p>
                  <p className="text-gray-600">• Kết nối đối tác bên ngoài</p>
                </div>
                <Badge className="mt-4 bg-purple-100 text-purple-800">Cấp độ 3</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Văn Hóa Làm Việc</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị và nguyên tắc mà BCN luôn theo đuổi trong mọi hoạt động
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Học Tập Liên Tục</h3>
              <p className="text-gray-600 text-sm">Luôn cập nhật kiến thức mới và không ngừng phát triển bản thân</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Chia Sẻ Kiến Thức</h3>
              <p className="text-gray-600 text-sm">Sẵn sàng chia sẻ và hỗ trợ nhau trong quá trình học tập</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tinh Thần Đội Nhóm</h3>
              <p className="text-gray-600 text-sm">Làm việc hiệu quả trong nhóm và tôn trọng ý kiến của mọi người</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sáng Tạo & Đổi Mới</h3>
              <p className="text-gray-600 text-sm">Khuyến khích tư duy sáng tạo và áp dụng công nghệ mới</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hoạt Động Của BCN</h2>
            <p className="text-xl text-gray-600">Những khoảnh khắc đáng nhớ trong hành trình phát triển của BCN</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Workshop Công Nghệ",
                description: "Các buổi học về công nghệ mới và kỹ năng lập trình",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Team Building",
                description: "Các hoạt động gắn kết và xây dựng tinh thần đội nhóm",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Hackathon BCN",
                description: "Cuộc thi lập trình 24h với những ý tưởng sáng tạo",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Tech Talk",
                description: "Chia sẻ kinh nghiệm từ các chuyên gia trong ngành",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Dự Án Thực Tế",
                description: "Triển khai các dự án có ý nghĩa thực tiễn",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Networking Event",
                description: "Kết nối với các doanh nghiệp và cơ hội việc làm",
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lịch Sử Phát Triển</h2>
            <p className="text-xl text-gray-600">Hành trình phát triển của BCN qua các năm</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2022",
                  title: "Thành Lập BCN",
                  description:
                    "Ban Công Nghệ được thành lập với 5 thành viên đầu tiên, bắt đầu với những dự án nhỏ và buổi học chia sẻ kiến thức.",
                },
                {
                  year: "2023",
                  title: "Mở Rộng Hoạt Động",
                  description:
                    "Tổ chức các workshop định kỳ, tuyển thêm thành viên và triển khai các dự án lớn hơn. Chia thành 2 nhóm chuyên môn: Web và App.",
                },
                {
                  year: "2024",
                  title: "Phát Triển Mạnh Mẽ",
                  description:
                    "Đạt 20+ thành viên, hoàn thành 10+ dự án, tổ chức Hackathon đầu tiên và thiết lập quan hệ đối tác với các doanh nghiệp.",
                },
                {
                  year: "2025",
                  title: "Tương Lai",
                  description:
                    "Mục tiêu trở thành cộng đồng công nghệ hàng đầu tại IUH, mở rộng ra các trường đại học khác và tạo ra nhiều cơ hội hơn cho sinh viên.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Liên Hệ Với BCN</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bạn có câu hỏi hoặc muốn tìm hiểu thêm về BCN? Hãy liên hệ với chúng tôi!
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">bcn@student.iuh.edu.vn</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Facebook</h3>
              <p className="text-blue-100">fb.com/bcn.iuh</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Địa chỉ</h3>
              <p className="text-blue-100">Trường ĐH Công nghiệp TP.HCM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
