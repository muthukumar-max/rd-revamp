// import packages
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import http from 'http'
import https from 'https'
import fs from 'fs'
import winston from 'winston'
import expressWinston from 'express-winston'

// import helpers
import globalData from './helpers/globals.js'
import * as errorHandler from './helpers/errorHandler.js'

// import model
import './models/db.js'

// import routes
import indexRouter from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())
app.use(cors())

app.use(
  expressWinston.logger({
    transports: [new winston.transports.File({ filename: 'logs/winston.log', json: true })],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true
  })
)

app.use('/v1', indexRouter)

app.use(errorHandler.notFound)

let server
if (!globalData.ssl || globalData.ssl === 'false') {
  server = http.createServer(app)
} else {
  const privateKey = fs.readFileSync(globalData.sslKey, 'utf8')
  const certificate = fs.readFileSync(globalData.sslCert, 'utf8')
  const credentials = { key: privateKey, cert: certificate }
  if (globalData.sslCa) {
    const caCertificate = fs.readFileSync(globalData.sslCa, 'utf8')
    credentials.ca = caCertificate
  }
  server = https.createServer(credentials, app)
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// process.on('unhandledRejection', (err) => {
//   console.log('unhandledRejection error occurred -> ', err)
// })

// process.on('uncaughtException', (err) => {
//   console.log('uncaughtException error occurred -> ', err)
// })

server.listen(globalData.port, () => {
  console.log(`Server is running on port ${globalData.port}`)
})

export default app
