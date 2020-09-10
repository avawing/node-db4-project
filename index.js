const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

server.use(express.json(), helmet(), morgan('tiny'))

const PORT = 3333;
server.listen(PORT => console.log("server listening!"))