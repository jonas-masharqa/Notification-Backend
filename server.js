const express = require('express')
var cors = require('cors')
const app = express()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.use(cors());

io.on('connection', client => {
  console.log('a user connected')

  client.on('chat', data => {
    console.log('Message received -->', data)

    io.emit('chat', data)
  })
})

io.listen(5000, () => {
  console.log('Listening ... 🚀 ')
})
