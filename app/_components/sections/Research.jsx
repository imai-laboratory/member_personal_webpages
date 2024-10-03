import {Chip} from "@mui/material";

export default function Research({ contentData }) {
  return (
    <section id="research" className="flex flex-col md:flex-row items-center gap-6 p-10 md:p-20 bg-blue-50 rounded-md">
      <h2 className="w-full md:w-1/3 md:p-4 text-3xl text-gray-600 font-semibold">研究内容</h2>
      <div className="flex flex-col gap-2 w-full md:w-2/3 p-4 bg-white rounded-md">
        <span className="font-bold">キーワード</span>
        <div className="flex gap-2 flex-wrap mb-4">
          {contentData.keywords?.map((team, index) => (
            <Chip
              key={index}
              label={team}
              color="success"
              size="small"
            />
          ))}
        </div>
        <span>{contentData.description}</span>
      </div>
    </section>
  )
}
