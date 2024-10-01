import {ResearchDemoCard} from "@/components/index";

export default function ResearchDemoCards({ researchDemos }) {
  return (
    <section className="flex flex-col gap-10 p-10 justify-center bg-customGray">
      <h2 className="flex items-center text-3xl px-14 text-yellow-700 font-semibold">デモ動画</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-stretch">
        {Object.entries(researchDemos)?.map(([key, researchDemo], index) => (
          <ResearchDemoCard
            key={index}
            title={researchDemo.title}
            description={researchDemo.description}
            videoUrl={researchDemo.video}
            thumbnailUrl={researchDemo.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
