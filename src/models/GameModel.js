module.exports = function(sequelizeInstance, DataTypes) {
  return sequelizeInstance.define(
    "Game",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      PlayerOneId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PlayerTwoId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Columns: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Rows: {
        type: DataTypes.INTEGER,
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
