import React from 'react';
import { ArrowRight, Play, Star, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-300">Trusted by 500K+ learners worldwide</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn What You 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                {' '}Love
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Discover personalized learning paths tailored to your interests and goals. 
              From coding to cooking, business to art - unlock your potential today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">10K+</div>
                <div className="text-sm text-gray-300">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">500K+</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Users className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-300 text-sm">Learn from industry professionals with years of experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 mt-8">
              <Award className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Certificates</h3>
              <p className="text-gray-300 text-sm">Earn recognized credentials to advance your career</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 -mt-4">
              <Play className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Interactive</h3>
              <p className="text-gray-300 text-sm">Hands-on projects and real-world applications</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 mt-4">
              <BookOpen className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Personalized</h3>
              <p className="text-gray-300 text-sm">AI-powered recommendations just for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;