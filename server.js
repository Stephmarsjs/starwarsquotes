const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooo thereeeeee!!!!!')
})

app.listen(3000, function() {
    console.log('Listening on 3000')
})