"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUserByToken } from '@/lib/firestoreService'

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'member'
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRole = 'member' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Kiểm tra authentication token từ localStorage
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token') || localStorage.getItem('userToken')
        
        if (!token) {
          setIsAuthenticated(false)
          setHasPermission(false)
          return
        }

        // Lấy thông tin user từ Firestore qua token
        const user = await getUserByToken(token)
        
        if (user) {
          setIsAuthenticated(true)
          setUserRole(user.role)
          
          // Kiểm tra quyền truy cập
          if (requiredRole === 'admin' && user.role !== 'admin') {
            setHasPermission(false)
          } else {
            setHasPermission(true)
          }
          
          // Lưu thông tin user vào localStorage để sử dụng khác
          localStorage.setItem('user_data', JSON.stringify(user))
        } else {
          setIsAuthenticated(false)
          setHasPermission(false)
        }
      } catch (error) {
        console.error('Error checking authentication:', error)
        setIsAuthenticated(false)
        setHasPermission(false)
      }
    }

    checkAuth()
  }, [requiredRole])

  useEffect(() => {
    if (isAuthenticated === false) {
      // Redirect to login page
      router.push('/login')
    } else if (isAuthenticated === true && hasPermission === false) {
      // Redirect to unauthorized page hoặc homepage
      router.push('/')
    }
  }, [isAuthenticated, hasPermission, router])

  // Loading state
  if (isAuthenticated === null || hasPermission === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Đang kiểm tra quyền truy cập...</p>
        </div>
      </div>
    )
  }

  // Not authenticated
  if (isAuthenticated === false) {
    return null // Will be redirected by useEffect
  }

  // No permission
  if (hasPermission === false) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Không có quyền truy cập</h1>
          <p className="text-gray-600 mb-4">
            Bạn cần quyền {requiredRole === 'admin' ? 'quản trị viên' : 'thành viên'} để truy cập trang này.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Role hiện tại: <span className="font-medium">{userRole || 'không xác định'}</span>
          </p>
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    )
  }

  // Authenticated and has permission
  return <>{children}</>
}

export default AuthGuard
