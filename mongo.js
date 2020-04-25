const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uri = "mongodb+srv://Admin_Jan:QPT4rrVANgsC1I9j@prdke-database-j4dwt.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("Test").collection("test1");
    // perform actions on the collection object
    collection.insertOne(
        { _id: 74, firstName: "Mahsum"
        }
    );

    client.close();
});

