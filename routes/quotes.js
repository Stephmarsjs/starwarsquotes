const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', "ejs");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('index.ejs', {quotes: result})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').insertOne(req.body, (err, result) => 
    {
        if (err) return console.log(err)
        
        console.log('saved to database')
        res.redirect('/')

        db.collection('quotes').find().toArray(function(err, results){
            console.log(results)
        })
    })
})
app.post('/quotes', (req, res) => {
    db.collection('quotes').insertOne(req.body, (err, result) =>
    {
        if (err) return console.log(err)
        console.log('save')
    })
})
