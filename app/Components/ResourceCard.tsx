import Link from "next/link"

type ResourceCardProps = {
  title: string
  description: string
  file: string
}

export default function ResourceCard({
  title,
  description,
  file,
}: ResourceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-semibold mb-2 text-[#0B1C2D]">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <Link
        href={`/files/${file}`}
        target="_blank"
        className="inline-block bg-[#0B1C2D] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
      >
        Download PDF
      </Link>

    </div>
  )
}