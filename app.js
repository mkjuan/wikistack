const express = require('express');
const layout = require('./views/layout')

const app = express();

app.get('/', (req, res, next) => {
  res.send(layout('Remi'));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
