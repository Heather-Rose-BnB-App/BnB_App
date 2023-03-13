const mongoose = require('mongoose')
// predefined schema for the data
// the data also has rules in place for it 
// the data when being sent must follow the rules or the request is a bad request 
const schema = mongoose.Schema({
    key : {
        type: String,
        required: true
    },
    string : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Text',schema)