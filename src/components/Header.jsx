'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check login status
  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, [pathname]);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLoginClick = () => router.push('/login');
  const mockProfilePic = '/donald.webp';
  const isActive = (href) => pathname === href;

  return (
    <header
      className={cn(
        'text-white sticky top-0 z-20 transition-colors duration-300',
        scrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center p-4 pb-6 px-10">
        <Link href="/" className="text-4xl font-bold tracking-tight text-purple-400">
          Artistly
        </Link>

        <nav className="hidden md:flex text-lg items-center space-x-6">
          <Link
            href="/artists"
            className={cn(
              'transition hover:text-purple-400',
              isActive('/artists') && 'text-purple-400 '
            )}
          >
            Artists
          </Link>

          {!isLoggedIn ? (
            <button
              onClick={handleLoginClick}
              className="px-4 py-1.5 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm transition"
            >
              Login
            </button>
          ) : (
            <>
              <Link
                href="/onboarding"
                className={cn(
                  'transition hover:text-purple-400',
                  isActive('/onboarding') && 'text-purple-400 '
                )}
              >
                Onboard
              </Link>
              <Link
                href="/dashboard"
                className={cn(
                  'transition hover:text-purple-400',
                  isActive('/dashboard') && 'text-purple-400 '
                )}
              >
                Dashboard
              </Link>
              <Image
                src={mockProfilePic}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-400 hover:ring hover:ring-purple-400 transition"
              />
            </>
          )}
        </nav>

        <button className="md:hidden" onClick={toggleSidebar} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 md:hidden">
          <aside className="absolute top-0 left-0 w-64 h-full bg-[#1c1c1e] shadow-xl p-6 space-y-6 animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-purple-400">Menu</span>
              <button onClick={toggleSidebar} aria-label="Close Menu">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-white">
              <Link href="/" onClick={toggleSidebar} className={cn(isActive('/') && 'text-purple-400 ')}>
                Home
              </Link>
              <Link href="/artists" onClick={toggleSidebar} className={cn(isActive('/artists') && 'text-purple-400 ')}>
                Artists
              </Link>

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLoginClick();
                    toggleSidebar();
                  }}
                  className="text-left text-purple-400"
                >
                  Login
                </button>
              ) : (
                <>
                  <Link href="/onboarding" onClick={toggleSidebar} className={cn(isActive('/onboarding') && 'text-purple-400 ')}>
                    Onboard
                  </Link>
                  <Link href="/dashboard" onClick={toggleSidebar} className={cn(isActive('/dashboard') && 'text-purple-400 ')}>
                    Dashboard
                  </Link>
                  <div className="pt-2 border-t border-gray-700">
                    <Image
                      src={mockProfilePic}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-purple-500 mt-2 hover:ring hover:ring-purple-400 transition"
                    />
                  </div>
                </>
              )}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
