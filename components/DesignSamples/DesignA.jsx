import BaseLayout from "@/components/layout/BaseLayout";
import { Profile, Publications, Research, ResearchDemoCards } from "@/components";

export default function DesignA({ profileData, researchData, publicationsData }) {
  return (
    <BaseLayout>
      <Profile
        id="profile"
        profileData={profileData}
      />
      <Research
        id="research"
        contentData={researchData.contents}
      />
      <ResearchDemoCards
        id="demo"
        researchDemos={researchData.demoUrls}
      />
      <Publications
        id="publications"
        publications={publicationsData.publications}
      />
    </BaseLayout>
  );
}
