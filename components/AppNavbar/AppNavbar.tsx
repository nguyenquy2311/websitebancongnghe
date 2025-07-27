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
  const linkClass = 'text-sm font-medium text-gray-600 hover:text-cyan-800 transition-colors';

  const handleClick = () => {
    if (isMobile) closeMobile();
  };

  return (
    <ul className={`${isMobile ? 'flex flex-col gap-3' : 'flex items-center gap-6'}`}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClass} onClick={handleClick}>
            {item.name}
          </Link>
        </li>
      ))}

      {!user && (
        <>
          <li className = "mt-4">
            <Link
              href="/login"
              className="w-full border flex justify-center items-center text-sm px-3 py-2 rounded text-center hover:bg-gray-100"
              onClick={handleClick}
            >
              Đăng nhập
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="w-full border flex justify-center items-center bg-cyan-600 text-white text-sm px-3 py-2 rounded hover:bg-cyan-700"
              onClick={handleClick}
            >
              Đăng ký
            </Link>
          </li>

        </>
      )}

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
