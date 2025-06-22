import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

const Welcome = () => {
  return(
    <div className="backdrop-blur-md bg-gradient-to-b from-blue-900 to-slate-900 flex flex-col min-h-screen justify-center items-center text-center">
      
        {/* White Dots Background - Additional */}
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-10 left-20 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-20 right-20 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-2.5 h-2.5 bg-white rounded-full top-45 right-40 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-3 h-3 bg-white rounded-full bottom-20 right-30 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-3.5 h-3.5 bg-white rounded-full top-20 left-80 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-10 right-60 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-2 h-2 bg-white rounded-full top-50 left-40 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-2.5 h-2.5 bg-white rounded-full bottom-40 left-20 opacity-40 blur-sm duration-300 animate-glowpulse" />
        <div className="absolute w-3 h-3 bg-white rounded-full top-40 left-30 opacity-40 blur-sm animate-glowpulse" />
        <div className="absolute w-3.5 h-3.5 bg-white rounded-full top-10 right-60 opacity-40 blur-sm animate-glowpulse" />

        <h1 className="md:text-9xl font-extrabold mb-4 text-white">
          LearnMate
        </h1>
        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-500">
          When every scroll takes you closer to your goals
        </p>
        <Link to="/signup" className="mt-8 px-6 py-3 bg-blue-900/30 text-white rounded-lg shadow-lg hover:bg-slate-900/50 hover:text-cyan-500 border border-cyan-500/30 shadow-md hover:shadow-blue-500/30 transition duration-300 flex items-center gap-2 z-index-10">
          <ArrowRight className="w-5 h-5" />
          start your journey
        </Link>
    </div>
  );
};

export default Welcome;