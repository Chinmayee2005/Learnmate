import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Platform': ['Browse Courses', 'Find Instructors', 'Join Community', 'Mobile App', 'Enterprise Solutions'],
    'Support': ['Help Center', 'Contact Support', 'System Status', 'Give Feedback', 'Accessibility'],
    'Company': ['About LearnMate', 'Careers', 'Press Kit', 'Blog', 'Investors'],
    'Legal': ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security', 'Sitemap']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold">LearnMate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your future with personalized learning experiences. 
              Join millions of learners worldwide who trust LearnMate for their educational journey and career advancement.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>hello@learnmate.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 LearnMate. All rights reserved. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>for learners everywhere.</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full hover:bg-gray-800`}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;