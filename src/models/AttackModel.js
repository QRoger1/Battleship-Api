module.exports = function(sequelizeInstance, DataTypes) {
  return sequelizeInstance.define(
    "Attack",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      GameId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      PlayerId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      X: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Y: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Point: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: "CreatedAt",
      updatedAt: "UpdatedAt",
      tableName: "Attack",
      freezeTableName: true
    }
  );
};
