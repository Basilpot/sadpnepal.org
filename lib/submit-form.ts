const WORKER_URL = "https://sadp-turnstile-worker.tejghartikshetri.workers.dev";

export async function submitForm(
  formType: string,
  token: string,
  data: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  const res = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, formType, data }),
  });

  const json = (await res.json()) as { success: boolean; error?: string };
  return json;
}
