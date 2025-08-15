import {
  collection,
  addDoc,
  Timestamp,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  getDoc, // 👈 THÊM DÒNG NÀY
  deleteDoc,
} from "firebase/firestore"

import { db } from "./firebaseConfig";
import { hashPassword } from "@/lib/utils";
import { Project } from "@/data/project"; // Import Project interface
import { Member } from "@/data/portfolio"; // Import Member interface

// Timeline interface for Firestore
export interface TimelineItem {
  id?: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

export interface ActivityGalleryItem {
  id?: string;
  src: string;
  alt: string;
}

// ✅ Hàm lấy tất cả projects từ Firestore
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
    console.log("✅ Projects fetched from Firestore:", projects.length);
    return projects;
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    return [];
  }
};

// ✅ Hàm lấy tất cả members từ Firestore
export const getAllMembers = async (): Promise<Member[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "portfolios"));
    const members = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as Member[];
    console.log("✅ Members fetched from Firestore:", members.length);
    return members;
  } catch (error) {
    console.error("❌ Error fetching members:", error);
    return [];
  }
};

// ✅ Kiểu dữ liệu người dùng mới
export interface NewUser {
  name: string;
  email: string;
  username: string;
  studentId: string;
  password: string; // đã hash
  role: 'admin' | 'member'; // Thêm role
  createdAt?: Timestamp;
}

// ✅ Hàm thêm người dùng mới vào Firestore
export const addUser = async (user: NewUser) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...user,
      role: user.role || 'member', // Default role là member
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
      role: userData.role || 'member', // Thêm role vào response
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
    role: userData.role || 'member', // Thêm role
  };
};

// ✅ Hàm lấy người dùng từ email
export const getUserByEmail = async (email: string) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("❌ No user found with email:", email);
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    return {
      id: userDoc.id,
      name: userData.name,
      email: userData.email,
      studentId: userData.studentId,
      username: userData.username,
      role: userData.role || 'member',
      avatarUrl: userData.avatarUrl || userData.avatar || '', // Include avatar field
    };
  } catch (error) {
    console.error("❌ Error fetching user by email:", error);
    return null;
  }
};

export const getUserByUserID = async (userID: string) => {
  try {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("✅ User found:", {
        id: docSnap.id,
        name: data.name,
        email: data.email,
        username: data.username
      });
      return {
        id: docSnap.id,
        name: data.name,
        email: data.email,
        username: data.username,
        studentId: data.studentId,
        avatarUrl: data.avatarUrl,
        role: data.role || 'member', // Thêm role
      };
    } else {
      console.log(`❌ User not found: ${userID}`);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// ✅ Hàm lấy tất cả timeline data từ Firestore
export async function getAllTimeline(): Promise<TimelineItem[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'timelineData'));
    const timeline = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as TimelineItem));
    
    console.log('Timeline data fetched:', timeline.length, 'items');
    return timeline;
  } catch (error) {
    console.error('Error fetching timeline data:', error);
    return [];
  }
}

export async function getAllActivities(): Promise<unknown[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'activities'));
    const activities = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Activities data fetched:', activities.length, 'items');
    return activities;
  } catch (error) {
    console.error('Error fetching activities data:', error);
    return [];
  }
}

export async function getAllActivityGallery(): Promise<ActivityGalleryItem[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'activityGallery'));
    const gallery = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ActivityGalleryItem));
    
    console.log('Activity gallery data fetched:', gallery.length, 'items');
    return gallery;
  } catch (error) {
    console.error('Error fetching activity gallery data:', error);
    return [];
  }
}

// ✅ Hàm lấy tất cả outstanding projects từ Firestore
export async function getOutstandingProject(): Promise<Project[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'outstandingProject'));
    const projects = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project));
    
    console.log('Outstanding projects data fetched:', projects.length, 'items');
    return projects;
  } catch (error) {
    console.error('Error fetching outstanding projects data:', error);
    return [];
  }
}

// Function test để kiểm tra tất cả users
export const testGetAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("📊 Total users:", querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log("📄 User:", doc.id, "=>", doc.data().name);
    });
  } catch (error) {
    console.error("Error getting all users:", error);
  }
};

// ✅ Hàm tạo/cập nhật project
export const saveProject = async (projectData: Partial<Project>): Promise<void> => {
  try {
    if (projectData.id) {
      // Update existing project
      const { id, ...dataToUpdate } = projectData;
      const docRef = doc(db, "projects", id);
      await updateDoc(docRef, { ...dataToUpdate, updatedAt: new Date() });
      console.log("✅ Project updated successfully:", id);
    } else {
      // Create new project
      const docRef = await addDoc(collection(db, "projects"), {
        ...projectData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("✅ Project created successfully:", docRef.id);
    }
  } catch (error) {
    console.error("❌ Error saving project:", error);
    throw error;
  }
};

// ✅ Hàm tạo/cập nhật member
export const saveMember = async (memberData: Partial<Member>): Promise<void> => {
  try {
    if (memberData.id) {
      // Update existing member
      const { id, ...dataToUpdate } = memberData;
      const docRef = doc(db, "portfolios", id);
      await updateDoc(docRef, { ...dataToUpdate, updatedAt: new Date() });
      console.log("✅ Member updated successfully:", id);
    } else {
      // Create new member
      const docRef = await addDoc(collection(db, "portfolios"), {
        ...memberData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("✅ Member created successfully:", docRef.id);
    }
  } catch (error) {
    console.error("❌ Error saving member:", error);
    throw error;
  }
};

// ✅ Hàm xóa project
export const deleteProject = async (projectId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "projects", projectId));
    console.log("✅ Project deleted successfully:", projectId);
  } catch (error) {
    console.error("❌ Error deleting project:", error);
    throw error;
  }
};

// ✅ Hàm xóa member
export const deleteMember = async (memberId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "portfolios", memberId));
    console.log("✅ Member deleted successfully:", memberId);
  } catch (error) {
    console.error("❌ Error deleting member:", error);
    throw error;
  }
};