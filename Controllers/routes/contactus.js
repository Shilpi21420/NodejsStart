const express = require('express');

const router = express.Router();
const contactusController = require('../controllers/contact');

router.get("/contactus",contactusController.getContact);
  router.post("/contactus", contactusController.postContact);

module.exports = router;