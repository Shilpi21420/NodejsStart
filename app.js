const express = require('express');
const bodyParse = require('body-parser');

const app = express();

const login = require('./routes/login');
const chat = require('./routes/chat');

app.use(bodyParse.urlencoded({ extended: false }));
 
app.use('/login', login);
app.use(chat);

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);





