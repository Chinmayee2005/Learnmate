import { Clock, ScrollText, BookOpenCheck, Flame } from 'lucide-react';

export default function RewardSection() {
  // Replace these with dynamic values later
  const coins = 420;
  const scrolls = 89;
  const timeSpent = '2h 15m';
  const completions = 3;
  const streak = 4; // Days

  return (
    <section className="bg-[#2a004a] rounded-2xl p-6 shadow-inner shadow-[#ffffff15] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
      <RewardCard icon={<Clock size={20} />} label="Time Spent" value={timeSpent} />
      <RewardCard icon={<ScrollText size={20} />} label="Scrolls" value={scrolls} />
      <RewardCard icon={<BookOpenCheck size={20} />} label="Courses Completed" value={completions} />
      <RewardCard icon={<Flame size={20} />} label="Streak" value={`${streak} Days`} />
      <RewardCard icon="🪙" label="Coins" value={coins} isEmoji />
    </section>
  );
}

function RewardCard({ icon, label, value, isEmoji }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#36005a] rounded-xl py-4 px-3 shadow-md shadow-purple-900 text-center hover:scale-105 transition-transform duration-200">
      <div className="mb-2 text-2xl">{isEmoji ? icon : <span className="text-purple-300">{icon}</span>}</div>
      <div className="text-white font-semibold">{value}</div>
      <div className="text-purple-200 text-xs">{label}</div>
    </div>
  );
}
