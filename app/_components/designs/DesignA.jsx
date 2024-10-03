import {BaseLayout, Profile, Publications, Research, ResearchDemoCards} from "@/app/_components";

export default function DesignA({ profileData, researchData, publicationsData }) {
  const navItems = [
    { id: 'profile', title: 'プロフィール' },
    { id: 'research', title: '研究内容' },
    { id: 'demo', title: '研究紹介' },
    { id: 'publications', title: '研究業績' },
  ];

  return (
    <BaseLayout email={profileData.email} navItems={navItems}>
      <Profile
        profileData={profileData}
      />
      <Research
        contentData={researchData.contents}
      />
      <ResearchDemoCards
        researchDemos={researchData.demoUrls}
      />
      <Publications
        publications={publicationsData.publications}
      />
    </BaseLayout>
  );
}
