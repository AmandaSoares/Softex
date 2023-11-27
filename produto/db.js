const Sequelize = require("sequelize");

const sequelize = new Sequelize('nomedobanco', 'usuario', 'senha', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
