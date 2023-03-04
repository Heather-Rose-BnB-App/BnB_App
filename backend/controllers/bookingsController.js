const bookingsTable = require('../models/bookingModel')
const mongoose = require('mongoose')

//get all
const getAllBookings = async (req,res) => {
    const booking = await bookingsTable.find({}).sort({createdate: -1})
    res.status(200).json(rooms)
}

//get single
const getSingleBooking = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    // id is valid now we search for the user
    const booking = await bookingsTable.findById(id)
    //check if the user exists and only return them if they do
    if(!booking){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(booking)}
}

//create new
const createBooking = async(req,res) => {
    const {userIDorEmail,roomID,dateFrom,dateTo} = req.body
    //try to create a new table entry based on the schema and the data being sent
    //this will also send a 200 code if it succeeds and a 400 code if it fails
    try{
        const booking = await bookingsTable.create({userIDorEmail,roomID,dateFrom,dateTo})
        res.status(200).json(booking)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete one
const deleteBooking = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const booking = await bookingsTable.findOneAndDelete({_id: id})
    //check if the user exists and only return them if they do
    if(!booking){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(booking)}    
}

//update one
const updateBooking = async(req,res) => {
    const { id } = req.params
    // check that the id is valid and if it s not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const booking = await bookingsTable.findOneAndUpdate({_id: id},
        {
            // this will spread the load automatically
            // to the request as json taking in whatever params
            // passed in from our json request
            ...req.body
        })
    //check if the user exists and only return them if they do
    if(!booking){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(booking)}
}

// all functions for exporting
module.exports = {
    getAllBookings,
    getSingleBooking,
    createBooking,
    deleteBooking,
    updateBooking
}