const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'calculator project')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator project', 'calculator.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator project', 'this.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});