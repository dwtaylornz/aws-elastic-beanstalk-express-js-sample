const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Merry xmas and happy new year'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
