import fs from 'fs'
import https from 'https'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

import { handler } from '../build/handler.js'

dotenv.config()

const { APP_PORT, APP_IP } = process.env

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// SvelteKit handler
app.use(handler)

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/masters-hti.urfu.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/masters-hti.urfu.ru/fullchain.pem')
}

// Use the SSL certificate
https.createServer(options, app).listen(+APP_PORT, APP_IP, () => console.log('Server runs on ' + APP_IP + ':' + APP_PORT))
