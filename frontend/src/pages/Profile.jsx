import { useState, useEffect } from 'react';
import { User, Settings, Bell, Shield, HelpCircle, LogOut, Camera, Edit, Coins, Trophy, Target } from 'lucide-react';
import Container from '../components/Layout/Container';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import Input from '../components/Shared/Input';
import Avatar from '../components/Shared/Avatar';
import Badge from '../components/Shared/Badge';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    bio: 'Passionate learner exploring the world of technology and design.',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    github: 'alexjohnson',
    linkedin: 'alex-johnson'
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    courseReminders: true,
    weeklyDigest: false,
    darkMode: false,
    language: 'en'
  });

  const [selectedInterests, setSelectedInterests] = useState([
    'Web Development', 'UI/UX Design', 'Data Science', 'Mobile Development'
  ]);

  useEffect(() => {
    try {
      trackComponentMount('Profile');
      debugLog('Profile', { 
        activeTab,
        formDataKeys: Object.keys(formData),
        selectedInterestsCount: selectedInterests.length
      });
    } catch (error) {
      trackError('Profile', error);
    }
  }, [activeTab, formData, selectedInterests]);

  const sidebarItems = [
    { id: 'personal', icon: User, label: 'Personal Info' },
    { id: 'preferences', icon: Settings, label: 'Preferences' },
    { id: 'interests', icon: Target, label: 'Interests' },
    { id: 'gamification', icon: Trophy, label: 'Achievements' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support' }
  ];

  const availableInterests = [
    'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
    'UI/UX Design', 'DevOps', 'Cloud Computing', 'Cybersecurity',
    'Blockchain', 'Artificial Intelligence', 'Game Development', 'Digital Marketing'
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Course Complete',
      description: 'Completed your first course on the platform',
      earned: true,
      date: '2024-01-15',
      points: 100
    },
    {
      id: 2,
      title: 'Week Warrior',
      description: 'Learned for 7 consecutive days',
      earned: true,
      date: '2024-01-22',
      points: 200
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Completed 10 courses',
      earned: true,
      date: '2024-02-10',
      points: 500
    },
    {
      id: 4,
      title: 'Master Learner',
      description: 'Completed 25 courses',
      earned: false,
      progress: 48,
      points: 1000
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    debugLog('Profile', { action: 'Input changed', field: name, value });
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
    debugLog('Profile', { action: 'Preference changed', field: name, checked });
  };

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => {
      const newInterests = prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest];
      debugLog('Profile', { action: 'Interest toggled', interest, newCount: newInterests.length });
      return newInterests;
    });
  };

  const renderContent = () => {
    debugLog('Profile', { action: 'Rendering content', activeTab });
    
    switch (activeTab) {
      case 'personal':
        return (
          <Card className="p-8">
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <Avatar size="xl" />
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Alex Johnson</h2>
                <p className="text-gray-600">Member since January 2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Coins className="text-yellow-500" size={16} />
                    <span className="text-sm font-medium">2,450 points</span>
                  </div>
                  <Badge variant="primary">Pro Learner</Badge>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <Input
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                helperText="Tell others about yourself and your learning goals"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <Input
                  label="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="GitHub Username"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                />
                <Input
                  label="LinkedIn Username"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex space-x-4">
                <Button type="submit">Save Changes</Button>
                <Button variant="secondary">Cancel</Button>
              </div>
            </form>
          </Card>
        );

      case 'interests':
        return (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Interests</h2>
            <p className="text-gray-600 mb-6">
              Select topics you're interested in to get personalized course recommendations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableInterests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedInterests.includes(interest)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>

            <div className="flex space-x-4 mt-8">
              <Button>Save Interests</Button>
              <Button variant="secondary">Reset</Button>
            </div>
          </Card>
        );

      case 'gamification':
        return (
          <Card className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Achievements & Progress</h2>
                <p className="text-gray-600">Track your learning milestones and earn rewards</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-2">
                  <Coins className="text-yellow-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">2,450</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`p-6 ${achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <Trophy className={achievement.earned ? 'text-green-600' : 'text-gray-400'} size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                      
                      {achievement.earned ? (
                        <div className="flex items-center justify-between">
                          <Badge variant="success" size="sm">Earned</Badge>
                          <span className="text-sm font-medium text-green-600">+{achievement.points} points</span>
                        </div>
                      ) : (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-900 font-medium">{achievement.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        );

      default:
        return (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {sidebarItems.find(item => item.id === activeTab)?.label}
            </h2>
            <p className="text-gray-600">This section is coming soon. We're working on adding more features to enhance your learning experience.</p>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      debugLog('Profile', { action: 'Tab changed', newTab: item.id });
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                
                <hr className="my-4" />
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut size={18} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;