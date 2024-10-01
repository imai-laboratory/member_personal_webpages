import Publication from "@/components/Publication";

export default function Publications({ publications }) {
  return (
    <section className="flex flex-col gap-10 p-10 justify-center bg-white">
      <h2 className="flex items-center text-3xl px-14 font-semibold">研究業績</h2>
      <div className="px-20">
        {publications?.map((publication, index) => (
          <Publication key={index} publication={publication} />
        ))}
      </div>
    </section>
  );
}
