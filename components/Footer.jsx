export default function Footer({ email }) {
  return (
    <footer className="bg-gray-800 p-6 text-white text-center">
      <p><strong>Contact:</strong> {email}</p>
      <p>&copy; 2024 Imai Lab</p>
    </footer>
  );
}
