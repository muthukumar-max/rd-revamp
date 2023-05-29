import { DataTypes } from 'sequelize';
import sequelize from './db.js'
const userhcprepImportDetails = sequelize.define('userhcprep_import_details', {
    user_id: {
        type: DataTypes.INTEGER
    },
    area: {
        type: DataTypes.STRING(255)
    },
    assistant_details: {
        type: DataTypes.STRING(255)
    },
    companyName: {
        type: DataTypes.STRING(255)
    },
    company: {
        type: DataTypes.INTEGER
    },
    contract_document: {
        type: DataTypes.STRING(255)
    },
    decile: {
        type: DataTypes.STRING(255)
    },
    designation: {
        type: DataTypes.STRING(255)
    },
    district: {
        type: DataTypes.STRING(255)
    },
    employee_id: {
        type: DataTypes.STRING(255)
    },
    encrypted_token_reset: {
        type: DataTypes.STRING(255)
    },
    no_of_liveprograms: {
        type: DataTypes.INTEGER
    },
    speaker_status: {
        type: DataTypes.INTEGER
    },
    region: {
        type: DataTypes.STRING(255)
    },
    territory: {
        type: DataTypes.STRING(255)
    },
    yrsOfExperience: {
        type: DataTypes.STRING(255)
    },
    state_license_no: {
        type: DataTypes.STRING(255)
    },
    imed_id: {
        type: DataTypes.STRING(255)
    },
    spkfeeforservice: {
        type: DataTypes.INTEGER
    },
    licensed_state: {
        type: DataTypes.STRING(255)
    },
    resident_status: {
        type: DataTypes.INTEGER
    },
    unsubscribe: {
        type: DataTypes.INTEGER
    },
    hcpEntityId: {
        type: DataTypes.INTEGER
    },
    is_customer_master: {
        type: DataTypes.INTEGER
    },
    shipment_track: {
        type: DataTypes.TEXT
    },
    jde: {
        type: DataTypes.INTEGER
    },
    secondry_email: {
        type: DataTypes.STRING(255)
    },
    veeva_id: {
        type: DataTypes.STRING(255)
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = userhcprepImportDetails;