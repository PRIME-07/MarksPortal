const express = require('express');
const path = require('path');

const app = express();

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'MarksPortal/src/pages/home.js'));
});

// Serve static files like JS and CSS
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
