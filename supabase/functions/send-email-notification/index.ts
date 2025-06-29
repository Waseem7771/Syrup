import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get the request body
    const { record, type } = await req.json();
    
    console.log('Received notification request:', { type, recordId: record?.id });

    // Email configuration
    const emailTo = 'Sketcher.7771@gmail.com'; // Your email
    const emailFrom = 'noreply@syriastartups.com';
    
    let subject = '';
    let content = '';
    
    // Format email based on submission type
    if (type === 'registration') {
      subject = `New Company Registration: ${record.company_name}`;
      content = `
        <h1>New Company Registration</h1>
        <p><strong>ID:</strong> ${record.id}</p>
        <p><strong>Company Name:</strong> ${record.company_name}</p>
        <p><strong>Company Type:</strong> ${record.company_type}</p>
        <p><strong>Business Activity:</strong> ${record.business_activity}</p>
        <h2>Founder Information</h2>
        <p><strong>Name:</strong> ${record.founder_name}</p>
        <p><strong>Email:</strong> ${record.founder_email}</p>
        <p><strong>Phone:</strong> ${record.founder_phone}</p>
        <p><strong>Nationality:</strong> ${record.founder_nationality}</p>
        <p><strong>Partners Count:</strong> ${record.partners_count}</p>
        <h2>Additional Information</h2>
        <p><strong>Estimated Capital:</strong> ${record.estimated_capital}</p>
        <p><strong>Has Location:</strong> ${record.has_location ? 'Yes' : 'No'}</p>
        ${record.has_location ? `<p><strong>Location City:</strong> ${record.location_city}</p>` : ''}
        <p><strong>Requires Consultation:</strong> ${record.requires_consultation ? 'Yes' : 'No'}</p>
        <h2>Requested Services</h2>
        <ul>
          ${record.services.fullfinancial ? '<li>Full Company Registration</li>' : ''}
          ${record.services.technicalConsultation ? '<li>Technical Consultation</li>' : ''}
          ${record.services.businessPlan ? '<li>Business Plan Preparation</li>' : ''}
          ${record.services.workspace ? '<li>Secure Workspace</li>' : ''}
        </ul>
        <p><strong>Created At:</strong> ${record.created_at}</p>
        <p><strong>Status:</strong> ${record.status}</p>
      `;
    } else if (type === 'contact') {
      subject = `New Contact Message: ${record.subject || 'No Subject'}`;
      content = `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${record.subject || 'No Subject'}</p>
        <h2>Message</h2>
        <p>${record.message}</p>
      `;
    } else if (type === 'visa') {
      subject = `New Visa/Residency Application: ${record.service_type}`;
      content = `
        <h1>New Visa/Residency Application</h1>
        <p><strong>Reference Number:</strong> ${record.reference_number}</p>
        <p><strong>Service Type:</strong> ${record.service_type}</p>
        <h2>Applicant Information</h2>
        <p><strong>Full Name:</strong> ${record.full_name}</p>
        <p><strong>Nationality:</strong> ${record.nationality}</p>
        <p><strong>Passport Number:</strong> ${record.passport_number}</p>
        <p><strong>Passport Expiry:</strong> ${record.passport_expiry}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.phone}</p>
        <h2>Business Information</h2>
        <p><strong>Company Name:</strong> ${record.company_name || 'Not provided'}</p>
        <p><strong>Business Type:</strong> ${record.business_type || 'Not provided'}</p>
        <p><strong>Planned Stay Duration:</strong> ${record.planned_stay_duration}</p>
        <p><strong>Entry Date:</strong> ${record.entry_date}</p>
        <h2>Purpose of Stay</h2>
        <p>${record.purpose_of_stay}</p>
        <h2>Documents</h2>
        <p>Documents have been uploaded to Supabase Storage.</p>
      `;
    } else if (type === 'idea') {
      subject = `New Business Idea Submission: ${record.subject.replace('Idea Submission: ', '')}`;
      content = `
        <h1>New Business Idea Submission</h1>
        <p><strong>Topic:</strong> ${record.subject.replace('Idea Submission: ', '')}</p>
        <h2>Idea Description</h2>
        <p>${record.message}</p>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.phone || 'Not provided'}</p>
      `;
    }

    console.log(`Preparing to send email to: ${emailTo}`);
    console.log(`Subject: ${subject}`);
    
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set in Supabase secrets');
      throw new Error('RESEND_API_KEY is not set in Supabase secrets');
    }
    
    console.log('Sending email via Resend API...');
    
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: emailTo,
        subject: subject,
        html: content,
      }),
    });
    
    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('Failed to send email via Resend:', errorData);
      throw new Error(`Failed to send email: ${resendResponse.statusText}`);
    }
    
    console.log('Email sent successfully via Resend!');
    
    return new Response(
      JSON.stringify({ success: true, message: 'Notification sent' }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('Error sending notification:', error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
