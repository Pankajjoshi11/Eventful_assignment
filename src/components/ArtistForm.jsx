// src/components/ArtistForm.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

// Form schema
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  category: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  feeRange: z.string().min(1, 'Select a fee range'),
  location: z.string().min(1, 'Location is required'),
  image: z.any().optional(),
});

// Options
const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['Hindi', 'English', 'Tamil', 'Telugu'];
const feeRanges = ['1000-5000', '5000-10000', '10000+'];

export function ArtistForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      languages: [],
      feeRange: '',
      location: '',
      image: null,
    },
  });

  // Handle submission
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Form submitted! Check console for data.');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-4">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Artist Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Bio */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about yourself" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category Multi-Select */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value.includes(category)}
                        onCheckedChange={(checked) => {
                          const updated = checked
                            ? [...field.value, category]
                            : field.value.filter((val) => val !== category);
                          field.onChange(updated);
                        }}
                      />
                      <label className="text-sm">{category}</label>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Languages Multi-Select */}
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages Spoken</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value.includes(lang)}
                        onCheckedChange={(checked) => {
                          const updated = checked
                            ? [...field.value, lang]
                            : field.value.filter((val) => val !== lang);
                          field.onChange(updated);
                        }}
                      />
                      <label className="text-sm">{lang}</label>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Fee Range */}
        <FormField
          control={form.control}
          name="feeRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee Range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fee range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {feeRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      ₹{range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Location */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="City, State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Image Upload */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit Artist Profile
        </Button>
      </form>
    </Form>
  );
}