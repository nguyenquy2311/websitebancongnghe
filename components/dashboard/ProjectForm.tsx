"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, X } from 'lucide-react'
import { Project } from '@/data/project'

interface ProjectFormProps {
  project?: Project
  onSave: (project: Partial<Project>) => void
  onCancel: () => void
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Project>>({
    id: project?.id || undefined,
    title: project?.title || '',
    shortDescription: project?.shortDescription || '',
    longDescription: project?.longDescription || '',
    image: project?.image || '',
    category: project?.category || '',
    year: project?.year || new Date().getFullYear().toString(),
    type: project?.type || 'Nhóm',
    status: project?.status || 'Active',
    duration: project?.duration || '',
    startDate: project?.startDate || '',
    endDate: project?.endDate || '',
    techStack: project?.techStack || [],
    githubUrl: project?.githubUrl || '',
    demoUrl: project?.demoUrl || '',
    goals: project?.goals || [],
    objectives: project?.objectives || [],
    futurePlans: project?.futurePlans || [],
    lessonsLearned: project?.lessonsLearned || [],
    gallery: project?.gallery || [],
    impact: project?.impact || {
      users: '',
      satisfaction: '',
      timeReduction: '',
      errorReduction: ''
    },
    timeline: project?.timeline || [],
    team: project?.team || [],
  })

  const [newTech, setNewTech] = useState('')
  const [newGoal, setNewGoal] = useState('')
  const [newObjective, setNewObjective] = useState('')
  const [newPlan, setNewPlan] = useState('')
  const [newLesson, setNewLesson] = useState('')
  const [newGalleryImage, setNewGalleryImage] = useState('')
  const [newTimelinePhase, setNewTimelinePhase] = useState({
    phase: '',
    duration: '',
    description: '',
    status: 'planning',
    tasks: [] as string[]
  })
  const [newTask, setNewTask] = useState('')
  const [newMember, setNewMember] = useState({
    email: '',
    role: '',
    contributions: [] as string[],
    recognition: ''
  })
  const [newContribution, setNewContribution] = useState('')
  // const [availableMembers, setAvailableMembers] = useState<unknown[]>([])

  // Load available members from Firestore
  useEffect(() => {
    const loadMembers = async () => {
      try {
        const { getAllMembers } = await import('@/lib/firestoreService')
        const members = await getAllMembers()
        // setAvailableMembers(members)
        console.log('Members loaded:', members)
      } catch (error) {
        console.error('Error loading members:', error)
      }
    }
    loadMembers()
  }, [])

