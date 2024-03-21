console.log(process.env)
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
app.use(morgan(':method :url :status :response-time ms - :res[content-length]', { stream: accessLogStream }))



/** API Gateway */
const { createProxyMiddleware } = require('http-proxy-middleware');

// Definice proxy middleware pro každou microservice
const animalExaminationsServiceProxy = createProxyMiddleware({
    target: process.env.ANIMAL_EXAMINATIONS_SERVICE_URL, // předpokládaná adresa a port animal-examinations-service
    pathRewrite: { '^/animal-examinations-service': '' },
    changeOrigin: true
});

const invoicesServiceProxy = createProxyMiddleware({
    target: process.env.INVOICES_SERVICE_URL, // předpokládaná adresa a port invoices-service
    pathRewrite: { '^/invoices-service': '' },
    changeOrigin: true
});

const reservationsServiceProxy = createProxyMiddleware({
    target: process.env.RESERVATIONS_SERVICE_URL, // předpokládaná adresa a port reservations-service
    pathRewrite: { '^/reservations-service': '' },
    changeOrigin: true
});

const usersServiceProxy = createProxyMiddleware({
    target: process.env.USERS_SERVICE_URL, // předpokládaná adresa a port users-service
    pathRewrite: { '^/users-service': '' },
    changeOrigin: true
});

// Použití proxy middleware v aplikaci
app.use('/animal-examinations-service', animalExaminationsServiceProxy);
app.use('/invoices-service', invoicesServiceProxy);
app.use('/reservations-service', reservationsServiceProxy);
app.use('/users-service', usersServiceProxy);


// Start the Express server
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})