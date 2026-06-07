#!/bin/bash

# VPS Build & Deploy Script for ShreeYamunaInfra
# Run this on your VPS inside /Production/ShreeYamunaInfra

echo "=================================================="
echo "⚙️  ShreeYamunaInfra VPS Deployment Starting..."
echo "=================================================="

# Ensure script is run from the project root directory
cd "$(dirname "$0")"

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  Production .env file not found!"
    if [ -f .env.example ]; then
        echo "Creating .env from .env.example. Please update production credentials."
        cp .env.example .env
    else
        echo "❌ .env.example also missing! Please create a .env file manually."
        exit 1
    fi
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm/Node.js is not installed on this VPS."
    exit 1
fi

echo "📦 Installing npm dependencies..."
npm install

echo "🏗️  Building production static assets..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Reload Nginx to ensure it points to the fresh build
echo "🔄 Reloading Nginx configuration..."
if command -v systemctl &> /dev/null; then
    sudo nginx -t && sudo systemctl reload nginx
    if [ $? -eq 0 ]; then
        echo "🚀 Nginx reloaded successfully! Deployment complete."
    else
        echo "❌ Error: Nginx configuration test failed!"
        exit 1
    fi
else
    echo "⚠️  Systemctl not found. Please reload/restart Nginx manually."
fi
