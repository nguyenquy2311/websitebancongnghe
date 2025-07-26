'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, UserPlus } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-cyan-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Đăng ký tài khoản
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tham gia cộng đồng BCN ngay hôm nay
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Thông tin đăng ký</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Alert demo */}
            {/* <Alert className="mb-4 border-green-500 text-green-700">
              <AlertDescription>Đăng ký thành công! Chào mừng ...</AlertDescription>
            </Alert> */}

            <form className="space-y-4">
              <div>
                <Label htmlFor="username">Username *</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Tên đăng nhập"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="studentId">Mã số sinh viên *</Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="Ví dụ: 21110001"
                  pattern="[0-9]{8}"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Mật khẩu *</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ít nhất 6 ký tự"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    tabIndex={-1}
                  >
                    <Eye className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu *</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    tabIndex={-1}
                  >
                    <Eye className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700"
              >
                Đăng ký
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Đã có tài khoản?{' '}
                <Link href="/login" className="text-cyan-600 hover:text-cyan-500 font-medium">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
