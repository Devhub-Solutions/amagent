import { NextRequest, NextResponse } from "next/server";

/* POST /api/rum — receives Core Web Vitals beacons from <WebVitals /> component.
 *
 * In production, forward to Vercel Analytics / PostHog / Plausible / your DB.
 * For now we just log to server console — wire up your sink before deploying.
 *
 * Body shape:
 *   { name: "LCP"|"CLS"|"INP"|"FCP"|"TTFB",
 *     value: number, rating: "good"|"ni"|"poor",
 *     id: string, delta: number, navigationType: string,
 *     path: string, ts: number }
 */
export const runtime = "nodejs"; // don't run on edge — keep warm
export const dynamic = "force-static";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, value, rating, path, navigationType } = body ?? {};

    if (!name || typeof value !== "number") {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    // TODO: replace with your sink — examples:
    //   - Vercel Analytics: already auto-tracks CWV, no need for this endpoint
    //   - PostHog: posthog.capture('web_vital', body)
    //   - Plausible: postToPlausible('web-vital', body)
    //   - Database: await db.rumEvent.create({ data: body })
    console.log(`[RUM] ${name}=${value} (${rating}) nav=${navigationType} path=${path}`);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/api/rum",
    methods: ["POST"],
    metrics: ["LCP", "CLS", "INP", "FCP", "TTFB"],
  });
}
