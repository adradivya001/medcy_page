-- 1. Create the PostgreSQL table
CREATE TABLE IF NOT EXISTS public.doctor_profile_cards (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    doctor_name text NOT NULL,
    specialization text,
    expertise_highlights text[],
    image_url text NOT NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

-- 2. Enable Row Level Security (RLS) on the table
ALTER TABLE public.doctor_profile_cards ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies for the table
-- Public read access for active doctor cards
CREATE POLICY "Public read access for active doctor cards" 
ON public.doctor_profile_cards 
FOR SELECT 
USING (is_active = true);

-- Authenticated users can insert/update/delete
CREATE POLICY "Authenticated users can insert" 
ON public.doctor_profile_cards 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update" 
ON public.doctor_profile_cards 
FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Authenticated users can delete" 
ON public.doctor_profile_cards 
FOR DELETE 
TO authenticated 
USING (true);

-- 4. Create the Supabase storage bucket for doctor-profile-cards
INSERT INTO storage.buckets (id, name, public) 
VALUES ('doctor-profile-cards', 'doctor-profile-cards', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Storage RLS Policies
-- Allow public access to read files in the bucket
CREATE POLICY "Public read access for doctor-profile-cards bucket"
ON storage.objects FOR SELECT
USING ( bucket_id = 'doctor-profile-cards' );

-- Allow authenticated users to upload files to the bucket
CREATE POLICY "Authenticated users can upload to doctor-profile-cards bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'doctor-profile-cards' );

CREATE POLICY "Authenticated users can update doctor-profile-cards bucket files"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'doctor-profile-cards' );

CREATE POLICY "Authenticated users can delete doctor-profile-cards bucket files"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'doctor-profile-cards' );
