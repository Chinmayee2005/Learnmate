export default function CourseCard({ course }) {
  return (
    <div className="bg-[#3d0070] rounded-xl shadow-neumorphic p-4 text-white hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-3"
        loading="lazy"
      />
      <h3 className="text-lg font-bold mb-1">{course.title}</h3>
      <p className="text-sm text-gray-300">{course.description}</p>
    </div>
  );
}