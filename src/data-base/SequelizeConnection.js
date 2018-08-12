const Sequelize = require("sequelize");

module.exports = function(config) {
  return new Sequelize(
    config.database,
    config.user,
    config.password,
    config.connectConfig
  );
};
