-- Migration: Add user_email column to tables for user isolation
-- Run this SQL in your Supabase SQL Editor

-- Add user_email to clients table
ALTER TABLE clients ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_clients_user_email ON clients(user_email);

-- Add user_email to services table  
ALTER TABLE services ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_services_user_email ON services(user_email);

-- Add user_email to appointments table
ALTER TABLE appointments ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);

-- Add user_email to client_photos table
ALTER TABLE client_photos ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_client_photos_user_email ON client_photos(user_email);

-- Add user_email to salons table
ALTER TABLE salons ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_salons_user_email ON salons(user_email);

-- Optional: Update existing records to have a default user_email
-- Uncomment and modify the email if you want to assign existing data to a specific user
-- UPDATE clients SET user_email = 'your-email@example.com' WHERE user_email IS NULL;
-- UPDATE services SET user_email = 'your-email@example.com' WHERE user_email IS NULL;
-- UPDATE appointments SET user_email = 'your-email@example.com' WHERE user_email IS NULL;
-- UPDATE client_photos SET user_email = 'your-email@example.com' WHERE user_email IS NULL;
-- UPDATE salons SET user_email = 'your-email@example.com' WHERE user_email IS NULL;
