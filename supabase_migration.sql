-- Tabla de Fotos de Clientes
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

-- Agregar índice para buscar fotos por cliente
CREATE INDEX IF NOT EXISTS idx_client_photos_client_id ON client_photos(client_id);

-- Agregar índice para evitar fotos duplicadas por hash
CREATE UNIQUE INDEX IF NOT EXISTS idx_client_photos_hash ON client_photos(photo_hash) WHERE photo_hash IS NOT NULL;

-- Agregar columna user_email a la tabla appointments
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS user_email TEXT DEFAULT '';

ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS appointment_photos JSONB DEFAULT '[]';

-- Opcional: Agregar índice para búsquedas más rápidas
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);
