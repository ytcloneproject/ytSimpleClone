const path = require('path')
const express = require('express')

let app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.urlencoded())

/* MONGO */
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://<username>:<password>@trial1-q1t8x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })

var clientfunc = function() {
    client.connect(err => {
        const collection = client.db("ytsc").collection("users")
        client.close()
    });
}

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/handler', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    res.end()
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
