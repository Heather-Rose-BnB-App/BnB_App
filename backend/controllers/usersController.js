const usersTable = require('../models/userModel')
const mongoose = require('mongoose')

//get all
const getAllUsers = async (req,res) => {
    const users = await usersTable.find({}).sort({createdate: -1})
    res.status(200).json(users)
}

//get single
const getSingleUser = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    // id is valid now we search for the user
    const user = await usersTable.findById(id)
    //check if the user exists and only return them if they do
    if(!user){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(user)}
}

//create new
const createUser = async(req,res) => {
    const {firstName,lastName,email,password,mobile,bookings} = req.body
    //try to create a new table entry based on the schema and the data being sent
    //this will also send a 200 code if it succeeds and a 400 code if it fails
    try{
        const user = await usersTable.create({firstName,lastName,email,password,mobile,bookings})
        res.status(200).json(user)
    }
    catch(error){res.status(400).json({error: error.message})}
}

//delete one
const deleteUser = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const user = await usersTable.findOneAndDelete({_id: id})
    //check if the user exists and only return them if they do
    if(!user){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(user)}    
}

//update one
const updateUser = async(req,res) => {
    const { id } = req.params
    // check that the id is valid and if it s not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const user = await usersTable.findOneAndUpdate({_id: id},
        {
            // this will spread the load automatically
            // to the request as json taking in whatever params
            // passed in from our json request
            ...req.body
        })
    //check if the user exists and only return them if they do
    if(!user){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(user)}
}

// all functions for exporting
module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
}