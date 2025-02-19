import { Movie } from "./_features/Movie/Movie";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-[984px]">
          <Movie />
        </div>
      </div>
    </>
  );
}
