const express = require('express')
const router = express.Router()
const { createTransport } = require('../controllers/contactController')

router.get('/',createTransport)

module.exports = router