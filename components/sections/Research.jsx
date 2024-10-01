export default function Research({ contentData }) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 p-20 bg-blue-50 rounded-md">
      <h2 className="w-full md:w-1/2 p-4 text-3xl text-gray-600 font-semibold">研究内容</h2>
      <p className="w-full md:w-1/2 p-4 bg-white rounded-md">
        {contentData.description}
      </p>
    </section>
  )
}
