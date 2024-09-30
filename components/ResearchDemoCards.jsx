import {ResearchDemoCard} from "@/components/index";

export default function ResearchDemoCards({ researchDemos }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
