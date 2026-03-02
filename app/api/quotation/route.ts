import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("Sending email via Resend...");

    const response = await resend.emails.send({
      from: "ShoLuc Education <onboarding@resend.dev>",
      to: "sholucholdings@gmail.com",
      subject: "New Quotation Request - ShoLuc Education",
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Parent:</strong> ${data.parent}</p>
        <p><strong>Student:</strong> ${data.student}</p>
        <p><strong>Grade:</strong> ${data.grade}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Session Type:</strong> ${data.session}</p>
        <p><strong>Frequency:</strong> ${data.frequency}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Notes:</strong> ${data.notes}</p>
      `,
    });

    console.log("Resend response:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}