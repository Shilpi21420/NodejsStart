const path = require('path');
const rootdir = require('../util/path'); 

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootdir,"views", "success.html"));
  };