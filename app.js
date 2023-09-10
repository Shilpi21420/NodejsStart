const express = require('express');
const bodyParse = require("body-parser");

const app = express();

const adminrouter = require('./routes/admin');
const shoprouter = require('./routes/shop');


app.use(bodyParse.urlencoded({ extended: false }));

// app.use((req,res,next) =>{
//     console.log("It is First Middleware");
//     next();//Allows the request  to continue to the next middleware in a line
// })
app.use('/admin',adminrouter);
app.use(shoprouter);

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);
