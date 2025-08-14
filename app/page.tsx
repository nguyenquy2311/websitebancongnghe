import { Button } from "@/components/ui/button";
import Slider from "@/components/slider";
import Link from "next/link";
import Image from "next/image";
import img1 from "/public/images/homepage/image.webp";
import img2 from "/public/images/homepage/img2.webp";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="mb-[100px] flex items-center w-full overflow-hidden md:h-screen xl:h-screen max-sm:min-h-screen max-sm:pb-8">
        <div className="overflow-hidden pt-[10px] m-auto gap-10 relative px-10 flex justify-center items-center max-sm:flex max-sm:flex-col max-md:flex max-sm:py-0 max-sm:px-10">
          <div className="w-[678px] max-xl:w-[90vw] max-xl:max-w-[650px] max-sm:max-w-full max-xl:text-center">
            <h1 className="font-quicksand font-normal text-[57px] leading-[64px] tracking-[-0.0025em] text-gray-600 max-xl:hover:text -cyan-700 transition-colors max-sm:leading-[55px] max-sm:text-4xl">
              BAN CÔNG NGHỆ
            </h1>
            <p className="font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-10 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.1rem] max-sm:leading-[1.6rem] max-sm:my-5 max-sm:text-center">
              Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là
              nơi kết nối các bạn sinh viên đam mê công nghệ. Chúng tôi tập
              trung vào việc phát triển phần mềm, tổ chức các hoạt động đào tạo
              kỹ năng IT, và tạo ra một cộng đồng học hỏi, hợp tác. Với mục tiêu
              giúp sinh viên nâng cao kỹ năng công nghệ, tham gia các dự án thực
              tế và phát triển nghề nghiệp, Ban Công Nghệ luôn chào đón những
              bạn trẻ nhiệt huyết gia nhập để cùng nhau sáng tạo và học hỏi.
            </p>
            <Link
              href="/about"
              className="btn-primary"
            >
              Tìm hiểu thêm
            </Link>
          </div>
          <Image
            className="w-[343px] md:m-auto mt-0 mb-0 h-[600px] xl:mt-0 max-xl:w-[220px] max-xl:h-[350px] max-xl:mt-6  max-sm:w-[35vw]max-sm:h-[calc(35vw*9/5)] max-sm:aspect-[9/2]"
            src={img1}
            alt=""
            width={343}
            height={600}
          />
        </div>
      </div>

      {/* Featured Projects Preview */}
      <Slider />

      {/* Quick Navigation */}
      <div className="flex items-center mb-[20px] w-full overflow-hidden overflow-y-auto max-xl:mt-[50px] max-sm:h-auto max-sm:min-h-screen">
        <div className="overflow-hidden px-[10px]  lg:h-screen mx-auto gap-10 relative flex items-center justify-between max-lg:flex-col-reverse max-l:items-center max-sm:py-0 max-sm:px-10 max-lg:gap-0 max-lg:my-0">
          {/* Image */}
          <div className="w-[686px] h-auto md:mt-12 xl:mt-0 max-xl:w-[70vw] max-xl:mt-6 max-sm:w-full max-sm:my-[50px]">
            <Image
              src={img2}
              alt="Khóa học"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-[600px] max-xl:w-[90vw] max-xl:max-w-[550px] max-sm:max-w-full text-center">
            <h2 className="font-quicksand font-normal text-[48px] leading-[58px] tracking-[-0.0025em] text-gray-600 max-sm:leading-[48px] max-sm:text-[2.2rem]">
              Hành trình học hỏi và phát triển cùng BCN
            </h2>
            <p className="font-quicksand font-normal text-base leading-6 tracking-[0.005em] text-gray-500 my-8 max-xl:my-5 max-xl:max-w-[500px] max-sm:max-w-full max-xl:mx-auto max-sm:text-[1.05rem] max-sm:leading-[1.6rem] max-sm:my-4 max-sm:text-center">
              Tại BCN, sinh viên không chỉ học lập trình mà còn được trải nghiệm
              một hành trình phát triển toàn diện. Từ những buổi đào tạo nền
              tảng như C, Web, App... đến việc tham gia dự án thực tế, làm việc
              theo nhóm, tổ chức workshop nội bộ, talkshow chia sẻ – mọi hoạt
              động đều được xây dựng để giúp bạn rèn kỹ năng chuyên môn, nâng
              cao tư duy, và trở thành phiên bản tốt hơn mỗi ngày. Chúng tôi tin
              rằng một môi trường cởi mở, sáng tạo và gắn kết chính là nền tảng
              để sinh viên sống hết mình với công nghệ và khám phá tiềm năng của
              bản thân. gia nhập để cùng nhau sáng tạo và học hỏi.
            </p>
            <Link
              href="/activities"
              className="m-auto flex justify-center items-center w-[157px] h-10 bg-cyan-700 shadow-[-9px_-6px_25px_#ffffff,_6px_7px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm rounded font-quicksand font-medium text-sm leading-5 tracking-[0.001em] text-white transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:scale-10 hover:shadow-xl active:scale-95 active:bg-gray-200 active:text-gray-500 active:shadow-[inset_-4px_-4px_4px_rgba(255,255,255,0.75),_inset_4px_4px_4px_rgba(0,0,0,0.25)] max-xl:mx-auto max-sm:mt-6 max-sm:w-[fit-content] max-sm:px-[20px] max-sm:h-[50px] max-sm:text-[18px]"
            >
              Bắt đầu ngay
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-[20px] bg-[rgba(234,233,238,0.95)] text-black max-xl:mt-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tham gia hành trình của BCN
          </h2>
          <p className="text-xl text-grey-100 mb-8 max-w-2xl mx-auto">
            Hãy trở thành một phần câu chuyện của BCN và cùng chúng tôi xây dựng
            tương lai công nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0E7490] text-white hover:bg-[#22D3EE]"
              asChild
            >
              <Link href="/join">
                Tham gia BCN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
