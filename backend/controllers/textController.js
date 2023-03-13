const textTable = require('../models/textModel')
const mongoose = require('mongoose')

//get all
const getAllText = async (req,res) => {
    const text = await textTable.find({}).sort({createdate: -1})
    res.status(200).json(text)
}

//get single
const getSingleText = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such text by id :"+ id})
    }
    // id is valid now we search for the text
    const text = await textTable.findById(id)
    //check if the text exists and only return them if they do
    if(text){return res.status(400).json({error: "No such text"})}
    else{res.status(200).json(text)}
}

//create new
const createText = async(req,res) => {
    const {firstName,lastName,email,password,mobile,bookings} = req.body
    //try to create a new table entry based on the schema and the data being sent
    //this will also send a 200 code if it succeeds and a 400 code if it fails
    try{
        const text = await textTable.create({firstName,lastName,email,password,mobile,bookings})
        res.status(200).json(text)
    }
    catch(error){res.status(400).json({error: error.message})}
}

//delete one
const deleteText = async (req,res) => {
    const { id } = req.params
    // check that the id is valid and if it is not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such text by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const text = await textTable.findOneAndDelete({_id: id})
    //check if the text exists and only return them if they do
    if(!text){return res.status(400).json({error: "No such text"})}
    else{res.status(200).json(text)}    
}

//update one
const updateText = async(req,res) => {
    const { id } = req.params
    // check that the id is valid and if it s not return an error message
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such text by id :"+ id})
    }
    //uses the _id field from mongo DB to select it by its id and delete
    const text = await textTable.findOneAndUpdate({_id: id},
        {
            // this will spread the load automatically
            // to the request as json taking in whatever params
            // passed in from our json request
            ...req.body
        })
    //check if the text exists and only return them if they do
    if(!text){return res.status(400).json({error: "No such text"})}
    else{res.status(200).json(text)}
}

// all functions for exporting
module.exports = {
    getAllText,
    getSingleText,
    createText,
    deleteText,
    updateText
}