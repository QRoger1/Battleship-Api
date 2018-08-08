const Sequelize = require('sequelize');

let sequelizeConnection = function () {
  let connect = new Sequelize('DB-Battleship', 'sa', 'UserSA12',{
    host: 'localhost',
    dialect:'mssql',
    operatorsAliases: false
  });

  return connect;
}  

module.exports = sequelizeConnection;