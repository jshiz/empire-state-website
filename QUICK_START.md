# Quick Start: Stop v0.dev from Overwriting Your Code

## The Problem
v0.dev is pushing directly to GitHub, which overwrites your local changes and causes conflicts.

## The Solution (Choose One)

### 🎯 **RECOMMENDED: Use Feature Branches**

1. **Disconnect v0.dev from your main branch:**
   - Go to v0.dev settings
   - Disconnect GitHub or change it to use a different branch

2. **Create a development workflow:**
   ```bash
   # Create a dev branch
   git checkout -b development
   git push -u origin development
   ```

3. **Connect v0.dev to the `development` branch** (not main)

4. **Your workflow:**
   - v0.dev → pushes to `development` branch
   - You → pull `development`, make changes, push back
   - When ready → merge `development` → `main`
   - Vercel → deploys from `main` only

### 🔒 **SAFEST: Manual Copy/Paste from v0**

1. **Disconnect v0.dev from GitHub completely**

2. **Workflow:**
   - Generate code in v0.dev
   - Copy the code
   - Paste into your local files
   - Test: `pnpm dev`
   - Commit: `git add . && git commit -m "Update from v0"`
   - Push: `git push origin main`

### ⚡ **QUICK FIX: Disable Auto-Deploy**

1. **In Vercel Dashboard:**
   - Settings → Git
   - Disable "Automatically deploy from GitHub"
   - Manually deploy when ready

2. **In v0.dev:**
   - Disconnect GitHub integration
   - Use v0.dev only for code generation, not deployment

## Daily Commands You'll Need

```bash
# Before starting work - ALWAYS pull first!
git pull origin main

# Check what branch you're on
git branch

# Create a new branch for your work
git checkout -b feature/my-changes

# After making changes
git add .
git commit -m "Description of changes"
git push origin feature/my-changes

# Switch back to main
git checkout main
```

## ⚠️ Before You Push - Always Check!

```bash
# See what you're about to push
git status
git diff

# See recent commits
git log --oneline -5
```

## Need More Help?

See `WORKFLOW.md` for detailed workflow strategies and best practices.


