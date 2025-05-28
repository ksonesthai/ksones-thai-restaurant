#!/bin/bash

echo "🏗️  Building Ksones Thai Restaurant App..."

# Build the frontend only (static files for Firebase hosting)
npm run build

# Create dist directory for Firebase
mkdir -p dist

# Copy client build files to dist
cp -r client/dist/* dist/

echo "✅ Build complete!"
echo ""
echo "📱 Your Ksones Thai app is ready for Firebase deployment!"
echo ""
echo "To deploy to Firebase hosting:"
echo "1. Run: firebase login"
echo "2. Run: firebase deploy --only hosting"
echo ""
echo "Your app will be live at: https://ksonesthaidiningandloungeapp.web.app"
echo "Customers can then download it on their mobile phones!"