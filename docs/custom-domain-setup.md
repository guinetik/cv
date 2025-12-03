# Custom Domain Setup for CV Landing Page

This document explains the configuration for deploying the CV landing page to a custom domain `cv.guinetik.com` using GitHub Pages.

## Configuration Changes Made

### 1. Vite Configuration (`landing/vite.config.js`)
- **Changed**: `base: '/cv/'` → `base: '/'`
- **Reason**: Removes the `/cv/` path prefix to work with custom domain root

### 2. CNAME File (`landing/public/CNAME`)
- **Created**: File containing `cv.guinetik.com`
- **Purpose**: Tells GitHub Pages to serve the site at the custom domain

### 3. GitHub Workflow (`.github/workflows/deploy-landing.yml`)
- **Updated**: Added `cname: cv.guinetik.com` to the deployment step
- **Purpose**: Ensures the CNAME file is properly deployed to GitHub Pages

### 4. Package.json Deploy Script (`landing/package.json`)
- **Updated**: Added `-b gh-pages` flag to the deploy command
- **Purpose**: Ensures deployment targets the correct branch

## DNS Configuration Required

To complete the setup, you need to configure your DNS settings:

1. **Add CNAME Record**: Point `cv.guinetik.com` to `guinetik.github.io`
2. **Verify Domain**: GitHub Pages will automatically detect the CNAME file and configure the domain

## Deployment Process

The site will be automatically deployed when:
- Changes are pushed to the `master` branch in the `landing/` directory
- The GitHub Actions workflow runs and deploys to the `gh-pages` branch

## Troubleshooting

### If the domain reverts to GitHub.io:
1. Check that the CNAME file exists in `landing/public/CNAME`
2. Verify the GitHub workflow includes the `cname` parameter
3. Ensure DNS CNAME record points to `guinetik.github.io`

### If assets don't load:
1. Verify the Vite `base` configuration is set to `/`
2. Check that the build process includes the CNAME file
3. Clear browser cache and try again

## Manual Deployment

If you need to deploy manually:
```bash
cd landing
npm run build
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch with the custom domain configuration.
