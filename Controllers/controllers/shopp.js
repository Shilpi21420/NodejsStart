const rootdir = require('../util/path'); 
const path = require('path');

exports.getdata =  (req, res, next) => {
    res.sendFile(path.join(rootdir,"views", "shop.html"));
  };