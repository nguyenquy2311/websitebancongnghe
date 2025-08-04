import { Rocket, BookOpen, Users, Code, Trophy, Building, Star, TrendingUp } from "lucide-react"

// Icon mapping để có thể sử dụng string thay vì import trực tiếp
export const iconMapping = {
  Rocket,
  BookOpen,
  Users,
  Code,
  Trophy,
  Building,
  Star,
  TrendingUp,
};

// Helper function để get icon component từ string
export const getIconComponent = (iconName: string) => {
  return iconMapping[iconName as keyof typeof iconMapping] || Rocket;
};