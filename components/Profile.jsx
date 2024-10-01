import Image from "next/image";

export default function Profile({ profileData }) {
  return (
    <section className="relative w-full h-full bg-cover bg-center"
             style={{backgroundImage: `url(${profileData.backgroundImage})`}}>
      <div className="absolute inset-0"></div>
      <div
        className="relative z-10 flex flex-col md:flex-row items-start md:items-center p-8 md:p-16 space-y-6 md:space-y-0 md:space-x-8">
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

          <div className="flex w-5 h-5 items-center space-x-4">
            {profileData.socialMediaLists?.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="text-2xl text-gray-600 hover:text-blue-500"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-500">
            {profileData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
