const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const mongoose = require('mongoose')
const User = require('./models/user')

//MongoDB Connection
const dbURI = "mongodb+srv://rayray33:pokerchamp@nodetuts.ilwsd.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => app.listen(port, function(){
                                console.log("Listening at port " + port)
                          }))
        .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, './')))  //static folder

app.get('/users', (req, res) => {
        const user = new User({
                email: 'raymund@gmail',
                password: 'poker',
                name: 'pogi',
                mobile: '12345'
        })

        user.save()
                .then((result) => {
                        res.send(result)
                })
                .catch((err) => {
                        console.log(err)
                })
})

//http://localhost:3000/
app.get("/", function(req, res){
        res.render('index')
})

//http://localhost:3000/about
app.get("/about", function(req, res){
        res.render('about')
})

//http://localhost:3000/details
app.get("/details", function(req, res){
        res.render('details')
})

//404 error page
app.use((req, res) => {
        res.render("404")
});
