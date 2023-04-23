const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static(__dirname));

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
