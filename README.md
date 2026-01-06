# Empire State Bulldogs - Development Guide

## 🎯 Complete Cursor-Based Development Workflow

This project uses **Cursor** as the primary development environment. No v0.dev, no Vercel Pro - just you, Cursor, and GitHub.

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

---

## 📚 Documentation

### **Essential Guides:**

1. **[CURSOR_WORKFLOW.md](./CURSOR_WORKFLOW.md)** ⭐
   - Complete daily workflow
   - Building in Cursor
   - Previewing locally
   - Git best practices

2. **[DEPLOYMENT.md](./DEPLOYMENT.md)**
   - Free hosting options
   - Cloudflare Pages setup
   - Netlify alternative
   - Custom domains

3. **[MULTI_PROJECT.md](./MULTI_PROJECT.md)**
   - Managing multiple websites
   - Project organization
   - Sharing code between projects

4. **[QUICK_START.md](./QUICK_START.md)**
   - Quick reference
   - Common commands
   - Troubleshooting

---

## 🛠️ Available Scripts

```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Run production build locally
pnpm lint         # Check for code issues
pnpm type-check   # Check TypeScript errors
pnpm clean        # Clean build artifacts
pnpm preview      # Build and preview production
```

---

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   └── [components].tsx  # Feature components
│
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

---

## 🎨 Development Workflow

### **Daily Workflow:**

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Start dev server:**
   ```bash
   pnpm dev
   ```

3. **Build features in Cursor:**
   - Use Cmd/Ctrl + K for inline edits
   - Use Cmd/Ctrl + L to chat with AI
   - Ask Cursor to create/modify components

4. **Preview in browser:**
   - Open http://localhost:3000
   - Changes auto-reload
   - Test on mobile (DevTools)

5. **Test production build:**
   ```bash
   pnpm build
   pnpm start
   ```

6. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

---

## 🔧 Using Cursor AI

### **Common Tasks:**

**Create a component:**
```
"Create a contact form component with name, email, and message fields. 
Use Tailwind CSS and make it responsive."
```

**Modify existing code:**
- Select code → Cmd/Ctrl + K
- "Add error handling to this function"

**Debug issues:**
- Cmd/Ctrl + L
- "Why is this component not rendering correctly?"

**Refactor code:**
- Select code → Cmd/Ctrl + K
- "Optimize this component for performance"

---

## 🚢 Deployment

### **Current Setup:**
- **Development:** Local (Cursor + `pnpm dev`)
- **Version Control:** GitHub
- **Deployment:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

### **Recommended: Cloudflare Pages (Free)**
- Unlimited bandwidth
- Automatic deployments
- Custom domains
- $0/month

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full setup guide.

---

## 📦 Dependencies

### **Core:**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### **UI Components:**
- Radix UI (headless components)
- shadcn/ui (component library)
- Lucide React (icons)

### **See [package.json](./package.json) for full list**

---

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
# Add your environment variables here
# Never commit this file!
```

Required variables (if any) should be documented here.

---

## 🐛 Troubleshooting

### **Port 3000 already in use:**
```bash
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Or use different port
pnpm dev -- -p 3001
```

### **Dependencies not installing:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### **Build errors:**
```bash
pnpm type-check  # Check TypeScript errors
pnpm lint        # Check linting errors
```

---

## 📝 Git Workflow

### **Before starting work:**
```bash
git pull origin main
git status
```

### **Feature development:**
```bash
git checkout -b feature/my-feature
# Make changes
git add .
git commit -m "Add feature"
git push origin feature/my-feature
# Create PR or merge to main
```

### **Emergency: Undo changes**
```bash
git checkout -- .           # Discard uncommitted changes
git reset --soft HEAD~1     # Undo last commit (keep changes)
```

---

## 🎯 Best Practices

1. ✅ **Always pull before starting work**
2. ✅ **Test locally before pushing**
3. ✅ **Use descriptive commit messages**
4. ✅ **Create feature branches for big changes**
5. ✅ **Test production build before deploying**
6. ✅ **Keep dependencies updated**
7. ✅ **Document complex logic**

---

## 📞 Support

- **Cursor Documentation:** [cursor.sh/docs](https://cursor.sh/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Project Issues:** Create GitHub issue

---

## 🎉 You're All Set!

You now have a complete development workflow:
- ✅ Build in Cursor
- ✅ Preview locally
- ✅ Version control with Git
- ✅ Deploy for free
- ✅ Save $40/month

**Happy coding!** 🚀

---

## 📄 License

[Your License Here]

---

**Last Updated:** 2024-01-15


