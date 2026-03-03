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
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const selectedSubjects = formData.getAll("subjects");

    const data = {
      applicant: formData.get("applicant"),
      name: formData.get("name"),
      organisation: formData.get("organisation"),
      role: formData.get("role"),
      grade: formData.get("grade"),
      session: formData.get("session"),
      frequency: formData.get("frequency"),
      subjects: selectedSubjects.join(", "),
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
Organisation: ${formData.get("organisation") || "N/A"}
Role: ${formData.get("role") || "N/A"}
Grade: ${formData.get("grade")}
Subjects: ${selectedSubjects}
Session Type: ${formData.get("session")}
Frequency: ${formData.get("frequency")}
Notes: ${formData.get("notes") || "None"}
`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/27711113547?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white font-sans">

      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          ShoLuc Education
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Elite Academic Tutoring | Nationwide Online Excellence | Institutional Partnerships
        </p>
      </section>

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
            <select
              name="applicant"
              required
              className="w-full p-3 rounded border"
              onChange={(e) => setApplicantType(e.target.value)}
            >
              <option value="">Select Applicant Type</option>
              <option value="Parent">Parent</option>
              <option value="School">School</option>
              <option value="NPO">NPO</option>
              <option value="NGO">NGO</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="font-bold block mb-2">Full Name</label>
            <input name="name" required className="w-full p-3 rounded border" />
          </div>

          {/* Organisation - Conditional */}
          {(applicantType === "School" || applicantType === "NPO" || applicantType === "NGO") && (
            <>
              <div>
                <label className="font-bold block mb-2">Organisation Name</label>
                <input name="organisation" required className="w-full p-3 rounded border" />
              </div>

              <div>
                <label className="font-bold block mb-2">Role</label>
                <select name="role" required className="w-full p-3 rounded border">
                  <option value="">Select Role</option>
                  <option>Principal</option>
                  <option>HOD</option>
                  <option>Teacher</option>
                  <option>Programme Coordinator</option>
                </select>
              </div>
            </>
          )}

          {/* Grade */}
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

          {/* Subjects Multi Select */}
          <div>
            <label className="font-bold block mb-2">
              Subjects Required (Hold Ctrl / Cmd to select multiple)
            </label>
            <select
              name="subjects"
              multiple
              required
              className="w-full p-3 rounded border h-40"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Session Type */}
          <div>
            <label className="font-bold block mb-2">Session Type</label>
            <select name="session" required className="w-full p-3 rounded border">
              <option value="">Select Session Type</option>
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
              <option value="">Select Frequency</option>
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