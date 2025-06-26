import CourseCard from './CourseCard';

const dummyCourses = [
  {
    id: 1,
    title: 'Mastering React in 7 Days',
    description: 'Build dynamic UIs with hooks and components.',
    image: 'https://source.unsplash.com/400x225/?react,code',
  },
  {
    id: 2,
    title: 'Intro to AI & ML',
    description: 'Get started with artificial intelligence and machine learning.',
    image: 'https://source.unsplash.com/400x225/?ai,technology',
  },
  {
    id: 3,
    title: 'UI/UX Design Basics',
    description: 'Learn the foundations of great digital product design.',
    image: 'https://source.unsplash.com/400x225/?ui,design',
  },
];

export default function CourseSection() {
  return (
    <section className="bg-[#2b0050] p-4 rounded-2xl shadow-neumorphic">
      <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}