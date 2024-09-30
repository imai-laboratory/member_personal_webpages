import {Publications, ResearchDemoCards} from "@/components/index";

export default function Research({ contentData, researchDemos, publicationsData }) {
  return (
    <section className="flex flex-col gap-6 p-6 bg-purple-50 rounded-md">
      <h2 className="text-xl font-semibold">研究内容</h2>
      <p className="p-4 bg-white rounded-md">
        {contentData.description}
      </p>
      <h2 className="text-xl font-semibold">デモ動画</h2>
      <ResearchDemoCards
        researchDemos={researchDemos}
      />
      <Publications
        publications={publicationsData.publications}
      />
    </section>
  )
}
