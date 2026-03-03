"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    await fetch("/api/quotation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSuccess(true);
    form.reset();
    setLoading(false);
  };

  const generateWhatsAppMessage = (form: HTMLFormElement) => {
    const formData = Object.fromEntries(new FormData(form));
    const message = `
ShoLuc Education Enquiry

Applicant Type: ${formData.applicant}
Name: ${formData.name}
Organisation: ${formData.organisation || "N/A"}
Subjects: ${formData.subjects}
Session Type: ${formData.session}
Notes: ${formData.notes || "None"}
    `;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/27711113547?text=${encoded}`, "_blank");
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
          Request Academic Quotation
        </a>
      </section>

      {/* QUOTATION SECTION */}
      <section id="quotation" className="bg-[#EAF2FF] py-24 px-6 text-[#0B1C2D]">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Institutional & Private Academic Quotation Request
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6"
        >

          {/* Applicant Type */}
          <div>
            <label className="font-bold block mb-2">Applicant Type</label>
            <select name="applicant" required className="w-full p-3 rounded border">
              <option value="">Select</option>
              <option>Parent</option>
              <option>School</option>
              <option>NPO</option>
              <option>NGO</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="font-bold block mb-2">Full Name</label>
            <input name="name" required className="w-full p-3 rounded border" />
          </div>

          {/* Organisation */}
          <div>
            <label className="font-bold block mb-2">
              School / Organisation Name (if applicable)
            </label>
            <input name="organisation" className="w-full p-3 rounded border" />
          </div>

          {/* Role */}
          <div>
            <label className="font-bold block mb-2">
              Role (For School / NGO Applicants)
            </label>
            <select name="role" className="w-full p-3 rounded border">
              <option value="">Select (if applicable)</option>
              <option>Principal</option>
              <option>HOD</option>
              <option>Teacher</option>
              <option>Programme Coordinator</option>
            </select>
          </div>

          {/* Subjects Multi-Select */}
          <div>
            <label className="font-bold block mb-2">
              Subjects Required (Multiple Selection Allowed)
            </label>
            <select
              name="subjects"
              multiple
              required
              className="w-full p-3 rounded border h-40"
            >
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Grade Selector */}
          <div>
            <label className="font-bold block mb-2">Grade</label>
            <select name="grade" required className="w-full p-3 rounded border">
              <option value="">Select Grade</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
              <option>Mixed Grades / Large Group</option>
            </select>
          </div>

          {/* Session Type */}
          <div>
            <label className="font-bold block mb-2">Session Type</label>
            <select name="session" required className="w-full p-3 rounded border">
              <option value="">Select</option>
              <option>One-on-One Online</option>
              <option>Small Group Online (2–5)</option>
              <option>In-Person One-on-One</option>
              <option>Small Group In-Person</option>
              <option>School Workshop / Intervention</option>
            </select>
          </div>

          {/* Frequency */}
          <div>
            <label className="font-bold block mb-2">Frequency</label>
            <select name="frequency" required className="w-full p-3 rounded border">
              <option value="">Select</option>
              <option>Once per week</option>
              <option>Twice per week</option>
              <option>3+ Sessions per week</option>
              <option>Intensive Exam Programme</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="font-bold block mb-2">Additional Notes</label>
            <textarea name="notes" className="w-full p-3 rounded border" />
          </div>

          {/* Buttons */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1C2D] text-white py-3 rounded font-semibold hover:bg-black transition"
          >
            {loading ? "Submitting..." : "Submit Quotation Request"}
          </button>

          <button
            type="button"
            onClick={(e) => generateWhatsAppMessage(e.currentTarget.form!)}
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Enquire via WhatsApp
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              Your request has been submitted successfully.
            </p>
          )}
        </form>
      </section>

      <footer className="bg-black py-10 text-center text-sm">
        © {new Date().getFullYear()} ShoLuc Education | Nationwide Academic Excellence
      </footer>

    </div>
  );
}