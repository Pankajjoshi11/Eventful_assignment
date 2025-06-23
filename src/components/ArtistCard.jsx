// src/components/ArtistCard.jsx
'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ArtistCard({ artist }) {
  return (
    <div
      className={cn(
        'border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow',
        'bg-white flex flex-col'
      )}
    >
      {/* Placeholder Image */}
      <div className="relative w-full h-40 mb-4">
        <Image
          src="/placeholder.jpg" // Replace with actual image or artist.image
          alt={artist.name}
          fill
          className="object-cover rounded"
        />
      </div>
      {/* Artist Details */}
      <h3 className="text-lg font-semibold truncate">{artist.name}</h3>
      <p className="text-sm text-gray-600">{artist.category}</p>
      <p className="text-sm text-gray-600">₹{artist.priceRange}</p>
      <p className="text-sm text-gray-600">{artist.location}</p>
      {/* CTA */}
      <Button
        variant="outline"
        className="mt-auto w-full"
        onClick={() => alert(`Quote requested for ${artist.name}`)}
      >
        Ask for Quote
      </Button>
    </div>
  );
}