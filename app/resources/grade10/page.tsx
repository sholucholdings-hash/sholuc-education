import ResourceSection from "@/components/ResourceSection"

export const metadata = {
  title: "Grade 10 Maths & Science Resources | ShoLuc Education",
  description:
    "Free Grade 10 Mathematics and Physical Sciences worksheets, notes and past exam papers.",
}

export default function Grade10Resources() {

  const mathsResources = [
    {
      title: "Algebra Worksheet",
      description: "Practice algebraic manipulation and factorisation.",
      file: "grade10-algebra.pdf",
    },
    {
      title: "Trigonometry Notes",
      description: "Summary of trigonometric ratios and identities.",
      file: "grade10-trigonometry-notes.pdf",
    },
    {
      title: "Functions Practice",
      description: "Exercises on linear and quadratic functions.",
      file: "grade10-functions.pdf",
    },
  ]

  const scienceResources = [
    {
      title: "Chemical Bonding Notes",
      description: "Introduction to ionic and covalent bonding.",
      file: "grade10-bonding.pdf",
    },
    {
      title: "Electronegativity Worksheet",
      description: "Practice determining polarity of molecules.",
      file: "grade10-electronegativity.pdf",
    },
    {
      title: "Stoichiometry Exercises",
      description: "Mole calculations and balancing equations.",
      file: "grade10-stoichiometry.pdf",
    },
  ]

  const examResources = [
    {
      title: "Grade 10 Mathematics Test",
      description: "Practice test with algebra and functions.",
      file: "grade10-maths-test.pdf",
    },
    {
      title: "Grade 10 Physical Sciences Test",
      description: "Practice exam for Chemistry fundamentals.",
      file: "grade10-science-test.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-[#0B1C2D]">
          Grade 10 Resources
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          Download free Grade 10 Mathematics and Physical Sciences worksheets,
          notes and exam papers designed for IEB and CAPS students.
        </p>

        <ResourceSection
          title="Mathematics Resources"
          resources={mathsResources}
        />

        <ResourceSection
          title="Physical Sciences Resources"
          resources={scienceResources}
        />

        <ResourceSection
          title="Practice Tests & Exam Papers"
          resources={examResources}
        />

      </div>

    </div>
  )
}