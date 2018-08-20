module.exports = function(sequelizeInstance, DataTypes) {
  return sequelizeInstance.define(
    "ShipSetup",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      GameId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PlayerId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      TypeShip: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Orientation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      X: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Y: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: "CreatedAt",
      updatedAt: "UpdatedAt",
      tableName: "ShipSetup",
      freezeTableName: true
    }
  );
};
