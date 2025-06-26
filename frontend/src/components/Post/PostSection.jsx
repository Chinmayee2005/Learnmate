// File: src/components/Post/PostSection.jsx

import FlashPostForm from './FlashPostForm';
import InfoPostForm from './InfoPostForm';
import { useState } from 'react';

export default function PostSection() {
  const [activeTab, setActiveTab] = useState('flash');

  return (
    <div className="bg-[#2b0050] rounded-xl p-4 shadow-neumorphic">
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-xl ${activeTab === 'flash' ? 'bg-purple-700 text-white' : 'bg-purple-900 text-gray-300'}`}
          onClick={() => setActiveTab('flash')}
        >
          Post Flash
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${activeTab === 'info' ? 'bg-purple-700 text-white' : 'bg-purple-900 text-gray-300'}`}
          onClick={() => setActiveTab('info')}
        >
          Post Info
        </button>
      </div>

      <div>
        {activeTab === 'flash' ? <FlashPostForm /> : <InfoPostForm />}
      </div>
    </div>
  );
}
