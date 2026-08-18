export interface Env {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

interface TurnstilePayload {
  token: string;
  formType: string;
  data: Record<string, string>;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

const RESEND_BASE = "https://api.resend.com";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return jsonResp({ success: false, error: "Method not allowed" }, 405);
    }

    try {
      const { token, formType, data } = (await request.json()) as TurnstilePayload;

      if (!token || !formType) {
        return jsonResp({ success: false, error: "Missing token or formType" }, 400);
      }

      // Verify Turnstile (skip for newsletters)
      if (token !== "newsletter-no-turnstile") {
        const ip = request.headers.get("CF-Connecting-IP") || "";
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip }),
        });
        const verifyData = (await verifyRes.json()) as { success: boolean };
        if (!verifyData.success) {
          return jsonResp({ success: false, error: "Verification failed" }, 403);
        }
      }

      if (formType === "newsletter") {
        // Store subscriber in Resend Audience
        const res = await fetch(`${RESEND_BASE}/audiences/${env.RESEND_AUDIENCE_ID}/contacts`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email, unsubscribed: false }),
        });

        if (!res.ok) {
          const err = await res.text();
          return jsonResp({ success: false, error: `Contact add failed: ${err}` }, 500);
        }

        return jsonResp({ success: true });
      }

      // Form submissions — send email notification
      const formLabel = formType.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
      const subject = `[SADP Nepal] New ${formLabel} Submission`;
      const body = Object.entries(data)
        .map(([key, value]) => {
          const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s: string) => s.toUpperCase());
          return `${label}: ${value}`;
        })
        .join("\n\n");

      const emailRes = await fetch(`${RESEND_BASE}/emails`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SADP Nepal Website <info@sadpnepal.org>",
          to: ["info@sadpnepal.org"],
          subject,
          text: body,
        }),
      });

      if (!emailRes.ok) {
        return jsonResp({ success: false, error: "Email send failed" }, 500);
      }

      return jsonResp({ success: true });
    } catch {
      return jsonResp({ success: false, error: "Server error" }, 500);
    }
  },
};

function jsonResp(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}
