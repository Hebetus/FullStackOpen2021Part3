const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('insufficient parameters')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://hebe:${password}@phonebook.cbwrr.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length === 3) {
    Contact.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
    })
}

else if (process.argv.length === 5) {
    const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4],
    })

    contact.save().then(response => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}