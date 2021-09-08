const mongoose = require('mongoose')

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
    name: String,
    number: String,
    id: Number,
})

module.exports = mongoose.model('Contact', contactSchema)