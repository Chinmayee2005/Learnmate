// File: src/components/Content/FlashSection.jsx

import { useState } from 'react';
import FlashCard from './FlashCard';

const dummyFlashes = [
  {
    id: 1,
    title: 'Flash 1',
    description: 'This is a short informative flash.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Flash 2',
    description: 'Another quick insight for you.',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Flash 3',
    description: 'Here’s something cool!',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

export default function FlashSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyFlashes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dummyFlashes.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <FlashCard flash={dummyFlashes[currentIndex]} />

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-[#3d0070] hover:bg-[#4f008f] rounded-lg"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#3d0070] hover:bg-[#4f008f] rounded-lg"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
