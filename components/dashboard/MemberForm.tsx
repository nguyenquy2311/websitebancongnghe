"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, X } from 'lucide-react'
import { Member } from '@/data/portfolio'

interface MemberFormProps {
  member?: Member
  onSave: (member: Partial<Member>) => void
  onCancel: () => void
}

export const MemberForm: React.FC<MemberFormProps> = ({ member, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Member>>({
    id: member?.id || undefined,
    name: member?.name || '',
    role: member?.role || '',
    group: member?.group || '',
    department: member?.department || '',
    description: member?.description || '',
    longBio: member?.longBio || '',
    skills: member?.skills || [],
    joinYear: member?.joinYear || new Date().getFullYear().toString(),
    location: member?.location || '',
    education: member?.education || '',
    email: member?.email || '',
    github: member?.github || '',
    linkedin: member?.linkedin || '',
    portfolio: member?.portfolio || '',
  })

  const [newSkill, setNewSkill] = useState('')

  const handleInputChange = (field: keyof Member, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills?.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...(prev.skills || []), newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills?.filter(s => s !== skill) || []
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{member ? 'Chỉnh sửa thành viên' : 'Thêm thành viên mới'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nguyễn Văn A"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Vai trò *</Label>
              <Select 
                value={formData.role} 
                onValueChange={(value) => handleInputChange('role', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn vai trò" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Leader">Leader</SelectItem>
                  <SelectItem value="Core Team">Core Team</SelectItem>
                  <SelectItem value="Web Developer">Web Developer</SelectItem>
                  <SelectItem value="App Developer">App Developer</SelectItem>
                  <SelectItem value="Designer">Designer</SelectItem>
                  <SelectItem value="Member">Member</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="group">Nhóm</Label>
              <Select 
                value={formData.group} 
                onValueChange={(value) => handleInputChange('group', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn nhóm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Leader">Leader</SelectItem>
                  <SelectItem value="Core">Core Team</SelectItem>
                  <SelectItem value="Web">Nhóm Web</SelectItem>
                  <SelectItem value="App">Nhóm App</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department">Phòng ban</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                placeholder="Công nghệ thông tin"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="joinYear">Năm tham gia</Label>
              <Input
                id="joinYear"
                value={formData.joinYear}
                onChange={(e) => handleInputChange('joinYear', e.target.value)}
                placeholder="2024"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Địa điểm</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Hà Nội, Việt Nam"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="education">Học vấn</Label>
              <Input
                id="education"
                value={formData.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                placeholder="Đại học ABC"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả ngắn *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Mô tả ngắn gọn về thành viên"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="longBio">Tiểu sử chi tiết</Label>
            <Textarea
              id="longBio"
              value={formData.longBio}
              onChange={(e) => handleInputChange('longBio', e.target.value)}
              placeholder="Tiểu sử chi tiết của thành viên"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Kỹ năng</Label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Nhập kỹ năng"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
              />
              <Button type="button" onClick={addSkill} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills?.map((skill) => (
                <Badge key={skill} variant="secondary" className="gap-1">
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={formData.github || ''}
                onChange={(e) => handleInputChange('github', e.target.value)}
                placeholder="https://github.com/username"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={formData.linkedin || ''}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio</Label>
              <Input
                id="portfolio"
                value={formData.portfolio || ''}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                placeholder="https://portfolio.com"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              {member ? 'Cập nhật' : 'Thêm thành viên'}
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

export const MemberFormDialog: React.FC<{ 
  children: React.ReactNode
  member?: Member
  onSave: (member: Partial<Member>) => void
}> = ({ children, member, onSave }) => {
  const [open, setOpen] = useState(false)

  const handleSave = (memberData: Partial<Member>) => {
    onSave(memberData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{member ? 'Chỉnh sửa thành viên' : 'Thêm thành viên mới'}</DialogTitle>
        </DialogHeader>
        <MemberForm 
          member={member}
          onSave={handleSave}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
