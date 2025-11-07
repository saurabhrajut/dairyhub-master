import Razorpay from "razorpay";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, receipt, notes } = await req.json();

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return new Response(
        JSON.stringify({ ok: false, error: "Razorpay keys not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid amount" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options: any = {
      amount: Math.round(amount * 100), // INR in paise
      currency: currency || "INR",
      receipt: receipt || `rcpt_${Date.now()}`,
      notes: notes || {},
    };

    const order = await instance.orders.create(options);

    return new Response(
      JSON.stringify({ ok: true, order }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message || "Failed to create order" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


