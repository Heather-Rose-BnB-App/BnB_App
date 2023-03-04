const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/usersController')


//user routes
router.get('/',getAllUsers)

router.get('/:id',getSingleUser)

router.post('/',createUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)

// passing the routes out for use in another express file
module.exports = router