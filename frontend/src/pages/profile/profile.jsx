// File: src/pages/Profile.jsx
import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('Web developer & lifelong learner');
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/150?img=10');

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#1f0036] to-[#3d0066] text-white">
      <div className="max-w-xl mx-auto bg-[#2b0050] p-6 rounded-2xl shadow-neumorphic">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-purple-500 mb-2"
          />
          <button
            onClick={() => alert('Avatar upload coming soon!')}
            className="text-sm text-purple-300 hover:underline"
          >
            Change Avatar
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#3d0070] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#3d0070] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#3d0070] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
