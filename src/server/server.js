const express = require('express');
const path = require('path');

const app = express();

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Serve your HTML file
});

// Serve static files like JS and CSS
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
