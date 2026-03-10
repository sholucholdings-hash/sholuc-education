import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ShoLuc Education | Premium Tutoring for Grades 8–12 | South Africa",
  description:
    "ShoLuc Education provides elite Mathematics, Physical Sciences and Accounting tutoring for Grades 8–12 students across South Africa.",
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
      "Structured, measurable academic advancement for Grades 8–12 students.",
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
      <body className="antialiased bg-[#0B1C2D] text-white">

        {/* NAVBAR */}

        <nav className="bg-[#0B1C2D] border-b border-gray-700">

          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="ShoLuc Education Logo"
                width={40}
                height={40}
              />

              <span className="font-bold text-xl">
                ShoLuc Education
              </span>

            </Link>

            {/* NAVIGATION */}

            <div className="flex gap-8 text-sm font-medium">

              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>

              <Link href="/subjects" className="hover:text-blue-400 transition">
                Subjects
              </Link>

              <Link href="/programmes" className="hover:text-blue-400 transition">
                Programmes
              </Link>

              <Link href="/testimonials" className="hover:text-blue-400 transition">
                Results
              </Link>

              <Link href="/resources" className="hover:text-blue-400 transition">
                Student Resources
              </Link>

              <Link
                href="/contact"
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Contact
              </Link>

            </div>

          </div>

        </nav>

        {/* PAGE CONTENT */}

        <main>{children}</main>

        {/* FOOTER */}

        <footer className="border-t border-gray-700 mt-20">

          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">

            <div>
              <h3 className="font-bold mb-2">ShoLuc Education</h3>
              <p className="text-gray-400">
                Premium academic tutoring for Grades 8–12 students in
                Mathematics, Physical Sciences and Accounting.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>

              <ul className="space-y-2 text-gray-400">

                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/subjects">Subjects</Link>
                </li>

                <li>
                  <Link href="/resources">Resources</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>

            </div>

            <div>
              <h3 className="font-bold mb-2">Contact</h3>

              <p className="text-gray-400">
                Email: sholucholdings@gmail.com
              </p>

              <p className="text-gray-400">
                Phone: 071 111 3547
              </p>

              <p className="text-gray-400">
                Johannesburg, South Africa
              </p>

            </div>

          </div>

          <div className="text-center text-gray-500 text-xs pb-6">
            © {new Date().getFullYear()} ShoLuc Education. All rights reserved.
          </div>

        </footer>

      </body>
    </html>
  );
}