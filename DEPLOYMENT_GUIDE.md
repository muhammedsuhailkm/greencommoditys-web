# Deployment Guide

## 🚀 Quick Start Deployment Options

### **Vercel (Recommended - Fastest)**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

**Vercel automatically:**

- Optimizes images
- Enables caching
- Sets up CDN
- Configures environment variables
- Provides automatic HTTPS

**Deployment time:** ~2-3 minutes
**Performance:** Excellent (auto-optimization)

---

### **Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

Or connect GitHub for auto-deployment.

---

### **Docker Deployment**

Create `Dockerfile`:

```dockerfile
FROM node:23-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t greencommoditys .
docker run -p 3000:3000 greencommoditys
```

---

### **AWS Amplify**

1. Connect GitHub repository
2. Configure build settings:

```yaml
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
```

3. Deploy

---

### **Self-Hosted (Node.js Server)**

**Ubuntu/Debian:**

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo>
cd greencommoditys

# Install dependencies
npm ci

# Build
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start application
pm2 start npm --name "green-commoditys" -- start

# Auto-restart on server reboot
pm2 startup
pm2 save
```

**Setup Nginx Reverse Proxy:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Performance headers
    add_header Strict-Transport-Security "max-age=31536000" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;

    # Cache static assets (1 year)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|webp|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Proxy to Node.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Enable SSL with Let's Encrypt:**

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d yourdomain.com

# Auto-renew
sudo systemctl enable certbot.timer
```

---

## 🌍 Environment Variables

Create `.env.local`:

```env
# Database (if needed)
DATABASE_URL=

# Analytics
NEXT_PUBLIC_GA_ID=

# API endpoints
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## ✅ Pre-Deployment Checklist

- [ ] All images converted to WebP ✅
- [ ] Next.js config optimized ✅
- [ ] Build runs successfully: `npm run build`
- [ ] No console errors in build output
- [ ] `next.config.mjs` has correct settings
- [ ] Environment variables set
- [ ] SSL certificate ready (self-hosted)
- [ ] Domain configured
- [ ] DNS pointing to server
- [ ] Backups created
- [ ] Analytics configured

---

## 🔍 Post-Deployment Verification

```bash
# Check build size
npm run build
# Output shows build statistics

# Test locally
npm start
# Visit http://localhost:3000

# Verify images load
# Check Network tab in DevTools for WebP format

# Check performance
# Use Google PageSpeed Insights
# Target: >90 score
```

---

## 📊 Performance Testing

**After Deployment:**

1. **Google PageSpeed Insights**
   - Visit: https://pagespeed.web.dev
   - Enter your domain
   - Target: >90 score

2. **Lighthouse**
   - Chrome DevTools → Lighthouse
   - Run audit
   - Check metrics

3. **WebPageTest**
   - Visit: https://www.webpagetest.org
   - Test from different locations

---

## 🚨 Troubleshooting

### Build fails

```bash
npm ci  # Clear install
rm -rf .next
npm run build  # Rebuild
```

### Images not loading

- Check `/public` folder permissions
- Verify WebP files exist
- Check browser console for errors
- Verify correct paths in code

### Slow performance

- Check server load: `top` or `htop`
- Monitor PM2: `pm2 status`
- Check Nginx access logs
- Verify caching headers

---

## 📞 Support

For deployment issues:

- Check Next.js docs: https://nextjs.org/docs/deployment
- Check provider-specific docs
- Review build logs for errors

---

**Deployment Status:** Ready for production 🚀
**Last Updated:** $(date)
