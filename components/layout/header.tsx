// components/layout/AppHeader.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '@/components/AppNavbar/AppNavbar';
import { getUserByToken } from '@/lib/firestoreService';
import { getToken, removeToken } from '@/lib/tokenStorage';

const AppHeader = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; avatarUrl?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    getUserByToken(token)
      .then((userData) => {
        if (userData) {
          setUser({
            name: userData.name,
            avatarUrl: userData.avatarUrl || '',
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    removeToken();
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <div className="group fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full">
      {/* Lớp phủ để mở rộng vùng hover */}
      <div className="absolute inset-0 h-[calc(100%)] w-full"></div>
      
      <header className="header relative left-1/2 -translate-x-1/2 w-full bg-[rgba(234,233,238,0.95)] backdrop-blur-md border-white/20 shadow-lg px-4 md:px-10 lg:px-[60px] xl:px-[100px] py-3 transition-all duration-300 xl:group-hover:rounded-3xl xl:group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] xl:group-hover:w-[calc(100%-80px)] xl:group-hover:px-[calc(100px-40px)] xl:group-hover:py-5 xl:group-hover:bg-[#f0f1f4]">
        <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Logo" width={195} height={40} className="h-auto w-auto" priority />
        </Link>

        {/* Navbar - chỉ hiện trên xl */}
        <div className="hidden xl:flex">
          <Navbar
            isMobile={false}
            user={user}
            onLogout={handleLogout}
            closeMobile={() => setMobileOpen(false)}
          />
        </div>

        {/* Avatar + menu icon + Auth button */}
        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          {/* Avatar (desktop) */}
          {!loading && user && (
            <div
              className="flex items-center gap-2 xl:cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.avatarUrl ? (
                <Image src={user.avatarUrl} alt="Avatar" width={32} height={32} className="rounded-full" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-cyan-700 text-white flex items-center justify-center text-sm">
                  {user.name[0].toUpperCase()}
                </div>
              )}
              <span className="text-md font-medium text-gray-800 hidden sm:inline">{user.name}</span>
            </div>
          )}

          {/* Đăng nhập/Đăng ký (desktop only, chưa login) */}
          {!loading && !user && (
            <div className="hidden xl:flex gap-2">
              <Link
                href="/login"
                className="text-md px-4 py-2 font-normal text-gray-600 hover:text-cyan-800 transition-colors"
              >
                Đăng nhập
              </Link>
            </div>
          )}

          {/* Dropdown menu (chỉ desktop) */}
          {dropdownOpen && user && (
            <ul className="absolute right-0 top-12 bg-white border rounded shadow-md z-50 w-48 hidden xl:block">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/profile">Thông tin cá nhân</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/change-password">Đổi mật khẩu</Link>
              </li>
              <li
                className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                onClick={handleLogout}
              >
                Đăng xuất
              </li>
            </ul>
          )}

          {/* Menu icon (mobile) */}
          <button
            className="text-xl text-cyan-700 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Navbar mobile */}
      {mobileOpen && (
        <div className="xl:hidden px-4 pt-8 pb-5 animate-slide-down">
          <Navbar
            isMobile={true}
            user={user}
            onLogout={handleLogout}
            closeMobile={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
    </div>
  );
};

export default AppHeader;
