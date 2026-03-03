import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1️⃣ Email to YOU (Admin Notification)
    await resend.emails.send({
      from: "ShoLuc Education <onboarding@resend.dev>",
      to: "sholucholdings@gmail.com",
      subject: "New Quotation Request – ShoLuc Education",
      html: `
  <h2>New Quotation Request</h2>
  <p><strong>Applicant Type:</strong> ${data.applicant}</p>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Contact Number:</strong> ${data.contact}</p>
  <p><strong>Email Address:</strong> ${data.email}</p>
  <p><strong>Organisation:</strong> ${data.organisation || "N/A"}</p>
  <p><strong>Role:</strong> ${data.role || "N/A"}</p>
  <p><strong>Grade:</strong> ${data.grade}</p>
  <p><strong>Subjects:</strong> ${data.subjects}</p>
  <p><strong>Session Type:</strong> ${data.session}</p>
  <p><strong>Frequency:</strong> ${data.frequency}</p>
  <p><strong>Additional Notes:</strong> ${data.notes || "None"}</p>
`,
    });

    // 2️⃣ Auto-Response Email to CLIENT
    await resend.emails.send({
      from: "ShoLuc Education <onboarding@resend.dev>",
      to: data.email,
      subject: "ShoLuc Education – Quotation Request Received",
      html: `
        <h2>Thank You for Contacting ShoLuc Education</h2>
        <p>Dear ${data.name},</p>
        <p>
          We have received your quotation request and appreciate your interest in ShoLuc Education.
        </p>
        <p>
          Our academic team will review your submission and respond within 24 hours.
        </p>
        <p>
          If your enquiry is urgent, you may contact us directly via WhatsApp at 071 111 3547.
        </p>
        <br/>
        <p>Kind regards,</p>
        <p><strong>ShoLuc Education</strong></p>
        <p>Nationwide Academic Excellence</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}