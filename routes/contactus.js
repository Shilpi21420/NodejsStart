const express = require('express');
const path = require('path');

const router = express.Router();
const rootdir = require('../util/path')

router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootdir,"views","contactus.html"));
  });
  router.post("/contactus", (req, res, next) => {
    console.log(req.body);
  
    res.redirect("/success");
  });

module.exports = router;