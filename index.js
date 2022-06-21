const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (_req, res) => {
    res.send('Welcome to the homepage');
});

app.listen(`${PORT}`, () => {
    console.log(`App listening on port ${PORT}`);
});


