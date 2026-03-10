import Link from "next/link"

type Props = {
  title: string
  description: string
  file: string
}

export default function ResourceCard({ title, description, file }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

      <h3 className="text-xl font-semibold mb-2 text-[#0B1C2D]">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <Link
        href={`/files/${file}`}
        target="_blank"
        className="bg-[#0B1C2D] text-white px-4 py-2 rounded hover:bg-blue-900 transition"
      >
        Download PDF
      </Link>

    </div>
  )
}