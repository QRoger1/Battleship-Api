module.exports = function(sequelizeInstance, DataTypes) {
  return sequelizeInstance.define(
    "Ship",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      TypeShip: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Size: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      createdAt: "CreatedAt",
      updatedAt: "UpdatedAt",
      tableName: "Ship",
      freezeTableName: true
    }
  );
};
