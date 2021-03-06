const express = require('express');
const app = express();

app.use(express.static('./'));

app.get('/:filename', (req, res) => {
    res.send(`file ${req.params.filename} does not exists`);
});

app.listen(4700, () => console.log('start server'));
