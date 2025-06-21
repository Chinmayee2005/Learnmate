import React, { useState } from 'react';
import { 
  Code, 
  Briefcase, 
  Palette, 
  Heart, 
  Globe, 
  Music, 
  Camera, 
  BookOpen,
  Star
} from 'lucide-react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('technology');

  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Programming, AI, Web Development, Data Science',
      courses: 1200,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-500',
      description: 'Entrepreneurship, Marketing, Finance, Leadership',
      courses: 800,
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'creative',
      name: 'Creative Arts',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Design, Photography, Digital Art, Animation',
      courses: 950,
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      description: 'Fitness, Nutrition, Mental Health, Yoga',
      courses: 600,
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'language',
      name: 'Languages',
      icon: Globe,
      color: 'from-purple-500 to-indigo-500',
      description: 'English, Spanish, French, Mandarin, Japanese',
      courses: 450,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'music',
      name: 'Music & Audio',
      icon: Music,
      color: 'from-yellow-500 to-amber-500',
      description: 'Instruments, Music Production, Audio Engineering',
      courses: 380,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ];

  const featuredCourses = {
    technology: [
      { 
        title: 'Complete React Development', 
        instructor: 'Sarah Johnson', 
        rating: 4.9, 
        students: '45K', 
        price: '$89',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Python for Data Science', 
        instructor: 'Dr. Michael Chen', 
        rating: 4.8, 
        students: '32K', 
        price: '$79',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'AI & Machine Learning', 
        instructor: 'Prof. Emily Davis', 
        rating: 4.9, 
        students: '28K', 
        price: '$129',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    business: [
      { 
        title: 'Digital Marketing Mastery', 
        instructor: 'Alex Rivera', 
        rating: 4.7, 
        students: '38K', 
        price: '$69',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Startup Fundamentals', 
        instructor: 'Lisa Thompson', 
        rating: 4.8, 
        students: '25K', 
        price: '$99',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Financial Planning Pro', 
        instructor: 'David Kim', 
        rating: 4.6, 
        students: '19K', 
        price: '$89',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    creative: [
      { 
        title: 'UI/UX Design Complete', 
        instructor: 'Emma Wilson', 
        rating: 4.9, 
        students: '42K', 
        price: '$109',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Digital Photography Pro', 
        instructor: 'James Martinez', 
        rating: 4.8, 
        students: '31K', 
        price: '$79',
        image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Graphic Design Mastery', 
        instructor: 'Sophie Brown', 
        rating: 4.7, 
        students: '29K', 
        price: '$89',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Learning Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from thousands of courses across different categories. 
            Each path is carefully curated to match your learning style and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${category.bgColor} rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  selectedCategory === category.id ? 'ring-4 ring-purple-500 shadow-xl scale-105' : ''
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {category.courses.toLocaleString()} courses
                  </div>
                  {selectedCategory === category.id && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.textColor} bg-white`}>
                      Selected
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {featuredCourses[selectedCategory] && (
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Popular {categories.find(c => c.id === selectedCategory)?.name} Courses
              </h3>
              <button className="text-purple-600 hover:text-purple-700 font-semibold">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses[selectedCategory].map((course, index) => (
                <div key={index} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-gray-900">{course.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-lg">
                      {course.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400 mr-2">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{course.students} students</span>
                    </div>
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

export default Categories;