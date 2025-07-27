import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "./firebaseConfig";
import { hashPassword } from "@/lib/utils";

// ✅ Kiểu dữ liệu người dùng mới
export interface NewUser {
  name: string;
  email: string;
  username: string;
  studentId: string;
  password: string; // đã hash
  createdAt?: Timestamp;
}

// ✅ Hàm thêm người dùng mới vào Firestore
export const addUser = async (user: NewUser) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...user,
      createdAt: Timestamp.now(),
    });

    console.log("✅ User added with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("❌ Error adding user: ", error);
    return { success: false, error };
  }
};

// ✅ Tạo token mới (UUID)
const generateToken = (): string => {
  return crypto.randomUUID(); // hoặc nanoid nếu muốn ngắn hơn
};

// ✅ Hàm đăng nhập người dùng
export const loginUser = async (username: string, password: string) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return { success: false, message: "Tài khoản không tồn tại" };
  }

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  const hashedInput = await hashPassword(password);
  if (hashedInput !== userData.password) {
    return { success: false, message: "Sai mật khẩu" };
  }

  const newToken = generateToken();

  // Cập nhật token trong Firestore nếu khác
  await updateDoc(doc(db, "users", userDoc.id), {
    token: newToken,
  });

  // Lưu token vào localStorage (client-side)
  if (typeof window !== "undefined") {
    localStorage.setItem("userToken", newToken);
  }
  
  return {
    success: true,
    message: "Đăng nhập thành công",
    token: newToken,
    userId: userDoc.id,
    user: {
      name: userData.name,
      email: userData.email,
      studentId: userData.studentId,
      username: userData.username,
    },
  };
};

// ✅ Hàm lấy người dùng từ token (dùng để auto login khi reload/truy cập lại)
export const getUserByToken = async (token: string) => {
  const q = query(collection(db, "users"), where("token", "==", token));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  return {
    id: userDoc.id,
    name: userData.name,
    email: userData.email,
    studentId: userData.studentId,
    username: userData.username,
  };
};
