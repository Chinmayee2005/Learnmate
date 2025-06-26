// File: src/components/Content/FlashCard.jsx

export default function FlashCard({ flash }) {
  return (
    <div className="relative w-full max-w-md h-[60vh] rounded-2xl overflow-hidden shadow-neumorphic">
      <video
        key={flash.id}
        src={flash.videoUrl}
        className="w-full h-full object-cover"
        controls
      />
      <div className="absolute bottom-0 bg-black/50 w-full text-center p-2 text-white text-sm">
        {flash.title}: {flash.description}
      </div>
    </div>
  );
}
