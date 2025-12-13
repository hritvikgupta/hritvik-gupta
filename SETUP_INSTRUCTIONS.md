# Simple Setup Instructions for GitHub Pages

Follow these steps in order:

## Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `hritvik-gupta-portfolio` (or any name you want)
4. Make it **Public**
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

## Step 2: Update Repository Name (if different)

If your repository name is NOT `hritvik-gupta-portfolio`, update line 11 in `vite.config.ts`:

```typescript
const repoName = 'your-actual-repo-name'; // Change this
```

## Step 3: Push Your Code to GitHub

Open terminal in this folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - portfolio website"

# Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name

## Step 4: Add Gemini API Key Secret

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**
5. Name: `GEMINI_API_KEY`
6. Value: Paste your Gemini API key
7. Click **Add secret**

## Step 5: Enable GitHub Pages

1. Still in **Settings**
2. Click **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

## Step 6: Deploy

The website will automatically deploy when you push code. To trigger it now:

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow
3. Click on it → **Run workflow** → **Run workflow** button

Wait 2-3 minutes for it to build and deploy.

## Step 7: Access Your Website

Your site will be live at:
- `https://YOUR_USERNAME.github.io/REPO_NAME/`

For example: `https://hritvikgupta.github.io/hritvik-gupta-portfolio/`

---

## Quick Checklist

- [ ] Created GitHub repository
- [ ] Updated repo name in vite.config.ts (if needed)
- [ ] Pushed code to GitHub
- [ ] Added GEMINI_API_KEY secret
- [ ] Enabled GitHub Pages (GitHub Actions)
- [ ] Triggered deployment
- [ ] Website is live!

## Need Help?

If something doesn't work:
1. Check the **Actions** tab for error messages
2. Make sure all steps above are completed
3. Verify your repository name matches in vite.config.ts

