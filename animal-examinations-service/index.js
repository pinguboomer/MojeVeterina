require('dotenv').config()

/** Express initialization */
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

// Logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
if (process.env.NODE_ENV === 'production') {
    app.use(morgan(':method :url :status :response-time ms - :res[content-length]', { stream: accessLogStream }))
}
else if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes
app.use(require('./src/routes/routes'))

/** Mongoose initialization */
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Connected to MongoDB')

        // Start the Express server
        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`)
        })
    })
    .catch(err => console.log(err))