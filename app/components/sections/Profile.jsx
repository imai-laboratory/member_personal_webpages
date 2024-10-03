import Image from "next/image";
import { SocialIcons } from "@/app/components";
import { Chip } from "@mui/material";

export default function Profile({ profileData }) {
  return (
    <section id="profile" className="relative w-full h-full bg-cover bg-center"
             style={{ backgroundImage: `url(${profileData.backgroundImage})` }}>
      <div className="absolute inset-0"></div>
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
x
        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg space-y-4">
          <h1 className="text-3xl font-bold">{profileData.name}</h1>
          <p className="text-lg text-gray-600">{profileData.grade}</p>
          <div className="flex gap-2 flex-wrap">
            <strong>所属チーム:</strong>
            {profileData.teams?.map((team, index) => (
              <Chip
                key={index}
                label={team}
                color="primary"
                size="small"
                variant="outlined"
              />
            ))}
          </div>

          <SocialIcons socialMediaLists={profileData.socialMediaLists} />

          <p className="text-gray-500">
            {profileData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
