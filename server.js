const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.static('client/build'));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})
const port = process.env.PORT;

app.listen(port || 5000,()=>{
    console.log(`app is running on ${port}`);
})
