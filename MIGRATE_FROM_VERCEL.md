# Migrating from Vercel to Cloudflare Pages (Free)
## Step-by-Step Guide to Save $20/month

---

## 🎯 Why Cloudflare Pages?

- ✅ **100% Free** (unlimited bandwidth!)
- ✅ **Faster** (global CDN)
- ✅ **Automatic deployments** from GitHub
- ✅ **Custom domains** supported
- ✅ **No credit card required**
- ✅ **Better free tier** than Vercel

---

## 📋 Pre-Migration Checklist

Before you start, make sure:
- [ ] Your code is pushed to GitHub
- [ ] Your site builds locally (`npm run build`)
- [ ] You know your custom domain (if you have one)
- [ ] You have access to your domain's DNS settings

---

## 🚀 Step 1: Set Up Cloudflare Pages

### **1.1 Create Cloudflare Account**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Sign up" (or "Log in" if you have an account)
3. Sign up with your GitHub account (easiest option)

### **1.2 Create New Project**
1. Click **"Create a project"**
2. Click **"Connect to Git"**
3. Authorize Cloudflare to access your GitHub
4. Select your repository: `Empire-State-Bulldogs/main`
5. Click **"Begin setup"**

### **1.3 Configure Build Settings**

Cloudflare should auto-detect Next.js, but verify:

- **Project name:** `empire-state-bulldogs` (or whatever you want)
- **Production branch:** `main`
- **Framework preset:** `Next.js` (should auto-detect)
- **Build command:** `npm run build` (or `pnpm build` if using pnpm)
- **Build output directory:** `.next`
- **Root directory:** `/` (leave as default)

**Important:** For Next.js on Cloudflare Pages, you might need to use the `@cloudflare/next-on-pages` adapter. But first, let's try the standard build.

### **1.4 Environment Variables (if needed)**

If your site uses environment variables:
1. Go to your project → **Settings** → **Environment Variables**
2. Add any variables you need (same as Vercel)
3. Make sure to add them for **Production**

### **1.5 Deploy!**

1. Click **"Save and Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `your-project-name.pages.dev`

---

## 🌐 Step 2: Set Up Custom Domain

### **2.1 Add Custom Domain in Cloudflare**

1. Go to your project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter your domain: `empirestatebulldogs.com` (or whatever yours is)
4. Click **"Continue"**

### **2.2 Update DNS Records**

Cloudflare will show you what DNS records to add:

**Option A: If your domain is already on Cloudflare:**
- DNS records update automatically
- Just wait a few minutes

**Option B: If your domain is elsewhere (GoDaddy, Namecheap, etc.):**
- Go to your domain registrar's DNS settings
- Add the CNAME record Cloudflare provides:
  - **Type:** CNAME
  - **Name:** `@` (or `www` for www subdomain)
  - **Value:** `your-project.pages.dev`
  - **TTL:** Auto (or 3600)

**For both root and www:**
- `@` → CNAME → `your-project.pages.dev`
- `www` → CNAME → `your-project.pages.dev`

### **2.3 SSL Certificate**

- Cloudflare automatically provisions SSL certificates
- Usually takes 5-15 minutes
- You'll see "Active" when it's ready

---

## 🔄 Step 3: Update Your Code (If Needed)

### **3.1 Remove Vercel Analytics (Optional)**

If you want to remove Vercel Analytics:

1. **Remove from layout.tsx:**
   ```tsx
   // Remove this import:
   import { Analytics } from "@vercel/analytics/next"
   
   // Remove this from your JSX:
   <Analytics />
   ```

2. **Remove from package.json:**
   ```bash
   npm uninstall @vercel/analytics
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Remove Vercel Analytics"
   git push origin main
   ```

### **3.2 Update Any Vercel-Specific Code**

Check for:
- Vercel environment variables
- Vercel-specific API routes
- Any hardcoded Vercel URLs

---

## ✅ Step 4: Verify Everything Works

### **4.1 Test Your Site**

