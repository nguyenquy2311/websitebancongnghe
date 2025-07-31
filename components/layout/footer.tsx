import Link from "next/link"
import { Mail, Facebook, Github, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      <footer className="container w-full bg-transparent py-12 mx-auto px-4">
        <div className="max-w-full mx-auto flex flex-col items-center justify-center text-center gap-8 text-base text-gray-600 bg-gray-100 rounded-2xl shadow-xl p-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full h-full flex items-center flex-col justify-center mb-2">
              <h1 className="xl:text-4xl text-3xl font-bold text-gray-800">BAN CÔNG NGHỆ</h1>
              <span className="text-lg text-gray-500">School Life Stories</span>
            </div>
            <span className="text-base text-gray-500">Khoa Công nghệ thông tin - Đại học Công nghiệp Tp.Hồ Chí Minh</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-base md:gap-x-12 md:gap-y-4 md:text-lg">
            <Link href="/" className="hover:underline hover:text-[#0E7490] transition-all duration-200">Trang chủ</Link>
            <Link href="/projects" className="hover:underline hover:text-[#0E7490] transition-all duration-200">Dự án</Link>
            <Link href="/portfolio" className="hover:underline hover:text-[#0E7490] transition-all duration-200">Thành viên</Link>
            <Link href="/activities" className="hover:underline hover:text-[#0E7490] transition-all duration-200">Hoạt động</Link>
            <Link href="/join" className="hover:underline hover:text-[#0E7490] transition-all duration-200">Hỗ trợ</Link>
          </nav>

          <div className="flex gap-8 justify-center mt-2">
            <Link href="dinhn5687@gmail.com" className="hover:text-cyan-700 text-gray-700" aria-label="Email">
              <Mail className="w-7 h-7" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61572321333029" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 text-gray-700" aria-label="Facebook">
              <Facebook className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </footer>
      <div className="container w-full bg-transparent mx-auto px-4 mb-5">
        <div className="w-full h-[1px] bg-gray-300 mb-2"></div>
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-base text-gray-600 bg-gray-100 rounded-2xl shadow-xl px-8 py-6">
          <div className="flex items-center gap-3">
            <p className="text-base text-gray-600">© {new Date().getFullYear()} Ban Công Nghệ. All rights reserved.</p>
          </div>
          <div className="flex gap-6 justify-center">
            <Link href="dinhn5687@gmail.com" className="hover:text-cyan-700 text-gray-700" aria-label="Email">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61572321333029" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 text-gray-700" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/nguyenquy2311/websitebancongnghe" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 text-gray-700" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/@bancongnghe" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 text-gray-700" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
