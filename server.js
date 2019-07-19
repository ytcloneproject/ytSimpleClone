const express = require('express')
let app = express()
const port = 3000
app.set('view engine', 'pug')

/* MONGO */
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://user1112:ytSimpleClone397@trial1-q1t8x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })

var clientfunc = function() {
    client.connect(err => {
        const collection = client.db("ytsc").collection("users")
        client.close()
    });
}

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
