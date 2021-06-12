const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.static('client/build'));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})


app.listen(process.env.PORT || 5000,()=>{
    console.log(`app is running on ${process.env.PORT}`);
})
