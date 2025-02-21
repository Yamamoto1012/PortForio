import { Movie } from "./_features/Movie/Movie";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-[984px] absolute top-0 -z-10">
          <Movie />
        </div>
      </div>
    </>
  );
}
