export default function Publications({ publications }) {
  return (
    <section className="p-4 bg-white rounded-md">
      <h2 className="text-xl font-semibold">研究業績</h2>
      <ul className="list-decimal list-inside">
        {publications.map((publication, index) => (
          <li key={index}>{publication}</li>
        ))}
      </ul>
    </section>
  );
}
