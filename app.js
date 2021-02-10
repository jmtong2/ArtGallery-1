const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const mongoose = require('mongoose')

//MongoDB Connection
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://appdevpog:sash123@nodetuts.ilwsd.mongodb.net/nodetuts?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const dbURI = "mongodb+srv://rayray:pokerchamp@nodetuts.ilwsd.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log("connected to db"))
        .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))        //Parse form
app.use(bodyParser.json())                              //Parse json
app.use(express.static(path.join(__dirname, "./")))  //static folder

app.listen(port)

//http://localhost:3000/
app.get("/", function(req, res){
        res.render('index')
})

//http://localhost:3000/about
app.get("/about", function(req, res){
        res.render('about')
})

//404 error page
app.use((req, res) => {
        res.render("404")
});