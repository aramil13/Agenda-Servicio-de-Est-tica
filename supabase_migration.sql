-- Agregar columna user_email a la tabla appointments
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS user_email TEXT DEFAULT '';

-- Opcional: Agregar índice para búsquedas más rápidas
CREATE INDEX IF NOT EXISTS idx_appointments_user_email ON appointments(user_email);

-- Agregar columna photo a la tabla clients (JSON array de URLs)
ALTER TABLE clients
ADD COLUMN IF NOT EXISTS photo JSONB DEFAULT '[]';
