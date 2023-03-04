const express = require('express')
const router = express.Router()
const {
    getAllRooms,
    getSingleRoom,
    createRoom,
    deleteRoom,
    updateRoom
} = require('../controllers/roomsController')

//user routes
router.get('/',getAllRooms)

router.get('/:id',getSingleRoom)

router.post('/', createRoom)

router.delete('/:id',deleteRoom)

router.patch('/:id',updateRoom)

// passing the routes out for use in another express file
module.exports = router