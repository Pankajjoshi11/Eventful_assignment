// src/app/onboarding/page.jsx
'use client';

import { motion } from 'framer-motion';
import { ArtistForm } from '@/components/ArtistForm';

export default function Onboarding() {
  return (
    <motion.div
      className="container mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-purple-400 mb-4 border-b border-purple-600 pb-2">
        🎤 Onboard as an Artist
      </h1>
      <p className="text-gray-400 mb-6">
        Submit your details and become a part of the Artistly community.
      </p>
      <div className="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-purple-700">
        <ArtistForm />
      </div>
    </motion.div>
  );
}
