import LikeMindedCard from './LikeMindedCard';

const dummyPeople = [
  {
    id: 1,
    name: 'Arjun Mehta',
    title: 'AI Enthusiast',
    avatar: 'https://i.pravatar.cc/150?img=3',
    interests: ['AI', 'Python', 'Neuroscience'],
  },
  {
    id: 2,
    name: 'Sara Kapoor',
    title: 'Web Developer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    interests: ['React', 'UI Design', 'CSS Tricks'],
  },
  {
    id: 3,
    name: 'Ravi Singh',
    title: 'Blockchain Learner',
    avatar: 'https://i.pravatar.cc/150?img=6',
    interests: ['Solidity', 'NFTs', 'Smart Contracts'],
  },
];

export default function LikeMindedSection() {
  return (
    <section className="bg-[#2b0050] p-4 rounded-2xl shadow-neumorphic">
      <h2 className="text-xl font-semibold mb-4">Like-Minded Suggestions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyPeople.map(person => (
          <LikeMindedCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
