-- Agregar columna user_email a la tabla appointments
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS user_email TEXT DEFAULT '';

-- Opcional: Agregar índice para búsquedas más rápidas
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);

-- Crear tabla de fotos de clientes
CREATE TABLE IF NOT EXISTS client_photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL,
    photo_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agregar índice para buscar fotos por cliente
CREATE INDEX IF NOT EXISTS idx_client_photos_client_id ON client_photos(client_id);
