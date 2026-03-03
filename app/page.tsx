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
          Founded by <strong>Lucky Shongwe</strong>, an experienced educator and academic strategist,
          ShoLuc Education is built on structured methodology, diagnostic assessment,
          and examination-focused mastery. Our systems are designed to cultivate
          confidence, independence, and measurable academic distinction.
        </p>
      </section>

      {/* Subjects Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Subjects Offered
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-lg">
          <div>Mathematics</div>
          <div>Physical Sciences</div>
          <div>Life Sciences</div>
          <div>Accounting</div>
          <div>English</div>
          <div>Afrikaans</div>
          <div>IsiZulu</div>
          <div>Geography</div>
          <div>Business Studies</div>
          <div>Economics</div>
          <div>History</div>
          <div>Exam Preparation Workshops</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F8F6F1] text-[#0B1C2D] py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Premium Academic Packages
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl">Online One-on-One</h3>
            <p>R350 / hour</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Small Group Online (2–5)</h3>
            <p>R200 / hour per student</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">In-Person One-on-One</h3>
            <p>R450 / hour</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Small Group In-Person</h3>
            <p>R250 / hour per student</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">School Package (15+)</h3>
            <p>R50 / hour per student</p>
          </div>
        </div>
      </section>

      {/* Quotation Form */}
      <section id="quotation" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Request a Confidential Quotation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-4"
        >
          <input name="parent" placeholder="Parent Name" required className="w-full p-3 rounded text-black" />
          <input name="student" placeholder="Student Name" required className="w-full p-3 rounded text-black" />
          <input name="grade" placeholder="Grade" required className="w-full p-3 rounded text-black" />
          <input name="subject" placeholder="Subject" required className="w-full p-3 rounded text-black" />
          <input name="session" placeholder="Session Type" required className="w-full p-3 rounded text-black" />
          <input name="frequency" placeholder="Sessions Per Week" required className="w-full p-3 rounded text-black" />
          <input name="contact" placeholder="Contact Number" required className="w-full p-3 rounded text-black" />
          <input name="email" placeholder="Email Address" required className="w-full p-3 rounded text-black" />
          <textarea name="notes" placeholder="Additional Notes" className="w-full p-3 rounded text-black" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C6A34E] text-black py-3 rounded font-semibold hover:bg-[#b8923f] transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

          {success && (
            <p className="text-green-400 mt-4">
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