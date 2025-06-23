// src/components/FilterBar.jsx
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

// Filter options
const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const priceRanges = ['1000-5000', '5000-10000', '10000+'];

export function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  // Handle filter change
  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Category Select */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <Select onValueChange={(value) => handleChange('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Location Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <Input
            placeholder="Enter city"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>
        {/* Price Range Select */}
        <div>
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <Select onValueChange={(value) => handleChange('priceRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  ₹{range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Reset Button */}
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => {
          setFilters({ category: '', location: '', priceRange: '' });
          onFilter({ category: '', location: '', priceRange: '' });
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
}