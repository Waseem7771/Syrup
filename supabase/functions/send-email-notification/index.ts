// deno run --allow-env --allow-net edge.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};
serve(async (req)=>{
  // --- 1. Handle CORS pre-flight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders
    });
  }
  try {
    // --- 2. Parse body
    const { type, record } = await req.json();
    if (!type || !record) {
      return json({
        error: "Missing 'type' or 'record' in body"
      }, 400);
    }
    // --- 3. Build e-mail
    const { subject, html } = buildEmail(type, record);
    if (!subject) {
      return json({
        error: "Unknown email type"
      }, 400);
    }
    // --- 4. Send via Resend
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) throw new Error("RESEND_API_KEY not set");
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "noreply@syriastartups.com",
        to: "Sketcher.7771@gmail.com",
        subject,
        html
      })
    });
    if (!r.ok) {
      const err = await r.json();
      throw new Error(`Resend error: ${JSON.stringify(err)}`);
    }
    const data = await r.json();
    return json({
      success: true,
      id: data.id
    }, 200);
  } catch (err) {
    console.error(err);
    return json({
      success: false,
      error: err.message
    }, 500);
  }
});
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}
function buildEmail(type, record) {
  switch(type){
    case "registration":
      return {
        subject: `New Company Registration: ${record.company_name}`,
        html: `<h1>New Company Registration</h1>
               <p><b>Company:</b> ${record.company_name}</p>
               <p><b>Founder:</b> ${record.founder_name}</p>`
      };
    case "contact":
      return {
        subject: `New Contact: ${record.subject ?? "No subject"}`,
        html: `<h1>Contact Message</h1>
               <p><b>Name:</b> ${record.name}</p>
               <p><b>Message:</b> ${record.message}</p>`
      };
    case "visa":
      return {
        subject: `New Visa Application: ${record.full_name}`,
        html: `<h1>Visa Application</h1>
               <p><b>Name:</b> ${record.full_name}</p>`
      };
    case "idea":
      return {
        subject: `Idea Submission: ${record.subject ?? "No subject"}`,
        html: `<h1>Idea</h1>
               <p>${record.message}</p>`
      };
    default:
      return {
        subject: "",
        html: ""
      };
  }
}
