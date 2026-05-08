ALTER TABLE clients ADD COLUMN IF NOT EXISTS whatsapp_template TEXT;
COMMENT ON COLUMN clients.whatsapp_template IS 'Plantilla personalizada para mensajes WhatsApp del cliente';
