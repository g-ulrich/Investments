// server.js
const express = require('express');
const path = require('path'); // <-- this was missing
const app = express();
const PORT = 3000;

// Serve static files from 'web' folder
app.use(express.static('web'));

// Root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'web', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
