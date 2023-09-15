const rootdir = require('../util/path')
const path = require('path');

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(rootdir,"views","add-product.html"));
  }

  exports.postAddProducts = (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  };