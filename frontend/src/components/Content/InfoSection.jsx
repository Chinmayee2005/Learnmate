// File: src/components/Content/InfoSection.jsx

import { useState } from 'react';

const dummyInfos = [
  {
    id: 1,
    title: 'Healthy Habits',
    description: 'Drink water regularly.',
    imageUrl: 'https://via.placeholder.com/400x600?text=Hydration',
  },
  {
    id: 2,
    title: 'Study Tip',
    description: 'Pomodoro technique improves focus.',
    imageUrl: '/content1.jpg',
  },
  {
    id: 3,
    title: 'Fitness Reminder',
    description: 'Stretch every hour.',
    imageUrl: 'https://via.placeholder.com/400x600?text=Stretch',
  },
];

export default function InfoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyInfos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dummyInfos.length - 1 : prev - 1
    );
  };

  const currentInfo = dummyInfos[currentIndex];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-full flex flex-col items-center justify-center max-w-md h-[60vh] rounded-2xl overflow-hidden shadow-neumorphic">
        <img
          src={currentInfo.imageUrl}
          alt={currentInfo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 bg-black/50 w-full text-center p-2 text-white text-sm">
         <p> {currentInfo.title} </p>
          <p>{currentInfo.description}</p>
        </div>
      </div>

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
