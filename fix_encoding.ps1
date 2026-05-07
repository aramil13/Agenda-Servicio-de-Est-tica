# Script para corregir caracteres con encoding corrupto en main.js
$filePath = "C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js"
$content = Get-Content $filePath -Raw -Encoding UTF8

# Correcciones de caracteres españoles corruptos
$replacements = @{
    'te??ido' = 'teñido'
    'da??ado' = 'dañado'
    'M??scaras' = 'Máscaras'
    'R??genera' = 'Regenera'
    'N??1' = 'Nº1'
    'N??2' = 'Nº2'
    'el??stico' = 'elástico'
    'm??s' = 'más'
    't??rmicos' = 'térmicos'
    'q??m' = 'quím'
    'Diagn??stico' = 'Diagnóstico'
    'tel??fono' = 'teléfono'
    'a??adir' = 'añadir'
    'a??adido' = 'añadido'
    'sal??n' = 'salón'
    'sal??nes' = 'salones'
    'Mi??' = 'Mié'
    'S??b' = 'Sáb'
    'pr??ximos' = 'próximos'
    'pr??ximas' = 'próximas'
    'd??as' = 'días'
    'd??a' = 'día'
    'd?as' = 'días'
    'Despu??s' = 'Después'
    'enviar_was' = 'enviar_was'
    'ra?ces' = 'raíces'
    'Cal??logo' = 'Catálogo'
    'Acci??n' = 'Acción'
    'Duraci??n' = 'Duración'
    'delegaci??n' = 'delegación'
    'Autom??tico' = 'Automático'
    'An??lisis' = 'Análisis'
    'Ingresos' = 'Ingresos'
    'Gestiona' = 'Gestiona'
    'Conectando' = 'Conectando'
    'Supabase' = 'Supabase'
    'Ej:' = 'Ej:'
    'Mar??a' = 'María'
    'Garc??a' = 'García'
    'S??' = 'Sí'
    'No' = 'No'
    'Guardando?' = 'Guardando...'
    'Agendando?' = 'Agendando...'
    'Subiendo fotos?' = 'Subiendo fotos...'
    'Borrar?' = 'Borrar?'
    'Eliminar' = 'Eliminar'
    'Editar' = 'Editar'
    'Nuevo' = 'Nuevo'
    'Cerrar sesi??n' = 'Cerrar sesión'
    'recordatorios' = 'recordatorios'
    'cal-more' = 'cal-more'
    'day-detail' = 'day-detail'
    'monthly' = 'monthly'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

# Guardar archivo corregido
Set-Content -Path $filePath -Value $content -Encoding UTF8
Write-Host "Codificación corregida exitosamente"
