// src/components/Header.tsx
'use client'; // Client component for interactivity

import Link from 'next/link';
import { cn } from '@/lib/utils'; // ShadCN utility for classNames

export function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Artistly
        </Link>
        {/* Navigation Links */}
        <div className="space-x-4 flex items-center">
          <Link
            href="/artists"
            className={cn(
              'text-sm hover:text-blue-400 transition-colors',
              'px-2 py-1 rounded'
            )}
          >
            Artists
          </Link>
          <Link
            href="/onboarding"
            className={cn(
              'text-sm hover:text-blue-400 transition-colors',
              'px-2 py-1 rounded'
            )}
          >
            Onboard
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              'text-sm hover:text-blue-400 transition-colors',
              'px-2 py-1 rounded'
            )}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}