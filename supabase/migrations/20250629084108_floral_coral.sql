/*
  # Fix Row Level Security Policies for Contact Messages

  1. Security
    - Enable RLS on contact_messages table (if not already enabled)
    - Add policy for anonymous inserts
    - Add policy for authenticated reads
*/

-- Make sure RLS is enabled
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts on contact_messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow authenticated reads on contact_messages" ON public.contact_messages;

-- Create insert policy for anonymous users
CREATE POLICY "Allow anonymous inserts on contact_messages"
ON public.contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- Create select policy for authenticated users
CREATE POLICY "Allow authenticated reads on contact_messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);