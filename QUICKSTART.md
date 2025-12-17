# Quick Start Setup Guide

Get your medical spa website up and running in 3 simple steps!

## Step 1: Customize Content (10 minutes)

### 1.1 Business Information
Open `index.html` and find/replace:
- **Business Name**: "Radiance Medical Spa" → Your business name
- **Phone**: "(555) 012-3456" → Your phone number
- **Email**: "info@radiancemedspa.com" → Your email
- **Address**: "123 Luxury Lane, Beverly Hills, CA 90210" → Your address

### 1.2 Social Media
Update social media links in the footer:
```html
<!-- Find these lines and update href attributes -->
<a href="#" aria-label="Facebook">  <!-- Update with your Facebook URL -->
<a href="#" aria-label="Instagram"> <!-- Update with your Instagram URL -->
```

### 1.3 Services & Pricing
Update service descriptions and pricing in the Services section:
```html
<!-- Each service card has: -->
<h3>Service Name</h3>
<p>Service description</p>
<span class="price">From $XX</span>
```

## Step 2: Add Images (15 minutes)

### Priority Images (Must Have):
1. **Hero Background** (`images/hero-background.jpg`)
   - 1920x1080px
   - Your spa interior or treatment room
   - Professional, high-quality photo

2. **Service Images** (`images/services/`)
   - 8 images @ 800x600px
   - Name them: botox.jpg, fillers.jpg, laser.jpg, etc.

3. **Medical Director Photo** (`images/about/medical-director.jpg`)
   - 800x800px
   - Professional headshot

### Optional (Can Add Later):
- Before/after images
- Team photos
- Testimonial photos
- Instagram posts

**Quick Tip**: Use stock photos temporarily from:
- Unsplash.com
- Pexels.com
Search: "medical spa", "aesthetic treatment", "beauty clinic"

## Step 3: Deploy (5 minutes)

### Option A: Netlify (Recommended - Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag the entire `medspa-website` folder to deploy
4. Your site is live!
5. Add custom domain in settings (optional)

### Option B: GitHub Pages (Free)
```bash
# In terminal/command prompt:
cd medspa-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Then enable GitHub Pages in repo settings
```

### Option C: Traditional Hosting
1. Connect via FTP to your hosting
2. Upload all files to `public_html` folder
3. Done!

## Optional Customizations

### Change Colors
Edit `css/style.css` - find these lines at the top:
```css
:root {
    --primary-color: #c9a78e;      /* Main brand color */
    --secondary-color: #8b9d83;    /* Accent color */
    --accent-color: #d4a59a;       /* Highlights */
}
```
Replace with your brand colors!

### Change Fonts
In `index.html` `<head>` section, update the Google Fonts link:
```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- Replace with your preferred fonts -->
```

Then update in `css/style.css`:
```css
--font-heading: 'Your Heading Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Setup Contact Form
Choose one:

**Option 1 - Netlify Forms** (if using Netlify):
Already configured! Forms will show up in your Netlify dashboard.

**Option 2 - FormSpree** (any hosting):
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3 - Custom Backend**:
Update the `submitForm()` function in `js/main.js` with your API endpoint.

### Add Analytics
In `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## Testing Checklist

Before going live, test:
- [ ] Homepage loads properly
- [ ] All navigation links work
- [ ] Images display correctly
- [ ] Contact form submits
- [ ] Phone number is clickable on mobile
- [ ] Website works on mobile devices
- [ ] No broken links
- [ ] SSL certificate active (https://)

## Common Issues & Solutions

### Images Not Showing
**Problem**: Broken image icons  
**Solution**: Check file names match exactly (case-sensitive). Ensure images are in correct folders.

### Form Not Working
**Problem**: Form submits but nothing happens  
**Solution**: Set up FormSpree or Netlify Forms (see above).

### Mobile Menu Not Working
**Problem**: Menu doesn't open on mobile  
**Solution**: JavaScript file loaded? Check browser console (F12) for errors.

### Site Looks Different on Phone
**Problem**: Layout broken on mobile  
**Solution**: Clear browser cache. Test in incognito mode.

## Next Steps

After setup:
1. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Create Google Business Profile
   - Add to local directories

2. **Marketing**
   - Connect social media accounts
   - Set up booking system (Calendly, Acuity, etc.)
   - Start collecting reviews

3. **Analytics**
   - Set up conversion tracking
   - Monitor form submissions
   - Track phone calls

4. **Ongoing**
   - Update before/after photos monthly
   - Add new testimonials regularly
   - Keep promotions fresh
   - Blog posts (if applicable)

## Support

Need help?
- 📖 Full documentation: See `README.md`
- 🚀 Deployment guide: See `DEPLOYMENT.md`
- 🖼️ Image specs: See `images/IMAGE-GUIDE.md`
- 🐛 Issues: Create issue on GitHub

## Pro Tips

1. **Mobile First**: 70% of med spa traffic is mobile. Test thoroughly!
2. **Speed Matters**: Compress images, aim for <3 second load time
3. **Clear CTAs**: "Book Consultation" buttons should be visible
4. **Social Proof**: Update testimonials monthly for credibility
5. **Professional Photos**: Investment in photography pays off
6. **Track Everything**: Set up analytics from day one
7. **SSL Required**: Always use HTTPS for credibility and SEO
8. **Backup Regularly**: Keep copies of your site files

## Estimated Timeline

- Content customization: 30-60 minutes
- Image preparation: 1-2 hours
- Testing: 30 minutes
- Deployment: 15 minutes
- **Total**: 2-4 hours for complete setup

## Cost Breakdown

**Minimum (Free)**:
- Hosting: $0 (Netlify/GitHub Pages)
- Domain: $12/year
- SSL: $0 (included)
- **Total: $12/year**

**Recommended**:
- Hosting: $0-19/month (Netlify Pro optional)
- Domain: $12/year
- Professional photos: $500-1000 (one-time)
- **Total: $12-228/year + photos**

---

**Ready to launch?** Start with Step 1 above and you'll have a professional medical spa website live in under an hour!

Questions? See the comprehensive README.md file or create an issue on GitHub.
