// src/app/artists/page.jsx
'use client';

import { useState } from 'react';
import { ArtistCard } from '@/components/ArtistCard';
import { FilterBar } from '@/components/FilterBar';
import artists from '@/lib/artists.json';

export default function Artists() {
  const [filteredArtists, setFilteredArtists] = useState(artists);

  // Handle filter logic
  const handleFilter = (filters) => {
    let result = [...artists];
    if (filters.category) {
      result = result.filter((artist) => artist.category === filters.category);
    }
    if (filters.location) {
      result = result.filter((artist) =>
        artist.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.priceRange) {
      result = result.filter((artist) => artist.priceRange === filters.priceRange);
    }
    setFilteredArtists(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Artists</h1>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}