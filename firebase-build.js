#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Ksones Thai Restaurant App for Firebase...');

// Build the client
console.log('Building frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Copy client build to dist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy all built files
const clientDistDir = path.join(__dirname, 'client', 'dist');
if (fs.existsSync(clientDistDir)) {
  execSync(`cp -r ${clientDistDir}/* ${distDir}/`, { stdio: 'inherit' });
}

console.log('✅ Build complete! Ready for Firebase deployment.');
console.log('Run: firebase deploy --only hosting');