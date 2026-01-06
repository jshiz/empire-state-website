# Complete Cursor Development Workflow
## Build, Preview, and Deploy - All in Cursor, No v0 or Vercel Needed

---

## 🎯 Your New Workflow (100% in Cursor)

### **The Setup:**
- ✅ **Develop:** Cursor (with AI assistance)
- ✅ **Preview:** Local dev server (`pnpm dev`)
- ✅ **Version Control:** Git + GitHub
- ✅ **Deploy:** Free hosting options (see DEPLOYMENT.md)

### **What You're Saving:**
- 💰 $20/month v0.dev subscription
- 💰 $20/month Vercel subscription
- **Total: $480/year saved!**

---

## 🚀 Daily Development Workflow

### **1. Start Your Day**
```bash
# Navigate to your project
cd C:\Users\fragp\Documents\GitHub\main

# Pull latest changes from GitHub
git pull origin main

# Install dependencies (if needed)
pnpm install
```

### **2. Start Local Development Server**
```bash
# Start the dev server (runs on http://localhost:3000)
pnpm dev
```

**What this does:**
- Starts Next.js development server
- Hot reloads on file changes
- Shows errors in terminal and browser
- Accessible at `http://localhost:3000`

### **3. Build Your Features in Cursor**

**Using Cursor's AI:**
- Ask Cursor to create components: "Create a contact form component"
- Ask for modifications: "Add dark mode toggle to the header"
- Get help debugging: "Why is this component not rendering?"
- Refactor code: "Optimize this component for performance"

**Cursor Features You'll Use:**
- **Cmd/Ctrl + K**: Inline AI edits
- **Cmd/Ctrl + L**: Chat with AI about your codebase
- **Tab**: Accept AI suggestions
- **Multi-file editing**: Edit multiple files at once

### **4. Preview Your Changes**
- Changes auto-reload in browser (localhost:3000)
- Check mobile view: Browser DevTools → Toggle device toolbar
- Test different screen sizes
- Check console for errors

### **5. Test Production Build Locally**
```bash
# Build for production
pnpm build

# Preview production build
pnpm start
```

This runs the optimized production build locally so you can test before deploying.

### **6. Commit and Push to GitHub**

```bash
# Check what changed
git status

# See the actual changes
git diff

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add contact form with validation"

# Push to GitHub
git push origin main
```

---

## 📁 Managing Multiple Websites/Projects

### **Recommended Folder Structure:**
```
C:\Users\fragp\Documents\GitHub\
├── main\                    # Current project (Empire State Bulldogs)
├── website-2\               # Your second website
├── website-3\               # Your third website
└── utilities\               # Shared utilities/tools
```

### **Quick Project Switching:**

**Option 1: Use Cursor Workspaces**
1. File → Open Folder → Select project folder
2. Cursor remembers your workspace
3. Switch between projects easily

**Option 2: Use Terminal**
```bash
# Create alias for quick navigation (add to PowerShell profile)
function goto-main { cd C:\Users\fragp\Documents\GitHub\main }
function goto-site2 { cd C:\Users\fragp\Documents\GitHub\website-2 }

# Then just type: goto-main
```

**Option 3: Use Cursor's Recent Projects**
- File → Open Recent
- Quick access to all your projects

---

## 🔧 Enhanced Development Scripts

I've added helpful scripts to your `package.json`:

```bash
# Development
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Run production build locally
pnpm lint         # Check for code issues

# New helpful commands (see package.json)
pnpm type-check   # Check TypeScript errors
pnpm clean        # Clean build artifacts
```

---

## 🎨 Building Components in Cursor

### **Example: Creating a New Component**

1. **Ask Cursor:**
   ```
   "Create a new hero section component with a title, subtitle, 
   and CTA button. Use Tailwind CSS and make it responsive."
   ```

2. **Cursor will:**
   - Create the component file
   - Add proper TypeScript types
   - Style with Tailwind
   - Make it responsive

3. **You:**
   - Review the code
   - Test in browser (localhost:3000)
   - Refine as needed
   - Commit to Git

### **Example: Modifying Existing Code**

