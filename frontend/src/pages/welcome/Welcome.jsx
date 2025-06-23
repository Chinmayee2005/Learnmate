import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Welcome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    else if (hour < 18) return "Good Afternoon!";
    else return "Good Evening!";
  };

  useEffect(() => {
    let interval;
    const img = new Image();
    img.src = "/welcome-bg.png";

    const handleLoaded = () => {
      clearInterval(interval);
      setIsLoading(false);
    };

    img.onload = handleLoaded;
    img.onerror = handleLoaded;

    interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 4));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = "Welcome | Discover Your Path";

    const cursor = document.createElement("div");
    cursor.className =
      "fixed top-0 left-0 w-6 h-6 border-2 border-fuchsia-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out";
    document.body.appendChild(cursor);

    const magneticElements = document.querySelectorAll(".magnet");

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };

    const applyMagnet = (e, el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetMagnet = (el) => {
      el.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("mousemove", moveCursor);

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => applyMagnet(e, el));
      el.addEventListener("mouseleave", () => resetMagnet(el));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", (e) => applyMagnet(e, el));
        el.removeEventListener("mouseleave", () => resetMagnet(el));
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-fuchsia-500 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-purple-600 rounded-full"></div>
        </div>
        <div className="text-white text-sm">Loading... {progress}%</div>
        <div className="w-64 h-2 bg-purple-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-cover bg-center overflow-hidden text-white"
      style={{ backgroundImage: "url('/Welcome-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#4c1d9510] via-[#5b21b610] to-[#2e106510] backdrop-blur-[0.5px] z-0" />
      <nav className="relative z-20 w-full flex items-center justify-between px-6 py-4 bg-[#2e1065] bg-opacity-100 shadow-md">
        <div className="text-xl font-bold text-purple-100">YourLogo</div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-purple-200" /> : <Menu className="w-6 h-6 text-purple-200" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4 text-sm font-medium items-center">
          <Link to="/signin" className="text-purple-100 hover:text-white transition">Sign In</Link>
          <Link to="/signup" className="text-purple-100 hover:text-white transition">Sign Up</Link>
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#2e1065]/90 backdrop-blur-md flex flex-col items-center gap-4 py-6 z-30 md:hidden">
          <Link to="/signin" className="text-purple-100 hover:text-white transition">Sign In</Link>
          <Link to="/signup" className="text-purple-100 hover:text-white transition">Sign Up</Link>
        </div>
      )}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[0.2px] z-10 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileHover={{ rotateX: 5, rotateY: 5 }}
          >
            Discover content that evolves with you
          </motion.h1>
          <motion.p
            className="text-purple-200 mt-4 max-w-xl text-lg drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Typewriter
              words={["Learn.", "Grow.", "Transform."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>
          <motion.p className="text-sm mt-4 italic text-purple-300 drop-shadow-sm">
            {getGreeting()} Start learning something new today.
          </motion.p>
          <motion.div
            className="mt-8 magnet"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <Link
              to="/signup"
              className="relative inline-block px-6 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-700 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_#a855f7] rounded-full text-lg font-semibold text-white"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-500 opacity-10" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
