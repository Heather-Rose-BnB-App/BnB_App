const mongoose = require('mongoose')
// predefined schema for the data
// the data also has rules in place for it 
// the data when being sent must follow the rules or the request is a bad request 
const schema = mongoose.Schema({
    userIDorEmail : {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    dateFrom: {
        type: String,
        required: true
    },
    dateTo: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Booking',schema)