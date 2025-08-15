/**
 * Script tạo tài khoản admin đầu tiên
 * Chạy script này trong console của browser hoặc tạo page riêng để init
 */

import { addUser } from '@/lib/firestoreService'

// Hàm băm SHA-256
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const createAdminUser = async () => {
  const adminData = {
    name: "Admin BCN",
    email: "admin@bcn.com",
    username: "admin",
    studentId: "00000000",
    password: await hashPassword("admin123"), // Đổi password mạnh hơn
    role: 'admin' as const
  }

  try {
    const result = await addUser(adminData)
    
    if (result.success) {
      console.log("✅ Admin user created successfully!")
      console.log("Username: admin")
      console.log("Password: admin123")
      console.log("Please change the password after first login")
      return result
    } else {
      console.error("❌ Failed to create admin user:", result.error)
      return result
    }
  } catch (error) {
    console.error("❌ Error creating admin user:", error)
    return { success: false, error }
  }
}

// Uncomment để chạy:
// createAdminUser()
