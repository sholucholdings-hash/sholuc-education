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
    organisation: formData.get("organisation") || "N/A",
    role: formData.get("role") || "N/A",
    grades: selectedGrades,
    subjects: selectedSubjects,
    session: formData.get("session"),
    frequency: formData.get("frequency"),
    notes: formData.get("notes") || "None",
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
New Quotation Request

Applicant Type: ${formData.get("applicant")}

Name: ${formData.get("name")}

Contact Number: ${formData.get("contact")}

Email Address: ${formData.get("email")}

Organisation: ${formData.get("organisation") || "N/A"}

Role: ${formData.get("role") || "N/A"}

Grades: ${selectedGrades}

Subjects: ${selectedSubjects}

Session Type: ${formData.get("session")}

Frequency: ${formData.get("frequency")}

Additional Notes: ${formData.get("notes") || "None"}
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

      {/* FOUNDER SECTION - PREMIUM AUTHORITY */}
<section className="bg-white text-[#0B1C2D] py-28 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div className="flex justify-center">
      <img
        src="/founder.jpg"
        alt="Lucky Shongwe - Founder"
        className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-[#C6A34E]"
      />
    </div>

    <div>
      <h2 className="text-5xl font-extrabold mb-6 leading-tight">
        Academic Excellence<br/>Built on Structure & Results
      </h2>

      <p className="text-2xl font-semibold text-[#C6A34E] mb-6">
        Founded by Lucky Shongwe — Educator, Strategist, Results Specialist
      </p>

      <p className="text-lg leading-relaxed mb-6">
        ShoLuc Education was established to redefine tutoring from casual support
        to strategic academic advancement. With extensive classroom experience
        and curriculum expertise, Lucky Shongwe has developed a measurable,
        examination-focused framework aligned with CAPS and IEB standards.
      </p>

      <p className="text-lg leading-relaxed font-semibold">
        This is not homework assistance.  
        This is structured academic elevation.
      </p>
    </div>

  </div>
</section>

      {/* TUTORS SECTION - GOLD ACCENT SELLING CARDS */}
<section className="bg-[#F8F6F1] text-[#0B1C2D] py-28 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-5xl font-extrabold mb-16">
      Our Tutors
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
        <h3 className="text-2xl font-bold mb-6">
          Subject Masters
        </h3>
        <p className="text-lg leading-relaxed">
          Every tutor is academically strong and subject-specialised.
          Students are matched with tutors who possess depth,
          clarity, and proven subject mastery.
        </p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
        <h3 className="text-2xl font-bold mb-6">
          Examination-Focused
        </h3>
        <p className="text-lg leading-relaxed">
          Our tutors operate within the ShoLuc academic system —
          diagnostic assessment, structured lesson planning,
          and measurable academic improvement.
        </p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
        <h3 className="text-2xl font-bold mb-6">
          Professional & Disciplined
        </h3>
        <p className="text-lg leading-relaxed">
          Sessions are punctual, structured, and student-centred.
          We cultivate academic discipline, confidence, and independence.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* SESSION TYPES - PREMIUM GOLD CARDS */}
<section className="py-28 px-6 text-center">
  <h2 className="text-5xl font-extrabold mb-16">
    Academic Session Formats
  </h2>

  <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

    <div className="p-8 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
      <h3 className="text-2xl font-bold mb-4">
        One-on-One Online
      </h3>
      <p>
        Personalised nationwide virtual tutoring tailored
        to individual academic goals.
      </p>
    </div>

    <div className="p-8 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
      <h3 className="text-2xl font-bold mb-4">
        Small Group Online
      </h3>
      <p>
        Structured collaborative digital learning (2–5 students).
      </p>
    </div>

    <div className="p-8 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
      <h3 className="text-2xl font-bold mb-4">
        In-Person One-on-One
      </h3>
      <p>
        Premium private tutoring at the student’s home.
      </p>
    </div>

    <div className="p-8 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
      <h3 className="text-2xl font-bold mb-4">
        School Workshops
      </h3>
      <p>
        Examination preparation and subject intervention programmes.
      </p>
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

      {/* TESTIMONIALS – AUTHORITY & RESULTS */}
