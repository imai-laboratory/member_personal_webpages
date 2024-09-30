import {ResearchDemoCard} from "@/components/index";

export default function ResearchDemoCards({ researchDemos }) {
  return (
    <section className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-stretch">
      {Object.entries(researchDemos).map(([key, researchDemo], index) => (
        <ResearchDemoCard
          key={index}
          title={researchDemo.title}
          description={researchDemo.description}
          videoUrl={researchDemo.video}
          thumbnailUrl={researchDemo.thumbnail}
        />
      ))}
    </section>
  );
}
