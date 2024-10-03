import {Publication} from "@/app/_components";

export default function Publications({ publications }) {
  return (
    <section id="publications" className="flex flex-col gap-10 p-10 justify-center bg-white">
      <h2 className="flex items-center text-3xl md:px-14 font-semibold">研究業績</h2>
      <div className="px-2 md:px-20">
        {publications?.map((publication, index) => (
          <Publication key={index} publication={publication} />
        ))}
      </div>
    </section>
  );
}
