const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS for the frontend
app.use(cors());

// Serve PDFs securely
app.use('/pdfs', (req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});

// Serve static files (PDFs)
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));

// API endpoint to list PDF files
app.get('/api/pdfs', (req, res) => {
  const pdfDirectory = path.join(__dirname, 'pdfs');
  const files = require('fs').readdirSync(pdfDirectory);
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));
  res.json(pdfFiles);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
