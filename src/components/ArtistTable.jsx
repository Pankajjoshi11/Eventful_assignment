'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ArtistTable({ artists }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-[#1c1c1e] shadow-lg border border-purple-600"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Table>
        <TableHeader className="bg-[#2a2a2d]">
          <TableRow>
            <TableHead className="text-purple-400">Name</TableHead>
            <TableHead className="text-purple-400">Category</TableHead>
            <TableHead className="text-purple-400">City</TableHead>
            <TableHead className="text-purple-400">Fee</TableHead>
            <TableHead className="text-purple-400 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist, index) => (
            <motion.tr
              key={artist.id}
              className="border-b border-[#2e2e32] hover:bg-[#2a2a2d] transition"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TableCell className="font-medium text-white">{artist.name}</TableCell>
              <TableCell className="text-gray-400">{artist.category}</TableCell>
              <TableCell className="text-gray-400">{artist.location}</TableCell>
              <TableCell className="text-gray-300">₹{artist.priceRange}</TableCell>
              <TableCell className="text-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                  onClick={() => alert(`Viewing ${artist.name}'s profile...`)}
                >
                  View
                </Button>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
