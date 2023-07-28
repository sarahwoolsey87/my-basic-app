const express = require('express');
const app = express();
const data = require('../data.json');

// API route to get all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// API route to get filtered data
app.get('/api/filtered-data', (req, res) => {
  // Add filtering logic here based on query parameters
  // Example: const filteredData = data.filter(item => item.someProperty === 'someValue');
  // res.json(filteredData);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
