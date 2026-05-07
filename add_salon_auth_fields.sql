-- Agregar campos de autenticación a la tabla salons
ALTER TABLE salons 
ADD COLUMN IF NOT EXISTS username TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS password TEXT;

-- Comentarios para documentación
COMMENT ON COLUMN salons.username IS 'Nombre de usuario para acceso restringido al salón';
COMMENT ON COLUMN salons.password IS 'Contraseña para acceso restringido (texto plano para MVP)';

-- Índice para búsqueda rápida por username
CREATE INDEX IF NOT EXISTS idx_salons_username ON salons(username) WHERE username IS NOT NULL;
