const express = require('express')
const app = express()


app.get('/server', (req, res) => {
    res.send('response')
})

app.listen(5000, () => {
    console.log('listening ...')
})