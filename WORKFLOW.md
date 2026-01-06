# Workflow Guide: Managing v0.dev, GitHub, and Vercel

## The Problem
When using v0.dev with Vercel and GitHub, changes from v0 can overwrite your local work because:
- v0.dev can directly push to GitHub
- Vercel auto-deploys from GitHub
- This creates conflicts with your local changes

## Recommended Workflow

### Option 1: Use Branches (RECOMMENDED)
This is the safest approach and prevents overwrites:

1. **Create a development branch:**
   ```bash
   git checkout -b development
   git push -u origin development
   ```

2. **Workflow:**
   - **For v0.dev work:** Connect v0 to the `development` branch
   - **For local work:** Work on `development` branch locally
   - **For production:** Merge `development` → `main` when ready
   - **Vercel:** Deploy from `main` branch only

3. **Steps:**
   - Make changes in v0.dev → they go to `development` branch
   - Pull `development` locally: `git pull origin development`
   - Make your local changes
   - Push to `development`: `git push origin development`
   - When ready, merge to `main`: `git checkout main && git merge development && git push`

### Option 2: Disable Auto-Deploy from v0
1. In v0.dev, disconnect GitHub integration OR
2. Only use v0.dev for generating code, then manually copy/paste into your local repo
3. Always commit and push from your local machine

### Option 3: Use Vercel Preview Deployments
1. Keep `main` branch as your source of truth
2. Use feature branches for v0.dev work
3. Vercel will create preview deployments for each branch
4. Only merge to `main` when ready for production

## Best Practices

### Before Starting Work:
1. **Always pull latest changes:**
   ```bash
   git pull origin main  # or your working branch
   ```

2. **Check what branch you're on:**
   ```bash
   git branch
   ```

### When Using v0.dev:
1. **Option A - Manual Copy/Paste (Safest):**
   - Generate code in v0.dev
   - Copy the generated code
   - Paste into your local files
   - Test locally: `pnpm dev`
   - Commit: `git add . && git commit -m "Add feature from v0"`
   - Push: `git push origin main`

2. **Option B - Use a Separate Branch:**
   - Create a feature branch: `git checkout -b feature/v0-updates`
   - Connect v0.dev to this branch
   - Let v0 push to this branch
   - Pull locally: `git pull origin feature/v0-updates`
   - Review and merge when ready

### Daily Workflow:
```bash
# 1. Start your day
git pull origin main

# 2. Create a feature branch for your work
git checkout -b feature/my-changes

# 3. Make your changes (local or v0.dev)

# 4. Test locally
pnpm dev

# 5. Commit your changes
git add .
git commit -m "Description of changes"

# 6. Push to GitHub
git push origin feature/my-changes

# 7. When ready, merge to main
git checkout main
git pull origin main
git merge feature/my-changes
git push origin main
```

## Vercel Configuration

### Recommended Vercel Settings:
1. **Production Branch:** Set to `main` only
2. **Auto-deploy:** Enable only for `main` branch
3. **Preview Deployments:** Enable for all branches (for testing)

### To Configure:
1. Go to Vercel Dashboard → Your Project → Settings → Git
2. Set Production Branch to `main`
3. Enable "Automatically deploy from main branch"
4. Disable auto-deploy for other branches (or use previews)

## Preventing Overwrites

### Git Configuration:
```bash
# Set up pull with rebase to avoid merge conflicts
git config pull.rebase true

# Or use merge strategy
git config pull.ff only
```

### Before Pushing:
Always check what you're about to push:
```bash
git status
git diff
```

## Emergency: If Files Get Overwritten

### To Recover:
```bash
# See what changed
git log --oneline

# Revert to a previous commit
git revert HEAD

# Or reset to a specific commit (CAREFUL - this rewrites history)
git reset --hard <commit-hash>
```

## Quick Reference Commands

```bash
# Check status
git status

# Pull latest changes
git pull origin main

# Create and switch to new branch
git checkout -b branch-name

# Stage all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin branch-name

# Switch branches
git checkout branch-name

# See all branches
git branch -a

# Merge branch into main
git checkout main
git merge branch-name
```

## Summary

**The Golden Rule:** Never let v0.dev directly push to your `main` branch. Always:
1. Use branches for development
2. Review changes before merging
3. Test locally before deploying
4. Keep `main` as your stable production branch


