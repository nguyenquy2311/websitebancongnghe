import { Calendar, MapPin, Users, Clock, BookOpen, Trophy, Mic, Heart, Star, Filter, ChevronRight, ArrowRight } from "lucide-react"
import { db } from "@/lib/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"

export async function getAllActivities() {
  const snapshot = await getDocs(collection(db, "activities"))
  const activities = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
  return activities
}

export const upcomingEvents = [
  {
    title: "Git & GitHub Workshop",
    date: "2024-02-05",
    time: "19:00",
    type: "Workshop",
  },
  {
    title: "React + Firebase",
    date: "2024-03-15",
    time: "18:30",
    type: "Tech Talk",
  },
]

export const activityTypes = [
  { id: "all", name: "Tất cả", icon: Calendar, color: "bg-gray-100 text-gray-800" },
  { id: "Workshop", name: "Workshop", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
  { id: "Tech Talk", name: "Tech Talk", icon: Mic, color: "bg-green-100 text-green-800" },
  { id: "Competition", name: "Cuộc thi", icon: Trophy, color: "bg-yellow-100 text-yellow-800" },
  { id: "Team Building", name: "Team Building", icon: Heart, color: "bg-pink-100 text-pink-800" },
  { id: "Study Group", name: "Nhóm học", icon: Users, color: "bg-purple-100 text-purple-800" },
]
