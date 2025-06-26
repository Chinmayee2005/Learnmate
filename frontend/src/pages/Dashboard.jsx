import { useState } from 'react';
import Sidebar from '../components/navbars/Sidebar';
import Topbar from '../components/navbars/Topbar';
import FlashSection from '../components/Content/FlashSection';
import InfoSection from '../components/Content/InfoSection';
import CourseSection from '../components/Courses/CourseSection';
import LikeMindedSection from '../components/People/LikeMindedSection';
import RewardSection from '../components/Rewards/RewardSection';
import LeaderboardSection from '../components/Leaderboard/LeaderboardSection';
import InboxSection from '../components/Inbox/InboxSection';
import MessagingSection from '../components/Messages/MessagingSection';
import PostSection from '../components/Post/PostSection';
import ProfileSection from '../pages/profile/profile';

const sections = {
  flashes: <FlashSection />,
  infos: <InfoSection />,
  courses: <CourseSection />,
  people: <LikeMindedSection />,
  rewards: <RewardSection />,
  leaderboard: <LeaderboardSection />,
  inbox: <InboxSection />,
  messages: <MessagingSection />,
  post: <PostSection />,
  profile: <ProfileSection />,
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('flashes');

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-[#1f0036] to-[#3d0066] text-white">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      
      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />
        
        {/* Active Section */}
        <main className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent">
          {sections[activeSection]}
        </main>
      </div>
    </div>
  );
}
