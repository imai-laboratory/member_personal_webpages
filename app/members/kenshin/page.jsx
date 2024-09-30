export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 p-4">
        <h1 className="text-white text-3xl font-bold">プロフィール</h1>
      </header>
      <main className="mt-6">
        <section className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
          <p>こんにちは、私はKenshinです。</p>
          <h3 className="text-xl font-semibold mt-6">プロジェクト</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>プロジェクト1: チャットアプリ</li>
            <li>プロジェクト2: eコマース</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-600 p-4 text-center text-white mt-12">
        <p>&copy; 2024 Imai Lab</p>
      </footer>
    </div>
  );
}
