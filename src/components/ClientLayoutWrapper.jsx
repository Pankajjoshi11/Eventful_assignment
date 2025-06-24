'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main
      className={`${
        isHome
          ? 'h-screen overflow-hidden flex items-center justify-center'
          : 'min-h-screen overflow-y-auto'
      } flex-1`}
    >
      {children}
    </main>
  );
}
