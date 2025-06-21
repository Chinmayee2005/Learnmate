import React from 'react';
import { 
  Brain, 
  Users, 
  Trophy, 
  Smartphone, 
  Globe, 
  Zap,
  Target,
  BookOpen,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized course recommendations based on your learning style, progress, and career goals.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and thought leaders with real-world experience and proven track records.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Industry Certifications',
      description: 'Earn recognized certificates and digital badges that boost your career prospects and credibility.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'Study anywhere, anytime with our mobile-optimized platform that syncs across all your devices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners worldwide, join study groups, and share your learning journey with peers.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Micro-Learning',
      description: 'Master new skills with bite-sized lessons designed to fit into your busy schedule and maximize retention.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Active Learners', icon: Users },
    { number: '10K+', label: 'Expert Courses', icon: BookOpen },
    { number: '98%', label: 'Success Rate', icon: Target },
    { number: '50+', label: 'Languages', icon: Globe }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnMate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven learning methodologies 
            to deliver an exceptional educational experience that adapts to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Learners Worldwide</h3>
            <p className="text-lg text-gray-600">Join millions who have transformed their careers with LearnMate</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-purple-100 mb-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have advanced their careers and achieved their goals with LearnMate's personalized learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;