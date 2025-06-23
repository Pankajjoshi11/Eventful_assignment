// src/app/onboarding/page.jsx
import { ArtistForm } from '@/components/ArtistForm';

export default function Onboarding() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Onboard as an Artist</h1>
      <ArtistForm />
    </div>
  );
}