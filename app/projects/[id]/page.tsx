"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Github, ExternalLink, Calendar, Users, Target, Lightbulb, CheckCircle, Clock, Star, Award, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/data/project"
import { getAllProjects } from "@/lib/firestoreService"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const firestoreProjects = await getAllProjects()
        
        const foundProject = firestoreProjects.find((p: Project) => p.id === params.id) || null
        setProject(foundProject)
        
        if (foundProject) {
          console.log("✅ Project loaded from Firestore")
        } else {
          console.log("⚠️ Project not found")
        }
      } catch (error) {
        console.error("❌ Error fetching project:", error)
        setProject(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Đang tải thông tin dự án...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    notFound()
  }

  const completedPhases = project.timeline?.filter((phase: any) => phase.status === "completed").length ?? 0
  const progressPercentage = project.timeline && project.timeline.length > 0
    ? (completedPhases / project.timeline.length) * 100
    : 0

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.category}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.year}
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {project.type}
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">{project.shortDescription}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoUrl && (
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Xem Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  asChild
                >
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông Tin Dự Án</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Thời gian: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Đội ngũ: {project.team?.length ?? 0} thành viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">
                      Trạng thái: {project.status === "Completed" ? "Hoàn thành" : "Đang phát triển"}
                    </span>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm font-medium mb-2">Tiến độ dự án</p>
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {completedPhases}/{project.timeline?.length ?? 0} giai đoạn hoàn thành
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Công Nghệ Sử Dụng</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tác Động & Kết Quả</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{project.impact?.users}</div>
                    <div className="text-xs text-gray-600">Người dùng</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.impact?.satisfaction}</div>
                    <div className="text-xs text-gray-600">Độ hài lòng</div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{project.impact?.timeReduction}</div>
                    <div className="text-xs text-gray-600">Giảm thời gian xử lý</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Project Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Mô Tả Chi Tiết</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
            </div>
          </section>

          {/* Goals & Objectives */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Mục Tiêu & Định Hướng</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Mục Tiêu Dự Án
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.goals?.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Chỉ Tiêu Cụ Thể
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.objectives?.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Project Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Quy Trình Phát Triển</h2>
            <div className="space-y-6">
              {project.timeline?.map((phase, index) => (
                <Card
                  key={index}
                  className={`${phase.status === "completed" ? "border-green-200 bg-green-50" : "border-gray-200"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          phase.status === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {phase.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <Clock className="h-5 w-5" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{phase.phase}</h3>
                          <Badge variant={phase.status === "completed" ? "default" : "secondary"}>
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>

                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Recognition */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Đội Ngũ Phát Triển & Vinh Danh</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.team?.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Image
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Award className="h-3 w-3 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">
                          <Link href={`/portfolio/${member.id}`}>{member.name}</Link>
                        </h3>
                        <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>

                        <div className="mb-4">
                          <p className="text-xs font-medium text-gray-700 mb-2">Đóng góp chính:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {member.contributions.map((contribution, contribIndex) => (
                              <li key={contribIndex} className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-yellow-800 font-medium">{member.recognition}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Hình Ảnh Dự Án</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lessons Learned & Future Plans */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    Bài Học Kinh Nghiệm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.lessonsLearned?.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Kế Hoạch Tương Lai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.futurePlans?.map((plan, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Quan Tâm Đến Dự Án Này?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tìm hiểu thêm về các dự án khác của BCN hoặc tham gia cùng chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/projects">Xem Dự Án Khác</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/join">Tham Gia BCN</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}