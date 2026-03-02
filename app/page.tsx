"use client";

import { useState } from "react";

export default function ShoLucEducation() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>ShoLuc Education</h1>
      <h2>Premium Academic Support for Grades 8–12</h2>

      <h3>Pricing</h3>
      <ul>
        <li>Online One-on-One – R350/hr</li>
        <li>Small Group Online (2–5 students) – R200/hr per student</li>
        <li>In-Person One-on-One – R450/hr</li>
        <li>Small Group In-Person – R250/hr per student</li>
        <li>School Package (15+ students) – R50/hr per student</li>
        <li>Exam Preparation Workshops – Custom Quote</li>
      </ul>

      <h3>Request a Quotation</h3>

      <form onSubmit={handleSubmit}>
        <input name="parent" placeholder="Parent Name" required /><br /><br />
        <input name="student" placeholder="Student Name" required /><br /><br />
        <input name="grade" placeholder="Grade" required /><br /><br />
        <input name="subject" placeholder="Subject" required /><br /><br />
        <input name="session" placeholder="Session Type" required /><br /><br />
        <input name="frequency" placeholder="Sessions Per Week" required /><br /><br />
        <input name="contact" placeholder="Contact Number" required /><br /><br />
        <input name="email" placeholder="Email Address" required /><br /><br />
        <textarea name="notes" placeholder="Additional Notes" /><br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {success && (
          <p style={{ color: "green" }}>
            Your request has been submitted successfully.
          </p>
        )}
      </form>
    </div>
  );
}