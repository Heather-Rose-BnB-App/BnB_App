const express = require('express')
const router = express.Router()
// const  createTransport = require('../controllers/contactController').default

const app = express();
const nodemailer = require('nodemailer');


router.post('/', async (req, res) => { 
    const { name, email, message } = req.body;


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ppit.hr23@gmail.com',
            pass: process.env.CONTACTPASSWORD // put the password in the .ENV file and it can be protected
        }
    })

    const mailOptions = {
        from: 'ppit.hr23@gmail.com',
        to: email,
        subject: 'Contact Us Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    })
})

module.exports = router