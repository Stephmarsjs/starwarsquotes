const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

var db 

MongoClient.connect('mongodb+srv://<username here>:<password here>@starwarscluster-19fwm.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.log(err)
    db = client.db('starwarscluster') // whatever your database name is

app.listen(3000, () => {
    console.log('Listening on 3000')
  })
})