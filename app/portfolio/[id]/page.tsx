import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Award, Code, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { members } from "@/data/portfolio";

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id)

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
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 bg-white rounded-lg shadow-lg p-8 mt-8 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">{member.role}</Badge>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Tham gia từ {member.joinYear}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                    {member.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.linkedin} target="_blank">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {member.portfolio && (
                      <Button size="sm" asChild>
                        <Link href={member.portfolio} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Portfolio
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{member.description}</p>
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
                <div className="space-y-6">
                  {member.projects?.length ? (
                    member.projects.map((project, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex gap-6">
                          <div className="w-32 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
                                <Link href={`/projects/${project.id}`}>{project.title}</Link>
                              </h3>
                              <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                {project.status === "Completed" ? "Hoàn thành" : "Đang phát triển"}
                              </Badge>
                            </div>
                            <p className="text-blue-600 font-medium text-sm mb-2">{project.role}</p>
                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">Chưa có dự án nào.</div>
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
            {/* Stats */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Thống Kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{member.stats?.projectsCompleted ?? 0}</div>
                  <div className="text-sm text-gray-600">Dự án hoàn thành</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{member.stats?.yearsExperience ?? 0}</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{member.stats?.teamMembers ?? 0}</div>
                  <div className="text-sm text-gray-600">Thành viên đã mentor</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{member.stats?.linesOfCode ?? 0}</div>
                  <div className="text-sm text-gray-600">Dòng code đã viết</div>
                </div>
              </CardContent>
            </Card> */}

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
