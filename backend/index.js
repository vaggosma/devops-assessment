const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

// Enable CORS for the frontend running on localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Define the /api/hello route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
