const express = require('express')
const router = express.Router()

//user routes
router.get('/',(req,res) => { // gets all Users from the DB
    res.json({mesg : 'Dummy responce from Users GET'})
})

router.get('/:id',(req,res) => { // gets a single user from the DB
    res.json({mesg : 'Dummy responce from Users GET :id'})
})

router.post('/',(req,res) => { // post a single new user
    res.json({mesg : 'Dummy responce from Users Post'})
})

router.delete('/:id',(req,res) => { // delete a user by id
    res.json({mesg : 'Dummy responce from Users Delete :id'})
})

router.patch('/:id',(req,res) => { // post a single new user
    res.json({mesg : 'Dummy responce from Users Patch :id'})
})


// passing the routes out for use in another express file
module.exports = router