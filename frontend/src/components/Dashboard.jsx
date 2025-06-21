import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Award, 
  BookOpen, 
  Target, 
  Calendar,
  CheckCircle,
  BarChart3,
  Play,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const currentCourses = [
    {
      title: 'Complete React Development',
      progress: 65,
      timeLeft: '4h 30m',
      nextLesson: 'State Management with Redux',
      category: 'Technology',
      color: 'bg-blue-500',
      instructor: 'Sarah Johnson'
    },
    {
      title: 'Digital Marketing Strategy',
      progress: 85,
      timeLeft: '2h 15m',
      nextLesson: 'Social Media Analytics Deep Dive',
      category: 'Business',
      color: 'bg-green-500',
      instructor: 'Alex Rivera'
    },
    {
      title: 'UI/UX Design Principles',
      progress: 40,
      timeLeft: '6h 45m',
      nextLesson: 'User Research and Testing Methods',
      category: 'Design',
      color: 'bg-pink-500',
      instructor: 'Emma Wilson'
    }
  ];

  const achievements = [
    { title: 'First Course Complete', icon: Award, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { title: '7 Day Learning Streak', icon: Calendar, color: 'text-green-500', bg: 'bg-green-50' },
    { title: 'Technology Expert', icon: Target, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Quick Learner Badge', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' }
  ];

  const weeklyStats = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 2.8 }
  ];

  const maxHours = Math.max(...weeklyStats.map(stat => stat.hours));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Learning Dashboard</h2>
          <p className="text-xl text-gray-600">Track your progress, celebrate achievements, and stay motivated on your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Total Study Hours</p>
                <p className="text-3xl font-bold">142</p>
                <p className="text-purple-200 text-xs mt-1">+12 this week</p>
              </div>
              <Clock className="h-8 w-8 text-purple-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Active Courses</p>
                <p className="text-3xl font-bold">12</p>
                <p className="text-blue-200 text-xs mt-1">3 in progress</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Completed Courses</p>
                <p className="text-3xl font-bold">8</p>
                <p className="text-green-200 text-xs mt-1">2 this month</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm font-medium">Certificates Earned</p>
                <p className="text-3xl font-bold">5</p>
                <p className="text-yellow-200 text-xs mt-1">1 pending</p>
              </div>
              <Award className="h-8 w-8 text-yellow-200" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Continue Learning</h3>
            <div className="space-y-6">
              {currentCourses.map((course, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">{course.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                      <p className="text-sm text-gray-700">Next: {course.nextLesson}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${course.color} shadow-sm`}>
                      {course.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Progress</span>
                      <span className="font-bold text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${course.color} transition-all duration-300`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.timeLeft} remaining
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center">
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Weekly Progress & Achievements</h3>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-gray-900">Study Hours This Week</h4>
                <BarChart3 className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-end justify-between h-32 mb-4">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg w-8 mb-2 transition-all duration-300 hover:from-purple-600 hover:to-purple-500"
                      style={{ height: `${(stat.hours / maxHours) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-600 font-medium">{stat.day}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Total: <span className="font-bold text-purple-600">18.9 hours</span></p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-6">Recent Achievements</h4>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className={`flex items-center p-4 ${achievement.bg} rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300`}>
                      <div className="flex-shrink-0">
                        <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div className="ml-4">
                        <span className="text-sm font-bold text-gray-900">{achievement.title}</span>
                        <p className="text-xs text-gray-600 mt-1">Earned 2 days ago</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;