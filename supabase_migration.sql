-- Tabla de Fotos de Clientes (si no existe)
CREATE TABLE IF NOT EXISTS client_photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL,
    photo_url TEXT NOT NULL,
    photo_hash TEXT,
    photo_date TEXT,
    photo_type TEXT CHECK (photo_type IN ('before', 'after')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agregar columna photo_hash si no existe
ALTER TABLE client_photos
ADD COLUMN IF NOT EXISTS photo_hash TEXT;

-- Agregar índice para buscar fotos por cliente
CREATE INDEX IF NOT EXISTS idx_client_photos_client_id ON client_photos(client_id);

-- Agregar columna user_email a la tabla appointments
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS user_email TEXT DEFAULT '';

-- Agregar columna appointment_photos
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS appointment_photos JSONB DEFAULT '[]';

-- Opcional: Agregar índice para búsquedas más rápidas
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);
