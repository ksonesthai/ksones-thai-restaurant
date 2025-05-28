import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve JavaScript files with explicit content type
app.get('*.js', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'public', req.path);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not found');
  }
});

// Serve CSS files with explicit content type
app.get('*.css', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'public', req.path);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not found');
  }
});

// Serve other static files
app.use(express.static(path.join(__dirname, 'dist', 'public')));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Ksones Thai App running on port ${PORT}`);
});