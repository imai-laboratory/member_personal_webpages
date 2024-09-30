import Publication from "@/components/Publication";

export default function Publications({ publications }) {
  return (
    <section className="p-4 bg-white rounded-md">
      <h2 className="text-xl font-semibold">研究業績</h2>
      <div className="p-6">
        {publications?.map((publication, index) => (
          <Publication key={index} publication={publication} />
        ))}
      </div>
    </section>
  );
}
