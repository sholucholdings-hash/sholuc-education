import ResourceCard from "./ResourceCard"

type Resource = {
  title: string
  description: string
  file: string
}

type ResourceSectionProps = {
  title: string
  resources: Resource[]
}

export default function ResourceSection({
  title,
  resources,
}: ResourceSectionProps) {
  return (
    <section className="mb-16">

      <h2 className="text-3xl font-bold mb-6 text-[#0B1C2D]">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            file={resource.file}
          />
        ))}
      </div>

    </section>
  )
}