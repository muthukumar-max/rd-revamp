import { DataTypes } from 'sequelize';
import sequelize from './db.js'
const userhcprepDeviceInfo = sequelize.define('userhcprep_deviceinfo', {
    user_id: {
        type: DataTypes.INTEGER
    },
    deviceToken: {
        type: DataTypes.STRING(255)
    },
    device: {
        type: DataTypes.STRING(255)
    },
    deviceName: {
        type: DataTypes.STRING(255)
    },
    appVersion: {
        type: DataTypes.STRING(255)
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = userhcprepDeviceInfo;

