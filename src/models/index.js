// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// import packages
import Sequelize from 'sequelize'

// import helpers
import globalData from '../helpers/globals.js'

const sequelize = new Sequelize(globalData.sqlDb, globalData.sqlUser, globalData.sqlPassword, {
  host: globalData.sqlHost,
  port: globalData.sqlPort,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Enable encryption if required
      trustServerCertificate: true,
    },
  }
})

if (globalData.sqlPoolEnable === 'true') {
  sequelize.pool = {
    max: globalData.sqlPoolMax,
    min: globalData.sqlPoolMin,
  }
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully')
  })
  .catch((error) => {
    console.log(`Error in mssql database connection ${error}`)
  })

export default sequelize
