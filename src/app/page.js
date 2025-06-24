'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArtistCard } from '@/components/ArtistCard';
import artists from '@/lib/artists.json';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background_eventful.jpg')" }}
      />
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-0" />

      {/* Hero Section */}
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

      {/* Featured Artists */}
      <section className="relative z-10 bg-[#1c1c1e]/90 py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Featured Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artists.slice(0, 3).map((artist) => (
            <div
              key={artist.id}
              className="bg-[#2c2c2e] rounded-xl shadow-lg p-4 hover:shadow-purple-500/30 transition duration-300"
            >
              <ArtistCard artist={artist} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 bg-black py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Riya M.',
              quote: 'Artistly made my wedding unforgettable! The performers were amazing.',
            },
            {
              name: 'Arjun S.',
              quote: 'So easy to book and communicate. Everything was smooth and professional.',
            },
            {
              name: 'Priya K.',
              quote: 'A platform every event planner must use. Incredible talent pool.',
            },
          ].map((t, index) => (
            <div key={index} className="bg-[#2c2c2e] p-6 rounded-lg border border-purple-600">
              <p className="text-gray-300 italic">“{t.quote}”</p>
              <p className="mt-4 text-purple-400 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="relative z-10 bg-[#1c1c1e] py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact Us</h2>
        <p className="text-gray-300 mb-4">
          Have questions or need support? Reach out to us at{' '}
          <a href="mailto:support@artistly.com" className="text-purple-300 underline">
            support@artistly.com
          </a>
        </p>
        <p className="text-gray-400">We’ll get back to you within 24 hours.</p>
      </section>
    </div>
  );
}
