import { DataTypes } from 'sequelize';
import sequelize from './db.js'
const userhcprep = sequelize.define('userhcprep', {
    firstName: {
        type: DataTypes.STRING(30)
    },
    midName: {
        type: DataTypes.STRING(30)
    },
    lastName: {
        type: DataTypes.STRING(30)
    },
    fullName: {
        type: DataTypes.STRING(100)
    },
    preferred_name: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(70)
    },
    home_number: {
        type: DataTypes.STRING(50)
    },
    telephone: {
        type: DataTypes.STRING(50)
    },
    rep: {
        type: DataTypes.INTEGER
    },
    dm: {
        type: DataTypes.INTEGER
    },
    degree: {
        type: DataTypes.STRING(15)
    },
    speciality: {
        type: DataTypes.STRING(70)
    },
    prescriber: {
        type: DataTypes.INTEGER
    },
    attendeeType: {
        type: DataTypes.INTEGER
    },
    cap_amount: {
        type: DataTypes.FLOAT
    },
    cap_max_limit: {
        type: DataTypes.INTEGER
    },
    institution: {
        type: DataTypes.STRING(30)
    },
    address: {
        type: DataTypes.STRING(100)
    },
    city: {
        type: DataTypes.STRING(50)
    },
    state: {
        type: DataTypes.STRING(10)
    },
    zip: {
        type: DataTypes.STRING(10)
    },
    biography: {
        type: DataTypes.STRING(150)
    },
    biography_path: {
        type: DataTypes.STRING(150)
    },
    cv: {
        type: DataTypes.STRING(150)
    },
    cv_path: {
        type: DataTypes.STRING(150)
    },
    photo: {
        type: DataTypes.STRING(150)
    },
    photo_path: {
        type: DataTypes.STRING(150)
    },
    primary_email: {
        type: DataTypes.STRING(70)
    },
    npi: {
        type: DataTypes.STRING(25)
    },
    userType: {
        type: DataTypes.STRING(2)
    },
    password: {
        type: DataTypes.STRING(150)
    },
    active_status: {
        type: DataTypes.INTEGER
    },
    delete_status: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.INTEGER
    },
    terms_condition: {
        type: DataTypes.INTEGER
    },
    reset_password_flag: {
        type: DataTypes.INTEGER
    },
    subscribe_to_newsletter: {
        type: DataTypes.INTEGER
    },
    intro_video: {
        type: DataTypes.INTEGER
    },
    tier: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    reconciled: {
        type: DataTypes.INTEGER
    },
    address2: {
        type: DataTypes.STRING(150)
    },
    affiliation: {
        type: DataTypes.STRING(50)
    },
    govt_employee: {
        type: DataTypes.STRING(30)
    },
    va_flag: {
        type: DataTypes.INTEGER
    },
    isCloned: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING(70)
    },
    foodAndBeverageEligiblity: {
        type: DataTypes.INTEGER
    },
    nationalSpeaker: {
        type: DataTypes.INTEGER
    },
    remember_token: {
        type: DataTypes.STRING(100)
    },
    in_external_status: {
        type: DataTypes.INTEGER
    },
    cap_max_engagement: {
        type: DataTypes.INTEGER
    },
    addedBy: {
        type: DataTypes.INTEGER
    },
    exclude_medical_community: {
        type: DataTypes.INTEGER
    },
    is_connect_chiesi_team: {
        type: DataTypes.INTEGER
    },
    state_license_no: {
        type: DataTypes.STRING(255)
    },
    state_of_license: {
        type: DataTypes.STRING(255)
    }

}, {
    freezeTableName: true
})

export default userhcprep;