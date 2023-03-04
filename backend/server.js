require('dotenv').config()
const express = require('express')

// declaration of our express app
const app = express()
//import of our routes
const userRoutes = require('./routes/users') 
const bookingRoutes = require('./routes/bookings')
const testRoutes = require('./routes/test')
const roomRoutes = require('./routes/rooms')

//import mongoose
const mongoose = require('mongoose')

// middleware, this runs just before each request
// its to be used as a method that runs just before each request in order to perform an action or log
// of information about the request
app.use((req,res,next) => {
    // this will log to the console the type of request that is being received
    console.log(req.path,req.method)
    next() //must be run for it to continue
})

// telling the app to expect json data from the requests
app.use(express.json())

// routes - these are imports from the users and bookings.js files
// this just allows for a clean up the server file and have requests allocated to specific DB tables in their own .js file
app.use('/users',userRoutes)
app.use('/bookings',bookingRoutes)
app.use('/test',testRoutes)
app.use('/rooms',roomRoutes)

// connect to the DB and begin listening for request if it connects
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening port
        // process.env.PORT is a link to the .env file and the value is being pulled from it.
        app.listen(process.env.PORT,() => {
            console.log('Connected to DB and Listening on port ',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("Error : " + error + " a silly little error")
    })

