#!/usr/bin/env python3
import re

def fix_urls(content):
    # Fix bondBuilder URL (add -100-ml)
    content = content.replace('products/bond-builder"', 'products/bond-builder-100-ml"')
    
    # Fix colourRefresh URLs - make them consistent
    # Fix Bright Copper URL
    content = content.replace('products/colour-refresh-bright-red-300-ml"', 'products/colour-refresh-bright-copper-300-ml"')
    
    # Fix Cool Cream URL  
    content = content.replace('products/colour-refresh-cool-cream-300-ml"', 'products/colour-refresh-cool-cream-100-ml"')
    
    # Fix Lavender URL
    content = content.replace('products/color-refresh-lavender-100-ml"', 'products/colour-refresh-lavender-100-ml"')
    
    # Fix Beige Blonde URL
    content = content.replace('products/color-refresh-beige-blonde-100-ml"', 'products/colour-refresh-beige-blonde-100-ml"')
    
    # Fix Black URL
    content = content.replace('products/colour-refresh-black-100-ml"', 'products/colour-refresh-black-100-ml"')
    
    # Fix Vivid Violet URL
    content = content.replace('products/color-refresh-vivid-violet-100-ml"', 'products/colour-refresh-vivid-violet-100-ml"')
    
    # Fix Pink Peach URL
    content = content.replace('products/color-refresh-pink-peach-100-ml"', 'products/colour-refresh-pink-peach-100-ml"')
    
    # Fix Cacao Intense URL
    content = content.replace('products/color-refresh-cacao-intense-100-ml"', 'products/colour-refresh-cacao-intense-100-ml"')
    
    # Fix Pearl Silver URL
    content = content.replace('products/color-refresh-pearl-silver-100-ml"', 'products/colour-refresh-pearl-silver-100-ml"')
    
    # Fix Autumn Red URL
    content = content.replace('products/color-refresh-autumn-red-100-ml"', 'products/colour-refresh-autumn-red-100-ml"')
    
    # Fix Cacao URL
    content = content.replace('products/color-refresh-cacao-100-ml"', 'products/colour-refresh-cacao-100-ml"')
    
    # Fix Bright Red URL
    content = content.replace('products/color-refresh-bright-red-100-ml"', 'products/colour-refresh-bright-red-100-ml"')
    
    # Fix Honey Blonde URL
    content = content.replace('products/color-refresh-honey-blonde-100-ml"', 'products/colour-refresh-honey-blonde-100-ml"')
    
    # Fix Caramel Brown URL
    content = content.replace('products/color-refresh-caramel-brown-100-ml"', 'products/colour-refresh-caramel-brown-100-ml"')
    
    # Fix Pearl Rose URL
    content = content.replace('products/color-refresh-pearl-rose-100-ml"', 'products/colour-refresh-pearl-rose-100-ml"')
    
    # Fix White Mix URL
    content = content.replace('products/color-refresh-white-mix-100-ml"', 'products/colour-refresh-white-mix-100-ml"')
    
    return content

# Fix main_fixed.js
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main_fixed.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = fix_urls(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main_fixed.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed main_fixed.js")

# Fix main.js
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = fix_urls(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed main.js")

# Fix diagnosis/index.html
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\diagnosis\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = fix_urls(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\diagnosis\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed diagnosis/index.html")

print("All URLs fixed!")
