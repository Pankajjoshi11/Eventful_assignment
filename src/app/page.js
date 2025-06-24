'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background_eventful.jpg')" }}
      />
      {/* Dark overlay with blur */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4"
      >
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Artistly</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Discover and book top-tier artists to elevate your events.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/artists"
            className="px-6 py-3 bg-purple-600 text-white rounded-md text-lg font-medium hover:bg-purple-500 transition"
          >
            Explore Artists
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 border border-white text-white rounded-md text-lg font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
