const express = require("express");
const app = express();


app.get("/", (req, res) => {
    return res.send("hello world")
})

app.listen(8080, function(){
    console.log("listing port 8080");
})