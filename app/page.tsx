import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Users, Rocket, Target, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Ban Công Nghệ
                  <span className="block text-blue-200">IUH</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Nơi tập hợp những sinh viên đam mê công nghệ, cùng học tập và phát triển dự án thực tế
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/projects">
                    Khám phá dự án <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/join">Tham gia BCN</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="BCN Team"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BCN Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Về Ban Công Nghệ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BCN là bộ phận học thuật trực thuộc CLB sinh viên Trường Đại học IUH, nơi các bạn sinh viên yêu thích lập
              trình và công nghệ cùng nhau phát triển
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Học tập thực chiến</h3>
                <p className="text-gray-600">
                  Áp dụng kiến thức vào các dự án thực tế, học hỏi từ kinh nghiệm làm việc nhóm
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cộng đồng mạnh mẽ</h3>
                <p className="text-gray-600">
                  Kết nối với những người bạn cùng chí hướng, chia sẻ kiến thức và kinh nghiệm
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phát triển sự nghiệp</h3>
                <p className="text-gray-600">Xây dựng portfolio mạnh mẽ, chuẩn bị tốt nhất cho con đường sự nghiệp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join BCN Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vì sao nên theo BCN?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BCN mang đến cho bạn những cơ hội và trải nghiệm không thể tìm thấy ở nơi khác
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dự án thực tế</h3>
                  <p className="text-gray-600">
                    Tham gia các dự án có tác động thực tế, từ website cho doanh nghiệp đến ứng dụng mobile
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Học hỏi từ senior</h3>
                  <p className="text-gray-600">Được hướng dẫn trực tiếp từ các anh chị có kinh nghiệm trong ngành</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cơ hội nghề nghiệp</h3>
                  <p className="text-gray-600">
                    Kết nối với các nhà tuyển dụng, cơ hội thực tập và làm việc tại các công ty công nghệ
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="BCN Activities"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Khám phá BCN</h2>
            <p className="text-gray-300 text-lg">Tìm hiểu thêm về các hoạt động và thành viên của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Dự án</h3>
                <p className="text-gray-300 mb-6">Khám phá các sản phẩm và dự án mà BCN đã triển khai</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                >
                  <Link href="/projects">Xem dự án</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Thành viên</h3>
                <p className="text-gray-300 mb-6">Làm quen với các thành viên tài năng của BCN</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent"
                >
                  <Link href="/members">Xem thành viên</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8 text-center">
                <Rocket className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Tham gia</h3>
                <p className="text-gray-300 mb-6">Gia nhập BCN và bắt đầu hành trình công nghệ của bạn</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  <Link href="/join">Tham gia ngay</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
