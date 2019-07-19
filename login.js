const MongoClient = require(‘node_modules/mongodb’).MongoClient
const uri = "mongodb+srv://user1112:ytSimpleClone397@trial1-q1t8x.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db("test").collection("devices")
  // perform actions on the collection object
  client.close()
})
