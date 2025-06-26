const dummyMessages = [
  {
    id: 1,
    name: 'Aarav Desai',
    message: 'Hey! Loved the course on Deep Work!',
    time: '2h ago',
  },
  {
    id: 2,
    name: 'Ishita Menon',
    message: 'Let’s connect and share resources?',
    time: '5h ago',
  },
  {
    id: 3,
    name: 'Karan Bhatia',
    message: 'Can you recommend productivity tools?',
    time: '1d ago',
  },
];

export default function InboxSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-purple-200">✉️ Inbox</h2>
      <div className="bg-[#2a004a] rounded-2xl p-4 shadow-inner shadow-[#ffffff15] divide-y divide-purple-800">
        {dummyMessages.map((msg) => (
          <div key={msg.id} className="py-3 px-2 hover:bg-[#3a005f] rounded-xl transition-all duration-200">
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">{msg.name}</p>
              <p className="text-xs text-purple-400">{msg.time}</p>
            </div>
            <p className="text-sm text-purple-200 mt-1 truncate">{msg.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
