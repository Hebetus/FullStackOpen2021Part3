const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('connected to database')
    })
    .catch((error) => {
        console.log('an error happened while connecting', error.message)
    })

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    }
    ,
    number: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    id: {
        type: Number
    }
})
contactSchema.plugin(uniqueValidator, { message: 'Name and/or number already exists' })

module.exports = mongoose.model('Contact', contactSchema)