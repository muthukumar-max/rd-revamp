import 'dotenv/config'

const globalData = {
    port: process.env.PORT,
    // db config details
    sqlHost: process.env.SQL_HOST,
    sqlPort: process.env.SQL_PORT,
    sqlUser: process.env.SQL_USER,
    sqlPassword: process.env.SQL_PASSWORD,
    sqlDB: process.env.SQL_DB,
    sqlPoolEnable: process.env.SQL_POOL_ENABLE,
    sqlPoolMin: process.env.SQL_POOL_MIN,
    sqlPoolMax: process.env.SQL_POOL_MAX,
    // ssl details
    ssl: process.env.SSL,
    sslKey: process.env.SSL_KEY,
    sslCert: process.env.SSL_CERT,
    sslCa: process.env.SSL_CA,
}

export default globalData
