const mongoose = require('mongoose')
// predefined schema for the data
// the data also has rules in place for it 
// the data when being sent must follow the rules or the request is a bad request 
const schema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Tests',schema)
