const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const postRoute = require("./routes/postRoutes")

const app = express()
const port = 5600

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine","ejs")

app.use("/post",postRoute)

app.get("/",function(req, res){
    res.render("index")
})

app.listen(port, function(){
    console.log(" application running on port ",port)
})
