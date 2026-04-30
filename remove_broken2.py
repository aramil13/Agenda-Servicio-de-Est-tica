#!/usr/bin/env python3
import re

def remove_broken_products(content, filename):
    """Remove products with broken links"""
    
    # Products to remove (based on known broken URLs)
    broken_patterns = [
        # Original broken image URLs
        r'mnproductpage\d+x\d+px\d+\.jpg',
        r'IMG_c_s_\d+.*\.jpg',
        
        # Suspicious product URLs (duo products might not exist)
        r'products/head-hair-heal-care-duo[",]',
        r'products/true-soft-care-duo[",]',
        r'products/sheer-silver-shampoo-conditioner-duo[",]',
        
        # Products with wrong URL patterns
        r'products/bond-builder"[,\s]',  # Now fixed but checking
    ]
    
    original_content = content
    
    for pattern in broken_patterns:
        # Find products matching broken patterns
        matches = re.finditer(pattern, content)
        for match in matches:
            # Find the full product entry (from start of product to closing })
            start = content.rfind('{', 0, match.start())
            # Find the product name before {
            name_start = content.rfind('\n    ', 0, start)
            if name_start == -1:
                name_start = start - 100
            
            # Find the end of this product entry
            brace_count = 0
            pos = start
            while pos < len(content):
                if content[pos] == '{':
                    brace_count += 1
                elif content[pos] == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end = pos + 1
                        # Include trailing comma if present
                        if end < len(content) and content[end] == ',':
                            end += 1
                        break
                pos += 1
            
            if pos < len(content):
                product_entry = content[name_start:pos+1]
                # Check if this is a product entry
                if 'name:' in product_entry and 'url:' in product_entry:
                    print(f"Removing broken product in {filename}:")
                    print(f"  Pattern matched: {match.group()}")
                    # Extract product name
                    name_match = re.search(r'(\w+):\s*\{', product_entry)
                    if name_match:
                        print(f"  Product: {name_match.group(1)}")
                    content = content[:name_start] + content[pos+1:]
                    break  # Restart as positions changed
    
    return content

# Process files
files = [
    r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main.js',
    r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\main_fixed.js',
    r'C:\Users\tester\OneDrive\Documentos\Agenda Servicio de Estética\diagnosis\index.html'
]

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_length = len(content)
        content = remove_broken_products(content, filepath.split('\\')[-1])
        
        if len(content) < original_length:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath.split('\\')[-1]}")
        else:
            print(f"No broken products found in {filepath.split('\\')[-1]}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print("\nDone!")
