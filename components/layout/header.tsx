'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/AppNavbar/AppNavbar';

const AppHeader: React.FC = () => {
  return (
    <header className="py-4 shadow-sm">
      <div className="mx-auto flex justify-between items-center gap-5 px-8 md:px-[120px] sm:px-[15px] sm:gap-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={195}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </Link>

        </div>

          {/* Desktop Navbar */}
          <Navbar />

        {/* Right: Auth + Mobile icon */}
        <div className="flex items-center gap-4">
          {/* Mobile menu icon */}
          <button className="md:hidden inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#00838f"
            >
              <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z" />
            </svg>
          </button>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-normal text-gray-600 hover:text-cyan-800 transition-colors">
              Đăng nhập
            </Link>
            <Link href="/register" className="text-sm font-normal bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 transition-colors">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
