const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getSingleUser,
    getSingleUserByEmail,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/usersController')


//user routes
router.get('/',getAllUsers)

router.get('/:id',getSingleUser)

router.get('/login/:email',getSingleUserByEmail)

router.post('/',createUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)

// passing the routes out for use in another express file
module.exports = router