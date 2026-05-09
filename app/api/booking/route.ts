import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = "INR", roomName, checkIn, checkOut, guests } = body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency,
      receipt: `rcr_${Date.now()}`,
      notes: {
        roomName,
        checkIn,
        checkOut,
        guests,
        hotel: "Royal Cliff Resort",
      },
    });

    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error) {
    console.error("Razorpay error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}