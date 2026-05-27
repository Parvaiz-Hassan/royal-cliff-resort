import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message, checkIn, checkOut, guests, room } = body;

  try {
    await resend.emails.send({
      from: "Royal Cliff Resort <onboarding@resend.dev>",
      to: "parwaizhasan271@gmail.com",
      replyTo: email,
      subject: `New Booking Enquiry — ${room || "General"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c9a96e;">New Booking Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #666;">Name</td><td style="padding: 8px;"><strong>${name}</strong></td></tr>
            <tr><td style="padding: 8px; color: #666;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Phone</td><td style="padding: 8px;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Room</td><td style="padding: 8px;">${room || "—"}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Check-in</td><td style="padding: 8px;">${checkIn || "—"}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Check-out</td><td style="padding: 8px;">${checkOut || "—"}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Guests</td><td style="padding: 8px;">${guests || "—"}</td></tr>
            <tr><td style="padding: 8px; color: #666;">Message</td><td style="padding: 8px;">${message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    // Auto-reply to guest
    await resend.emails.send({
      from: "Royal Cliff Resort <bookings@royalcliffresort.com>",
      to: email,
      subject: "We received your enquiry — Royal Cliff Resort",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c9a96e;">Thank you, ${name}!</h2>
          <p>We have received your enquiry and will get back to you within 2 hours.</p>
          <p style="color: #666;">For urgent queries, WhatsApp us at <strong>+91 96222 99302</strong></p>
          <br/>
          <p style="color: #999; font-size: 12px;">Royal Cliff Resort · Pahalgam · Kashmir</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}