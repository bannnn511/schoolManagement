/* eslint-disable no-console */
module.exports = (sequelize, DataTypes, Model) => {
  class Class extends Model {}

  Class.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Class',
    timestamps: true,
    freeTableName: true,
  });

  console.log(Class === sequelize.models.Class);
};
