const mongoose = require('mongoose')
// predefined schema for the data
// the data also has rules in place for it 
// the data when being sent must follow the rules or the request is a bad request 
const schema = mongoose.Schema({
    roomNo : {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    maxNumberOfGuests: {
        type: Number,
        required: true
    },
    numberOfBeds: {
        type: Number,
        required: true
    },
    roomName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bookedDates: {
        type: Date,
    }
})

module.exports = mongoose.model('Rooms',schema)