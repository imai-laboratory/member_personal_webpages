import { DesignA } from "@/app/components";
// import先はそれぞれ異なるので注意
import { profileData, researchData, publicationsData } from "@/app/members/kenshin/data";

// メタデータ追加は自由ですが、SEO対策のために追加することをお勧めします。
export const metadata = {
  title: `[Imai Lab]${profileData.name} Personal Webpage`,
  description: `${profileData.name}の今井研個人ページです。`,
  keywords: `${profileData.name}, Imai Lab, 今井研, Keio University, 慶應義塾大学`,
}

export default function Page() {
  return (
    <DesignA
      profileData={profileData}
      researchData={researchData}
      publicationsData={publicationsData}
    />
  );
}
