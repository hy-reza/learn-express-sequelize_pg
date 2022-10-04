const Sequelize = require('sequelize')
const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: dbConfig.pool
});


const db = {};
db.sequelize = Sequelize;
db.Sequelize = sequelize

db.tutorial = require('./tutorial.model.js')(sequelize, Sequelize);

module.exports = db