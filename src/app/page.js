import Link from 'next/link';
import { ArtistCard } from '@/components/ArtistCard';
import artists from '@/lib/artists.json';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Artistly</h1>
        <p className="text-lg">Book top artists for your events</p>
        <Link href="/artists" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded">
          Explore Artists
        </Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {artists.slice(0, 4).map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}