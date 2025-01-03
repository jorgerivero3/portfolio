const express = require('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});

