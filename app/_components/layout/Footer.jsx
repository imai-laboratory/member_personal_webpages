export default function Footer({ email }) {
  return (
    <footer className="flex flex-col gap-4 bg-gray-800 p-6 text-white text-center">
      <p className="text-lg">
        <strong>Contact:</strong> {email}
      </p>
      <p className="text-sm">&copy; 2024 Imai Lab</p>
    </footer>
  );
}
