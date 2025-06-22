import React from 'react';
import { Heart } from 'lucide-react';

const InterestSelector = ({ selectedInterests, maxInterests, onInterestsChange }) => {
  const interests = [
    'Technology', 'Sports', 'Music', 'Art', 'Travel', 'Food', 'Photography',
    'Reading', 'Gaming', 'Fitness', 'Movies', 'Fashion', 'Nature', 'Science',
    'Cooking', 'Dancing', 'Writing', 'Yoga', 'Business', 'Languages',
    'History', 'Architecture', 'Animals', 'Gardening', 'Crafts', 'Meditation',
    'Volunteering', 'Politics', 'Economics', 'Psychology'
  ];

  const handleInterestToggle = (interest) => {
    if (selectedInterests.includes(interest)) {
      onInterestsChange(selectedInterests.filter(i => i !== interest));
    } else if (selectedInterests.length < maxInterests) {
      onInterestsChange([...selectedInterests, interest]);
    }
  };

  return (
    <div>
      <div className="mb-4 text-center">
        <p className="text-sm text-gray-600">
          Selected: <span className="font-medium text-purple-600">{selectedInterests.length}</span> / {maxInterests}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {interests.map((interest) => {
          const isSelected = selectedInterests.includes(interest);
          const isDisabled = !isSelected && selectedInterests.length >= maxInterests;
          
          return (
            <button
              key={interest}
              type="button"
              onClick={() => handleInterestToggle(interest)}
              disabled={isDisabled}
              className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 ${
                isSelected
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : isDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-center space-x-1">
                {isSelected && <Heart className="w-3 h-3 fill-current" />}
                <span>{interest}</span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedInterests.length > 0 && (
        <div className="mt-6 p-4 bg-purple-50 rounded-xl">
          <p className="text-sm font-medium text-purple-800 mb-2">Selected Interests:</p>
          <div className="flex flex-wrap gap-2">
            {selectedInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterestSelector;