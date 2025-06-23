import '../styles/globals.css';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Artistly - Book Performing Artists',
  description: 'Platform to connect event planners with artists',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}