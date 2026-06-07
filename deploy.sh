#!/bin/bash

# Local deploy helper for ShreeYamunaInfra
echo "=================================================="
echo "🚀 ShreeYamunaInfra Local Deployment Helper 🚀"
echo "=================================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: git is not installed locally."
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes. Please commit and push them to GitHub."
    git status -s
    read -p "Do you want to continue anyway? (y/N) " confirm
    if [[ $confirm != [yY] && $confirm != [yY][eE][sS] ]]; then
        echo "❌ Deployment aborted."
        exit 1
    fi
fi

echo "📦 Pushing latest code to GitHub..."
git push origin main

echo ""
echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "🖥️  Next, connect to your VPS and update the code by running:"
echo "--------------------------------------------------"
echo "ssh your_user@your_vps_ip"
echo "cd /Production/ShreeYamunaInfra"
echo "git pull"
echo "./vps-deploy.sh"
echo "--------------------------------------------------"
