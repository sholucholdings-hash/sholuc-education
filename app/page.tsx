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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const selectedSubjects = formData.getAll("subjects").join(", ");

    const data = {
      applicant: formData.get("applicant"),
      name: formData.get("name"),
      contact: formData.get("contact"),
      email: formData.get("email"),
      organisation: formData.get("organisation"),
      role: formData.get("role"),
      grade: formData.get("grade"),
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

    const message = `
ShoLuc Education Enquiry

Applicant Type: ${formData.get("applicant")}
Name: ${formData.get("name")}
Contact: ${formData.get("contact")}
Email: ${formData.get("email")}
Organisation: ${formData.get("organisation") || "N/A"}
Role: ${formData.get("role") || "N/A"}
Grade: ${formData.get("grade")}
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

        {/* CTA BUTTON */}
        <a
          href="#quotation"
          className="bg-[#C6A34E] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#b8923f] transition"
        >
          Request a Confidential Quotation
        </a>
      </section>

      {/* SESSION TYPES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Academic Session Types</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-lg">
          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-[#C6A34E] mb-3">
              One-on-One Online
            </h3>
            <p>Personalised nationwide virtual tutoring.</p>
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-[#C6A34E] mb-3">
              Small Group Online (2–5)
            </h3>
            <p>Collaborative structured digital learning.</p>
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-[#C6A34E] mb-3">
              In-Person One-on-One
            </h3>
            <p>Premium private tutoring at the student’s home.</p>
          </div>
          <div className="border border-gray-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-[#C6A34E] mb-3">
              Small Group In-Person
            </h3>
            <p>Focused group sessions for measurable progress.</p>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
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

      {/* QUOTATION FORM */}
      <section id="quotation" className="bg-[#EAF2FF] py-24 px-6 text-[#0B1C2D]">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Institutional & Private Academic Quotation Request
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">

          <div>
            <label className="font-bold block mb-2">Applicant Type</label>
            <select
              name="applicant"
              required
              onChange={(e) => setApplicantType(e.target.value)}
              className="w-full p-3 rounded border"
            >
              <option value="">Select</option>
              <option>Parent</option>
              <option>School</option>
              <option>NPO</option>
              <option>NGO</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">Full Name</label>
            <input name="name" required className="w-full p-3 rounded border" />
          </div>

          <div>
            <label className="font-bold block mb-2">Contact Number</label>
            <input name="contact" required className="w-full p-3 rounded border" />
          </div>

          <div>
            <label className="font-bold block mb-2">Email Address</label>
            <input name="email" type="email" required className="w-full p-3 rounded border" />
          </div>

          {(applicantType === "School" ||
            applicantType === "NPO" ||
            applicantType === "NGO") && (
            <>
              <div>
                <label className="font-bold block mb-2">Organisation Name</label>
                <input name="organisation" required className="w-full p-3 rounded border" />
              </div>

              <div>
                <label className="font-bold block mb-2">Role</label>
                <select name="role" required className="w-full p-3 rounded border">
                  <option value="">Select</option>
                  <option>Principal</option>
                  <option>HOD</option>
                  <option>Teacher</option>
                  <option>Programme Coordinator</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="font-bold block mb-2">Grade</label>
            <select name="grade" required className="w-full p-3 rounded border">
              <option value="">Select</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
              <option>Mixed Grades / Large Group</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">Subjects Required</label>
            <div className="grid md:grid-cols-2 gap-2">
              {subjects.map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" name="subjects" value={subject} />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>

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

          <div>
            <label className="font-bold block mb-2">Additional Notes</label>
            <textarea name="notes" className="w-full p-3 rounded border" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1C2D] text-white py-3 rounded font-semibold hover:bg-black transition"
          >
            {loading ? "Submitting..." : "Submit Quotation Request"}
          </button>

          <button
            type="button"
            onClick={(e) => handleWhatsApp(e.currentTarget.form!)}
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