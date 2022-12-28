const express = require("express");
const app = express();
const cors = require('cors')

require('dotenv').config()
const Task = require("./cotrollers/Task.controller");
const {register, login} = require("./cotrollers/auth.controller");

app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    }),
  )

app.use(express.json())
require('dotenv').config()
app.post('/register', register)
app.post('/login', login)
app.use('/', Task);


app.get("/", (req, res) => {
    return res.send("hello world")
})

 const PORT = process.env.PORT || 8080

app.listen(PORT, async() => {
    try{
        await connect()
    }catch(err){
        console.log('err')
    }
    console.log(`listing ${PORT}`)
})