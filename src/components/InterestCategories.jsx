import React, { useState } from 'react';
import { 
  Code, 
  Briefcase, 
  Palette, 
  Heart, 
  Globe, 
  Music, 
  Camera, 
  Zap,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';

const InterestCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('technology');

  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Programming, AI, Web Development',
      courses: 1200,
      bgColor: 'bg-blue-50'
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-500',
      description: 'Entrepreneurship, Marketing, Finance',
      courses: 800,
      bgColor: 'bg-green-50'
    },
    {
      id: 'creative',
      name: 'Creative Arts',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Design, Photography, Digital Art',
      courses: 950,
      bgColor: 'bg-pink-50'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      description: 'Fitness, Nutrition, Mental Health',
      courses: 600,
      bgColor: 'bg-red-50'
    },
    {
      id: 'language',
      name: 'Languages',
      icon: Globe,
      color: 'from-purple-500 to-indigo-500',
      description: 'English, Spanish, Mandarin',
      courses: 450,
      bgColor: 'bg-purple-50'
    },
    {
      id: 'music',
      name: 'Music & Audio',
      icon: Music,
      color: 'from-yellow-500 to-amber-500',
      description: 'Instruments, Production, Theory',
      courses: 380,
      bgColor: 'bg-yellow-50'
    }
  ];

  const featuredCourses = {
    technology: [
      { title: 'React Complete Guide', instructor: 'John Doe', rating: 4.9, students: '45K', image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'Python for Beginners', instructor: 'Jane Smith', rating: 4.8, students: '32K', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'AI & Machine Learning', instructor: 'Dr. Wilson', rating: 4.9, students: '28K', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ],
    business: [
      { title: 'Digital Marketing Mastery', instructor: 'Sarah Johnson', rating: 4.7, students: '38K', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'Startup Fundamentals', instructor: 'Mike Chen', rating: 4.8, students: '25K', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'Financial Planning', instructor: 'Lisa Brown', rating: 4.6, students: '19K', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ],
    creative: [
      { title: 'UI/UX Design Principles', instructor: 'Alex Rivera', rating: 4.9, students: '42K', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'Digital Photography', instructor: 'Emma Taylor', rating: 4.8, students: '31K', image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { title: 'Graphic Design Mastery', instructor: 'David Kim', rating: 4.7, students: '29K', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Your Interests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from thousands of courses across different categories. 
            Each path is carefully curated to match your learning style and goals.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${category.bgColor} rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedCategory === category.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {category.courses.toLocaleString()} courses
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Courses for Selected Category */}
        {featuredCourses[selectedCategory] && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Popular {categories.find(c => c.id === selectedCategory)?.name} Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses[selectedCategory].map((course, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{course.students} students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InterestCategories;