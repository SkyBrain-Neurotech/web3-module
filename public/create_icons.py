from PIL import Image, ImageDraw

def create_icon(size):
    # Create a new image with gradient background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Create gradient background
    for y in range(size):
        # Gradient from cyan to purple
        r = int(102 * (y / size))
        g = int(126 + (212 - 126) * (1 - y / size))
        b = int(234 + (255 - 234) * (1 - y / size))
        draw.rectangle([(0, y), (size, y+1)], fill=(r, g, b, 255))
    
    # Draw a brain-like circle
    center = size // 2
    radius = size // 3
    draw.ellipse([center - radius, center - radius, center + radius, center + radius], 
                 outline='white', width=size//32)
    
    # Draw center line
    draw.line([(center, center - radius), (center, center + radius)], 
              fill='white', width=size//32)
    
    # Draw horizontal lines for brain texture
    for offset in [-radius//2, 0, radius//2]:
        y = center + offset
        draw.line([(center - radius//2, y), (center + radius//2, y)], 
                  fill='white', width=size//64)
    
    return img

# Create 192x192 icon
icon192 = create_icon(192)
icon192.save('icon-192.png', 'PNG')
print('Created icon-192.png')

# Create 512x512 icon
icon512 = create_icon(512)
icon512.save('icon-512.png', 'PNG')
print('Created icon-512.png')