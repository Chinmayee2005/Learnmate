import { useState } from 'react';
import {
  Play, BookOpen, Users, Star, Award,
  Inbox, MessageSquare, FileText, PlusCircle, User
} from 'lucide-react';

export default function Sidebar({ setActiveSection, activeSection }) {
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

  const renderNavItem = ({ icon: Icon, label, key }) => (
    <button
      key={key}
      onClick={() => setActiveSection(key)}
      className={`group relative flex items-center justify-center md:justify-start gap-2 p-3 md:px-4 md:py-2 rounded-xl text-sm transition-all duration-300 ${
        activeSection === key ? 'bg-[#3d0070] shadow-inner' : 'hover:bg-[#3d0070]/60'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline">{label}</span>

      {/* Tooltip for mobile */}
      <span className="absolute md:hidden bottom-full mb-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
        {label}
      </span>
    </button>
  );

  return (
    <>
      {/* Desktop Sidebar (left column) */}
      <div className="hidden md:flex flex-col bg-[#2b0050] p-3 pt-20 space-y-5 min-h-screen w-20 md:w-60 mt-30 shadow-lg">
        {navItems.map(renderNavItem)}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#2b0050] flex flex-wrap justify-around px-1 py-1 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.4)]">
        {navItems.map(renderNavItem)}
      </div>
    </>
  );
}
