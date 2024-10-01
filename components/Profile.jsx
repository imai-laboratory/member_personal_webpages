import Image from "next/image";

export default function Profile({ profileData }) {
  return (
    <section className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${profileData.backgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center p-8 md:p-16 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 flex justify-center items-start md:items-center">
          <div className="relative rounded-full border-4 border-white overflow-hidden">
            <Image
              src={profileData.imageUrl}
              alt={profileData.name}
              width={240}
              height={240}
              priority={true}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-3xl font-bold">{profileData.name}</h1>
          <p className="text-lg text-gray-600">{profileData.grade}</p>
          <p className="flex gap-2"><strong>所属チーム:</strong>
            {profileData.teams?.map((team, index) => (
              <span key={index}>{team}</span>
            ))}
          </p>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl text-gray-600 hover:text-blue-500"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl text-gray-600 hover:text-blue-500"></i>
            </a>
          </div>

          <p className="text-gray-500">
            これは段落です。「テキストを編集」をクリックするか、ここをダブルクリックしてテキストを追加・編集してください。
            また、文字の色やフォントを変更することもできます。まずはサイトやあなた自身について書いてみましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
