'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Simulate login (replace with real auth later)
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', email); // optional
    router.push('/');
  };

  return (
    <div className="w-full h-full relative overflow-hidden min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{ backgroundImage: "url('/background_eventful.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Login Form */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-[#1c1c1e] text-white p-8 rounded-2xl shadow-2xl w-full max-w-sm mt-40">
          <h2 className="text-2xl font-bold mb-1 text-center">Welcome back!</h2>
          <p className="text-sm text-center mb-6 text-gray-400">
            Please enter your login credentials
          </p>

          <form className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-3 pt-4 pb-2 bg-[#2c2c2e] text-white rounded-md border border-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="Email"
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-sm text-gray-400 transition-all 
                  peer-placeholder-shown:top-3.5 
                  peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-500 
                  peer-focus:top-1 
                  peer-focus:text-xs 
                  peer-focus:text-purple-400"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-3 pt-4 pb-2 bg-[#2c2c2e] text-white rounded-md border border-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-transparent"
                placeholder="Password"
                id="password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2 text-sm text-gray-400 transition-all 
                  peer-placeholder-shown:top-3.5 
                  peer-placeholder-shown:text-base 
                  peer-placeholder-shown:text-gray-500 
                  peer-focus:top-1 
                  peer-focus:text-xs 
                  peer-focus:text-purple-400"
              >
                Password
              </label>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out"
            >
              LOGIN
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
