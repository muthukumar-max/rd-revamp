require('dotenv').config()
module.exports = {
  apps: [{
    name: `RD ${process.env.PRODUCT} ${process.env.ENVIRONMENT} NEW API - ${process.env.PORT}`,
    script: 'npm start',
    args: 'one two',
    instances: `${process.env.PM2_INSTANCES}`,
    /* for live */
    // autorestart: true,
    // watch: ["server", "client"],
    /* for local */
    watch: true,
    ignore_watch: [
      'node_modules',
      'logs',
      'src/public'
    ],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
