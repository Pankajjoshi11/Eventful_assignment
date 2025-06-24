'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArtistCard } from '@/components/ArtistCard';
import { FilterBar } from '@/components/FilterBar';
import artists from '@/lib/artists.json';

export default function Artists() {
  const [filteredArtists, setFilteredArtists] = useState(artists);

  const handleFilter = (filters) => {
    const { category, location, priceRange } = filters;
    const filtered = artists.filter((artist) => {
      const matchesCategory = category ? artist.category === category : true;
      const matchesLocation = location
        ? artist.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesPriceRange = priceRange ? artist.priceRange === priceRange : true;
      return matchesCategory && matchesLocation && matchesPriceRange;
    });
    setFilteredArtists(filtered);
  };

  return (
    <div className="relative w-full min-h-screen px-18">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/background_eventful.jpg')" }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 py-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Performing Artists
        </motion.h1>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-10"
        >
          <FilterBar onFilter={handleFilter} />
        </motion.div>

        {/* Artist Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <motion.div
                key={artist.id}
                className="bg-[#1c1c1e]/80 p-4 rounded-xl shadow-lg border border-purple-800 hover:shadow-purple-600/30 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArtistCard artist={artist} />
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-300 col-span-full mt-8">
              No artists found matching your filters.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
