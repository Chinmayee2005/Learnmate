import React, { useState } from 'react';
import { Menu, X, BookOpen, User, Bell, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LearnMate</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Courses</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">My Learning</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Browse</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Community</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64 transition-all"
              />
            </div>
            <Bell className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">My Learning</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Browse</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Community</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;