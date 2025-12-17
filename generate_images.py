#!/usr/bin/env python3
"""
Medical Spa Website - Placeholder Image Generator
Generates all required placeholder images for the website
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Color palette matching the website
COLORS = {
    'primary': '#c9a78e',
    'secondary': '#8b9d83',
    'accent': '#d4a59a',
    'light': '#faf8f6',
    'text': '#2c2c2c'
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_placeholder(width, height, text, filename, bg_color='primary'):
    """Create a placeholder image with text"""
    # Create image
    bg = hex_to_rgb(COLORS[bg_color])
    img = Image.new('RGB', (width, height), bg)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font_size = int(height * 0.1)
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Draw text in center
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    position = ((width - text_width) // 2, (height - text_height) // 2)
    draw.text(position, text, fill='white', font=font)
    
    # Add dimensions text
    dim_text = f"{width}x{height}"
    try:
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 20)
    except:
        small_font = font
    
    dim_bbox = draw.textbbox((0, 0), dim_text, font=small_font)
    dim_width = dim_bbox[2] - dim_bbox[0]
    dim_position = ((width - dim_width) // 2, height - 40)
    draw.text(dim_position, dim_text, fill='white', font=small_font)
    
    # Save
    os.makedirs(os.path.dirname(filename) if os.path.dirname(filename) else '.', exist_ok=True)
    img.save(filename, 'JPEG', quality=85)
    print(f"✓ Created: {filename}")

def generate_all_images():
    """Generate all required placeholder images"""
    
    print("🎨 Generating Medical Spa Website Images...\n")
    
    # Hero Background
    print("Creating hero image...")
    create_placeholder(1920, 1080, "Luxury Spa Interior", "images/hero-background.jpg", 'primary')
    
    # Service Images
    print("\nCreating service images...")
    services = [
        ("Botox", "botox"),
        ("Dermal Fillers", "fillers"),
        ("Laser Treatment", "laser"),
        ("Body Contouring", "body-contouring"),
        ("Chemical Peel", "chemical-peel"),
        ("Microneedling", "microneedling"),
        ("HydraFacial", "hydrafacial"),
        ("Skin Tightening", "skin-tightening")
    ]
    
    for service_name, filename in services:
        create_placeholder(800, 600, service_name, f"images/services/{filename}.jpg", 'secondary')
    
    # Before/After Results
    print("\nCreating before/after images...")
    treatments = ["botox", "filler", "laser", "body", "peel", "microneedling"]
    
    for treatment in treatments:
        create_placeholder(600, 800, f"{treatment.title()} - Before", 
                         f"images/results/{treatment}-before.jpg", 'accent')
        create_placeholder(600, 800, f"{treatment.title()} - After", 
                         f"images/results/{treatment}-after.jpg", 'primary')
    
    # Team Photo
    print("\nCreating team photo...")
    create_placeholder(800, 800, "Dr. Sarah Mitchell", "images/about/medical-director.jpg", 'primary')
    
    # Testimonial Photos
    print("\nCreating testimonial photos...")
    clients = ["Jennifer L.", "Michael R.", "Sarah K.", "Amanda T.", "Lisa M.", "David P."]
    for i, name in enumerate(clients, 1):
        create_placeholder(300, 300, name, f"images/testimonials/client-{i}.jpg", 'secondary')
    
    # Instagram Posts
    print("\nCreating Instagram posts...")
    for i in range(1, 7):
        create_placeholder(1080, 1080, f"Instagram Post {i}", 
                         f"images/instagram/post-{i}.jpg", 'accent')
    
    # Certification Badges (SVG placeholders as colored squares)
    print("\nCreating badge placeholders...")
    badges = [
        "medical-board", "amspa-member", "safety-certified",
        "allergan-certified", "galderma-expert", "amspa-gold",
        "secure-ssl", "hipaa-compliant"
    ]
    
    for badge in badges:
        create_placeholder(200, 200, badge.replace('-', ' ').title(), 
                         f"images/badges/{badge}.png", 'primary')
    
    print("\n✅ All images generated successfully!")
    print(f"\n📊 Total images created: {8 + 12 + 1 + 6 + 6 + 8} = 41 images")
    print("\n🚀 Your website is now ready to view!")
    print("   Open index.html in your browser\n")

if __name__ == "__main__":
    # Change to the script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Generate all images
    generate_all_images()
