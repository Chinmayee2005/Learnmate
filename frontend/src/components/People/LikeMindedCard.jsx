// File: src/components/People/LikeMindedCard.jsx
import { useState } from 'react';

export default function LikeMindedCard({ person }) {
  const [connected, setConnected] = useState(false);
  const handleConnect = () => {
    setConnected(true);
    setTimeout(() => setConnected(false), 2000); // reset after 2s for demo
  };

  return (
    <div
      className="relative group bg-[#3d0070] p-4 rounded-2xl shadow-neumorphic-soft text-white hover:shadow-neumorphic-inset transition-all duration-300"
      title={`Click to connect with ${person.name}`}
    >
      {/* Online Status Dot */}
      <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-400 animate-pulse" />

      <img
        src={person.avatar}
        alt={person.name}
        className="w-16 h-16 mx-auto rounded-full mb-2 border-2 border-purple-500"
      />
      <h3 className="text-lg font-semibold text-center">{person.name}</h3>
      <p className="text-sm text-purple-300 text-center">{person.title}</p>

      {/* Mutual Interests */}
      <ul className="text-xs text-purple-400 mt-2 text-center space-y-1">
        {person.interests.slice(0, 3).map((interest, idx) => (
          <li key={idx}>• {interest}</li>
        ))}
      </ul>

      {/* Animated Connect Button */}
      <div className="flex justify-center mt-3">
        <button
          onClick={handleConnect}
          className={`px-4 py-1 rounded-xl text-sm font-medium transition-all duration-300 ${
            connected
              ? 'bg-green-600 cursor-default'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
          disabled={connected}
        >
          {connected ? 'Connected' : 'Connect'}
        </button>
      </div>
    </div>
  );
}
