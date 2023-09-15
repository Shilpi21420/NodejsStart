const express = require("express");

const shopController = require("../controllers/shopp");

const router = express.Router();

router.get("/", shopController.getdata);

module.exports = router;
