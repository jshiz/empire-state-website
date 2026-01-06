# Managing Multiple Websites & Projects
## Organize Your Workflow for Multiple Businesses

---

## 📁 Recommended Folder Structure

### **Option 1: Separate Repos (Recommended)**

```
C:\Users\fragp\Documents\GitHub\
├── empire-state-bulldogs\     # Current project
│   ├── app\
│   ├── components\
│   └── package.json
│
├── website-2\                 # Second business
│   ├── app\
│   ├── components\
│   └── package.json
│
├── website-3\                 # Third business
│   ├── app\
│   ├── components\
│   └── package.json
│
└── shared-utilities\          # Reusable code
    ├── components\
    ├── hooks\
    └── utils\
```

**Pros:**
- ✅ Each project is independent
- ✅ Separate Git history
- ✅ Easy to deploy separately
- ✅ Can share code via packages

**Cons:**
- Need to manage multiple repos
- Code duplication (but can share utilities)

---

### **Option 2: Monorepo (Advanced)**

```
C:\Users\fragp\Documents\GitHub\main\
├── apps\
│   ├── empire-state-bulldogs\
│   ├── website-2\
│   └── website-3\
│
├── packages\
│   ├── shared-components\
│   ├── shared-utils\
│   └── shared-hooks\
│
├── package.json               # Root package.json
└── pnpm-workspace.yaml        # Workspace config
```

**Pros:**
- ✅ Share code easily
- ✅ Single Git repo
- ✅ Consistent dependencies
- ✅ Easier refactoring

**Cons:**
- More complex setup
- All projects deploy together (or need CI/CD)

---

## 🎯 Recommended: Separate Repos (Start Here)

### **Setting Up a New Project:**

```bash
# 1. Create new folder
cd C:\Users\fragp\Documents\GitHub
mkdir website-2
cd website-2

# 2. Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# 3. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 4. Create GitHub repo and connect
# (Create repo on GitHub first, then:)
git remote add origin https://github.com/yourusername/website-2.git
git push -u origin main

# 5. Copy useful files from existing project
# - .gitignore (already have it)
# - CURSOR_WORKFLOW.md
# - DEPLOYMENT.md
# - Any shared components/utilities
```

---

## 🔄 Switching Between Projects in Cursor

### **Method 1: File → Open Folder**
1. File → Open Folder
2. Select project folder
3. Cursor loads the project
4. All your settings preserved

### **Method 2: Recent Projects**
1. File → Open Recent
2. See list of recent projects
3. Click to switch

### **Method 3: Workspace Files**
Create `.code-workspace` files for each project:

**empire-state-bulldogs.code-workspace:**
```json
{
  "folders": [
    {
      "path": "C:\\Users\\fragp\\Documents\\GitHub\\main"
    }
  ],
  "settings": {
    "files.exclude": {
      "**/.git": true,
      "**/node_modules": true
    }
  }
}
```

Then: File → Open Workspace from File

---

## 📦 Sharing Code Between Projects

### **Option 1: Copy Components (Simple)**

When you create a useful component in one project:

1. Copy the component file
2. Paste into other project
3. Adjust imports/styles as needed
4. Keep them in sync manually

**Best for:**
- Small utilities
- One-off components
- Projects with different styles

---

### **Option 2: Shared Utilities Folder**

```
C:\Users\fragp\Documents\GitHub\
├── shared-utilities\
│   ├── components\
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── hooks\
│   │   └── useLocalStorage.ts
│   └── utils\
│       └── formatDate.ts
│
├── website-1\
└── website-2\
```

**Using shared code:**

1. **Copy from shared folder:**
   ```bash
   # Copy component to project
   cp ../shared-utilities/components/Button.tsx ./components/
   ```

2. **Or symlink (advanced):**
   ```bash
   # Windows (PowerShell as Admin)
   New-Item -ItemType SymbolicLink -Path "components\Button.tsx" -Target "..\shared-utilities\components\Button.tsx"
   ```

---

### **Option 3: NPM Package (Advanced)**

Create a private npm package:

1. Create `shared-components` folder
2. Set up as npm package
3. Publish to GitHub Packages (free)
4. Install in each project: `pnpm add @yourusername/shared-components`

**Best for:**
- Many projects
- Frequently updated shared code
- Team collaboration

---

## 🗂️ Organizing Your Projects

### **Naming Convention:**

```
[project-name]/
├── README.md              # Project description
├── package.json
├── .gitignore
├── CURSOR_WORKFLOW.md     # Copy from main project
├── DEPLOYMENT.md          # Copy from main project
└── [project files]
```

### **Each Project Should Have:**

- ✅ `.gitignore` (copy from main)
- ✅ `README.md` (project-specific docs)
- ✅ `package.json` (project dependencies)
- ✅ Deployment configured (Cloudflare/Netlify)

---

## 🔧 Quick Project Setup Script

Create a PowerShell script to set up new projects:

