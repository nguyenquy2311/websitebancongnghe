// lib/authService.ts
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getUserByToken = async (token: string) => {
  const q = query(collection(db, "users"), where("token", "==", token));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data(),
  };
};
