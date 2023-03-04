const mongoose = require('mongoose')
// predefined schema for the data
// the data also has rules in place for it 
// the data when being sent must follow the rules or the request is a bad request 

/* IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if any changes are made to the schema they must also be made in the controllers
that are linked with this schema. userController createUser needs to
have any new parameters included in the 
line and if any are removed the same needs to happen
*/

const schema = mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    bookings: {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model('Users',schema)