const express=require("express");

const app=express();

app.get('/',(req,res) =>{
    res.status(200).send("landing page");
})

app.listen(8000,() =>{
    console.log("server in running at 8000");
})