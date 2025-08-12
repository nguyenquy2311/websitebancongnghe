import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import '@/lib/fontawesome';

const quicksand = Quicksand({ subsets: ["latin"] });

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="bg-[#f9fafb]">
      <body className={quicksand.className}>
        <Header />
        <main className="mt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