  const handleInputChange = (field: keyof Project, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addTechStack = () => {
    if (newTech.trim() && !formData.techStack?.includes(newTech.trim())) {
      setFormData(prev => ({
        ...prev,
        techStack: [...(prev.techStack || []), newTech.trim()]
      }))
      setNewTech('')
    }
  }

  const removeTechStack = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack?.filter(t => t !== tech) || []
    }))
  }

  const addGoal = () => {
    if (newGoal.trim() && !formData.goals?.includes(newGoal.trim())) {
      setFormData(prev => ({
        ...prev,
        goals: [...(prev.goals || []), newGoal.trim()]
      }))
      setNewGoal('')
    }
  }

  const removeGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals?.filter(g => g !== goal) || []
    }))
  }

  const addObjective = () => {
    if (newObjective.trim() && !formData.objectives?.includes(newObjective.trim())) {
      setFormData(prev => ({
        ...prev,
        objectives: [...(prev.objectives || []), newObjective.trim()]
      }))
      setNewObjective('')
    }
  }

  const removeObjective = (objective: string) => {
    setFormData(prev => ({
      ...prev,
      objectives: prev.objectives?.filter(o => o !== objective) || []
    }))
  }

  const addPlan = () => {
    if (newPlan.trim() && !formData.futurePlans?.includes(newPlan.trim())) {
      setFormData(prev => ({
        ...prev,
        futurePlans: [...(prev.futurePlans || []), newPlan.trim()]
      }))
      setNewPlan('')
    }
  }

  const removePlan = (plan: string) => {
    setFormData(prev => ({
      ...prev,
      futurePlans: prev.futurePlans?.filter(p => p !== plan) || []
    }))
  }

  const addLesson = () => {
    if (newLesson.trim() && !formData.lessonsLearned?.includes(newLesson.trim())) {
      setFormData(prev => ({
        ...prev,
        lessonsLearned: [...(prev.lessonsLearned || []), newLesson.trim()]
      }))
      setNewLesson('')
    }
  }

  const removeLesson = (lesson: string) => {
    setFormData(prev => ({
      ...prev,
      lessonsLearned: prev.lessonsLearned?.filter(l => l !== lesson) || []
    }))
  }

  const addGalleryImage = () => {
    if (newGalleryImage.trim() && !formData.gallery?.includes(newGalleryImage.trim())) {
      setFormData(prev => ({
        ...prev,
        gallery: [...(prev.gallery || []), newGalleryImage.trim()]
      }))
      setNewGalleryImage('')
    }
  }

  const removeGalleryImage = (imageUrl: string) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery?.filter(img => img !== imageUrl) || []
    }))
  }

  const addTimelinePhase = () => {
    if (newTimelinePhase.phase.trim() && newTimelinePhase.duration.trim()) {
      setFormData(prev => ({
        ...prev,
        timeline: [...(prev.timeline || []), { ...newTimelinePhase }]
      }))
      setNewTimelinePhase({
        phase: '',
        duration: '',
        description: '',
        status: 'planning',
        tasks: []
      })
    }
  }

  const removeTimelinePhase = (phaseIndex: number) => {
    setFormData(prev => ({
      ...prev,
      timeline: prev.timeline?.filter((_, index) => index !== phaseIndex) || []
    }))
  }

  const addTaskToPhase = (phaseIndex: number) => {
    if (newTask.trim()) {
      setFormData(prev => ({
        ...prev,
        timeline: prev.timeline?.map((phase, index) => 
          index === phaseIndex 
            ? { ...phase, tasks: [...phase.tasks, newTask.trim()] }
            : phase
        ) || []
      }))
      setNewTask('')
    }
  }

  const removeTaskFromPhase = (phaseIndex: number, taskIndex: number) => {
    setFormData(prev => ({
      ...prev,
      timeline: prev.timeline?.map((phase, index) => 
        index === phaseIndex 
          ? { ...phase, tasks: phase.tasks.filter((_, tIndex) => tIndex !== taskIndex) }
          : phase
      ) || []
    }))
  }

  const addContribution = () => {
    if (newContribution.trim() && !newMember.contributions.includes(newContribution.trim())) {
      setNewMember(prev => ({
        ...prev,
        contributions: [...prev.contributions, newContribution.trim()]
      }))
      setNewContribution('')
    }
  }

  const removeContribution = (contribution: string) => {
    setNewMember(prev => ({
      ...prev,
      contributions: prev.contributions.filter(c => c !== contribution)
    }))
  }

  const addTeamMember = async () => {
    if (!newMember.email.trim() || !newMember.role.trim()) {
      alert('Vui lòng nhập email và vai trò')
      return
    }

    try {
      // Import getUserByEmail function
      const { getUserByEmail } = await import('@/lib/firestoreService')
      const user = await getUserByEmail(newMember.email.trim())
      
      if (!user) {
        alert('Không tìm thấy người dùng với email này')
        return
      }

      const teamMember = {
        id: user.id,
        name: user.name,
        role: newMember.role,
        avatar: user.avatarUrl || '', // Get avatar from user data
        contributions: newMember.contributions,
        recognition: newMember.recognition
      }

      setFormData(prev => ({
        ...prev,
        team: [...(prev.team || []), teamMember]
      }))

      setNewMember({
        email: '',
        role: '',
        contributions: [],
        recognition: ''
      })
    } catch (error) {
      console.error('Error adding team member:', error)
      alert('Có lỗi khi thêm thành viên')
    }
  }

  const removeTeamMember = (memberId: string) => {
    setFormData(prev => ({
      ...prev,
      team: prev.team?.filter(member => member.id !== memberId) || []
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
      <CardHeader>
        <CardTitle>{project ? 'Chỉnh sửa dự án' : 'Thêm dự án mới'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tên dự án *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Nhập tên dự án"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Danh mục *</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web">Web</SelectItem>
                  <SelectItem value="Mobile">Mobile</SelectItem>
                  <SelectItem value="Desktop">Desktop</SelectItem>
                  <SelectItem value="AI/ML">AI/ML</SelectItem>
                  <SelectItem value="Game">Game</SelectItem>
                  <SelectItem value="Other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Loại dự án</Label>
              <Select 
                value={formData.type} 
                onValueChange={(value) => handleInputChange('type', value as 'Nhóm' | 'Cá nhân')}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nhóm">Nhóm</SelectItem>
                  <SelectItem value="Cá nhân">Cá nhân</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="year">Năm</Label>
              <Input
                id="year"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                placeholder="2024"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="shortDescription">Mô tả ngắn *</Label>
            <Textarea
              id="shortDescription"
              value={formData.shortDescription}
              onChange={(e) => handleInputChange('shortDescription', e.target.value)}
              placeholder="Mô tả ngắn gọn về dự án"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL hình ảnh</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Thời gian thực hiện</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="6 tháng"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="startDate">Ngày bắt đầu</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">Ngày kết thúc</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Trạng thái</Label>
            <Select 
              value={formData.status} 
              onValueChange={(value) => handleInputChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="planning">Đang lên kế hoạch</SelectItem>
                <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
                <SelectItem value="on-hold">Tạm dừng</SelectItem>
                <SelectItem value="cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="longDescription">Mô tả chi tiết</Label>
            <Textarea
              id="longDescription"
              value={formData.longDescription}
              onChange={(e) => handleInputChange('longDescription', e.target.value)}
              placeholder="Mô tả chi tiết về dự án"
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label>Công nghệ sử dụng</Label>
            <div className="flex gap-2">
              <Input
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Nhập công nghệ"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechStack())}
              />
              <Button type="button" onClick={addTechStack} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.techStack?.map((tech) => (
                <Badge key={tech} variant="secondary" className="gap-1">
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechStack(tech)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Mục tiêu dự án</Label>
            <div className="flex gap-2">
              <Input
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Nhập mục tiêu"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGoal())}
              />
              <Button type="button" onClick={addGoal} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1 mt-2">
              {formData.goals?.map((goal, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{goal}</span>
                  <button
                    type="button"
                    onClick={() => removeGoal(goal)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Mục tiêu cụ thể</Label>
            <div className="flex gap-2">
              <Input
                value={newObjective}
                onChange={(e) => setNewObjective(e.target.value)}
                placeholder="Nhập mục tiêu cụ thể"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addObjective())}
              />
              <Button type="button" onClick={addObjective} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1 mt-2">
              {formData.objectives?.map((objective, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{objective}</span>
                  <button
                    type="button"
                    onClick={() => removeObjective(objective)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Kế hoạch tương lai</Label>
            <div className="flex gap-2">
              <Input
                value={newPlan}
                onChange={(e) => setNewPlan(e.target.value)}
                placeholder="Nhập kế hoạch tương lai"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPlan())}
              />
              <Button type="button" onClick={addPlan} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1 mt-2">
              {formData.futurePlans?.map((plan, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{plan}</span>
                  <button
                    type="button"
                    onClick={() => removePlan(plan)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bài học kinh nghiệm</Label>
            <div className="flex gap-2">
              <Input
                value={newLesson}
                onChange={(e) => setNewLesson(e.target.value)}
                placeholder="Nhập bài học kinh nghiệm"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLesson())}
              />
              <Button type="button" onClick={addLesson} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1 mt-2">
              {formData.lessonsLearned?.map((lesson, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="flex-1 text-sm">{lesson}</span>
                  <button
                    type="button"
                    onClick={() => removeLesson(lesson)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Thư viện ảnh</Label>
            <div className="flex gap-2">
              <Input
                value={newGalleryImage}
                onChange={(e) => setNewGalleryImage(e.target.value)}
                placeholder="Nhập URL hình ảnh"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGalleryImage())}
              />
              <Button type="button" onClick={addGalleryImage} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {formData.gallery?.map((imageUrl, index) => (
                <div key={index} className="relative">
                  <img 
                    src={imageUrl} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-20 object-cover rounded border"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg?height=80&width=160'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(imageUrl)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tác động dự án</Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="impactUsers" className="text-xs">Số người dùng</Label>
                <Input
                  id="impactUsers"
                  value={formData.impact?.users || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    impact: { 
                      users: e.target.value,
                      satisfaction: prev.impact?.satisfaction || '',
                      timeReduction: prev.impact?.timeReduction || '',
                      errorReduction: prev.impact?.errorReduction || ''
                    }
                  }))}
                  placeholder="5,000+"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="impactSatisfaction" className="text-xs">Độ hài lòng</Label>
                <Input
                  id="impactSatisfaction"
                  value={formData.impact?.satisfaction || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    impact: { 
                      users: prev.impact?.users || '',
                      satisfaction: e.target.value,
                      timeReduction: prev.impact?.timeReduction || '',
                      errorReduction: prev.impact?.errorReduction || ''
                    }
                  }))}
                  placeholder="95%"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="impactTimeReduction" className="text-xs">Giảm thời gian</Label>
                <Input
                  id="impactTimeReduction"
                  value={formData.impact?.timeReduction || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    impact: { 
                      users: prev.impact?.users || '',
                      satisfaction: prev.impact?.satisfaction || '',
                      timeReduction: e.target.value,
                      errorReduction: prev.impact?.errorReduction || ''
                    }
                  }))}
                  placeholder="70%"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="impactErrorReduction" className="text-xs">Giảm lỗi</Label>
                <Input
                  id="impactErrorReduction"
                  value={formData.impact?.errorReduction || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    impact: { 
                      users: prev.impact?.users || '',
                      satisfaction: prev.impact?.satisfaction || '',
                      timeReduction: prev.impact?.timeReduction || '',
                      errorReduction: e.target.value
                    }
                  }))}
                  placeholder="85%"
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Timeline dự án</Label>
            <div className="space-y-3 p-4 border rounded-lg">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="timelinePhase" className="text-xs">Giai đoạn</Label>
                  <Input
                    id="timelinePhase"
                    value={newTimelinePhase.phase}
                    onChange={(e) => setNewTimelinePhase(prev => ({ ...prev, phase: e.target.value }))}
                    placeholder="Tên giai đoạn"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="timelineDuration" className="text-xs">Thời gian</Label>
                  <Input
                    id="timelineDuration"
                    value={newTimelinePhase.duration}
                    onChange={(e) => setNewTimelinePhase(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder="2 tuần"
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="timelineDescription" className="text-xs">Mô tả</Label>
                <Input
                  id="timelineDescription"
                  value={newTimelinePhase.description}
                  onChange={(e) => setNewTimelinePhase(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Mô tả giai đoạn"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="timelineStatus" className="text-xs">Trạng thái</Label>
                <Select 
                  value={newTimelinePhase.status} 
                  onValueChange={(value) => setNewTimelinePhase(prev => ({ ...prev, status: value }))}
                >
                  <SelectTrigger className="text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planning">Đang lên kế hoạch</SelectItem>
                    <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                    <SelectItem value="completed">Hoàn thành</SelectItem>
                    <SelectItem value="delayed">Trì hoãn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="button" onClick={addTimelinePhase} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Thêm giai đoạn
              </Button>
            </div>
            
            <div className="space-y-3">
              {formData.timeline?.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-sm">{phase.phase}</h4>
                      <p className="text-xs text-gray-600">{phase.duration} - {phase.status}</p>
                      {phase.description && <p className="text-xs mt-1">{phase.description}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeTimelinePhase(phaseIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs">Nhiệm vụ</Label>
                    <div className="flex gap-2">
                      <Input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Thêm nhiệm vụ"
                        className="text-sm"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTaskToPhase(phaseIndex))}
                      />
                      <Button type="button" onClick={() => addTaskToPhase(phaseIndex)} variant="outline" size="sm">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="space-y-1">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center gap-2 p-2 bg-white rounded text-sm">
                          <span className="flex-1">{task}</span>
                          <button
                            type="button"
                            onClick={() => removeTaskFromPhase(phaseIndex, taskIndex)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Thành viên nhóm</Label>
            
            {/* Add new team member form */}
            <div className="p-4 border rounded-lg space-y-3">
              <h4 className="text-sm font-medium">Thêm thành viên mới</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="memberEmail" className="text-xs">Email thành viên</Label>
                  <Input
                    id="memberEmail"
                    value={newMember.email}
                    onChange={(e) => setNewMember(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="memberRole" className="text-xs">Vai trò</Label>
                  <Input
                    id="memberRole"
                    value={newMember.role}
                    onChange={(e) => setNewMember(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="Frontend Developer"
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="memberRecognition" className="text-xs">Ghi nhận (tùy chọn)</Label>
                <Input
                  id="memberRecognition"
                  value={newMember.recognition}
                  onChange={(e) => setNewMember(prev => ({ ...prev, recognition: e.target.value }))}
                  placeholder="Xuất sắc trong việc..."
                  className="text-sm"
                />
              </div>

              <div>
                <Label className="text-xs">Đóng góp</Label>
                <div className="flex gap-2">
                  <Input
                    value={newContribution}
                    onChange={(e) => setNewContribution(e.target.value)}
                    placeholder="Nhập đóng góp"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addContribution())}
                    className="text-sm"
                  />
                  <Button type="button" onClick={addContribution} variant="outline" size="sm">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {newMember.contributions.map((contribution, index) => (
                    <Badge key={index} variant="secondary" className="text-xs gap-1">
                      {contribution}
                      <button
                        type="button"
                        onClick={() => removeContribution(contribution)}
                        className="hover:text-red-500"
                      >
                        <X className="h-2 w-2" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="button" onClick={addTeamMember} variant="outline" size="sm" className="flex-1">
                  <Plus className="h-3 w-3 mr-1" />
                  Thêm thành viên
                </Button>
              </div>
            </div>

            {/* Display current team members */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Thành viên dự án ({formData.team?.length || 0})</h4>
              {formData.team?.length === 0 ? (
                <p className="text-sm text-muted-foreground p-4 border rounded-lg">Chưa có thành viên nào trong dự án</p>
              ) : (
                formData.team?.map((member) => (
                  <div key={member.id} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {member.avatar ? (
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img 
                              src={member.avatar} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                              }}
                            />
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center text-white font-medium" style={{ display: 'none' }}>
                              {member.name.charAt(0)}
                            </div>
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                            {member.name.charAt(0)}
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{member.name}</span>
                            <Badge variant="outline">{member.role}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">ID: {member.id}</p>
                          
                          {member.contributions.length > 0 && (
                            <div className="mt-2">
                              <Label className="text-xs text-muted-foreground">Đóng góp:</Label>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {member.contributions.map((contribution, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {contribution}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {member.recognition && (
                            <div className="mt-2">
                              <Label className="text-xs text-muted-foreground">Ghi nhận:</Label>
                              <p className="text-sm mt-1">{member.recognition}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeTeamMember(member.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Xóa thành viên"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="githubUrl">GitHub URL</Label>
              <Input
                id="githubUrl"
                value={formData.githubUrl}
                onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                placeholder="https://github.com/..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="demoUrl">Demo URL</Label>
              <Input
                id="demoUrl"
                value={formData.demoUrl}
                onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                placeholder="https://demo.com"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              {project ? 'Cập nhật' : 'Thêm dự án'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Hủy
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export const ProjectFormDialog: React.FC<{ 
  children: React.ReactNode
  project?: Project
  onSave: (project: Partial<Project>) => void
}> = ({ children, project, onSave }) => {
  const [open, setOpen] = useState(false)

  const handleSave = (projectData: Partial<Project>) => {
    onSave(projectData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? 'Chỉnh sửa dự án' : 'Thêm dự án mới'}</DialogTitle>
        </DialogHeader>
        <ProjectForm 
          project={project}
          onSave={handleSave}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
