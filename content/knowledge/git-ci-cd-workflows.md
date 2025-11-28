---
id: 'VC_042'
title: 'Git CI/CD Workflows'
card_type: 'V-Card'
purpose: 'Standardize and automate deployment, testing, and preview environments by connecting CI/CD pipelines to Git commits and pull requests.'
tags:
- 'git'
- 'ci-cd'
- 'netlify'
- 'vercel'
- 'github-actions'
---

## AI PROMPT CONTENT

### Category
Hosting & Deployment

### Summary
Git-based CI/CD automates deployment, testing, and preview creation. Every push to the main branch can trigger a build and deploy cycle, enabling faster feedback and collaboration.

### Core Principles
   - CI/CD = Continuous Integration + Continuous Deployment
   - Git-based platforms build from commits automatically.

### Best Practices
   - Use preview branches for testing changes before merging.
   - Automate tests and deploys via GitHub Actions or native platform features.
   - Leverage environment variables for secrets in deployment.

### Use Cases
   - Pull request previews.
   - Auto-building prompt libraries for IntelliMod tools.
   - Deploying frontend plus serverless functions from a monorepo.