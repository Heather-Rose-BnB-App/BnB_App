require('dotenv').config()
const express = require('express')


const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// declaration of our express app
const app = express()
//import of our routes
const userRoutes = require('./routes/users')
const bookingRoutes = require('./routes/bookings')
const testRoutes = require('./routes/test')
const roomRoutes = require('./routes/rooms')
const contactRoutes = require('./controllers/contactController')

//Allows access to other server.
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import mongoose
const mongoose = require('mongoose')

// middleware, this runs just before each request
// its to be used as a method that runs just before each request in order to perform an action or log
// of information about the request
app.use((req, res, next) => {
    // this will log to the console the type of request that is being received
    console.log(req.path, req.method)
    next() //must be run for it to continue
})

// telling the app to expect json data from the requests
app.use(express.json())

// routes - these are imports from the users and bookings.js files
// this just allows for a clean up the server file and have requests allocated to specific DB tables in their own .js file
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/test', testRoutes)
app.use('/api/rooms', roomRoutes)
app.use('/api/contact',contactRoutes)


//test //this is all moved to the proper location and a routes antry has been made for it as well.
// app.post('/api/contact', (req, res) => {
//     console.log('i am here now')
//     // Get form data from request body
//     const { name, email, message } = req.body;

//     // Create Nodemailer transport
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'ppit.hr23@gmail.com',
//             pass: ''
//         }
//     });

//     const mailOptions = {
//         from: email,
//         to: 'ppit.hr23@gmail.com',
//         subject: 'Contact Us Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Failed to send email' });
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).json({ message: 'Email sent successfully' });
//         }
//     });
// });

// app.listen(process.env.PORT, () => {
//     console.log('Connected to DB and Listening on port ', process.env.PORT)
// })

// connect to the DB and begin listening for request if it connects
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listening port
        // process.env.PORT is a link to the .env file and the value is being pulled from it.
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("Error : " + error + " a silly little error")
    })

