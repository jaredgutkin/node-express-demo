const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

let notes = [
    
]

app.get('/', (request, response)=>{
    response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response)=>{
    response.json(notes)
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})