import ResourceSection from "@/components/ResourceSection"

export const metadata = {
  title: "Grade 9 Maths & Science Resources | ShoLuc Education",
  description:
    "Download Grade 9 Mathematics and Natural Sciences worksheets covering atomic structure, bonding and scientific notation.",
}

export default function Grade9Resources() {

  const mathsResources = [
    {
      title: "Exponents Worksheet",
      description: "Practice simplifying exponential expressions.",
      file: "grade9-exponents.pdf",
    },
    {
      title: "Scientific Notation Notes",
      description: "Learn how to convert numbers into scientific notation.",
      file: "grade9-scientific-notation.pdf",
    },
    {
      title: "Direct & Indirect Proportion",
      description: "Practice solving proportional relationships.",
      file: "grade9-proportion.pdf",
    },
  ]

  const scienceResources = [
    {
      title: "Atomic Structure Notes",
      description: "Bohr model and subatomic particles.",
      file: "grade9-atomic-structure.pdf",
    },
    {
      title: "Chemical Bonding Worksheet",
      description: "Ionic, covalent and metallic bonding exercises.",
      file: "grade9-bonding.pdf",
    },
    {
      title: "Periodic Table Summary",
      description: "Major groups and properties of elements.",
      file: "grade9-periodic-table.pdf",
    },
  ]

  const exams = [
    {
      title: "Grade 9 Maths Test",
      description: "Practice test covering exponents and scientific notation.",
      file: "grade9-maths-test.pdf",
    },
    {
      title: "Grade 9 Science Test",
      description: "Test covering atomic structure and bonding.",
      file: "grade9-science-test.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-[#0B1C2D]">
          Grade 9 Resources
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          Mathematics and Natural Sciences worksheets and notes designed for
          Grade 9 students studying exponents, atomic structure and bonding.
        </p>

        <ResourceSection
          title="Mathematics Resources"
          resources={mathsResources}
        />

        <ResourceSection
          title="Natural Sciences Resources"
          resources={scienceResources}
        />

        <ResourceSection
          title="Practice Tests"
          resources={exams}
        />

      </div>

    </div>
  )
}