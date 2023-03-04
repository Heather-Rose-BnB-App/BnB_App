const roomsTable = require('../models/roomsModel')
const mongoose = require('mongoose')

//get all
const getAllRooms = async (req,res) => {
    const rooms = await roomsTable.find({}).sort({createdate: -1})
    res.status(200).json(rooms)
}

//get single
const getSingleRoom = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    // id is valid now we search for the user
    const room = await roomsTable.findById(id)
    //check if the user exists and only return them if they do
    if(!room){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(room)}
}

//create new
const createRoom = async(req,res) => {
    const {roomNo,type,maxNumberOfGuests,numberOfBeds,bedTypes,price,bookedDates} = req.body
    //try to create a new table entry based on the schema and the data being sent
    //this will also send a 200 code if it succeeds and a 400 code if it fails
    try{
        const rooms = await roomsTable.create({roomNo,type,maxNumberOfGuests,numberOfBeds,bedTypes,price,bookedDates})
        res.status(200).json(rooms)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete one
const deleteRoom = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const room = await roomsTable.findOneAndDelete({_id: id})
    //check if the user exists and only return them if they do
    if(!room){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(room)}    
}

//update one
const updateRoom = async(req,res) => {
    const { id } = req.params
    // check that the id is valid and if it s not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such User by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const room = await roomsTable.findOneAndUpdate({_id: id},
        {
            // this will spread the load automatically
            // to the request as json taking in whatever params
            // passed in from our json request
            ...req.body
        })
    //check if the user exists and only return them if they do
    if(!room){return res.status(400).json({error: "No such user"})}
    else{res.status(200).json(room)}
}

// all functions for exporting
module.exports = {
    getAllRooms,
    getSingleRoom,
    createRoom,
    deleteRoom,
    updateRoom
}