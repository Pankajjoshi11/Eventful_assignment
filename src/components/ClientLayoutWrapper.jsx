'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main
      className={`${
        isHome
          ? 'min-h-screen overflow-y-auto flex flex-col items-center justify-center'
          : 'min-h-screen overflow-y-auto'
      } flex-1`}
    >
      {children}
    </main>
  );
}
