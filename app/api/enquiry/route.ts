import { Resend } from "resend";
import { NextResponse } from "next/server";

// Where enquiry / booking notifications go. Comma-separate for several inboxes.
// Set ENQUIRY_TO_EMAIL in Cloudflare (Worker → Settings → Variables) to change it.
const DEFAULT_TO = "theroyalcliffresort@gmail.com, parwaizhasan271@gmail.com";

// Sender address. Must be on a domain verified in Resend (royalcliffresort.com).
const DEFAULT_FROM = "Royal Cliff Resort <bookings@royalcliffresort.com>";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (v: unknown) =>
  typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[enquiry] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, message, checkIn, checkOut, guests, room } = body;

  if (!name || !isEmail(email)) {
    return NextResponse.json({ error: "Name and a valid email are required" }, { status: 400 });
  }

  const to = (process.env.ENQUIRY_TO_EMAIL || DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;

  const msg = String(message ?? "");
  const kind = msg.includes("Payment ID")
    ? "PAID Booking"
    : msg.includes("Pay at Hotel")
      ? "Booking (Pay at Hotel)"
      : room || checkIn
        ? "Booking Enquiry"
        : "Contact Enquiry";

  const row = (label: string, value: unknown) =>
    `<tr><td style="padding:8px;color:#666;border-bottom:1px solid #eee;">${label}</td><td style="padding:8px;border-bottom:1px solid #eee;"><strong>${escapeHtml(value) || "—"}</strong></td></tr>`;

  const resend = new Resend(apiKey);

  // 1) Notification to the resort. The Resend SDK does NOT throw on failure —
  //    it returns { error }, so we must check it explicitly.
  const admin = await resend.emails.send({
    from,
    to,
    replyTo: String(email).trim(),
    subject: `${kind} — ${room || "General"} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#c9a96e;">${escapeHtml(kind)}</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Room", room)}
          ${row("Check-in", checkIn)}
          ${row("Check-out", checkOut)}
          ${row("Guests", typeof guests === "object" ? JSON.stringify(guests) : guests)}
          ${row("Message", message)}
        </table>
        <p style="color:#999;font-size:12px;margin-top:16px;">Reply to this email to answer the guest directly.</p>
      </div>
    `,
  });

  if (admin.error) {
    console.error("[enquiry] Resend failed (admin notification):", admin.error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  // 2) Auto-reply to the guest. A failure here shouldn't fail the request,
  //    because the resort has already been notified.
  const reply = await resend.emails.send({
    from,
    to: String(email).trim(),
    replyTo: to[0],
    subject: "We received your enquiry — Royal Cliff Resort",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#c9a96e;">Thank you, ${escapeHtml(name)}!</h2>
        <p>We have received your ${kind.includes("Booking") ? "booking request" : "enquiry"} and will get back to you within 2 hours.</p>
        <p style="color:#666;">For urgent queries, WhatsApp us at <strong>+91 96222 99302</strong></p>
        <br/>
        <p style="color:#999;font-size:12px;">Royal Cliff Resort · Pahalgam · Kashmir</p>
      </div>
    `,
  });

  if (reply.error) {
    console.error("[enquiry] Resend failed (guest auto-reply):", reply.error);
  }

  return NextResponse.json({ success: true });
}
