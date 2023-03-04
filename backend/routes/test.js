const express = require('express')
const router = express.Router()

//user routes
router.get('/',(req,res) => { // gets all Test from the DB
    res.json({mesg : 'Dummy response from Test GET'})
})

router.get('/:id',(req,res) => { // gets a single user from the DB
    res.json({mesg : 'Dummy response from Test GET :id'})
})
//test posting to the DB using the test table
router.post('/DB',async (req,res) => { // post a single new user
    //define the properties  that is being passed to the post
    const {title,username,password} = req.body
    //try to create a new table entry based on the schema and the data being sent
    //this will also send a 200 code if it succeeds and a 400 code if it fails
    try{
        const test = await testing.create({title,username,password})
        res.status(200).json(test)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id',(req,res) => { // delete a user by id
    res.json({mesg : 'Dummy response from Test Delete :id'})
})

router.patch('/:id',(req,res) => { // post a single new user
    res.json({mesg : 'Dummy response from Test Patch :id'})
})


// passing the routes out for use in another express file
module.exports = router