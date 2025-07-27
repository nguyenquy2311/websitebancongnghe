"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { addUser } from "@/lib/firestoreService";

// Hàm băm SHA-256
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export default function RegisterPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const studentIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleAddUser = async () => {
    const name = nameRef.current?.value || "";
    const username = usernameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const studentId = studentIdRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (password !== confirmPassword) {
      alert("❌ Mật khẩu không khớp");
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await addUser({
      name,
      email,
      username,
      studentId,
      password: hashedPassword,
    });

    if (result.success) {
      alert("✅ Đăng ký thành công!");
      console.log("User ID:", result.id);
    } else {
      console.error("❌ Lỗi:", result.error);
    }
  };

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
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Họ và tên *</Label>
                <Input id="name" ref={nameRef} required placeholder="Nhập họ và tên" />
              </div>

              <div>
                <Label htmlFor="username">Username *</Label>
                <Input id="username" ref={usernameRef} required placeholder="Tên đăng nhập" />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" ref={emailRef} required placeholder="email@example.com" />
              </div>

              <div>
                <Label htmlFor="studentId">Mã số sinh viên *</Label>
                <Input id="studentId" ref={studentIdRef} required placeholder="Ví dụ: 21110001" pattern="[0-9]{8}" />
              </div>

              <div>
                <Label htmlFor="password">Mật khẩu *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    ref={passwordRef}
                    minLength={6}
                    required
                    placeholder="Ít nhất 6 ký tự"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    ref={confirmPasswordRef}
                    required
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              </div>

              <Button
                type="button"
                className="w-full bg-cyan-600 hover:bg-cyan-700"
                onClick={handleAddUser}
              >
                Đăng ký
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Đã có tài khoản?{" "}
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
