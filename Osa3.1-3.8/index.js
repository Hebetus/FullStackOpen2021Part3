const express = require('express')
const morgan = require('morgan')
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms :body - :req[content-length]'))
app.use(express.json())


let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (!person){
        response.status(404).end()
    }
    response.json(person)
})

app.get('/info', (request, response) => {
    response.send(`<div><p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p></div>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id) 
    console.log(persons)
    response.status(404).end()
})

app.post('/api/persons', (request, response) => {
    const id = Math.ceil(Math.random()*10000)
    const person = request.body

    if (!person.name){
        response.status(400)
        response.send({ error: 'name is required' }).end()
        return    
    }
    else if (!person.number){
        response.status(400)
        response.send({ error: 'number is required' }).end()
        return 
    }
    else if (persons.find(pers => pers.name === person.name)){
        response.status(400)
        response.send({ error: 'name must be unique' }).end()
        return 
    }

    const newPerson = {}
    newPerson.id = id
    newPerson.name = person.name
    newPerson.number = person.number
    persons = persons.concat(newPerson)
    response.end()
})

const PORT = 3001
app.listen(PORT)