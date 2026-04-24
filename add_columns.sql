-- Agregar columnas faltantes a client_photos si no existen
ALTER TABLE client_photos
ADD COLUMN IF NOT EXISTS photo_date TEXT;

ALTER TABLE client_photos
ADD COLUMN IF NOT EXISTS photo_type TEXT CHECK (photo_type IN ('before', 'after'));

ALTER TABLE client_photos
ADD COLUMN IF NOT EXISTS notes TEXT;