import { useEffect, useState } from 'react';

export default function Topbar() {
  const quotes = [
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "The beautiful thing about learning is that nobody can take it away from you. – B.B. King",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The expert in anything was once a beginner.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Push yourself, because no one else is going to do it for you.",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "What we learn with pleasure we never forget. – Alfred Mercier",
    "A person who never made a mistake never tried anything new. – Albert Einstein"
  ];

  const [quote, setQuote] = useState('');
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'User';
    setUserName(name);

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="w-full p-4 bg-[#2b0050] shadow-neumorphic rounded-b-xl flex flex-col md:flex-row items-start md:items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold">Welcome back, {userName} 👋</h1>
        <p className="text-sm text-gray-300 mt-1">{quote}</p>
      </div>
    </div>
  );
}