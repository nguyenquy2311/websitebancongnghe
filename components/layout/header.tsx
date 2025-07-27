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
    router.refresh();
    router.push('/login');
  };

  return (
    <header className="py-4 shadow-sm">
      <div className="mx-auto flex justify-between items-center px-4 md:px-[60px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={195}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Navbar (ẩn ở dưới xl) */}
        <div className="hidden xl:flex">
          <Navbar />
        </div>

        {/* Right section: User Info + Menu Icon */}
        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          {/* User Info */}
          <div className="order-1">
            {loading ? null : !user ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm text-gray-600 hover:text-cyan-800">
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="text-sm bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700"
                >
                  Đăng ký
                </Link>
              </div>
            ) : (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user.avatarUrl ? (
                  <Image
                    src={user.avatarUrl}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-cyan-700 text-white flex items-center justify-center text-sm">
                    {user.name[0].toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-800">{user.name}</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="order-2 xl:hidden text-xl text-cyan-700"
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && user && (
            <ul className="absolute right-0 top-12 bg-white border rounded shadow-md z-50 w-48">
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
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
