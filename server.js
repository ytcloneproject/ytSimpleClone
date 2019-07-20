const path = require('path')
const express = require('express')
const bcrypt = require('bcrypt')
const MongoClient = require('mongodb').MongoClient

let app = express()
const port = 3000

app.use(express.urlencoded())

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/createAccount', function (req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function(err, hash) {
        const uri = "mongodb+srv://user1112:ytSimpleClone397@trial1-q1t8x.mongodb.net/test?retryWrites=true&w=majority"
        const client = new MongoClient(uri, { useNewUrlParser: true })

        client.connect(err => {
            const collection = client.db("ytsc").collection("users")

            var myobj = { name: username, email: email, password: hash }
            collection.insert(myObj)
        });
    });

    res.end()
});

app.post('/login', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {

    });

    res.end()
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
