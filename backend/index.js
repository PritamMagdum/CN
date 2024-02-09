const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000
// Middleware
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
// app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send("Hello Pritam!")
})

app.listen(port, () => {
    console.log(`Cloudy Notes BACKEND listening on port http://localhost:${port}`)
})

