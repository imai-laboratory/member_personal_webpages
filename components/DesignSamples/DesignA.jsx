import Layout from "@/components/layout/Layout";
import { Profile, Publications, Research, ResearchDemoCards } from "@/components";

export default function DesignA({ profileData, researchData, publicationsData }) {
  return (
    <Layout title="Design A Page" description="Design A Description">
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
    </Layout>
  );
}
