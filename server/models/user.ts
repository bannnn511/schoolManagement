/* eslint-disable no-console */
module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {
    public title: string;

    public code: number;

    public phone: number;

    public address: string;

    public createdBy: string;

    public updatedBy: string;

    public status: string;

    public isAdmin: boolean;
  }

  User.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelNameL: 'User',
    timestamps: true,
  });

  User.associate = (models) => {
    User.belongsTo(models.Class, {
      foreignKey: 'code',
    });
  };
  console.log(User === sequelize.moels.User);
};