**setup-new-project.ps1:**
```powershell
param(
    [string]$ProjectName,
    [string]$GitHubRepo
)

# Create project folder
New-Item -ItemType Directory -Path "C:\Users\fragp\Documents\GitHub\$ProjectName"
Set-Location "C:\Users\fragp\Documents\GitHub\$ProjectName"

# Initialize Next.js
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --yes

# Copy useful files
Copy-Item "..\main\.gitignore" -Destination "."
Copy-Item "..\main\CURSOR_WORKFLOW.md" -Destination "."
Copy-Item "..\main\DEPLOYMENT.md" -Destination "."

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin $GitHubRepo
git push -u origin main

Write-Host "Project $ProjectName created successfully!"
```

**Usage:**
```powershell
.\setup-new-project.ps1 -ProjectName "my-new-site" -GitHubRepo "https://github.com/username/my-new-site.git"
```

---

## 📋 Project Checklist Template

Create a checklist for each new project:

**PROJECT_CHECKLIST.md:**
```markdown
# [Project Name] Checklist

## Setup
- [ ] Project folder created
- [ ] Next.js initialized
- [ ] Git initialized
- [ ] GitHub repo created
- [ ] Connected to GitHub
- [ ] .gitignore added
- [ ] Dependencies installed

## Development
- [ ] Dev server runs: `pnpm dev`
- [ ] Production build works: `pnpm build`
- [ ] TypeScript compiles: `pnpm type-check`
- [ ] Linting passes: `pnpm lint`

## Deployment
- [ ] Deployed to [platform]
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Tested on mobile
- [ ] Analytics configured (if needed)

## Content
- [ ] Homepage content
- [ ] About page
- [ ] Contact form working
- [ ] Images optimized
- [ ] SEO meta tags
- [ ] Favicon added
```

---

## 🚀 Daily Workflow for Multiple Projects

### **Morning Routine:**

```bash
# 1. Check all projects for updates
cd C:\Users\fragp\Documents\GitHub\main
git pull origin main

cd ..\website-2
git pull origin main

cd ..\website-3
git pull origin main

# 2. Open the project you're working on in Cursor
# File → Open Folder → Select project
```

### **Working on a Project:**

1. **Open project in Cursor**
2. **Pull latest changes:** `git pull origin main`
3. **Start dev server:** `pnpm dev`
4. **Make changes**
5. **Test locally**
6. **Commit and push:** 
   ```bash
   git add .
   git commit -m "Description"
   git push origin main
   ```

### **End of Day:**

```bash
# Commit any uncommitted work
git status
git add .
git commit -m "WIP: [description]"
git push origin main
```

---

## 💡 Pro Tips

### **1. Use Cursor's Workspace Features**
- Save workspace settings per project
- Different themes for different projects
- Project-specific extensions

### **2. Keep Dependencies Updated**
```bash
# Check for outdated packages
pnpm outdated

# Update all (carefully!)
pnpm update
```

### **3. Use Git Aliases**
```bash
# Add to .gitconfig
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"

# Then use: git st, git co, git br, git cm "message"
```

### **4. Create Project Templates**
- Save a "starter" Next.js project
- Include your common components
- Copy for new projects
- Saves setup time

### **5. Use Environment Variables**
- `.env.local` for each project
- Never commit secrets
- Document required variables in README

---

## 📊 Project Status Tracker

Create a simple tracker:

**PROJECTS.md:**
```markdown
# My Projects

## Empire State Bulldogs
- Status: ✅ Live
- URL: https://empirestatebulldogs.com
- Last Updated: 2024-01-15
- Notes: Main business site

## Website 2
- Status: 🚧 In Development
- URL: (preview)
- Last Updated: 2024-01-10
- Notes: Adding new features

## Website 3
- Status: 📋 Planning
- URL: N/A
- Last Updated: N/A
- Notes: Starting soon
```

---

## 🎯 Summary

**Best Practice for Multiple Projects:**

1. ✅ **Separate repos** for each website
2. ✅ **Consistent folder structure**
3. ✅ **Copy workflow docs** to each project
4. ✅ **Use Cursor workspaces** for easy switching
5. ✅ **Share utilities** via copy or shared folder
6. ✅ **Deploy each separately** to Cloudflare/Netlify
7. ✅ **Keep projects independent** but organized

**You can now manage unlimited websites:**
- ✅ Each in its own repo
- ✅ Easy to switch between
- ✅ Share code when needed
- ✅ Deploy independently
- ✅ All for $0/month hosting

---

## 🆘 Quick Reference

```bash
# Switch projects
cd C:\Users\fragp\Documents\GitHub\[project-name]

# Start dev server
pnpm dev

# Git workflow
git pull origin main
git add .
git commit -m "Message"
git push origin main

# Create new project
mkdir new-project
cd new-project
npx create-next-app@latest . --typescript --tailwind
```

---

**You're now set up to manage all your websites efficiently in Cursor!** 🎉


