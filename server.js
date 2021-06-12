const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.static('client/build'));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})


app.listen(8000 || process.env.PORT,()=>{
    console.log("app listening on "+PORT);
})