const path = require('path')
const express = require('express')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');

let app = express()
const port = 3000

app.use(express.urlencoded())

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/createAccount', function (req, res) {
    const username = req.body.user
    const email = req.body.email
    let password = req.body.password

    const saltRounds = 10;

    hsh = bcrypt.hash(password, saltRounds);

    const uri = "mongodb+srv://user1112:ytSimpleClone397@trial1-q1t8x.mongodb.net/test?retryWrites=true&w=majority";
    const mongoClient = new MongoClient(uri, { useNewUrlParser: true });

    /*
    IMPORTANT:
    Whitelist IP ADDRESS
    */

    mongoClient.connect(function(err, client) {
        if (err) {
            console.error('An error occurred connecting to MongoDB: ', err);
        } else {
            var myobj = { name: username, email: email, password: hsh };
            const collection = client.db("ytsc").collection("users")

            collection.insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                mongoClient.close();
            });
        }
    });

    res.end()
});

app.post('/login', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const saltRounds = 10;
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {

    });

    res.end()
});

var upload = function(file) {
    var cloudinary = require('cloudinary').v2;
    cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
