const Sequelize = require('sequelize');

const Address = require('./Address')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Address = Address;

Address.initiate(sequelize);

module.exports = db;