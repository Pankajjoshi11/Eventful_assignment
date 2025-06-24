import '../styles/globals.css';
import { Header } from '@/components/Header';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'Platform to connect event planners with artists',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-black text-white">
        <Header />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
