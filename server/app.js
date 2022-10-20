const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('on home')
})

// listening
app.listen(3000)

