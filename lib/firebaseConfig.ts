// lib/firebaseConfig.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Cấu hình Firebase Web App của bạn
const firebaseConfig = {
  apiKey: "AIzaSyDhvtjVMOEhGRkp0rOQFEF26j2MTpjRiXA",
  authDomain: "bancongnghe-cbe71.firebaseapp.com",
  projectId: "bancongnghe-cbe71",
  storageBucket: "bancongnghe-cbe71.firebasestorage.app",
  messagingSenderId: "757520025437",
  appId: "1:757520025437:web:6256965ff3e45cf5568ab4",
  measurementId: "G-7QYFP5156F"
};

// ✅ Khởi tạo app 1 lần duy nhất
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db, app };
