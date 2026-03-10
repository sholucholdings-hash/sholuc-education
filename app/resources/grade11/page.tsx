import ResourceSection from "@/components/ResourceSection"

export const metadata = {
  title: "Grade 11 Maths & Science Resources | ShoLuc Education",
  description:
    "Download Grade 11 Mathematics and Physical Sciences worksheets, notes and past papers.",
}

export default function Grade11Resources() {

  const mathsResources = [
    {
      title: "Functions & Graphs Worksheet",
      description: "Practice sketching functions and transformations.",
      file: "grade11-functions.pdf",
    },
    {
      title: "Inequalities Practice",
      description: "Solve linear and quadratic inequalities.",
      file: "grade11-inequalities.pdf",
    },
    {
      title: "Trigonometric Identities",
      description: "Simplifying trig expressions and proofs.",
      file: "grade11-trig-identities.pdf",
    },
  ]

  const scienceResources = [
    {
      title: "Vectors Worksheet",
      description: "Vector addition, subtraction and magnitude.",
      file: "grade11-vectors.pdf",
    },
    {
      title: "Newton's Laws Notes",
      description: "Summary of forces and motion.",
      file: "grade11-newtons-laws.pdf",
    },
    {
      title: "Chemical Equilibrium",
      description: "Notes and exercises on equilibrium systems.",
      file: "grade11-equilibrium.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-[#0B1C2D]">
          Grade 11 Resources
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          Worksheets, exam preparation material and study notes for
          Grade 11 Mathematics and Physical Sciences.
        </p>

        <ResourceSection
          title="Mathematics Resources"
          resources={mathsResources}
        />

        <ResourceSection
          title="Physical Sciences Resources"
          resources={scienceResources}
        />

      </div>

    </div>
  )
}