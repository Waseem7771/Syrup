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
      // Format services for better readability
      const services = Object.entries(record.services || {})
        .filter(([_, value]) => value === true)
        .map(([key, _]) => {
          const serviceNames = {
            fullfinancial: "Full Company Registration",
            technicalConsultation: "Legal Consultation",
            businessPlan: "Business Plan Preparation",
            workspace: "Secure Workspace"
          };
          return serviceNames[key] || key;
        })
        .join(", ");

      return {
        subject: `New Company Registration: ${record.company_name}`,
        html: `
          <h1>New Company Registration</h1>
          <h2>Company Information</h2>
          <p><b>Company Name:</b> ${record.company_name || 'Not provided'}</p>
          <p><b>Company Type:</b> ${record.company_type || 'Not provided'}</p>
          <p><b>Business Activity:</b> ${record.business_activity || 'Not provided'}</p>
          
          <h2>Founder Information</h2>
          <p><b>Founder Name:</b> ${record.founder_name || 'Not provided'}</p>
          <p><b>Founder Email:</b> ${record.founder_email || 'Not provided'}</p>
          <p><b>Founder Phone:</b> ${record.founder_phone || 'Not provided'}</p>
          <p><b>Nationality:</b> ${record.founder_nationality || 'Not provided'}</p>
          <p><b>Number of Partners:</b> ${record.partners_count || 'Not provided'}</p>
          
          <h2>Additional Information</h2>
          <p><b>Estimated Capital:</b> ${record.estimated_capital || 'Not provided'}</p>
          <p><b>Has Location:</b> ${record.has_location ? 'Yes' : 'No'}</p>
          ${record.has_location ? `<p><b>Location City:</b> ${record.location_city || 'Not provided'}</p>` : ''}
          <p><b>Requires Consultation:</b> ${record.requires_consultation ? 'Yes' : 'No'}</p>
          
          <h2>Selected Services</h2>
          <p>${services || 'No services selected'}</p>
          
          <p><b>Submission Date:</b> ${record.created_at ? new Date(record.created_at).toLocaleString() : new Date().toLocaleString()}</p>
        `
      };

    case "contact":
      return {
        subject: `New Contact: ${record.subject ?? "No subject"}`,
        html: `
          <h1>Contact Message</h1>
          <p><b>Name:</b> ${record.name || 'Not provided'}</p>
          <p><b>Email:</b> ${record.email || 'Not provided'}</p>
          <p><b>Phone:</b> ${record.phone || 'Not provided'}</p>
          <p><b>Subject:</b> ${record.subject || 'No subject'}</p>
          <p><b>Message:</b></p>
          <div style="padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ccc; margin: 10px 0;">
            ${record.message || 'No message content'}
          </div>
          <p><b>Submission Date:</b> ${record.created_at ? new Date(record.created_at).toLocaleString() : new Date().toLocaleString()}</p>
        `
      };

    case "visa":
      return {
        subject: `New Visa Application: ${record.full_name}`,
        html: `
          <h1>Visa/Residency Application</h1>
          <h2>Application Details</h2>
          <p><b>Reference Number:</b> ${record.reference_number || 'Not assigned'}</p>
          <p><b>Service Type:</b> ${formatServiceType(record.service_type) || 'Not specified'}</p>
          <p><b>Status:</b> ${record.status || 'Pending'}</p>
          
          <h2>Personal Information</h2>
          <p><b>Full Name:</b> ${record.full_name || 'Not provided'}</p>
          <p><b>Nationality:</b> ${record.nationality || 'Not provided'}</p>
          <p><b>Passport Number:</b> ${record.passport_number || 'Not provided'}</p>
          <p><b>Passport Expiry:</b> ${record.passport_expiry || 'Not provided'}</p>
          <p><b>Email:</b> ${record.email || 'Not provided'}</p>
          <p><b>Phone:</b> ${record.phone || 'Not provided'}</p>
          
          <h2>Business Information</h2>
          <p><b>Company Name:</b> ${record.company_name || 'Not provided'}</p>
          <p><b>Business Type:</b> ${record.business_type || 'Not provided'}</p>
          <p><b>Planned Stay Duration:</b> ${record.planned_stay_duration || 'Not provided'}</p>
          <p><b>Expected Entry Date:</b> ${record.entry_date || 'Not provided'}</p>
          
          <h2>Purpose of Stay</h2>
          <div style="padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ccc; margin: 10px 0;">
            ${record.purpose_of_stay || 'Not provided'}
          </div>
          
          <h2>Document Uploads</h2>
          <p><b>Passport Scan:</b> ${record.passport_scan_url ? 'Uploaded' : 'Not uploaded'}</p>
          <p><b>Photograph:</b> ${record.photograph_url ? 'Uploaded' : 'Not uploaded'}</p>
          <p><b>Business Documents:</b> ${record.business_documents_url ? 'Uploaded' : 'Not uploaded'}</p>
          
          <p><b>Submission Date:</b> ${record.created_at ? new Date(record.created_at).toLocaleString() : new Date().toLocaleString()}</p>
        `
      };

    case "idea":
      return {
        subject: `Idea Submission: ${record.subject ?? "No subject"}`,
        html: `
          <h1>Business Idea Submission</h1>
          <p><b>Name:</b> ${record.name || 'Not provided'}</p>
          <p><b>Email:</b> ${record.email || 'Not provided'}</p>
          <p><b>Phone:</b> ${record.phone || 'Not provided'}</p>
          <p><b>Subject:</b> ${record.subject || 'No subject'}</p>
          <h2>Idea Description</h2>
          <div style="padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ccc; margin: 10px 0;">
            ${record.message || 'No idea description provided'}
          </div>
          <p><b>Submission Date:</b> ${record.created_at ? new Date(record.created_at).toLocaleString() : new Date().toLocaleString()}</p>
        `
      };

    default:
      return {
        subject: "",
        html: ""
      };
  }
}

// Helper function to format service type
function formatServiceType(serviceType) {
  if (!serviceType) return '';
  
  const serviceTypes = {
    businessVisa: "Business Visa",
    investorResidency: "Investor Residency",
    workPermit: "Work Permit",
    familyResidency: "Family Residency"
  };
  
  return serviceTypes[serviceType] || serviceType;
}
