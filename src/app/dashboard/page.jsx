// src/app/dashboard/page.jsx
'use client';

import { motion } from 'framer-motion';
import { ArtistTable } from '@/components/ArtistTable';
import artists from '@/lib/artists.json';

export default function Dashboard() {
  return (
    <motion.div
      className="container mx-auto px-18 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-600 pb-2 ">
        🎛️ Manager Dashboard
      </h1>
      <p className="text-gray-400 mb-6">
        Overview of all registered artists and their details.
      </p>
      <ArtistTable artists={artists} />
    </motion.div>
  );
}
