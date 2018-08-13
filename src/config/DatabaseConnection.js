module.exports.database = "DB-Battleship";
module.exports.user = "XXXX";
module.exports.password = "XXXX";
module.exports.connectionConfig = {
  dialect: "mssql",
  host: "localhost",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true
  }
};
