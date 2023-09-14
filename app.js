const path = require('path');

const express = require('express');
const bodyParse = require("body-parser");

const app = express();

const adminrouter = require('./routes/admin');
const shoprouter = require('./routes/shop');
const contactus = require('./routes/contactus');
const successfulpage = require('./routes/success');



app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req,res,next) =>{
//     console.log("It is First Middleware");
//     next();//Allows the request  to continue to the next middleware in a line
// })
app.use('/admin',adminrouter);
app.use(shoprouter);
app.use(contactus);
app.use(successfulpage);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})

app.listen(3000);
