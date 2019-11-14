const Sequelize = require('sequelize'); // requiring sequalize
const db = new Sequelize('postgres://localhost:5432/wikistack');
//creating a new database instance called wikistack
// exporting Dartabase to module.exports object


const Page =  db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})

const User =  db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
  }
});






module.exports = { Page,User };


