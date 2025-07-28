import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Users, Rocket, Target, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import imgPage1 from '/public/images/homepage/page1/image.webp';
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-[calc(100dvh-64px)] flex items-center  w-full overflow-hidden overflow-y-auto  max-sm:pt-[70px] max-sm:h-auto max-sm:min-h-screen max-sm:pb-8">
        <div className="overflow-hidden m-auto gap-10 relative flex items-center justify-between max-xl:flex-col max-xl:items-center max-sm:py-0 max-sm:px-10">
          <div className="w-[678px] max-xl:w-[90vw] max-xl:max-w-[650px] max-sm:max-w-full max-xl:text-center">
            <h1 className="font-quicksand font-normal text-[57px] leading-[64px] tracking-[-0.0025em] text-gray-600 max-xl:hover:text-cyan-700 transition-colors max-sm:leading-[55px] max-sm:text-[2.8rem]">
              Muốn trở thành thành viên Ban Công Nghệ?
            </h1>
            <p className="font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-10 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.1rem] max-sm:leading-[1.6rem] max-sm:my-5 max-sm:text-center">
              Bạn đang tìm kiếm những giải pháp công nghệ đột phá, sáng tạo và hiệu quả? Chúng tôi luôn sẵn sàng chia sẻ kiến thức, kinh nghiệm và các sản phẩm tiên tiến để giúp bạn nắm
              bắt xu hướng công nghệ mới nhất.
            </p>
            <a
              href="#"
              className="flex justify-center items-center w-[157px] h-10 bg-cyan-700 shadow-[-9px_-6px_25px_#ffffff,_6px_7px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded font-quicksand font-medium text-sm leading-5 tracking-[0.001em] text-white transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:scale-10 hover:shadow-xl active:scale-95 active:bg-gray-200 active:text-gray-500 active:shadow-[inset_-4px_-4px_4px_rgba(255,255,255,0.75),_inset_4px_4px_4px_rgba(0,0,0,0.25)] max-xl:mx-auto max-sm:mt-10 max-sm:w-[fit-content] max-sm:px-[20px] max-sm:h-[50px] max-sm:text-[18px]"
            >
              Liên hệ ngay
            </a>
          </div>
          <Image className="w-[343px] h-[600px] md:mt-12 xl:mt-0 max-xl:w-[220px] max-xl:h-[350px] max-xl:mt-6 max-sm:w-[35vw] max-sm:h-[calc(35vw*9/5)] max-sm:aspect-[9/2] max-sm:mt-[70px] max-sm:my-[150px]" src={imgPage1} alt="" width={343} height={600} />
        </div>
      </div>

      {/* Quick Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/projects">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dự Án</h3>
                  <p className="text-gray-600">Khám phá các sản phẩm công nghệ mà BCN đã triển khai</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/members">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thành Viên</h3>
                  <p className="text-gray-600">Gặp gỡ đội ngũ tài năng của Ban Công Nghệ</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/join">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Rocket className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tuyển Dụng</h3>
                  <p className="text-gray-600">Gia nhập BCN và phát triển kỹ năng công nghệ</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join BCN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vì Sao Nên Theo BCN?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BCN không chỉ là nơi học tập mà còn là môi trường để bạn phát triển toàn diện
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Dự Án Thực Tế</h3>
              <p className="text-gray-600">
                Tham gia các dự án thực tế, áp dụng kiến thức vào thực tiễn và xây dựng portfolio ấn tượng
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Cộng Đồng Mạnh</h3>
              <p className="text-gray-600">
                Kết nối với những người bạn cùng chí hướng, học hỏi và phát triển cùng nhau
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Phát Triển Kỹ Năng</h3>
              <p className="text-gray-600">
                Nâng cao kỹ năng lập trình, làm việc nhóm và quản lý dự án thông qua các hoạt động thực tế
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Học Tập Liên Tục</h3>
              <p className="text-gray-600">
                Tham gia các buổi workshop, tech talk và chia sẻ kiến thức từ các anh chị đi trước
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Rocket className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Cơ Hội Nghề Nghiệp</h3>
              <p className="text-gray-600">Tiếp cận với các cơ hội thực tập và việc làm từ mạng lưới đối tác của BCN</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold">Công Nghệ Mới</h3>
              <p className="text-gray-600">
                Luôn cập nhật và học hỏi các công nghệ mới nhất trong ngành phát triển phần mềm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dự Án Nổi Bật</h2>
            <p className="text-xl text-gray-600">Một số sản phẩm tiêu biểu mà BCN đã phát triển</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "IUH Student Portal",
                description: "Hệ thống quản lý sinh viên với giao diện hiện đại",
                tech: ["React", "Node.js", "MongoDB"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "BCN Mobile App",
                description: "Ứng dụng di động kết nối thành viên BCN",
                tech: ["React Native", "Firebase", "Redux"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Event Management System",
                description: "Hệ thống quản lý sự kiện cho CLB sinh viên",
                tech: ["Next.js", "PostgreSQL", "Tailwind"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                Xem Tất Cả Dự Án <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sẵn Sàng Tham Gia BCN?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hãy gia nhập cộng đồng BCN và cùng chúng tôi xây dựng những sản phẩm công nghệ tuyệt vời
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/join">Đăng Ký Ngay</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/about">Tìm Hiểu Thêm</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
