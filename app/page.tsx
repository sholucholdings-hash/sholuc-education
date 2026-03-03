"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [applicantType, setApplicantType] = useState("");

  const subjects = [
    "Mathematics",
    "Physical Sciences",
    "Life Sciences",
    "Accounting",
    "English",
    "Afrikaans",
    "IsiZulu",
    "Geography",
    "Business Studies",
    "Economics",
    "History",
    "Information Technology (IT)",
    "Computer Applications Technology (CAT)"
  ];

  const gradesList = [
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
    "Mixed Grades / Large Group"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const selectedSubjects = formData.getAll("subjects").join(", ");
    const selectedGrades = formData.getAll("grades").join(", ");

    const data = {
      applicant: formData.get("applicant"),
      name: formData.get("name"),
      contact: formData.get("contact"),
      email: formData.get("email"),
      organisation: formData.get("organisation"),
      role: formData.get("role"),
      grades: selectedGrades,
      session: formData.get("session"),
      frequency: formData.get("frequency"),
      subjects: selectedSubjects,
      notes: formData.get("notes"),
    };

    await fetch("/api/quotation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSuccess(true);
    form.reset();
    setLoading(false);
  };

  const handleWhatsApp = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const selectedSubjects = formData.getAll("subjects").join(", ");
    const selectedGrades = formData.getAll("grades").join(", ");

    const message = `
ShoLuc Education Enquiry

Applicant Type: ${formData.get("applicant")}
Name: ${formData.get("name")}
Contact: ${formData.get("contact")}
Email: ${formData.get("email")}
Organisation: ${formData.get("organisation") || "N/A"}
Role: ${formData.get("role") || "N/A"}
Grades: ${selectedGrades}
Subjects: ${selectedSubjects}
Session Type: ${formData.get("session")}
Frequency: ${formData.get("frequency")}
Notes: ${formData.get("notes") || "None"}
`;

    window.open(
      `https://wa.me/27711113547?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white font-sans">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ShoLuc Education
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Elite Academic Tutoring for Grades 8–12.
          Nationwide Online Excellence. Institutional Partnerships.
        </p>
        <a
          href="#quotation"
          className="bg-[#C6A34E] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#b8923f] transition"
        >
          Request a Confidential Quotation
        </a>
      </section>

      {/* FOUNDER */}
      <section className="bg-white text-[#0B1C2D] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-[#C6A34E]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Meet the Founder
            </h2>
            <p className="text-xl font-semibold mb-4 text-[#C6A34E]">
              Lucky Shongwe — Educator & Academic Strategist
            </p>
            <p className="text-lg leading-relaxed mb-4">
              ShoLuc Education was founded on structured excellence,
              measurable improvement, and academic mastery.
            </p>
            <p className="text-lg leading-relaxed">
              This is not remedial tutoring — it is strategic academic elevation.
            </p>
          </div>
        </div>
      </section>

      {/* TUTORS */}
      <section className="bg-[#F8F6F1] text-[#0B1C2D] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Our Tutors
          </h2>
          <p className="text-lg max-w-4xl mx-auto">
            Carefully selected, academically strong, examination-focused,
            and professionally trained within the ShoLuc framework.
          </p>
        </div>
      </section>

      {/* SESSION TYPES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Academic Session Types</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="border border-gray-600 p-6 rounded-xl">
            One-on-One Online
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            Small Group Online
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            In-Person One-on-One
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            Small Group In-Person
          </div>
        </div>
      </section>

      {/* SUBJECTS DISPLAY */}
      <section className="bg-[#111C2A] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Subjects Offered</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subjects.map((subject) => (
            <div key={subject} className="border border-gray-600 p-4 rounded-lg">
              {subject}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#111C2A] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            What Parents & Schools Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#0B1C2D] p-8 rounded-2xl">
              “Marks improved significantly.”
            </div>
            <div className="bg-[#0B1C2D] p-8 rounded-2xl">
              “Professional and structured.”
            </div>
            <div className="bg-[#0B1C2D] p-8 rounded-2xl">
              “Highly recommended.”
            </div>
            <div className="bg-[#0B1C2D] p-8 rounded-2xl">
              “Excellent academic support.”
            </div>
          </div>
        </div>
      </section>

      {/* QUOTATION FORM */}
      <section id="quotation" className="bg-[#EAF2FF] py-24 px-6 text-[#0B1C2D]">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Request a Quotation
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">

          <div>
            <label className="font-bold block mb-2">Full Name</label>
            <input name="name" required className="w-full p-3 rounded border" />
          </div>

          {/* PREMIUM GRADE CARDS */}
          <div>
            <label className="font-bold block mb-4">Grade(s)</label>
            <div className="grid md:grid-cols-3 gap-4">
              {gradesList.map((grade) => (
                <label key={grade} className="cursor-pointer">
                  <input type="checkbox" name="grades" value={grade} className="peer hidden"/>
                  <div className="p-4 rounded-xl border-2 border-gray-300
                                  peer-checked:border-[#C6A34E]
                                  peer-checked:bg-[#0B1C2D]
                                  peer-checked:text-white
                                  hover:border-[#C6A34E]
                                  transition">
                    {grade}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* PREMIUM SUBJECT CARDS */}
          <div>
            <label className="font-bold block mb-4">Subjects</label>
            <div className="grid md:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <label key={subject} className="cursor-pointer">
                  <input type="checkbox" name="subjects" value={subject} className="peer hidden"/>
                  <div className="p-4 rounded-xl border-2 border-gray-300
                                  peer-checked:border-[#C6A34E]
                                  peer-checked:bg-[#0B1C2D]
                                  peer-checked:text-white
                                  hover:border-[#C6A34E]
                                  transition">
                    {subject}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B1C2D] text-white py-3 rounded font-semibold hover:bg-black transition"
          >
            Submit Quotation Request
          </button>

        </form>
      </section>

      <footer className="bg-black py-10 text-center text-sm">
        © {new Date().getFullYear()} ShoLuc Education
      </footer>
    </div>
  );
}