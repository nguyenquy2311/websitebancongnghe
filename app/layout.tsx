import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ban Công Nghệ IUH - BCN",
  description:
    "Ban Công Nghệ - Nơi tập hợp những sinh viên đam mê công nghệ, cùng nhau học tập và phát triển dự án thực tế",
  keywords: "BCN, Ban Công Nghệ, IUH, lập trình, công nghệ, sinh viên",
  authors: [{ name: "Ban Công Nghệ IUH" }],
  openGraph: {
    title: "Ban Công Nghệ IUH - BCN",
    description: "Nơi tập hợp những sinh viên đam mê công nghệ, cùng nhau học tập và phát triển dự án thực tế",
    type: "website",
    locale: "vi_VN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
