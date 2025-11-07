
import { interviewPrepper } from "@/ai/flows/interview-prepper-flow";
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const debugKey = url.searchParams.get("key");
  
  if (debugKey !== process.env.DEBUG_API_KEY) {
    return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  try {
    const body = await req.json();
    console.log("[DEBUG] Received body size:", body?.resumeText?.length ?? 0);
    const start = Date.now();
    const result = await interviewPrepper(body);
    const took = Date.now() - start;
    console.log(`[DEBUG] interviewPrepper succeeded in ${took}ms`);
    return new Response(JSON.stringify({ ok: true, result, took }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err: any) {
    console.error("[DEBUG] interviewPrepper threw:", err && (err.stack || err.message || err));
    return new Response(JSON.stringify({
      ok: false,
      message: err?.message ?? "unknown",
      stack: err?.stack?.split("\n").slice(0, 20),
      providerError: (err && (err.response || err.body || err.raw || err.details)) ?? null
    }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
