const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(`${__dirname}/public`));
//app.use('/', require('./src/index'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT);