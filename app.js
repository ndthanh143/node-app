const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World 4!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});