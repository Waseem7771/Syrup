/*
  # Fix RLS policies for all application tables

  1. Security
    - Enable RLS on all tables
    - Create appropriate policies for anonymous inserts
    - Create appropriate policies for authenticated reads
  2. Changes
    - Fix registrations table RLS
    - Fix visa_applications table RLS
*/

-- Fix registrations table
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts on registrations" ON public.registrations;
DROP POLICY IF EXISTS "Allow authenticated reads on registrations" ON public.registrations;

-- Create insert policy for anonymous users
CREATE POLICY "Allow anonymous inserts on registrations"
ON public.registrations
FOR INSERT
TO anon
WITH CHECK (true);

-- Create select policy for authenticated users
CREATE POLICY "Allow authenticated reads on registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);

-- Fix visa_applications table
ALTER TABLE public.visa_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts on visa_applications" ON public.visa_applications;
DROP POLICY IF EXISTS "Allow authenticated reads on visa_applications" ON public.visa_applications;

-- Create insert policy for anonymous users
CREATE POLICY "Allow anonymous inserts on visa_applications"
ON public.visa_applications
FOR INSERT
TO anon
WITH CHECK (true);

-- Create select policy for authenticated users
CREATE POLICY "Allow authenticated reads on visa_applications"
ON public.visa_applications
FOR SELECT
TO authenticated
USING (true);