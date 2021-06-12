const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('client/build'));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
})


app.listen(8000,()=>{
    console.log("app listening on 8000");
})