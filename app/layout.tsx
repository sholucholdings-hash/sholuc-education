import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShoLuc Education | Premium Tutoring for Grades 8–12 | South Africa",
  description:
    "ShoLuc Education provides elite academic tutoring for Grades 8–12. Specialising in Mathematics, Physical Sciences, Accounting, English, IT and more. Online and in-person tutoring available nationwide.",
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
        {children}
      </body>
    </html>
  );
}