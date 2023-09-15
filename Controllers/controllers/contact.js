const rootdir = require('../util/path')
const path = require('path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootdir,"views","contactus.html"));
  }

  exports.postContact = (req, res, next) => {
    console.log(req.body);
  
    res.redirect("/success");
  }

