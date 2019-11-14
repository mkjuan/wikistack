const express = require('express');
const layout = require('./views/layout');
const { Page,User } = require('./models');

const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 3000;

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

app.use('/wiki', wikiRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res, next) => {
  res.send(layout('Remi'));
});

const init = async () => {
  await User.sync({force: true})
  await Page.sync({force: true})

  app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
  });
};

init();
