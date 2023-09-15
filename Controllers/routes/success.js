
const express = require('express');

const SuccessController = require('../controllers/successc')
const router = express.Router();

router.get("/success",SuccessController.getSuccess );

  module.exports = router;