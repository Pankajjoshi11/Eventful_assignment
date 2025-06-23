// src/app/dashboard/page.jsx
import { ArtistTable } from '@/components/ArtistTable';
import artists from '@/lib/artists.json';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>
      <ArtistTable artists={artists} />
    </div>
  );
}