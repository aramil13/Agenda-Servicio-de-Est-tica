-- Tabla de Fotos de Clientes
CREATE TABLE IF NOT EXISTS client_photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL,
    photo_url TEXT NOT NULL,
    photo_hash TEXT,
    photo_date TEXT,
    photo_type TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

-- Agregar columna para identificar citas creadas por staff
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS is_staff_appointment BOOLEAN DEFAULT FALSE;

-- Desactivar RLS temporalmente para probar (quitar después si funciona)
ALTER TABLE client_photos DISABLE ROW LEVEL SECURITY;