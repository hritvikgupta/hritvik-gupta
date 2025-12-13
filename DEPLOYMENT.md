# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your repository pushed to GitHub

## Setup Steps

### 1. Update Repository Name in vite.config.ts

If your repository is NOT named `username.github.io`, update the default repository name in `vite.config.ts`:

```typescript
const repoName = process.env.GITHUB_REPOSITORY 
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : 'your-repo-name'; // Update this line
```

### 2. Add GitHub Secret for Gemini API Key

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `GEMINI_API_KEY`
5. Value: Your Gemini API key
6. Click **Add secret**

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 4. Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 5. Deploy

The GitHub Actions workflow will automatically:
- Build your site when you push to `main` branch
- Deploy it to GitHub Pages

You can also manually trigger deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Access Your Site

After deployment, your site will be available at:
- If repo is `username.github.io`: `https://username.github.io`
- Otherwise: `https://username.github.io/repo-name/`

## Troubleshooting

- **Build fails**: Check the Actions tab for error messages
- **404 errors**: Verify the `base` path in `vite.config.ts` matches your repository name
- **API not working**: Ensure `GEMINI_API_KEY` secret is set correctly

