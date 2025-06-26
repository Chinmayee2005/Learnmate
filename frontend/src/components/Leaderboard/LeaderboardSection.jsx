const dummyLeaderboard = [
  { id: 1, name: 'Maya Singh', coins: 780, streak: 6 },
  { id: 2, name: 'Rohan Patel', coins: 640, streak: 4 },
  { id: 3, name: 'Zara Iqbal', coins: 590, streak: 5 },
];

export default function LeaderboardSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-purple-200">🏆 Leaderboard</h2>
      <div className="bg-[#2a004a] rounded-2xl p-4 shadow-inner shadow-[#ffffff15] divide-y divide-purple-800">
        {dummyLeaderboard.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center justify-between py-3 px-2 hover:bg-[#3a005f] rounded-xl transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="text-purple-300 font-bold text-lg w-6 text-center">{index + 1}</div>
              <div>
                <p className="text-white font-semibold">{user.name}</p>
                <p className="text-xs text-purple-400">🔥 {user.streak} day streak</p>
              </div>
            </div>
            <div className="text-yellow-300 font-semibold text-sm">🪙 {user.coins}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
