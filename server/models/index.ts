/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db:any = <any>{};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./user.ts')(sequelize, DataTypes, Model);
db.class = require('./class.ts')(sequelize, DataTypes, Model);
db.student = require('./class.ts')(sequelize, DataTypes, Model, db.users);

// Relations
db.class.hasMany(db.student);
db.student.belongsTo(db.class);

module.exports = db;
