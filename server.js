const express = require('express');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');
var datetime = require('node-datetime');
var time = datetime.create();


//app.get('/', (req, res) => res.send('Hello World!'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyparser.urlencoded({ extended: true }));

//app.register('.html', require('jade'));


//app.use(express.static('./public'))

app.get('/', (req, res) => res.render('index'))

app.get('/index.html', (req, res) => res.render('index'))


app.post('/send', (req, res) =>{
    console.log(req.body.posting);

    var request = require('request');


    request.post(
        'http://34.91.232.208:9200/users/_doc',
        { json: {
                "firstName":"Jan",
                "lastname":"Mastalier",
                "username":req.body.posting,
                "password":"test"
            } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );

    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    const uri = "mongodb+srv://Admin_Jan:QPT4rrVANgsC1I9j@prdke-database-j4dwt.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Test").collection("test1");
        // perform actions on the collection object
        collection.insertOne(
            {emoji: req.body.posting, status:"", userId:"", time: time.now()
            }
        );
        //html form soll dei nutzer id sein aber unsichtbar für Nutzer

        client.close();
    });

    res.render('test');
    res.end()
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
