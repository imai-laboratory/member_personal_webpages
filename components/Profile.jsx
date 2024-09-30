import Image from "next/image";

export default function Profile({ profileData }) {
  return (
    <section className="flex flex-col gap-4 p-6 mt-4 max-w-sm mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
      <h2 className="text-xl font-semibold">プロフィール</h2>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-20 space-y-4 md:space-y-0">
        <Image
          src={profileData.imageUrl}
          alt={profileData.name}
          className="rounded-full object-cover"
          width={144}
          height={144}
          priority={true}
        />
        <div className="flex flex-col gap-2 text-lg">
          <p className="flex gap-2"><strong>名前:</strong> <span>{profileData.name}</span></p>
          <p className="flex gap-2"><strong>学年:</strong> <span>{profileData.grade}</span></p>
          <p className="flex gap-2"><strong>所属チーム:</strong>
            {profileData.teams.map((team, index) => (
              <span key={index}>{team}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
