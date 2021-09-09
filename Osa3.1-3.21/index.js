require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Contact = require('./models/contact')

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms :body - :req[content-length]'))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const persons = []

Contact.find({}).then(result => {
    result.forEach(person => {
        persons.push(person)
    })
})

app.get('/api/persons', (request, response) => {
    Contact.find({}).then(persons => {
        response.json(persons)
    })
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id'})
    }

    next(error)
}

app.use(errorHandler)

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    const id = Math.ceil(Math.random()*10000)

    const contact = {
        name: body.name,
        number: body.number,
        id: id,
    }

    Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
        .then(updatedContact => {
            response.json(updatedContact)
        })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response) => {
    Contact.findById(request.params.id)
        .then(contact => {
            if (contact) {
                response.json(contact)
            }
            else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.get('/info', (request, response) => {
    response.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p></div>`)
})

app.delete('/api/persons/:id', (request, response) => {
    Contact.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const id = Math.ceil(Math.random()*10000)
    const person = request.body


    const newPerson = new Contact({
        name: person.name,
        number: person.number,
        id: id,
    })

    newPerson.save()
        .then(savedPerson => {
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

const unkownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint'})
}

app.use(unkownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT)