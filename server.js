const { urlencoded } = require('express')
const express = require('express')
const app = express()
const port = 8000

require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

const jokesRoutes = require("./routes/jokes.routes")
jokesRoutes(app)

app.listen(port, () => console.log("Express server running on port: " + port))