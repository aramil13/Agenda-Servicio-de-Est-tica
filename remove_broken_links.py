#!/usr/bin/env python3
import re

def clean_products(content):
    """Remove products with broken image URLs"""
    
    # Find all product entries
    pattern = r'(\w+):\s*\{\s*name:\s*"[^"]+",\s*desc:\s*"[^"]*",\s*img:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*category:\s*"[^"]*"\s*\}'
    
    # Standard Maria Nila image URL pattern
    standard_img_pattern = r'https://marianila\.com/cdn/shop/files/\d+.*\.jpg'
    
    # Find all matches
    matches = list(re.finditer(pattern, content))
    
    # Check each product
    products_to_remove = []
    for match in matches:
        product_name = match.group(1)
        img_url = match.group(2)
        product_url = match.group(3)
        
        # Check if image URL is standard
        if not re.match(standard_img_pattern, img_url):
            products_to_remove.append((product_name, img_url, "image URL not standard"))
        
        # Check if product URL is valid
        if not product_url.startswith('https://marianila.com/products/'):
            products_to_remove.append((product_name, product_url, "product URL not valid"))
    
    # Remove broken products
    for product_name, url, reason in products_to_remove:
        # Find and remove the product entry
        product_pattern = rf'{product_name}:\s*\{{[^}}]+\}},\s*'
        content = re.sub(product_pattern, '', content)
        print(f"Removed {product_name}: {reason} - {url}")
    
    return content

# Process main.js
print("Processing main.js...")
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js', 'r', encoding='utf-8') as f:
    content = f.read()

original_length = len(content)
content = clean_products(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"main.js: removed {original_length - len(content)} chars")

# Process main_fixed.js
print("\nProcessing main_fixed.js...")
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main_fixed.js', 'r', encoding='utf-8') as f:
    content = f.read()

original_length = len(content)
content = clean_products(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main_fixed.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"main_fixed.js: removed {original_length - len(content)} chars")

# Process diagnosis/index.html
print("\nProcessing diagnosis/index.html...")
with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\diagnosis\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

original_length = len(content)
content = clean_products(content)

with open(r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\diagnosis\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"diagnosis/index.html: removed {original_length - len(content)} chars")

print("\nDone! All broken link products removed.")
