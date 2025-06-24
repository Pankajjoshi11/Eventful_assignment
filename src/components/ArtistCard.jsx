'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function ArtistCard({ artist }) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden bg-[#2c2c2e] text-white flex flex-col shadow-md transition-shadow duration-300 hover:shadow-purple-500/20'
      )}
    >
      {/* Artist Image */}
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={artist.profilePicture || '/fallback-artist.jpg'}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Artist Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold truncate">{artist.name}</h3>
        <p className="text-sm text-purple-300">{artist.category}</p>
        <p className="text-sm text-gray-400">₹{artist.priceRange}</p>
        <p className="text-sm text-gray-400 mb-4">{artist.location}</p>

        {/* CTA Button */}
        <Button
          variant="secondary"
          className="mt-auto w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:brightness-110 transition-all"
          onClick={() => alert(`Quote requested for ${artist.name}`)}
        >
          Ask for Quote
        </Button>
      </div>
    </div>
  );
}
