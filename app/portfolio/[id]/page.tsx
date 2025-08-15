"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Award, Code, Users, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { type Member } from "@/data/portfolio"
import { getAllMembers } from "@/lib/firestoreService"
import { useEffect, useState } from "react"

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const members = await getAllMembers()
        const foundMember = members.find((m) => m.id === params.id)
        setMember(foundMember || null)
      } catch (error) {
        console.error("Error fetching member:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMember()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Đang tải thông tin thành viên...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-80 relative overflow-hidden">
          <Image
            src={member.coverImage || "/placeholder.svg"}
            alt={`${member.name} cover`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <div className="relative -mt-32 pb-8">
            <div className="flex flex-col tablet:flex-row gap-8 items-center tablet:items-start">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 bg-white rounded-lg shadow-lg p-4 sm:p-6 tablet:p-8 mt-8 tablet:mt-0">
                <div className="space-y-4 tablet:space-y-6">
                  {/* Header */}
                  <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between mb-6 items-center">
                    <div className="text-center tablet:text-left">
                      <h1 className="text-2xl tablet:text-3xl font-bold mb-2">{member.name}</h1>
                      <div className="flex flex-col tablet:flex-row tablet:items-center gap-2 tablet:gap-4 mb-4 items-center">
                        <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1 w-fit">{member.role}</Badge>
                        <div className="flex items-center gap-4 text-center sm:text-left">
                          <div className="text-gray-600 text-xs sm:text-sm">
                            <span className="hidden sm:inline"><Calendar className="h-4 w-4 mr-1 inline" /></span>
                            <span>Tham gia từ {member.joinYear}</span>
                          </div>
                          <div className="text-gray-600 text-xs sm:text-sm">
                            <span className="hidden sm:inline"><MapPin className="h-4 w-4 mr-1 inline" /></span>
                            <span>{member.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center tablet:justify-start">
                      <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                      {member.github && (
                        <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                          <Link href={member.github} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                          <Link href={member.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {member.portfolio && (
                        <Button size="sm" asChild className="flex items-center justify-center gap-2">
                          <Link href={member.portfolio} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Social Links for Mobile - Hidden on desktop since moved above */}
                  <div className="border-t pt-4 tablet:hidden">
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                          <span className="text-xs">Email</span>
                        </Link>
                      </Button>
                      {member.github && (
                        <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                          <Link href={member.github} target="_blank">
                            <Github className="h-4 w-4" />
                            <span className="text-xs">GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button variant="outline" size="sm" asChild className="flex items-center justify-center gap-2">
                          <Link href={member.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4" />
                            <span className="text-xs">LinkedIn</span>
                          </Link>
                        </Button>
                      )}
                      {member.portfolio && (
                        <Button size="sm" asChild className="col-span-2 flex items-center justify-center gap-2">
                          <Link href={member.portfolio} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                            <span className="text-xs">Portfolio</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Giới Thiệu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{member.longBio}</p>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Dự Án Đã Tham Gia ({member.projects ? member.projects.length : 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {member.projects?.length ? (
                    member.projects.map((project, index) => (
                      <div key={index} className="border rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                          <div className="w-full sm:w-32 h-32 sm:h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 space-y-2 sm:space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                              <h3 className="text-base sm:text-lg font-semibold hover:text-blue-600 transition-colors leading-snug">
                                <Link href={`/projects/${project.id}`}>{project.title}</Link>
                              </h3>
                              <Badge 
                                variant={project.status === "Completed" ? "default" : "secondary"}
                                className="w-fit text-xs"
                              >
                                {project.status === "Completed" ? "Hoàn thành" : "Đang phát triển"}
                              </Badge>
                            </div>
                            <p className="text-blue-600 font-medium text-xs sm:text-sm">{project.role}</p>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                              {project.techStack.slice(0, 6).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                                  {tech}
                                </Badge>
                              ))}
                              {project.techStack.length > 6 && (
                                <Badge variant="outline" className="text-xs px-2 py-0.5 bg-gray-50">
                                  +{project.techStack.length - 6}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm text-center py-8">Chưa có dự án nào.</div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Thành Tích & Vinh Danh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.achievements?.length ? (
                    member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                        <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">{achievement}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">Chưa có thành tích nào.</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Kỹ Năng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Học Vấn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{member.education}</p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Liên Hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Gửi Email
                  </Link>
                </Button>
                {member.linkedin && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href={member.linkedin} target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                )}
                {member.github && (
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href={member.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
