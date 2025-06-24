'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Predefined filter options
const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const priceRanges = ['1000-5000', '5000-10000', '10000+'];

export function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleReset = () => {
    const clearedFilters = { category: '', location: '', priceRange: '' };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <div className="bg-[#2c2c2e] p-4 rounded-xl shadow-md text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Category Select */}
        <div>
          <label className="block text-sm font-medium mb-2 text-purple-300">Category</label>
          <Select
            onValueChange={(value) => handleChange('category', value)}
            defaultValue={filters.category}
          >
            <SelectTrigger className="bg-[#1c1c1e] border border-[#3a3a3c] text-white focus:ring-purple-500">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1c1c1e] text-white">
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="hover:bg-[#3a3a3c]">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location Input */}
        <div>
          <label className="block text-sm font-medium mb-2 text-purple-300">Location</label>
          <Input
            className="bg-[#1c1c1e] border border-[#3a3a3c] text-white placeholder-gray-400 focus:ring-purple-500"
            placeholder="Enter city"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>

        {/* Price Range Select */}
        <div>
          <label className="block text-sm font-medium mb-2 text-purple-300">Price Range</label>
          <Select
            onValueChange={(value) => handleChange('priceRange', value)}
            defaultValue={filters.priceRange}
          >
            <SelectTrigger className="bg-[#1c1c1e] border border-[#3a3a3c] text-white focus:ring-purple-500">
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent className="bg-[#1c1c1e] text-white">
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range} className="hover:bg-[#3a3a3c]">
                  ₹{range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Reset Button */}
      <div className="mt-6">
        <Button
          onClick={handleReset}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:brightness-110 transition-all"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
