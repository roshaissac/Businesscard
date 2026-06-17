// Digital Business Card — CRM relay Worker
// ============================================================================
// The card (roshaissac.github.io/Businesscard) has no backend — its capture
// flows POST to Formspree. This tiny relay receives the same submission and
// forwards the standard CRM Lead Intake contract to the hub's intake worker.
//
// WHY a relay: the intake bearer token must never ship in client HTML. The
// browser POSTs here (tokenless, CORS); this Worker holds INTAKE_TOKEN as a
// secret and forwards server-to-server. Runs ALONGSIDE Formspree (additive).
//
// Deploy:  cd relay && npx wrangler deploy
// Secret:  npx wrangler secret put INTAKE_TOKEN   (= ~/.intake_token)
// ============================================================================

const CRM_INTAKE_URL = 'https://issac-realty-crm-intake.rosh-4d0.workers.dev/intake';
const CONTRACT_VERSION = '1.0';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (request.method === 'GET') return json({ ok: true, service: 'digital-card CRM relay' });
    if (request.method !== 'POST') return json({ ok: false, error: 'method not allowed' }, 405);

    let body;
    try {
      // Client sends text/plain (CORS-simple) with a JSON string body.
      body = JSON.parse(await request.text());
    } catch {
      return json({ ok: false, error: 'invalid JSON' }, 400, CORS);
    }

    // Accept both the card's field names and plain ones.
    const name  = (body.full_name    || body.name  || '').trim();
    const email = (body.email_address || body.email || '').trim();
    const phone = (body.phone_number  || body.phone || '').trim();
    if (!name && !email && !phone) {
      return json({ ok: false, error: 'no contact info' }, 400, CORS);
    }

    if (!env.INTAKE_TOKEN) {
      // No token configured yet — accept gracefully so the card UX never breaks.
      return json({ ok: true, forwarded: false, note: 'relay not configured' }, 200, CORS);
    }

    const parts = ['Digital business card.'];
    if (body.company)        parts.push('Company: ' + body.company);
    if (body.industry)       parts.push('Industry: ' + body.industry);
    if (body.contact_type && body.contact_type !== 'untagged') parts.push('Tag: ' + body.contact_type);
    if (body.contact_source) parts.push('Via: ' + body.contact_source);
    if (body.message)        parts.push('Notes: ' + body.message);

    const envelope = {
      contractVersion: CONTRACT_VERSION,
      source: 'digital-card',
      submittedAt: new Date().toISOString(),
      contact: { name: name || undefined, email: email || undefined, phone: phone || undefined },
      intent: { engine: 'SALES', leadSource: 'Digital Card', mode: 'RELATIONSHIP' },
      message: parts.join(' · '),
      raw: body,
    };

    try {
      // Reach the intake worker via a Service Binding — a deployed Worker
      // cannot fetch() another of the account's *.workers.dev Workers (CF
      // error 1042); the binding calls it directly.
      const res = await env.INTAKE.fetch(new Request(CRM_INTAKE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.INTAKE_TOKEN}` },
        body: JSON.stringify(envelope),
      }));
      return json({ ok: true, forwarded: res.ok }, 200, CORS);
    } catch {
      // Don't fail the card — Formspree remains the durable path.
      return json({ ok: true, forwarded: false }, 200, CORS);
    }
  },
};

function json(obj, status = 200, extraHeaders = CORS) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}
