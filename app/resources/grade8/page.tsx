import ResourceSection from "@/components/ResourceSection"

export const metadata = {
  title: "Grade 8 Science Resources | ShoLuc Education",
  description:
    "Free Grade 8 Natural Sciences worksheets, notes and practice tests covering matter, atoms and chemical reactions.",
}

export default function Grade8Resources() {

  const scienceResources = [
    {
      title: "Particle Model of Matter",
      description: "Notes explaining the particle model and states of matter.",
      file: "grade8-particle-model.pdf",
    },
    {
      title: "Density Worksheet",
      description: "Practice calculating density using mass and volume.",
      file: "grade8-density.pdf",
    },
    {
      title: "Chemical Reactions Notes",
      description: "Introduction to physical and chemical changes.",
      file: "grade8-chemical-reactions.pdf",
    },
  ]

  const labSkills = [
    {
      title: "Lab Equipment Guide",
      description: "Common laboratory equipment and their uses.",
      file: "grade8-lab-equipment.pdf",
    },
    {
      title: "Scientific Method Worksheet",
      description: "Practice identifying hypothesis, variables and conclusions.",
      file: "grade8-scientific-method.pdf",
    },
  ]

  const exams = [
    {
      title: "Grade 8 Natural Sciences Test",
      description: "Practice exam covering atoms, matter and density.",
      file: "grade8-test.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-[#0B1C2D]">
          Grade 8 Natural Sciences Resources
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          Free Grade 8 Natural Sciences worksheets, notes and exam preparation
          resources for students studying matter, atoms, density and chemical reactions.
        </p>

        <ResourceSection
          title="Natural Sciences Topics"
          resources={scienceResources}
        />

        <ResourceSection
          title="Scientific Skills"
          resources={labSkills}
        />

        <ResourceSection
          title="Practice Tests"
          resources={exams}
        />

      </div>
    </div>
  )
}