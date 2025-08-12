'use client';

import Link from 'next/link';
import { navigation } from '@/components/navigation';

interface NavbarProps {
  isMobile: boolean;
  user: { name: string; avatarUrl?: string } | null;
  onLogout: () => void;
  closeMobile: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile, user, onLogout, closeMobile }) => {
  const linkClass = 'flex py-4 px-5 text-sm font-medium text-gray-600 hover:text-cyan-800 transition-all duration-300 xl:hover:bg-[#f0f1f4]/80 xl:hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] xl:hover:-translate-y-0.5 rounded-xl border border-transparent xl:hover:border-gray-200/50';


  const handleClick = () => {
    if (isMobile) closeMobile();
  };

  return (
    <ul className={`${isMobile ? 'flex flex-col' : 'flex items-center gap-2'}`}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClass} onClick={handleClick}>
            {item.name}
          </Link>
        </li>
      ))}

      {/* Đăng nhập / Đăng ký chỉ hiển thị ở mobile */}
      {!user && isMobile && (
        <>
          <li className="mt-4">
            <Link
              href="/login"
              className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 transition-all duration-300 hover:scale-[1.02]"
              onClick={handleClick}
            >
              Đăng nhập
            </Link>
          </li>
        </>
      )}

      {/* Đăng xuất + links profile (mobile) */}
      {user && isMobile && (
        <>
          <li>
            <Link href="/profile" className={linkClass} onClick={handleClick}>
              Thông tin cá nhân
            </Link>
          </li>
          <li>
            <Link href="/change-password" className={linkClass} onClick={handleClick}>
              Đổi mật khẩu
            </Link>
          </li>
          <li
            onClick={() => {
              onLogout();
              closeMobile();
            }}
            className="text-sm text-red-600 cursor-pointer hover:bg-red-50 px-2 py-2 rounded text-center"
          >
            Đăng xuất
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;
