import { DesignA } from "@/app/_components";
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const membersDir = path.join(process.cwd(), 'data/members');
  const memberNames = fs.readdirSync(membersDir);
  return memberNames.map((name) => ({
    name,
  }));
}

export async function generateMetadata({ params }) {
  const { name } = params;
  const memberData = require(`@/data/members/${name}/data.js`);

  return {
    title: `[Imai Lab]${memberData.profileData.name} Personal Webpage`,
    description: `[今井研]${memberData.profileData.name}個人ページ`,
    keywords: `${memberData.profileData.name}, Imai Lab, 今井研, Keio University, 慶應義塾大学`,
  };
}

export default function Page({ params }) {
  const { name } = params;
  const memberData = require(`@/data/members/${name}/data.js`);

  return (
    <DesignA
      profileData={memberData.profileData}
      researchData={memberData.researchData}
      publicationsData={memberData.publicationsData}
    />
  );
}
