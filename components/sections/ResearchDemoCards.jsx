import {BaseCard} from "@/components";

export default function ResearchDemoCards({ researchDemos }) {
  return (
    <section id="demo" className="flex flex-col gap-10 p-10 justify-center bg-customBlue">
      <h2 className="flex items-center text-3xl md:px-14 text-blue-500 font-semibold">研究紹介</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-stretch">
        {Object.entries(researchDemos)?.map(([key, researchDemo], index) => (
          <BaseCard
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
