'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, LogIn } from 'lucide-react';

import { loginUser, getUserByToken } from '@/lib/firestoreService';

export default function LoginPage() {
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false); // ⬅️ Thêm biến

  // ✅ Redirect nếu đã đăng nhập
  useEffect(() => {
    const checkAuth = async () => {
      const token = typeof window !== 'undefined' && localStorage.getItem('userToken');
      if (!token) return;

      const user = await getUserByToken(token);
      if (user) {
        window.location.href = '/';
      }
    };

    checkAuth();
  }, [router]);

  // ✅ Đăng nhập
  const handleLogin = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const username = usernameRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    const result = await loginUser(username, password);

    if (result.success) {
      setAlertType('success');
      setAlertMsg('Đăng nhập thành công!');

      // Không enable lại nút nữa → disable vĩnh viễn sau khi thành công
      setTimeout(() => {
        setAlertMsg('');
        window.location.href = '/';
      }, 1500);
    } else {
      setAlertType('error');
      setAlertMsg(result.message || 'Đăng nhập thất bại!');

      setTimeout(() => {
        setAlertMsg('');
        setIsSubmitting(false); // ✅ Cho phép click lại
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <LogIn className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Đăng nhập</CardTitle>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="username">Tên đăng nhập</Label>
              <Input
                id="username"
                type="text"
                placeholder="Nhập tên đăng nhập"
                ref={usernameRef}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Nhập mật khẩu"
                  ref={passwordRef}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {alertMsg && (
              <Alert
                className={`${
                  alertType === 'success'
                    ? 'border-green-200 bg-green-50'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <AlertDescription
                  className={`${
                    alertType === 'success' ? 'text-green-800' : 'text-red-800'
                  } text-center`}
                >
                  {alertMsg}
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
            </Button>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Chưa có tài khoản?{' '}
                <Link href="/register" className="text-blue-600 hover:underline">
                  Đăng ký ngay
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
