"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white font-sans">

      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ShoLuc Education
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Elite Academic Tutoring for Grades 8–12.
          Nationwide Online Excellence. Premium In-Person Support.
        </p>
        <a
          href="#quotation"
          className="bg-[#C6A34E] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#b8923f] transition"
        >
          Request a Confidential Quotation
        </a>
      </section>

      {/* Founder Section */}
      <section className="bg-white text-[#0B1C2D] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Founder & Academic Strategist
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Founded by <strong>Lucky Shongwe</strong>, ShoLuc Education
          operates on structured methodology, diagnostic assessment,
          and examination-focused mastery. We cultivate confidence,
          independence, and measurable academic distinction.
        </p>
      </section>

      {/* Session Types Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Academic Session Types
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-lg">
          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 text-[#C6A34E]">
              One-on-One Online
            </h3>
            <p>Personalised nationwide virtual tutoring.</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 text-[#C6A34E]">
              Small Group Online (2–5 Students)
            </h3>
            <p>Structured collaborative digital learning.</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 text-[#C6A34E]">
              In-Person One-on-One
            </h3>
            <p>Premium private tutoring at the student’s home.</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3 text-[#C6A34E]">
              Small Group In-Person
            </h3>
            <p>Focused group sessions for measurable progress.</p>
          </div>

          <div className="border border-gray-600 p-6 rounded-xl md:col-span-2">
            <h3 className="text-2xl font-bold mb-3 text-[#C6A34E]">
              School Packages & Exam Workshops
            </h3>
            <p>
              Large-group academic interventions, examination preparation
              programmes, and structured school partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section id="quotation" className="bg-[#EAF2FF] py-24 px-6 text-[#0B1C2D]">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Request a Confidential Academic Quotation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-5"
        >
          <h3 className="text-lg font-bold">Parent Information</h3>
          <input name="parent" placeholder="Parent Name" required className="w-full p-3 rounded border" />
          <input name="contact" placeholder="Contact Number" required className="w-full p-3 rounded border" />
          <input name="email" placeholder="Email Address" required className="w-full p-3 rounded border" />

          <h3 className="text-lg font-bold mt-6">Student Information</h3>
          <input name="student" placeholder="Student Name" required className="w-full p-3 rounded border" />
          <input name="grade" placeholder="Grade" required className="w-full p-3 rounded border" />
          <input name="subject" placeholder="Subject(s) Required" required className="w-full p-3 rounded border" />

          <h3 className="text-lg font-bold mt-6">Session Details</h3>
          <input name="session" placeholder="Preferred Session Type" required className="w-full p-3 rounded border" />
          <input name="frequency" placeholder="Sessions Per Week" required className="w-full p-3 rounded border" />
          <textarea name="notes" placeholder="Additional Notes" className="w-full p-3 rounded border" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1C2D] text-white py-3 rounded font-semibold hover:bg-black transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              Your request has been submitted successfully.
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-sm">
        © {new Date().getFullYear()} ShoLuc Education | Nationwide Academic Excellence
      </footer>

    </div>
  );
}