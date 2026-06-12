import { NextRequest, NextResponse } from "next/server";

/* ═══════════════════════════════════════════════════════════
   API Route: /api/feedback
   Receives form data from the feedback page and creates
   a lead in Aspro.Cloud CRM via their REST API.

   Environment variables required:
   - ASPRO_API_KEY: Aspro.Cloud API key
   - ASPRO_ACCOUNT: Aspro.Cloud account subdomain (e.g. "arasaca")
   ═══════════════════════════════════════════════════════════ */

const ASPRO_API_KEY = process.env.ASPRO_API_KEY;
const ASPRO_ACCOUNT = process.env.ASPRO_ACCOUNT;
const ASPRO_BASE = `https://${ASPRO_ACCOUNT}.aspro.cloud/api/v1/module`;

// CRM IDs for arasaca account
const PIPELINE_ID = 1; // "Лиды"
const PIPELINE_STAGE_ID = 1; // "Новые запросы"
const SOURCE_ID = 4; // "Форма на сайте"
const ASSIGNEE_ID = 412969; // Владислав (serov@arasaca.ru)

// Inquiry type mapping — form values → { label for deal name, optionId for cf_ select field }
// The cf_type_of_request field is type "select.single" — it requires the option ID, not text.
// Option IDs fetched from: /customfields/fieldoptions/list?field_id=41
const INQUIRY_TYPE_MAP: Record<string, { label: string; optionId: number }> = {
  proposals: { label: "Запрос коммерческого предложения", optionId: 8 },
  callback: { label: "Запрос обратного звонка", optionId: 9 },
  press: { label: "Обращение в пресс-службу", optionId: 10 },
  accounting: { label: "Вопросы бухгалтерии", optionId: 11 },
  partners: { label: "Партнёрские предложения", optionId: 12 },
  careers: { label: "Поиск вакансий / Карьера", optionId: 13 },
  other: { label: "Другое", optionId: 14 },
};

// Honeypot field name — if filled, it's a bot
const HONEYPOT_FIELD = "website";

interface FeedbackPayload {
  inquiryType: string;
  fio: string;
  phone: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  [HONEYPOT_FIELD]?: string; // honeypot
}

/**
 * Make a POST request to Aspro.Cloud API
 */
async function asproPost(endpoint: string, data: Record<string, string>) {
  const url = `${ASPRO_BASE}/${endpoint}?api_key=${ASPRO_API_KEY}`;
  const body = new URLSearchParams(data).toString();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const responseText = await res.text();

  if (!res.ok) {
    console.error(`[Aspro API] ${endpoint} failed (${res.status}):`, responseText);
    throw new Error(`Aspro API error: ${res.status}`);
  }

  try {
    return JSON.parse(responseText);
  } catch {
    console.warn(`[Aspro API] Non-JSON response from ${endpoint}:`, responseText);
    return { response: {} };
  }
}

export async function POST(req: NextRequest) {
  try {
    // Validate environment
    if (!ASPRO_API_KEY || !ASPRO_ACCOUNT) {
      console.error("[Feedback] Missing ASPRO_API_KEY or ASPRO_ACCOUNT env vars");
      return NextResponse.json(
        { error: "Сервис недоступен. Попробуйте позже." },
        { status: 503 }
      );
    }

    // Parse request body
    const body: FeedbackPayload = await req.json();

    // Honeypot check — if filled, silently reject
    if (body[HONEYPOT_FIELD]) {
      // Return success to bots so they don't retry
      return NextResponse.json({ success: true, id: null });
    }

    // Validate required fields
    if (!body.fio?.trim() || !body.phone?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Укажите корректный email." },
        { status: 400 }
      );
    }

    // Map inquiry type
    const inquiry =
      INQUIRY_TYPE_MAP[body.inquiryType] || INQUIRY_TYPE_MAP.other!;
    const inquiryLabel = inquiry.label;

    // Build deal name: "Запрос КП от Иванов И.И."
    const dealName = `${inquiryLabel} от ${body.fio.trim()}`;

    // Include inquiry type in description so it's always captured
    // (custom cf_ fields may not persist depending on CRM settings)
    const description = `[${inquiryLabel}]\n\n${body.message.trim()}`;

    // Step 1: Create lead with standard fields
    const createData: Record<string, string> = {
      name: dealName,
      description,
      pipeline_id: String(PIPELINE_ID),
      pipeline_stage_id: String(PIPELINE_STAGE_ID),
      source_id: String(SOURCE_ID),
      assignee_id: String(ASSIGNEE_ID),
      contact_name: body.fio.trim(),
      contact_phone: body.phone.trim(),
      contact_email: body.email.trim(),
      contact_company: body.company?.trim() || "",
      contact_position: body.role?.trim() || "",
      ref: "arasaca-website",
      // Custom field: cf_type_of_request (select.single) — must pass option ID
      cf_type_of_request: String(inquiry.optionId),
    };

    const createResult = await asproPost("crm/lead/create", createData);
    const leadId = createResult?.response?.id;

    if (!leadId) {
      console.error("[Feedback] Lead creation returned no ID:", createResult);
      return NextResponse.json(
        { error: "Не удалось создать обращение. Попробуйте позже." },
        { status: 500 }
      );
    }

    // Note: cf_type_of_request is set on create (confirmed working with numeric option IDs).
    // No separate update step needed — saves an extra API call and avoids rate limit issues.

    console.log(`[Feedback] Lead #${leadId} created: "${dealName}"`);

    return NextResponse.json({ success: true, id: leadId });
  } catch (error) {
    console.error("[Feedback] Unexpected error:", error);
    return NextResponse.json(
      { error: "Произошла ошибка. Попробуйте позже." },
      { status: 500 }
    );
  }
}
