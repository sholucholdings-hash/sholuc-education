import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "ShoLuc Education | Premium Tutoring for Grades 8–12 | South Africa",
  description: "ShoLuc Education provides elite academic tutoring for Grades 8–12...",
  
   keywords: [
    "Maths tutor South Africa",
    "Physics tutor Grade 12",
    "Online tutoring South Africa",
    "Accounting tutor",
    "IEB tutoring",
    "CAPS tutoring",
    "Johannesburg tutoring",
    "Exam preparation workshops",
  ],

  verification: {
    google: "FxMGuDWIF3SfApj6rXTZWiR6XdeLFsdPT2NXWPRUARU",
  },

  openGraph: {
    title: "ShoLuc Education | Premium Academic Tutoring",
    description:
      "Structured, measurable academic advancement for Grades 8–12. Online and in-person support nationwide.",
    url: "https://sholuceducation.co.za",
    siteName: "ShoLuc Education",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0B1C2D]">
        <nav className="bg-[#0B1C2D] text-white px-6 py-4 flex justify-between items-center border-b border-gray-700">

<div className="font-bold text-xl">
ShoLuc Education
</div>

<div className="flex gap-6 text-sm">

<a href="/">Home</a>

<a href="/subjects">Subjects</a>

<a href="/programmes">Programmes</a>

<a href="/testimonials">Results</a>

<a href="/resources">Student Resources</a>

<a href="/contact">Contact</a>

</div>

</nav>
        {children}
      </body>
    </html>
  );
}