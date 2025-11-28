let express = require("express")
let path = require ("path")

let app =express()
let port = 8000
app.use(express.static(path.join(__dirname,"public")))

app.get