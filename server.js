const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/', (req,res) => {
    const crusor = db.collection('quotes').find()
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').insertOne(req.body, (err, result) => 
    {
        if (err) return console.log(err)
        
        console.log('saved to database')
        res.redirect('/')
    })
})

var db 

MongoClient.connect('mongodb+srv://<blank>:<password>@starwarscluster-19fwm.mongodb.net/test?retryWrites=true&w=majority',
{ useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('starwarscluster') // whatever your database name is

app.listen(3000, () => {
    console.log('Listening on 3000')
  })
})