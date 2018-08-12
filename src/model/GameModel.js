const Sequelize = require("sequelize");

module.exports = function(sequelizeInstance) {
  return sequelizeInstance.define(
    "Game",
    {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      PlayerOneId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      PlayerTwoId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Columns: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Rows: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: "CreatedAt",
      updatedAt: "UpdatedAt",
      tableName: "Game",
      freezeTableName: true
    }
  );
};
