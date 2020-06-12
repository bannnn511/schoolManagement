/* eslint-disable no-console */
module.exports = (sequelize, DataTypes, Model, User) => {
  class Student extends User {
    public score: number;
  }

  Student.init({
    score: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Class, {
      foreignKey: 'code',
    });
  };
  console.log(Student === sequelize.moels.Student);
};
