const http = require('http');

const express = require("express");

const app = express();

app.use((req,res,next) =>{
    console.log("It is First Middleware");
    next();//Allows the request  to continue to the next middleware in a line
})

app.use((req,res,next) =>{
    console.log("It is a second Middleware");
    res.send("<h1>Hello World </h1>")
})

app.listen(3000);