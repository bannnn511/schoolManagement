/* eslint-disable no-console */
module.exports = (sequelize, DataTypes, Model) => {
  class Class extends Model {}

  Class.init({
    id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Classes',
    timestamps: true,
    freeTableName: true,
  });

  Class.associate = (models) => {
    Class.hasMany(models.Student, {
      foreignKey: 'code',
      as: 'Student',
    });
  };
  console.log(Class === sequelize.models.Class);
  return Class;
};
