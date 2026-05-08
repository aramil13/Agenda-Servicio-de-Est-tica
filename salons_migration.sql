-- Tabla de Salones
CREATE TABLE IF NOT EXISTS salons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agregar índice para búsquedas
CREATE INDEX IF NOT EXISTS idx_salons_name ON salons(name);

-- Agregar columna salon_id a la tabla appointments
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS salon_id UUID REFERENCES salons(id) ON DELETE SET NULL;

-- Agregar columna user_email para aislamiento por usuario
ALTER TABLE salons ADD COLUMN IF NOT EXISTS user_email TEXT;
CREATE INDEX IF NOT EXISTS idx_salons_user_email ON salons(user_email);

-- Opcional: Desactivar RLS temporalmente para pruebas
ALTER TABLE salons DISABLE ROW LEVEL SECURITY;
