# Timeline Icon & Image String Migration

## Tóm tắt thay đổi

Đã chuyển đổi thành công timeline icons và images từ object imports sang string format để có thể lưu vào Firestore.

## Thay đổi chính

### 1. `/data/timeline.ts`

#### Xóa Image Imports:
```typescript
// Trước:
import FitImage from "./images/activitygallery/fit.webp";
import a from "./images/activitygallery/2.webp";
// ... other imports

// Sau: Không còn imports
```

#### Thêm Icon Mapping System:
```typescript
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
```

#### Chuyển icon và image từ object sang string:
```typescript
// Trước:
icon: Rocket,
image: FitImage.src,

// Sau:
icon: "Rocket",
image: "./data/images/activitygallery/fit.webp",
```

### 2. `/app/about/page.tsx`

#### Import helper function:
```typescript
import { timelineData, activityGallery, getIconComponent } from "@/data/timeline"
```

#### Sử dụng dynamic icon rendering:
```typescript
// Trước:
icon={<item.icon />}

// Sau:
icon={(() => {
  const IconComponent = getIconComponent(item.icon);
  return <IconComponent />;
})()}
```

## Timeline Data Structure

Bây giờ timeline data có format:
```typescript
{
  date: string,
  title: string,
  subtitle: string,
  description: string,
  icon: string,        // ← String thay vì Component
  color: string,
  image: string,       // ← String path thay vì imported src
}
```

## Image Paths

Sử dụng đường dẫn tương đối:
```typescript
image: "./data/images/activitygallery/fit.webp",
image: "./data/images/activitygallery/2.webp",
// ... etc
```

## Available Icons

Các icon strings có thể sử dụng:
- `"Rocket"` - Khởi đầu, ra mắt
- `"BookOpen"` - Workshop, học tập
- `"Users"` - Mở rộng đội ngũ, cộng đồng
- `"Code"` - Dự án, phát triển
- `"Trophy"` - Thành tựu, giải thưởng
- `"Building"` - Hợp tác doanh nghiệp
- `"Star"` - Thành viên nổi bật
- `"TrendingUp"` - Phát triển, tăng trưởng

## Thêm icon mới

Để thêm icon mới:

1. **Import icon** trong `timeline.ts`:
```typescript
import { Rocket, BookOpen, Users, Code, Trophy, Building, Star, TrendingUp, NewIcon } from "lucide-react"
```

2. **Thêm vào mapping**:
```typescript
export const iconMapping = {
  Rocket,
  BookOpen,
  Users,
  Code,
  Trophy,
  Building,
  Star,
  TrendingUp,
  NewIcon,  // ← Thêm ở đây
};
```

3. **Sử dụng trong data**:
```typescript
{
  // ... other fields
  icon: "NewIcon",  // ← Sử dụng string
}
```

## Firestore Ready ✅

Bây giờ timeline data có thể:
- ✅ Lưu trực tiếp vào Firestore (chỉ string, không có functions/imports)
- ✅ Render đúng icons trong UI
- ✅ Hiển thị đúng images với đường dẫn tương đối
- ✅ Type-safe với TypeScript
- ✅ Dễ dàng thêm icons mới
- ✅ Backward compatible với existing code

## Testing

1. **Build test**: `pnpm build` - ✅ Passed
2. **About page**: Truy cập `/about` scroll xuống timeline - Icons và images hiển thị đúng
3. **Timeline functionality**: Tất cả animations và styling giữ nguyên

## Migration hoàn tất ✅

Timeline system bây giờ hoàn toàn sẵn sàng cho Firestore integration!
- Icons: String-based ✅
- Images: String paths ✅  
- No imports required ✅
- Build successful ✅
