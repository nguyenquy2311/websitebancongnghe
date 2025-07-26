import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BCN - Ban Công Nghệ IUH",
  description: "Ban Công Nghệ - Nơi ươm mầm tài năng công nghệ tại Trường Đại học Công nghiệp TP.HCM",
  keywords: "BCN, Ban Công Nghệ, IUH, lập trình, công nghệ, sinh viên, dự án",
  authors: [{ name: "Ban Công Nghệ IUH" }],
  openGraph: {
    title: "BCN - Ban Công Nghệ IUH",
    description: "Nơi ươm mầm tài năng công nghệ tại IUH",
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
