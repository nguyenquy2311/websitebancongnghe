import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Về Ban Công Nghệ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm hiểu chi tiết về BCN - nơi tập hợp những sinh viên đam mê công nghệ, cùng nhau học tập và phát triển
            trong môi trường chuyên nghiệp
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sứ mệnh & Tầm nhìn</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
                    <p className="text-gray-600">
                      Tạo ra một cộng đồng học tập mạnh mẽ, nơi sinh viên có thể phát triển kỹ năng công nghệ thông qua
                      các dự án thực tế và học hỏi từ nhau.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tầm nhìn</h3>
                    <p className="text-gray-600">
                      Trở thành bộ phận công nghệ hàng đầu trong các trường đại học, đào tạo ra những lập trình viên tài
                      năng và có trách nhiệm với xã hội.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="BCN Mission"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Organization Model */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mô hình tổ chức</h2>
            <p className="text-xl text-gray-600">
              BCN được tổ chức theo mô hình phân cấp rõ ràng, tạo cơ hội phát triển cho mọi thành viên
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Leader</h3>
                <p className="text-gray-600 text-sm mb-4">Lãnh đạo BCN, định hướng chiến lược và phát triển tổ chức</p>
                <Badge variant="secondary">1 người</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Core Team</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Đội ngũ cốt cán, hỗ trợ leader trong việc quản lý và phát triển
                </p>
                <Badge variant="secondary">3-5 người</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nhóm Web</h3>
                <p className="text-gray-600 text-sm mb-4">Chuyên về phát triển website và ứng dụng web</p>
                <Badge variant="secondary">10-15 người</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nhóm App</h3>
                <p className="text-gray-600 text-sm mb-4">Chuyên về phát triển ứng dụng di động</p>
                <Badge variant="secondary">8-12 người</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Culture */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Văn hóa làm việc</h2>
            <p className="text-xl text-gray-600">
              Những giá trị cốt lõi định hình cách chúng tôi làm việc và phát triển
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hợp tác</h3>
              <p className="text-gray-600">
                Làm việc nhóm hiệu quả, chia sẻ kiến thức và hỗ trợ lẫn nhau trong mọi dự án
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sáng tạo</h3>
              <p className="text-gray-600">Khuyến khích tư duy sáng tạo, đổi mới và tìm kiếm những giải pháp tối ưu</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chất lượng</h3>
              <p className="text-gray-600">Cam kết mang đến những sản phẩm chất lượng cao và có giá trị thực tế</p>
            </div>
          </div>
        </section>

        {/* Activities Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hoạt động của BCN</h2>
            <p className="text-xl text-gray-600">
              Những khoảnh khắc đáng nhớ trong hành trình phát triển của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Team Building"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Team Building</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Workshop"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Workshop</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Tech Event"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Tech Event</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Project Demo"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Project Demo</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Study Session"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Study Session</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Celebration"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Celebration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-blue-600 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Liên hệ với BCN</h2>
            <p className="text-xl text-blue-100">
              Bạn có câu hỏi hoặc muốn tìm hiểu thêm về BCN? Hãy liên hệ với chúng tôi!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Địa chỉ</h3>
                <p className="text-blue-100">Trường Đại học Công nghiệp TP.HCM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Thời gian hoạt động</h3>
                <p className="text-blue-100">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