1. **Select code in Cursor**
2. **Press Cmd/Ctrl + K**
3. **Ask:** "Add error handling to this API route"
4. **Cursor updates the code**
5. **Test and commit**

---

## 🔍 Debugging in Cursor

### **Using Browser DevTools:**
1. Open `http://localhost:3000`
2. Press F12 (or right-click → Inspect)
3. Check Console for errors
4. Use Network tab for API issues
5. Use React DevTools extension (recommended)

### **Using Cursor's AI:**
- Paste error message: "This error is happening: [paste error]"
- Cursor will explain and suggest fixes
- Use Cmd/Ctrl + L for detailed debugging

### **Using Terminal:**
- Check terminal output for build errors
- TypeScript errors show in terminal
- Next.js shows compilation errors

---

## 📦 Git Workflow Best Practices

### **Before Starting Work:**
```bash
git pull origin main    # Always pull first!
git status              # Check current state
```

### **Feature Development:**
```bash
# Create feature branch
git checkout -b feature/contact-form

# Make your changes in Cursor
# ... code, code, code ...

# Test locally
pnpm dev

# Commit
git add .
git commit -m "Add contact form with email validation"

# Push feature branch
git push origin feature/contact-form

# When ready, merge to main
git checkout main
git pull origin main
git merge feature/contact-form
git push origin main
```

### **Emergency: Undo Changes**
```bash
# Discard uncommitted changes
git checkout -- .

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See commit history
git log --oneline
```

---

## 🚢 Deployment Options (Free Alternatives)

See `DEPLOYMENT.md` for detailed deployment guides. Quick options:

1. **Vercel Free Tier** (still free, just don't pay for Pro)
   - Connect GitHub repo
   - Auto-deploys on push
   - Free for personal projects

2. **Netlify** (Free)
   - Similar to Vercel
   - Great for static sites
   - Free tier is generous

3. **GitHub Pages** (Free)
   - Built into GitHub
   - Perfect for static sites
   - Custom domains supported

4. **Cloudflare Pages** (Free)
   - Fast CDN
   - Great performance
   - Free tier is excellent

---

## 💡 Pro Tips for Cursor Development

### **1. Use Cursor's Composer**
- Select multiple files
- Ask Cursor to refactor across files
- Great for large changes

### **2. Create Code Snippets**
- Save common patterns
- Reuse across projects
- Speed up development

### **3. Use Cursor's Codebase Chat**
- Cmd/Ctrl + L
- Ask about your entire codebase
- "Where is the contact form component?"
- "How does authentication work?"

### **4. Multi-file Editing**
- Select code in multiple files
- Edit all at once with Cmd/Ctrl + K
- Perfect for refactoring

### **5. Generate Tests**
- Ask Cursor: "Create tests for this component"
- Maintain code quality
- Catch bugs early

---

## 🎯 Quick Reference Commands

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start

# Git workflow
git pull origin main
git add .
git commit -m "Your message"
git push origin main

# Check status
git status
git diff
```

---

## ✅ Checklist: Setting Up New Project

- [ ] Create project folder
- [ ] Initialize Git: `git init`
- [ ] Create GitHub repo
- [ ] Connect: `git remote add origin [your-repo-url]`
- [ ] Copy `.gitignore` from this project
- [ ] Install dependencies: `pnpm install`
- [ ] Start dev server: `pnpm dev`
- [ ] Make first commit
- [ ] Push to GitHub: `git push -u origin main`

---

## 🆘 Troubleshooting

### **Port 3000 already in use:**
```bash
# Kill process on port 3000 (Windows PowerShell)
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Or use different port
pnpm dev -- -p 3001
```

### **Dependencies not installing:**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### **Git conflicts:**
```bash
# Pull with rebase (cleaner history)
git pull --rebase origin main

# Or merge
git pull origin main
```

---

## 🎉 You're All Set!

You now have a complete development workflow in Cursor:
- ✅ Build everything locally
- ✅ Preview in browser
- ✅ Version control with Git
- ✅ Deploy when ready
- ✅ Save $40/month
- ✅ Full control over your code

**No more overwrites. No more conflicts. Just you, Cursor, and your code.**


