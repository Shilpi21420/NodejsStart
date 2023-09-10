const http = require("http");
const bodyParse = require("body-parser");

const express = require("express");

const app = express();
app.use(bodyParse.urlencoded({ extended: false }));

// app.use((req,res,next) =>{
//     console.log("It is First Middleware");
//     next();//Allows the request  to continue to the next middleware in a line
// })

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><input type='text'><button type='submit'>Submit</button></form>"
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
