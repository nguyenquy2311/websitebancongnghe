import { Button } from "@/components/ui/button"
import { Code2, Github, Facebook, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">BCN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ban Công Nghệ - Nơi ươm mầm tài năng công nghệ tại Trường Đại học Công nghiệp TP.HCM
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/bcn-iuh" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://facebook.com/bcn.iuh" target="_blank">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:bcn@student.iuh.edu.vn">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Dự Án
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-400 hover:text-white transition-colors">
                  Thành Viên
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Về BCN
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-400 hover:text-white transition-colors">
                  Tham Gia BCN
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Tài Nguyên</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog Công Nghệ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Workshop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tech Talk
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Hackathon
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400">bcn@student.iuh.edu.vn</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400">+84 123 456 789</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  Trường ĐH Công nghiệp TP.HCM
                  <br />
                  12 Nguyễn Văn Bảo, Gò Vấp, TP.HCM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ban Công Nghệ - IUH. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Điều Khoản Sử Dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
