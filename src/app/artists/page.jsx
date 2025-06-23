'use client';

// artists/page.jsx: Displays filtered artist cards with filter controls
import { useState } from 'react';
import { ArtistCard } from '@/components/ArtistCard';
import { FilterBar } from '@/components/FilterBar';
import artists from '@/lib/artists.json';

export default function Artists() {
  // State for filtered artists
  const [filteredArtists, setFilteredArtists] = useState(artists);

  // Handle multiple filters
  const handleFilter = (filters) => {
    const { category, location, priceRange } = filters;
    const filtered = artists.filter((artist) => {
      // Check category filter (if set)
      const matchesCategory = category ? artist.category === category : true;
      // Check location filter (case-insensitive, if set)
      const matchesLocation = location
        ? artist.location.toLowerCase().includes(location.toLowerCase())
        : true;
      // Check price range filter (if set)
      const matchesPriceRange = priceRange ? artist.priceRange === priceRange : true;
      // Return true only if all conditions are met
      return matchesCategory && matchesLocation && matchesPriceRange;
    });
    setFilteredArtists(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Artists</h1>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No artists found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
}