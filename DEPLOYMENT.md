# Deployment Guide

This guide covers deploying your Radiance Medical Spa website to various hosting platforms.

## Table of Contents
- [Quick Deploy Options](#quick-deploy-options)
- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [AWS S3](#aws-s3)
- [Traditional Hosting](#traditional-hosting)
- [Post-Deployment Checklist](#post-deployment-checklist)

---

## Quick Deploy Options

### Fastest: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd medspa-website
netlify deploy --prod
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select branch
3. Site live at `https://username.github.io/repo-name`

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## GitHub Pages

### Setup
1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/medspa-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: `main` or `master`
   - Folder: `/ (root)`
   - Click Save

3. **Custom Domain (Optional)**
   - Add CNAME file: `echo "www.yourmedspa.com" > CNAME`
   - Configure DNS:
     ```
     Type: CNAME
     Name: www
     Value: username.github.io
     ```

### Pros & Cons
✅ Free hosting  
✅ Automatic HTTPS  
✅ Easy setup  
❌ Limited to static sites  
❌ No server-side processing  

---

## Netlify

### Method 1: Drag & Drop (Easiest)
1. Go to https://netlify.com
2. Sign up / Log in
3. Drag your project folder to the deploy zone
4. Site is live!

### Method 2: Git Integration
1. **Connect Repository**
   - New site from Git
   - Choose GitHub/GitLab/Bitbucket
   - Select repository

2. **Build Settings**
   - Build command: (leave empty)
   - Publish directory: `/` or `.`
   - Click Deploy

3. **Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Configure DNS (Netlify DNS recommended)

### Method 3: CLI
```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init
netlify deploy --prod
```

### Environment Variables
- Site settings → Build & deploy → Environment
- Add variables (e.g., API keys)

### Form Handling
Forms automatically work with Netlify:
```html
<form name="booking" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

### Pros & Cons
✅ Free tier available  
✅ Automatic deploys on git push  
✅ Built-in form handling  
✅ Serverless functions  
✅ Automatic HTTPS  
✅ Global CDN  
❌ 100GB bandwidth limit on free tier  

---

## Vercel

### Setup
1. **Install CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd medspa-website
   vercel
   ```

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

### Git Integration
1. Import project from GitHub
2. Configure:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: `.`
3. Deploy

### Custom Domain
- Project Settings → Domains
- Add domain
- Configure DNS records

### Pros & Cons
✅ Free for personal use  
✅ Lightning fast CDN  
✅ Automatic HTTPS  
✅ Serverless functions  
✅ Preview deployments  
❌ More complex than Netlify  

---

## AWS S3 + CloudFront

### Setup S3 Bucket
1. **Create Bucket**
   - Name: yourmedspa.com
   - Region: Closest to target audience
   - Uncheck "Block all public access"

2. **Configure for Static Hosting**
   - Properties → Static website hosting
   - Enable
   - Index document: `index.html`
   - Error document: `index.html`

3. **Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::yourmedspa.com/*"
     }]
   }
   ```

4. **Upload Files**
   ```bash
   aws s3 sync . s3://yourmedspa.com --delete
   ```

### CloudFront Distribution
1. Create distribution
2. Origin: S3 bucket
3. Enable HTTPS
4. Custom SSL certificate (ACM)
5. Alternative domain names: yourmedspa.com

### Route 53 DNS
- Create hosted zone
- Add A record → Alias to CloudFront

### Pros & Cons
✅ Highly scalable  
✅ Pay only for usage  
✅ Global CDN  
✅ Full AWS integration  
❌ More complex setup  
❌ Requires AWS knowledge  

---

## Traditional Hosting

### Via FTP
1. **Connect to Server**
   - Host: ftp.yourhost.com
   - Username: your_username
   - Password: your_password

2. **Upload Files**
   - Navigate to `public_html` or `www`
   - Upload all files and folders
   - Preserve directory structure

### Via cPanel
1. **File Manager**
   - Navigate to `public_html`
   - Upload files or extract zip

2. **Or use Git Deploy (if available)**
   ```bash
   cd public_html
   git clone https://github.com/username/medspa-website.git .
   ```

### Popular Hosting Providers
- **Bluehost**: Shared hosting, cPanel
- **SiteGround**: Performance-optimized
- **HostGator**: Budget-friendly
- **DreamHost**: Developer-friendly
- **GoDaddy**: Domain + hosting bundles

### Pros & Cons
✅ Familiar interface  
✅ Customer support  
✅ Email hosting included  
❌ Usually slower  
❌ Manual updates  
❌ More expensive  

---

## SSL Certificate Setup

### Free SSL (Let's Encrypt)
Most modern hosts include free SSL:
- Netlify: Automatic
- Vercel: Automatic
- GitHub Pages: Automatic
- cPanel: Auto SSL option

### Manual Setup
1. Obtain certificate (Let's Encrypt, ZeroSSL)
2. Upload to hosting
3. Configure server
4. Force HTTPS redirect

### Force HTTPS
Add to `.htaccess` (if using Apache):
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## DNS Configuration

### Basic Setup
```
Type: A
Name: @
Value: [your-server-ip]
TTL: 3600

Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

### For Netlify
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

### For Vercel
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Post-Deployment Checklist

### Testing
- [ ] Homepage loads correctly
- [ ] All images display
- [ ] Navigation links work
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] SSL certificate active (HTTPS)
- [ ] No console errors
- [ ] Analytics tracking works
- [ ] Page speed acceptable (<3s)

### SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify ownership in Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager (if using)
- [ ] Add to Google Business Profile

### Performance
- [ ] Enable Gzip compression
- [ ] Configure CDN
- [ ] Set up caching headers
- [ ] Optimize images
- [ ] Minify CSS/JS (optional)

### Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Backup system in place
- [ ] Update contact forms with spam protection

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure analytics
- [ ] Set up goal tracking
- [ ] Test form submissions
- [ ] Monitor error logs

---

## Continuous Deployment

### GitHub Actions (Example)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

---

## Troubleshooting

### Site Not Loading
1. Check DNS propagation (24-48 hours)
2. Verify files uploaded correctly
3. Check index.html in root directory
4. Review hosting logs

### Images Not Displaying
1. Check file paths (case-sensitive on Linux)
2. Verify images uploaded
3. Check permissions (644 for files, 755 for folders)

### Forms Not Working
1. Configure backend (FormSpree, Netlify Forms)
2. Test submission endpoint
3. Check spam filters

### SSL Issues
1. Wait for certificate provisioning (up to 24 hours)
2. Check DNS records
3. Force HTTPS redirect

---

## Cost Comparison

| Platform | Free Tier | Pro Plan | SSL | CDN | Forms |
|----------|-----------|----------|-----|-----|-------|
| Netlify | ✅ 100GB | $19/mo | ✅ | ✅ | ✅ |
| Vercel | ✅ | $20/mo | ✅ | ✅ | ❌ |
| GitHub Pages | ✅ | ❌ | ✅ | ❌ | ❌ |
| AWS S3 | Pay-as-go | N/A | ✅ | ✅ | ❌ |
| Shared Hosting | ❌ | $3-10/mo | ✅ | ❌ | ❌ |

---

## Recommended Setup

**For Medical Spa Website:**
1. **Hosting**: Netlify (best balance of features/ease)
2. **DNS**: Cloudflare (free CDN + security)
3. **Forms**: Netlify Forms or FormSpree
4. **Analytics**: Google Analytics 4
5. **Monitoring**: UptimeRobot (free)

**Total Cost**: $0-19/month depending on traffic

---

## Support Resources

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3)

---

**Need help?** Create an issue on the GitHub repository or consult your hosting provider's support.