1. Visit your Cloudflare Pages URL
2. Visit your custom domain (if set up)
3. Test all pages and features
4. Check mobile responsiveness
5. Test forms and API routes

### **4.2 Check Build Logs**

1. Go to your project → **Deployments**
2. Click on a deployment to see build logs
3. Check for any errors or warnings

---

## 🗑️ Step 5: Remove Vercel (When Ready)

**⚠️ Important:** Only do this AFTER you've verified Cloudflare is working!

### **5.1 Disconnect Vercel from GitHub**

1. Go to [vercel.com](https://vercel.com) → Your project
2. Go to **Settings** → **Git**
3. Click **"Disconnect"** (or just delete the project)

### **5.2 Cancel Vercel Subscription**

1. Go to Vercel Dashboard → **Settings** → **Billing**
2. Click **"Cancel subscription"** or **"Downgrade to Free"**
3. Confirm cancellation

**Note:** You can keep the free tier if you want, but you won't need it anymore.

---

## 🆘 Troubleshooting

### **Build Fails on Cloudflare**

**Issue:** Next.js build fails
**Solution:** 
- Check build logs for errors
- Make sure `npm run build` works locally
- Try updating Next.js: `npm install next@latest`

### **Custom Domain Not Working**

**Issue:** Domain shows error or doesn't load
**Solution:**
- Wait 15-30 minutes for DNS propagation
- Check DNS records are correct
- Verify SSL certificate is active in Cloudflare

### **API Routes Not Working**

**Issue:** API routes return errors
**Solution:**
- Cloudflare Pages supports Next.js API routes
- Check function timeout limits (free tier has limits)
- Review Cloudflare Pages docs for Next.js

### **Environment Variables Not Working**

**Issue:** Environment variables not accessible
**Solution:**
- Make sure variables are set in Cloudflare dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding variables

---

## 📊 Comparison: Vercel vs Cloudflare Pages

| Feature | Vercel Free | Cloudflare Pages Free |
|---------|-------------|----------------------|
| Bandwidth | 100GB/mo | **Unlimited** |
| Builds | Unlimited | Unlimited |
| Custom Domain | ✅ | ✅ |
| SSL | ✅ | ✅ |
| Auto Deploy | ✅ | ✅ |
| Serverless Functions | ✅ | ✅ |
| **Cost** | **$0** | **$0** |

**Winner:** Cloudflare Pages (unlimited bandwidth!)

---

## 🎯 Quick Migration Checklist

- [ ] Create Cloudflare account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add environment variables (if needed)
- [ ] Deploy to Cloudflare Pages
- [ ] Set up custom domain
- [ ] Test everything works
- [ ] Update DNS records
- [ ] Wait for SSL certificate
- [ ] Verify site is live
- [ ] Remove Vercel (optional)
- [ ] Cancel Vercel subscription
- [ ] **Save $20/month!** 🎉

---

## 💡 Pro Tips

1. **Keep Vercel running during migration:**
   - Don't delete Vercel until Cloudflare is confirmed working
   - This gives you a backup

2. **Test thoroughly:**
   - Check all pages
   - Test forms
   - Verify API routes
   - Check mobile

3. **Monitor for a few days:**
   - Watch for any issues
   - Check analytics (if you have them)
   - Verify performance

4. **Update any hardcoded URLs:**
   - Check your code for Vercel URLs
   - Update to Cloudflare URLs if needed

---

## 🎉 You're Done!

You've successfully migrated from Vercel to Cloudflare Pages:
- ✅ Free hosting
- ✅ Unlimited bandwidth
- ✅ Automatic deployments
- ✅ Custom domain
- ✅ $20/month saved!

**Your site is now running on Cloudflare Pages!** 🚀

---

## 📚 Need Help?

- **Cloudflare Docs:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Next.js on Cloudflare:** Check Cloudflare's Next.js documentation
- **Support:** Cloudflare Community Forums

---

**Last Updated:** 2024-01-15

