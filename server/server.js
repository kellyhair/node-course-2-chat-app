require('./config/config');

const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, "../public");

var app = express();
const port = process.env.PORT;
app.use(express.static(publicPath));

app.get('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
