'use client';

import Link from 'next/link';
import React from 'react';
import { navigation } from '@/components/navigation';
const Navbar: React.FC = () => {
  return (
    <ul className="hidden sm:flex items-center justify-center gap-6">
      {navigation.map((item) => (
        <li key={item.href}>
          <Link
        href={item.href}
        className="text-sm font-medium text-gray-600 hover:text-cyan-800 transition-colors"
          >
        {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
