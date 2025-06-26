// File: src/components/Content/FlashCard.jsx

export default function FlashCard({ flash }) {
  return (
    <div>
      <div className="relative w-full max-w-md h-[60vh] rounded-2xl overflow-hidden shadow-neumorphic">
      <video
        key={flash.id}
        src={flash.videoUrl}
        className="w-full h-full object-cover"
        controls
      />
      </div>
      <div className="bg-black/50 w-full text-center p-2 text-white text-sm">
        <p>{flash.title}</p>
        <p>{flash.description}</p>
      </div>
    </div>
  );
}
