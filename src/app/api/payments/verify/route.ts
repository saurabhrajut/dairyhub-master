import { NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json();

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return new Response(
        JSON.stringify({ ok: false, error: "Razorpay secret not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing payment verification fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(payload)
      .digest("hex");

    const valid = expectedSignature === razorpay_signature;

    if (!valid) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid signature" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, paymentId: razorpay_payment_id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message || "Verification failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


