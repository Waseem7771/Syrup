/*
  # Create database tables

  1. New Tables
    - `registrations` - Stores company registration requests
    - `contact_messages` - Stores contact form submissions
    - `visa_applications` - Stores visa and residency applications
  
  2. Security
    - Enable RLS on all tables
    - Add policies for secure access
*/

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  company_type TEXT NOT NULL,
  business_activity TEXT NOT NULL,
  founder_name TEXT NOT NULL,
  founder_email TEXT NOT NULL,
  founder_phone TEXT NOT NULL,
  founder_nationality TEXT NOT NULL,
  partners_count TEXT NOT NULL,
  estimated_capital TEXT NOT NULL,
  has_location BOOLEAN NOT NULL DEFAULT false,
  location_city TEXT,
  requires_consultation BOOLEAN NOT NULL DEFAULT false,
  services JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'unread'
);

-- Create visa_applications table
CREATE TABLE IF NOT EXISTS visa_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type TEXT NOT NULL,
  full_name TEXT NOT NULL,
  nationality TEXT NOT NULL,
  passport_number TEXT NOT NULL,
  passport_expiry DATE NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  business_type TEXT,
  planned_stay_duration TEXT NOT NULL,
  entry_date DATE NOT NULL,
  purpose_of_stay TEXT NOT NULL,
  passport_scan_url TEXT,
  photograph_url TEXT,
  business_documents_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reference_number TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE visa_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for secure access
-- For now, we'll allow inserts from anyone but restrict reads/updates/deletes to authenticated users
CREATE POLICY "Allow anonymous inserts on registrations" 
  ON registrations FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on contact_messages" 
  ON contact_messages FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on visa_applications" 
  ON visa_applications FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read the data
CREATE POLICY "Allow authenticated reads on registrations" 
  ON registrations FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads on contact_messages" 
  ON contact_messages FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads on visa_applications" 
  ON visa_applications FOR SELECT 
  TO authenticated
  USING (true);