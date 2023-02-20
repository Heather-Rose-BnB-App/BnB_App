const express = require('express')
const router = express.Router()

//user routes
router.get('/',(req,res) => { // gets all bookings from the DB
    res.json({mesg : 'Dummy responce from bookings GET'})
})

router.get('/:id',(req,res) => { // gets a single user from the DB
    res.json({mesg : 'Dummy responce from bookings GET :id'})
})

router.post('/',(req,res) => { // post a single new user
    res.json({mesg : 'Dummy responce from bookings Post'})
})

router.delete('/:id',(req,res) => { // delete a user by id
    res.json({mesg : 'Dummy responce from bookings Delete :id'})
})

router.patch('/:id',(req,res) => { // post a single new user
    res.json({mesg : 'Dummy responce from bookings Patch :id'})
})

// passing the routes out for use in another express file
module.exports = router