import { useEffect } from 'react';
import { Play, Clock, BookOpen, Users, Star, ArrowRight, TrendingUp, Award, Zap } from 'lucide-react';
import Container from '../components/Layout/Container';
import Card from '../components/Shared/Card';
import Badge from '../components/Shared/Badge';
import Button from '../components/Shared/Button';
import Avatar from '../components/Shared/Avatar';

const Dashboard = () => {
  useEffect(() => {
    try {
      trackComponentMount('Dashboard');
      debugLog('Dashboard', { message: 'Component initialized' });
    } catch (error) {
      trackError('Dashboard', error);
    }
  }, []);

  const recommendedCourses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      instructor: 'Sarah Chen',
      duration: '4h 30m',
      progress: 65,
      thumbnail: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Rodriguez',
      duration: '6h 15m',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Node.js & Express Mastery',
      instructor: 'Emily Davis',
      duration: '8h 45m',
      progress: 30,
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      instructor: 'Alex Kumar',
      duration: '12h 20m',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Advanced'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Lisa Park',
      duration: '10h 30m',
      progress: 15,
      thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Intermediate'
    },
    {
      id: 6,
      title: 'Cloud Computing Basics',
      instructor: 'John Wright',
      duration: '5h 45m',
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    }
  ];

  const learningNetwork = [
    {
      id: 1,
      name: 'Tech Innovators',
      members: 1200,
      activity: 'High',
      description: 'Connect with fellow developers and share insights'
    },
    {
      id: 2,
      name: 'Design Thinkers',
      members: 800,
      activity: 'Medium',
      description: 'Creative minds discussing the latest design trends'
    },
    {
      id: 3,
      name: 'Data Scientists',
      members: 950,
      activity: 'High',
      description: 'Analyze data, share findings, and collaborate'
    },
    {
      id: 4,
      name: 'Career Growth',
      members: 1500,
      activity: 'Very High',
      description: 'Professional development and networking'
    }
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      students: 45000,
      rating: 4.8,
      price: '$89'
    },
    {
      id: 2,
      title: 'Machine Learning A-Z',
      students: 38000,
      rating: 4.9,
      price: '$129'
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      students: 32000,
      rating: 4.7,
      price: '$79'
    }
  ];

  const achievements = [
    { icon: Zap, title: 'Quick Learner', description: 'Completed 5 courses in a month' },
    { icon: Award, title: 'Top Performer', description: 'Scored 95%+ on 10 assessments' },
    { icon: Users, title: 'Community Star', description: 'Helped 50+ fellow learners' }
  ];

  debugLog('Dashboard', { 
    coursesCount: recommendedCourses.length,
    networkCount: learningNetwork.length,
    popularCoursesCount: popularCourses.length,
    achievementsCount: achievements.length
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Courses Completed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Learning Hours</p>
                <p className="text-2xl font-bold text-gray-900">84</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="text-green-600" size={24} />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Skill Points</p>
                <p className="text-2xl font-bold text-gray-900">2,450</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Streak Days</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="text-orange-600" size={24} />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recommended Content */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedCourses.slice(0, 6).map((course) => (
                  <Card key={course.id} hover className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          debugLog('Dashboard', { error: 'Image failed to load', src: course.thumbnail });
                          e.target.src = 'https://via.placeholder.com/400x225/e5e7eb/6b7280?text=Course+Image';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="sm">
                          <Play size={16} className="mr-2" />
                          {course.progress > 0 ? 'Continue' : 'Start Course'}
                        </Button>
                      </div>
                      <Badge
                        variant={course.level === 'Beginner' ? 'success' : course.level === 'Intermediate' ? 'warning' : 'error'}
                        className="absolute top-3 left-3"
                      >
                        {course.level}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          {course.duration}
                        </div>
                      </div>
                      
                      {course.progress > 0 && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900 font-medium">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Popular Courses */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular This Week</h2>
                <Button variant="ghost" size="sm">
                  View All <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {popularCourses.map((course) => (
                  <Card key={course.id} className="p-6 min-w-80 flex-shrink-0" hover>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Learning Network */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Network</h2>
              <div className="space-y-4">
                {learningNetwork.map((network) => (
                  <Card key={network.id} className="p-6" hover>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{network.name}</h3>
                      <Badge
                        variant={network.activity === 'Very High' ? 'success' : network.activity === 'High' ? 'primary' : 'default'}
                        size="sm"
                      >
                        {network.activity}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{network.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users size={14} className="mr-1" />
                        {network.members} members
                      </div>
                      <Button variant="ghost" size="sm">Join</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="text-yellow-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        <p className="text-gray-600 text-xs">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;