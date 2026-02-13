# Deployment Guide for Vercel

## Option 1: Deploy via Vercel Web Interface (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New Project"
3. Import your repository: `Saneha-Kanwal/ValentineDay`
4. Vercel will automatically detect it's a Vite project
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Your app will be live in a few minutes!

## Option 2: Deploy via Vercel CLI

1. Login to Vercel:
   ```bash
   npx vercel login
   ```

2. Deploy:
   ```bash
   npx vercel --yes
   ```

3. Follow the prompts to link your project

## After Deployment

- Your app will be available at: `https://your-project-name.vercel.app`
- Every push to GitHub will automatically trigger a new deployment
- You can customize the domain in Vercel dashboard

## Build Configuration

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing support

