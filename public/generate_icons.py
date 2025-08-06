#!/usr/bin/env python3
import struct
import zlib

def create_png(width, height, filename):
    """Create a simple PNG file with exact dimensions"""
    
    # Create image data - gradient from cyan to purple
    raw_data = []
    for y in range(height):
        row = []
        for x in range(width):
            # Gradient calculation
            t = (x + y) / (width + height)
            r = int(0 + (102 * t))
            g = int(212 - (86 * t))
            b = int(255 - (21 * t))
            a = 255
            row.extend([r, g, b, a])
        raw_data.append(bytes(row))
    
    def png_chunk(chunk_type, data):
        """Create a PNG chunk"""
        chunk_len = len(data)
        chunk_data = chunk_type + data
        chunk_crc = zlib.crc32(chunk_data) & 0xffffffff
        return struct.pack('>I', chunk_len) + chunk_data + struct.pack('>I', chunk_crc)
    
    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr = png_chunk(b'IHDR', ihdr_data)
    
    # IDAT chunk (compressed image data)
    raw = b''.join(b'\x00' + row for row in raw_data)  # Add filter type 0 to each row
    idat_data = zlib.compress(raw, 9)
    idat = png_chunk(b'IDAT', idat_data)
    
    # IEND chunk
    iend = png_chunk(b'IEND', b'')
    
    # Write PNG file
    with open(filename, 'wb') as f:
        f.write(png_signature + ihdr + idat + iend)
    
    print(f"Created {filename} - {width}x{height}")

# Create icons with exact dimensions
create_png(192, 192, 'icon-192.png')
create_png(512, 512, 'icon-512.png')