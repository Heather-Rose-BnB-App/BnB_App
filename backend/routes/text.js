const express = require('express')
const router = express.Router()
const {
    getAllText,
    getSingleText,
    createText,
    deleteText,
    updateText
} = require('../controllers/textController')

//Text routes
router.get('/',getAllText)

router.get('/:id',getSingleText)

router.post('/',createText)

router.delete('/:id',deleteText)

router.patch('/:id',updateText)

// passing the routes out for use in another express file
module.exports = router