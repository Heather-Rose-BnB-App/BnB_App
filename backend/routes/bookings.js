const express = require('express')
const router = express.Router()
const {
    getAllBookings,
    getSingleBooking,
    createBooking,
    deleteBooking,
    updateBooking
} = require('../controllers/bookingsController')

//user routes
router.get('/',getAllBookings)

router.get('/:id',getSingleBooking)

router.post('/',createBooking)

router.delete('/:id',deleteBooking)

router.patch('/:id',updateBooking)

// passing the routes out for use in another express file
module.exports = router