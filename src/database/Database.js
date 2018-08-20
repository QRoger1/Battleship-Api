const Database = {};

const Sequelize = require("sequelize");

const DatabaseConnection = require("../config/DatabaseConnection.js");
const SequelizeConnection = require("./SequelizeConnection");
const connectionInstance = SequelizeConnection(DatabaseConnection);

Database.Sequelize = Sequelize;
Database.connectionInstance = SequelizeConnection(DatabaseConnection);
Database.Game = require("../models/GameModel")(
  Database.connectionInstance,
  Database.Sequelize
);

Database.Ship = require("../models/ShipModel")(
  Database.connectionInstance,
  Database.Sequelize
);

Database.ShipSetup = require("../models/ShipSetupModel")(
  Database.connectionInstance,
  Database.Sequelize
);

Database.Attack = require("../models/AttackModel")(
  Database.connectionInstance,
  Database.Sequelize
);

module.exports = Database;
