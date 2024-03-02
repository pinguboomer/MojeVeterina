require('dotenv').config()

/** Express initialization */
const express = require('express')
const app = express()

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