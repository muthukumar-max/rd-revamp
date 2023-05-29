'use strict'
// import packages
import Sequelize from 'sequelize'

// import helpers
import globalData from '../utils/globalData.js'

const sequelize = new Sequelize(globalData.sqlDb, globalData.sqlUser, globalData.sqlPassword, {
    host: globalData.sqlHost,
    port: globalData.sqlPort,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

export default sequelize
