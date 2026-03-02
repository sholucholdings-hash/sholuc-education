# sholuc-education
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

export default function ShoLucEducation() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
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
      console.error("Submission error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27711113547"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <MessageCircle size={24} />
      </a>

      {/* Header */}
      <header className="bg-[#0B1C2D] text-white py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-[#C6A34E] w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">ShoLuc Education</h1>
        </div>
        <div className="hidden md:flex gap-6 text-sm tracking-wide">
          <span>About</span>
          <span>Subjects</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0B1C2D] text-white py-28 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Premium Academic Support for Grades 8–12
        </motion.h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-slate-300">
          Elite, structured tutoring across all major subjects. Designed for measurable improvement, examination mastery, and academic distinction.
        </p>
        <Button className="bg-[#C6A34E] hover:bg-[#b8923f] text-black px-10 py-6 text-lg rounded-2xl shadow-xl">
          Request a Quotation
        </Button>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#0B1C2D]">About ShoLuc Education</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          ShoLuc Education is a premium academic tutoring institution committed to excellence. Our structured methodologies, diagnostic assessments, and examination-focused strategies ensure students gain confidence, conceptual mastery, and consistent academic growth. We offer both online and in-person sessions tailored to individual and group learning environments.
        </p>
      </section>

      {/* Pricing */}
      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0B1C2D]">Premium Pricing Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <Card className="rounded-3xl shadow-xl border border-slate-200">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">Online One-on-One</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">R350 / hr</p>
                <p className="text-slate-600">Premium personalised online academic support.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-xl border border-slate-200">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">Small Group Online</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">R200 / hr</p>
                <p className="text-slate-600">Per student (2–5 students). Structured collaborative learning.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-2xl border-2 border-[#C6A34E]">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">In-Person One-on-One</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">R450 / hr</p>
                <p className="text-slate-600">Private session at the student’s home.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-xl border border-slate-200">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">Small Group In-Person</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">R250 / hr</p>
                <p className="text-slate-600">Per student. Structured group academic support.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-xl border border-slate-200">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">School Package</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">R50 / hr</p>
                <p className="text-slate-600">Per student. Groups of 15+ students booked by a school.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-xl border border-slate-200">
              <CardContent className="p-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">Exam Preparation Workshops</h3>
                <p className="text-4xl font-bold text-[#C6A34E]">Custom Quote</p>
                <p className="text-slate-600">Comprehensive subject-specific workshops delivered in partnership with schools.</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Quotation Form */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0B1C2D]">Request a Confidential Quotation</h2>
        <Card className="rounded-3xl shadow-2xl">
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="parent" placeholder="Parent Name" required />
              <Input name="student" placeholder="Student Name" required />
              <Input name="grade" placeholder="Grade" required />
              <Input name="subject" placeholder="Subject" required />
              <Input name="session" placeholder="Session Type" required />
              <Input name="frequency" placeholder="Sessions Per Week" required />
              <Input name="contact" placeholder="Contact Number" required />
              <Input name="email" placeholder="Email Address" required />
              <Textarea name="notes" placeholder="Additional Notes" />

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-6 text-lg rounded-2xl bg-[#C6A34E] hover:bg-[#b8923f] text-black shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </Button>

              {success && (
                <p className="text-green-600 text-center font-medium">
                  Your request has been submitted successfully.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1C2D] text-white py-12 text-center">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} ShoLuc Education | Johannesburg | 071 111 3547 | sholucholdings@gmail.com
        </p>
      </footer>
    </div>
  );
}
