'use client';

// FilterBar.jsx: Provides filter controls for category, location, and price range
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
  // State for filter values
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: '',
  });

  // Handle filter change for select and input fields
  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters); // Notify parent with updated filters
  };

  // Handle filter reset
  const handleReset = () => {
    const clearedFilters = { category: '', location: '', priceRange: '' };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
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
        onClick={handleReset}
      >
        Reset Filters
      </Button>
    </div>
  );
}