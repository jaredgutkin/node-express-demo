const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()

app.use(express.json())
const PORT = 8000

let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.post('/api/notes', (request, response) => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    :0

    const note = request.body
    note.id = maxId + 1

    notes = notes.concat(note)

    response.json(note)
})

app.get('/', (request, response)=>{
    response.send('<h1>Hello World</h1>')
    
})

app.get('/api/notes', (request, response)=>{
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) =>{
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note){
        response.json(note)
    } else {
        response.status(404).end()
    }
    console.log(note)
})

app.delete('/api/notes/:id', (request, response) =>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})