# Image Directory Structure

This document describes the required images for the Radiance Medical Spa website and their specifications.

## Directory Structure

```
images/
│
├── hero-background.jpg          # Main hero section background
│
├── services/                    # Service/treatment images
│   ├── botox.jpg
│   ├── fillers.jpg
│   ├── laser.jpg
│   ├── body-contouring.jpg
│   ├── chemical-peel.jpg
│   ├── microneedling.jpg
│   ├── hydrafacial.jpg
│   └── skin-tightening.jpg
│
├── results/                     # Before/after images
│   ├── botox-before.jpg
│   ├── botox-after.jpg
│   ├── filler-before.jpg
│   ├── filler-after.jpg
│   ├── laser-before.jpg
│   ├── laser-after.jpg
│   ├── body-before.jpg
│   ├── body-after.jpg
│   ├── peel-before.jpg
│   ├── peel-after.jpg
│   ├── microneedling-before.jpg
│   └── microneedling-after.jpg
│
├── about/                       # Team and facility photos
│   └── medical-director.jpg
│
├── testimonials/                # Client photos
│   ├── client-1.jpg
│   ├── client-2.jpg
│   ├── client-3.jpg
│   ├── client-4.jpg
│   ├── client-5.jpg
│   └── client-6.jpg
│
├── instagram/                   # Social media posts
│   ├── post-1.jpg
│   ├── post-2.jpg
│   ├── post-3.jpg
│   ├── post-4.jpg
│   ├── post-5.jpg
│   └── post-6.jpg
│
└── badges/                      # Certification and trust badges
    ├── medical-board.svg
    ├── amspa-member.svg
    ├── safety-certified.svg
    ├── allergan-certified.svg
    ├── galderma-expert.svg
    ├── amspa-gold.svg
    ├── secure-ssl.svg
    └── hipaa-compliant.svg
```

## Image Specifications

### Hero Background
- **Filename**: `hero-background.jpg`
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG
- **File Size**: < 300KB
- **Content**: Spa environment, treatment room, or beauty/wellness imagery
- **Style**: High-quality, professional, well-lit
- **Note**: Should have good contrast for white text overlay

### Service Images
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: JPG or WebP
- **File Size**: < 150KB each
- **Content**: Treatment-specific professional photos
- **Style**: Clean, medical-grade appearance
- **Naming Convention**: `[treatment-name].jpg`

**Required Service Images:**
1. `botox.jpg` - Botox injection or before/after
2. `fillers.jpg` - Dermal filler procedure or results
3. `laser.jpg` - Laser treatment device or procedure
4. `body-contouring.jpg` - Body contouring treatment
5. `chemical-peel.jpg` - Chemical peel application
6. `microneedling.jpg` - Microneedling device or procedure
7. `hydrafacial.jpg` - HydraFacial treatment
8. `skin-tightening.jpg` - RF device or treatment

### Before/After Results
- **Dimensions**: 600x800px (3:4 portrait aspect ratio)
- **Format**: JPG
- **File Size**: < 200KB each
- **Content**: Medical-grade before/after photos
- **Style**: Same lighting, angle, and distance for both photos
- **Naming Convention**: `[treatment]-before.jpg` and `[treatment]-after.jpg`

**Important Guidelines:**
- Use same lighting for before/after
- Same camera angle and distance
- Proper consent obtained from clients
- Comply with medical advertising regulations
- Include appropriate disclaimers

### Team Photos
- **Dimensions**: 800x800px (1:1 square)
- **Format**: JPG
- **File Size**: < 200KB
- **Content**: Professional headshots or team photos
- **Style**: Professional, warm, approachable
- **Background**: Clean, neutral, or spa environment

### Testimonial Photos
- **Dimensions**: 300x300px (1:1 square)
- **Format**: JPG
- **File Size**: < 100KB each
- **Content**: Client headshots (with permission)
- **Style**: Professional but natural
- **Note**: Can use stock photos if client photos unavailable

### Instagram Posts
- **Dimensions**: 1080x1080px (1:1 square)
- **Format**: JPG or WebP
- **File Size**: < 200KB each
- **Content**: Recent Instagram posts or promotional content
- **Style**: Consistent with brand aesthetic

### Badges/Certifications
- **Format**: SVG (preferred) or PNG
- **Dimensions**: Scalable (SVG) or 200px height (PNG)
- **File Size**: < 50KB each
- **Content**: Official certification badges
- **Style**: High-quality, official logos
- **Background**: Transparent

**Common Badges:**
- Medical board certification
- American Med Spa Association
- Allergan certification
- Galderma expert
- Safety certifications
- SSL/security badges
- HIPAA compliance

## Image Sourcing Options

### Professional Photography
**Recommended** - Best for authenticity and brand consistency
- Hire medical spa photographer
- Cost: $500-2,000 per session
- Includes: Treatment photos, facility, team, before/afters

### Stock Photography
**Alternative** - Good for placeholder or supplemental images
- **Websites**:
  - Unsplash (free)
  - Pexels (free)
  - Shutterstock (paid)
  - Adobe Stock (paid)
- **Search Terms**: medical spa, aesthetic treatment, beauty clinic, skincare, wellness
- **Note**: Avoid overly generic or recognizable stock photos

### Client-Provided
- Request before/after photos from satisfied clients
- Obtain proper consent and releases
- Ensure compliance with HIPAA and advertising laws

## Image Optimization

### Before Upload
1. **Resize** images to exact specifications
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app)
3. **Convert** to WebP for better compression (optional)
4. **Rename** following naming convention
5. **Test** on retina displays

### Tools
- **Adobe Photoshop**: Professional editing
- **Canva**: Easy online editing
- **GIMP**: Free Photoshop alternative
- **Figma**: Design and export

### Performance Targets
- Individual image: < 200KB
- Total page weight: < 2MB
- Lazy loading: Enabled (in code)
- Format: JPG for photos, SVG for logos

## Legal Considerations

### Before/After Photos
- ✅ Obtain written consent from clients
- ✅ Same lighting and camera settings
- ✅ Include appropriate disclaimers
- ✅ Comply with state regulations
- ❌ Don't mislead or exaggerate results
- ❌ Don't use photos without permission

### Copyright
- ✅ Own the rights to all images
- ✅ Get licensing for stock photos
- ✅ Credit photographers if required
- ❌ Don't use Google Images without permission
- ❌ Don't use competitor's photos

### HIPAA Compliance
- Patient photos require explicit consent
- Store consent forms securely
- Remove metadata from images
- Follow de-identification guidelines

## Quick Setup Checklist

- [ ] Create `/images` directory structure
- [ ] Add hero background image
- [ ] Add 8 service images
- [ ] Add 12 before/after images (6 treatments × 2)
- [ ] Add medical director photo
- [ ] Add 6 testimonial photos
- [ ] Add 6 Instagram post images
- [ ] Add certification badges (SVG/PNG)
- [ ] Optimize all images
- [ ] Test on website
- [ ] Verify mobile display
- [ ] Check load times

## Additional Resources

### Free Stock Photo Sites
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### Image Optimization Tools
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim: https://imageoptim.com

### Legal Resources
- HIPAA Guidelines: https://www.hhs.gov/hipaa
- FTC Advertising Guidelines
- State Medical Board Regulations

---

**Need Help?** Refer to the main README.md for more information or create an issue on GitHub.