<section className="bg-[#111C2A] py-28 px-6 text-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-extrabold text-center mb-20">
      Transformational Results
    </h2>

    {/* APHIWE FEATURED TESTIMONIAL */}
    <div className="bg-[#0B1C2D] p-12 rounded-3xl shadow-2xl border-2 border-[#C6A34E] mb-20">
      <p className="text-2xl font-semibold text-[#C6A34E] mb-6">
        Aphiwokuhle Khuzwayo  
        <span className="block text-lg text-gray-300">
          Grade 10–12 | Former Southdowns College | University of Pretoria
        </span>
      </p>

      <p className="text-lg leading-relaxed mb-6">
        “A tutor teaches content. A mentor builds a person.  
        Mr Shongwe did both.”
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Under his guidance, Physics became the subject in which I achieved my first-ever 80%.
        But more than the mark, he refined my mentality. He sharpened my discipline,
        reshaped how I approached problems, and strengthened my belief in my own potential.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        He followed up after every test, held me accountable, and refused to let me settle
        for less than excellence. His mentorship extended beyond Physics — it shaped how
        I approach life and academic challenges today.
      </p>

      <p className="text-lg font-semibold">
        “He did not simply teach me Physics.  
        He strengthened my mindset.”
      </p>
    </div>

    {/* GRID TESTIMONIALS */}
    <div className="grid md:grid-cols-2 gap-12">

      <div className="bg-[#0B1C2D] p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
        <p className="text-xl font-semibold text-[#C6A34E] mb-4">
          Lilitha — Grade 10–12
        </p>
        <p className="leading-relaxed">
          “SHOLUC Education gave me the best experience. Online lessons twice a week
          and close contact with my teacher made all the difference. Mr Shongwe pushed
          me beyond what I believed I could achieve and built my self-confidence.
          He thrives for nothing but greatness.”
        </p>
      </div>

      <div className="bg-[#0B1C2D] p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E]">
        <p className="text-xl font-semibold text-[#C6A34E] mb-4">
          Oratile — Grade 11–12
        </p>
        <p className="leading-relaxed">
          “SHOLUC Education was truly a blessing to my academics.
          They strengthened my understanding of Physics, Mathematics,
          and English writing. Their guidance helped me improve my confidence
          and ultimately gain university admission for the degree I’ve always wanted.”
        </p>
      </div>

      <div className="bg-[#0B1C2D] p-10 rounded-2xl shadow-xl border-2 border-[#C6A34E] md:col-span-2">
        <p className="text-xl font-semibold text-[#C6A34E] mb-4">
          Principal — UJA School
        </p>
        <p className="leading-relaxed">
          “ShoLuc Education has demonstrated exceptional professionalism,
          structure, and measurable academic impact. Their examination preparation
          workshops were delivered with clarity, discipline, and strategic insight.
          We observed improved learner confidence and stronger performance across
          targeted subjects. We regard ShoLuc Education as a credible academic partner.”
        </p>
      </div>

    </div>

  </div>
</section>

      {/* QUOTATION FORM */}
<section id="quotation" className="bg-[#EAF2FF] py-24 px-6 text-[#0B1C2D]">
  <h2 className="text-4xl font-extrabold text-center mb-12">
    Institutional & Private Academic Quotation Request
  </h2>

  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">

    {/* Applicant Type */}
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

    {/* Name */}
    <div>
      <label className="font-bold block mb-2">Name</label>
      <input name="name" required className="w-full p-3 rounded border" />
    </div>

    {/* Contact */}
    <div>
      <label className="font-bold block mb-2">Contact Number</label>
      <input name="contact" required className="w-full p-3 rounded border" />
    </div>

    {/* Email */}
    <div>
      <label className="font-bold block mb-2">Email Address</label>
      <input type="email" name="email" required className="w-full p-3 rounded border" />
    </div>

    {/* Organisation & Role */}
    {(applicantType === "School" ||
      applicantType === "NPO" ||
      applicantType === "NGO") && (
      <>
        <div>
          <label className="font-bold block mb-2">Organisation</label>
          <input name="organisation" className="w-full p-3 rounded border" />
        </div>

        <div>
          <label className="font-bold block mb-2">Role</label>
          <select name="role" className="w-full p-3 rounded border">
            <option value="">Select</option>
            <option>Principal</option>
            <option>HOD</option>
            <option>Teacher</option>
            <option>Programme Coordinator</option>
          </select>
        </div>
      </>
    )}

    {/* Grades (Premium Cards) */}
    <div>
      <label className="font-bold block mb-4">Grades</label>
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

    {/* Subjects (Premium Cards) */}
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

    {/* Session */}
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

      <footer className="bg-black py-10 text-center text-sm">
        © {new Date().getFullYear()} ShoLuc Education
      </footer>
    </div>
  );
}