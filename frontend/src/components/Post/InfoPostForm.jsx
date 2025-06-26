import { useState } from 'react';

export default function InfoPostForm() {
  const [info, setInfo] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Posting Info:', info, file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#2b0050] p-4 rounded-xl shadow-neumorphic space-y-4"
    >
      <h2 className="text-lg font-semibold">Post an Info</h2>
      <textarea
        className="w-full p-2 rounded-xl bg-[#1f0036] text-white"
        rows="3"
        placeholder="Share something useful..."
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <label className="flex items-center gap-3 cursor-pointer bg-[#3d0070] hover:bg-[#4e008a] text-white px-4 py-2 rounded-xl w-fit text-sm shadow-md transition-all duration-300">
        <span>📁 Choose File</span>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      {file && <p className="text-xs text-gray-300">Selected: {file.name}</p>}
      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-xl"
      >
        Post Info
      </button>
    </form>
  );
}
