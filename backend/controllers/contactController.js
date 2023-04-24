
// // Import necessary libraries
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const nodemailer = require('nodemailer');

// // Create Express app
// const app = express();

// // Parse incoming request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Define API endpoint for form submission
// app.post('/api/contact', (req, res) => {
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
//         from: 'ppit.hr23@gmail.com',
//         to: email,
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

