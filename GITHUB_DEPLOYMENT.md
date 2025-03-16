# Deploying to GitHub

This guide will walk you through the process of deploying your Modern Web Agency Portfolio to GitHub as a public repository.

## Prerequisites

1. [Git](https://git-scm.com/) installed on your local machine
2. A [GitHub](https://github.com/) account
3. Your project ready for deployment

## Step 1: Initialize Git Repository (if not already done)

If your project doesn't already have a Git repository initialized, run the following command in your project root:

```bash
git init
```

## Step 2: Add and Commit Your Files

Add all your project files to the staging area and commit them:

```bash
git add .
git commit -m "Initial commit: Modern Web Agency Portfolio"
```

## Step 3: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository "modern-web-agency-portfolio"
4. Add a description: "A sleek, modern, and responsive web agency portfolio built with Next.js, Tailwind CSS, and Framer Motion"
5. Keep the repository as "Public"
6. Do NOT initialize the repository with a README, .gitignore, or license (since we're pushing an existing project)
7. Click "Create repository"

## Step 4: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands to push an existing repository. Run the following commands in your project root:

```bash
git remote add origin https://github.com/yourusername/modern-web-agency-portfolio.git
git branch -M main
git push -u origin main
```

Replace `yourusername` with your actual GitHub username.

## Step 5: Verify Your Repository

1. Go to `https://github.com/yourusername/modern-web-agency-portfolio`
2. Ensure all your files have been successfully pushed
3. Your README.md should be displayed on the repository's main page

## Step 6: Configure GitHub Pages (Optional)

If you want to deploy your site to GitHub Pages:

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the branch you want to deploy (usually "main")
4. Click "Save"

Note: For Next.js applications, you might need to use a different deployment method like Vercel for full functionality.

## Step 7: Add Repository Topics (Optional)

To make your repository more discoverable:

1. Go to your repository main page
2. Click on the gear icon next to "About" on the right sidebar
3. Add relevant topics such as:
   - nextjs
   - react
   - typescript
   - tailwindcss
   - framer-motion
   - web-design
   - portfolio
   - responsive-design
   - dark-mode

## Step 8: Create a Release (Optional)

To create a release version:

1. Go to the "Releases" section of your repository
2. Click "Create a new release"
3. Tag version: "v1.0.0"
4. Release title: "Initial Release"
5. Add release notes describing the features
6. Click "Publish release"

## Troubleshooting

- **Push rejected**: If your push is rejected, try `git push -u origin main --force` (use with caution as it overwrites remote history)
- **Large files**: If you have large files that exceed GitHub's file size limit, consider using [Git LFS](https://git-lfs.github.com/)
- **Node modules**: Ensure your `.gitignore` file includes `node_modules/` to avoid pushing dependencies

## Next Steps

- Set up GitHub Actions for CI/CD
- Add a license file if needed
- Create issues for future enhancements
- Enable Discussions for community engagement 