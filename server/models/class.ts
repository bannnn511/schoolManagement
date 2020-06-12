/* eslint-disable no-console */
module.exports = (sequelize, DataTypes, Model) => {
  class Class extends Model {
    public code: number;

    public title: string;

    public size: number;

    public createdBy: string;

    public updatedBy: string;

    public status: String;
  }

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
      type: DataTypes.BOOLEANS,
    },
  });

  console.log(Class === sequelize.moels.Class);

  Class.associate = (models) => {
    Class.hasMany(models.Student, {
      foreignKey: 'code',
    });
  };
  return Class;
};
