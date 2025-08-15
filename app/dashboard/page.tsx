"use client"

import React, { useState, useEffect } from 'react'
import { 
  Users, 
  FolderOpen, 
  Calendar, 
  Clock, 
  Settings, 
  BarChart3, 
  Plus,
  Edit,
  Trash2,
  Filter,
  Eye,
  Download,
  Upload,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  getAllProjects, 
  getAllMembers, 
  getAllTimeline, 
  getAllActivities,
  saveProject,
  saveMember,
  deleteProject,
  deleteMember
} from '@/lib/firestoreService'
import { Project } from '@/data/project'
import { Member } from '@/data/portfolio'
import { ProjectFormDialog } from '@/components/dashboard/ProjectForm'
import { MemberFormDialog } from '@/components/dashboard/MemberForm'
import AuthGuard from '@/components/auth/AuthGuard'

interface DashboardStats {
  totalProjects: number
  totalMembers: number
  totalActivities: number
  totalTimeline: number
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [projects, setProjects] = useState<Project[]>([])
  const [members, setMembers] = useState<Member[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalMembers: 0,
    totalActivities: 0,
    totalTimeline: 0
  })
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch data từ Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [projectsData, membersData, activitiesData, timelineData] = await Promise.all([
          getAllProjects(),
          getAllMembers(),
          getAllActivities(),
          getAllTimeline()
        ])

        setProjects(projectsData)
        setMembers(membersData)
        
        setStats({
          totalProjects: projectsData.length,
          totalMembers: membersData.length,
          totalActivities: activitiesData.length,
          totalTimeline: timelineData.length
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('userToken')
    localStorage.removeItem('user_data')
    window.location.href = '/login'
  }

  const handleSaveProject = async (projectData: Partial<Project>) => {
    try {
      await saveProject(projectData)
      console.log('✅ Project saved successfully:', projectData)
      // Sau khi save thành công, refetch data
      const updatedProjects = await getAllProjects()
      setProjects(updatedProjects)
      setStats(prev => ({ ...prev, totalProjects: updatedProjects.length }))
    } catch (error) {
      console.error('❌ Error saving project:', error)
    }
  }

  const handleSaveMember = async (memberData: Partial<Member>) => {
    try {
      await saveMember(memberData)
      console.log('✅ Member saved successfully:', memberData)
      // Sau khi save thành công, refetch data
      const updatedMembers = await getAllMembers()
      setMembers(updatedMembers)
      setStats(prev => ({ ...prev, totalMembers: updatedMembers.length }))
    } catch (error) {
      console.error('❌ Error saving member:', error)
    }
  }

  const handleDeleteProject = async (projectId: string) => {
    try {
      if (confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
        await deleteProject(projectId)
        console.log('✅ Project deleted successfully:', projectId)
        // Refetch data
        const updatedProjects = await getAllProjects()
        setProjects(updatedProjects)
        setStats(prev => ({ ...prev, totalProjects: updatedProjects.length }))
      }
    } catch (error) {
      console.error('❌ Error deleting project:', error)
    }
  }

  const handleDeleteMember = async (memberId: string) => {
    try {
      if (confirm('Bạn có chắc chắn muốn xóa thành viên này?')) {
        await deleteMember(memberId)
        console.log('✅ Member deleted successfully:', memberId)
        // Refetch data
        const updatedMembers = await getAllMembers()
        setMembers(updatedMembers)
        setStats(prev => ({ ...prev, totalMembers: updatedMembers.length }))
      }
    } catch (error) {
      console.error('❌ Error deleting member:', error)
    }
  }

  const sidebarItems = [
    { id: 'overview', label: 'Tổng quan', icon: BarChart3 },
    { id: 'projects', label: 'Dự án', icon: FolderOpen },
    { id: 'members', label: 'Thành viên', icon: Users },
    { id: 'activities', label: 'Hoạt động', icon: Calendar },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'analytics', label: 'Thống kê', icon: BarChart3 },
    { id: 'settings', label: 'Cài đặt', icon: Settings },
  ]

  const StatCard = ({ title, value, description, icon: Icon, color }: {
    title: string;
    value: string | number;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )

  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Tổng số dự án"
          value={stats.totalProjects}
          description="Dự án đang triển khai"
          icon={FolderOpen}
          color="text-blue-500"
        />
        <StatCard
          title="Thành viên"
          value={stats.totalMembers}
          description="Thành viên hoạt động"
          icon={Users}
          color="text-green-500"
        />
        <StatCard
          title="Hoạt động"
          value={stats.totalActivities}
          description="Sự kiện trong tháng"
          icon={Calendar}
          color="text-purple-500"
        />
        <StatCard
          title="Timeline"
          value={stats.totalTimeline}
          description="Cột mốc quan trọng"
          icon={Clock}
          color="text-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dự án gần đây</CardTitle>
            <CardDescription>Các dự án được cập nhật mới nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {projects.slice(0, 5).map((project) => (
                <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
                  </div>
                  <Badge variant="outline">{project.status || 'Active'}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thành viên mới</CardTitle>
            <CardDescription>Thành viên tham gia gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {members.slice(0, 5).map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  {member.avatar && typeof member.avatar === 'string' ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      {!member.avatar && (
                        <div className="w-full h-full flex items-center justify-center text-white font-medium">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const ProjectsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý Dự án</h2>
        <ProjectFormDialog onSave={handleSaveProject}>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Thêm dự án mới
          </Button>
        </ProjectFormDialog>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Tìm kiếm dự án..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Lọc
        </Button>
      </div>

      <div className="grid gap-4">
        {projects
          .filter(project => 
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant={project.type === 'Nhóm' ? 'default' : 'secondary'}>
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Năm: {project.year}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <ProjectFormDialog project={project} onSave={handleSaveProject}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </ProjectFormDialog>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )

  const MembersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý Thành viên</h2>
        <MemberFormDialog onSave={handleSaveMember}>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Thêm thành viên
          </Button>
        </MemberFormDialog>
      </div>

      <div className="flex gap-4">
        <Input 
          placeholder="Tìm kiếm thành viên..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Lọc theo nhóm
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members
          .filter(member => 
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.role.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    {member.avatar && typeof member.avatar === 'string' ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                        <img 
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        {!member.avatar && (
                          <div className="w-full h-full flex items-center justify-center text-white font-medium text-lg">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium text-lg">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nhóm:</span>
                    <Badge variant="outline">{member.group}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phòng ban:</span>
                    <span>{member.department}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Năm tham gia:</span>
                    <span>{member.joinYear}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{member.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Xem
                  </Button>
                  <MemberFormDialog member={member} onSave={handleSaveMember}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </MemberFormDialog>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteMember(member.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )

  const ActivitiesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý Hoạt động</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Tạo hoạt động mới
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chưa có hoạt động nào</h3>
            <p className="text-muted-foreground mb-4">
              Hãy tạo hoạt động đầu tiên để bắt đầu quản lý sự kiện của câu lạc bộ.
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Tạo hoạt động đầu tiên
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const TimelineTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý Timeline</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm cột mốc
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chưa có cột mốc nào</h3>
            <p className="text-muted-foreground mb-4">
              Tạo timeline để theo dõi các cột mốc quan trọng của câu lạc bộ.
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Thêm cột mốc đầu tiên
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Thống kê & Báo cáo</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Tăng trưởng thành viên"
          value="+12%"
          description="So với tháng trước"
          icon={Users}
          color="text-green-500"
        />
        <StatCard
          title="Dự án hoàn thành"
          value="8/12"
          description="Trong năm 2024"
          icon={FolderOpen}
          color="text-blue-500"
        />
        <StatCard
          title="Tỷ lệ tham gia"
          value="85%"
          description="Hoạt động trung bình"
          icon={BarChart3}
          color="text-purple-500"
        />
        <StatCard
          title="Đánh giá"
          value="4.8/5"
          description="Phản hồi từ thành viên"
          icon={Clock}
          color="text-orange-500"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Xuất báo cáo</CardTitle>
          <CardDescription>Tải xuống các báo cáo chi tiết</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Báo cáo thành viên (Excel)
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Báo cáo dự án (PDF)
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Báo cáo hoạt động (CSV)
            </Button>
            <Button variant="outline" className="justify-start gap-2">
              <Download className="h-4 w-4" />
              Báo cáo tổng hợp (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const SettingsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Cài đặt hệ thống</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cài đặt chung</CardTitle>
            <CardDescription>Các thiết lập cơ bản của hệ thống</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tên tổ chức</label>
              <Input defaultValue="Câu lạc bộ Công nghệ" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email liên hệ</label>
              <Input defaultValue="contact@techclub.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Múi giờ</label>
              <Input defaultValue="Asia/Ho_Chi_Minh" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backup & Import</CardTitle>
            <CardDescription>Sao lưu và nhập dữ liệu</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start gap-2">
              <Download className="h-4 w-4" />
              Sao lưu toàn bộ dữ liệu
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Upload className="h-4 w-4" />
              Nhập dữ liệu từ file
            </Button>
            <Separator />
            <p className="text-sm text-muted-foreground">
              Lần sao lưu cuối: 14/08/2025 - 09:30
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />
      case 'projects':
        return <ProjectsTab />
      case 'members':
        return <MembersTab />
      case 'activities':
        return <ActivitiesTab />
      case 'timeline':
        return <TimelineTab />
      case 'analytics':
        return <AnalyticsTab />
      case 'settings':
        return <SettingsTab />
      default:
        return <OverviewTab />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Đang tải dữ liệu...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthGuard requiredRole="admin">
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Quản lý câu lạc bộ</p>
            <p className="text-xs text-blue-600 mt-1">Chỉ dành cho Admin</p>
          </div>
          
          <nav className="p-4 flex-1">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Đăng xuất</span>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}

export default Dashboard
