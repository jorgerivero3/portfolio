const express = require('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 3000;

//compression does not compress jpeg files
// app.use(compression({
//     filter: (req, res) => {
//         const contentType = res.getHeader('Content-Type');
//         if (contentType && contentType.includes('image/jpeg')){
//             return false;
//         }

//         return compression.filter(req, res);
//     }
// }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/resume', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
// })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});

