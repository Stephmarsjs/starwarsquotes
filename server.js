const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
routes = require('.routes');
api = require('./routes/api')

var db 

MongoClient.connect('mongodb+srv://stephmarsjs:Franklin1223@starwarscluster-19fwm.mongodb.net/test?retryWrites=true&w=majority',
{ useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('starwarscluster') // whatever your database name is

app.listen(3000, () => {
    console.log('Listening on 3000')
  })
})