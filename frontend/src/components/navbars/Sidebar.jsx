import { useState } from 'react';
import {
  Play,
  BookOpen,
  Users,
  Star,
  Award,
  Inbox,
  MessageSquare,
  FileText,
  PlusCircle,
  User
} from 'lucide-react';

export default function Sidebar({ setActiveSection }) {
  const [active, setActive] = useState('flashes');

  const handleNavClick = (section) => {
    setActive(section);
    setActiveSection(section);
  };

  const navItems = [
    { icon: Play, label: 'Flashes', key: 'flashes' },
    { icon: FileText, label: 'Infos', key: 'infos' },
    { icon: BookOpen, label: 'Courses', key: 'courses' },
    { icon: Users, label: 'Like-Minded', key: 'people' },
    { icon: MessageSquare, label: 'Messages', key: 'messages' },
    { icon: Star, label: 'Rewards', key: 'rewards' },
    { icon: Award, label: 'Leaderboard', key: 'leaderboard' },
    { icon: Inbox, label: 'Inbox', key: 'inbox' },
    { icon: PlusCircle, label: 'Post', key: 'post' },
    { icon: User, label: 'Profile', key: 'profile' },
  ];

  return (
    <aside className="w-full md:w-60 bg-[#2b0050] h-auto md:h-screen flex md:flex-col overflow-x-auto md:overflow-y-auto shadow-neumorphic p-2 space-y-2">
      <div className="text-xl font-bold text-white px-4 py-3 mb-2 border-b border-white/10">
        <span className="tracking-wide">MyApp</span>
      </div>
      {navItems.map(({ icon: Icon, label, key }) => (
        <div key={key} className="group relative flex items-center">
          <button
            onClick={() => handleNavClick(key)}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 w-full ${
              active === key ? 'bg-[#3d0070] shadow-inner' : 'hover:bg-[#3d0070]/70'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="hidden md:inline">{label}</span>
          </button>
          {/* Tooltip for small screens */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 md:hidden whitespace-nowrap">
            {label}
          </span>
        </div>
      ))}
    </aside>
  );
}