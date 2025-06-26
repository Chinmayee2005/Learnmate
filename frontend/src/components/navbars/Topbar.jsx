import { useEffect, useState } from "react";

export default function Topbar() {
  const [username, setUsername] = useState("User");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) setUsername(savedName);

    const quotes = [
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "Learning never exhausts the mind.",
      "Success is not for the lazy.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <header className="w-full px-4 py-3 bg-[#2b0050] shadow-neumorphic z-50 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Logo */}
        <div className="text-purple-300 font-bold text-lg md:text-xl">
          ⚡ YourAppName
        </div>

        {/* Texts */}
        <div className="flex flex-col md:items-end text-sm md:text-base">
          <span className="font-semibold">Welcome back, {username} 👋</span>
          <span className="text-purple-300 italic">{quote}</span>
        </div>
      </div>
    </header>
  );
}
