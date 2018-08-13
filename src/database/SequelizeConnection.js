const Sequelize = require("sequelize");

module.exports = function({ database, user, password, connectionConfig } = {}) {
  return new Sequelize(
    database,
    user,
    password,
    connectionConfig
  );
};
