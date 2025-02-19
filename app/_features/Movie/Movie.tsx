export const Movie = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[800px]">
      <video
        src="/kirakira.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};
