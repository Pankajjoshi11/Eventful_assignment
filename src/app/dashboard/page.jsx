'use client';

import { motion } from 'framer-motion';
import { ArtistTable } from '@/components/ArtistTable';
import artists from '@/lib/artists.json';

export default function Dashboard() {
  return (
    <div className="relative w-full min-h-screen px-18">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/background_eventful.jpg')" }}
      />
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
          Manager Dashboard
        </h1>
        <p className="text-gray-300 mb-8">
          Overview of all registered artists and their details.
        </p>

        <div className="bg-[#1c1c1e]/80 p-6 rounded-xl shadow-lg border border-purple-700">
          <ArtistTable artists={artists} />
        </div>
      </motion.div>
    </div>
  );
}
