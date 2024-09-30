import Link from "next/link";

export default function Publication({ publication }) {
  const details = [
    publication.book,
    publication.no,
    publication.page,
    publication.year,
  ]
    .filter(detail => detail)
    .join(', ');

  return (
    <div className="border-b border-gray-300 p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
      <p className="text-gray-700">
        {publication.authors.join(", ")}
      </p>
      <p className="text-gray-700">
        {details}
      </p>
      <Link
        href={publication.draft_pdf_url}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        [PDF]
      </Link>
    </div>
  );
}
