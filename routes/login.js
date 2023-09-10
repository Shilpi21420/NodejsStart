const express = require("express");

const router = express.Router();

router.get("/login-user", (req, res, next) => {
  res.send(
    "<form onsubmit='localStorage.setItem(`username`,document.getElementById(`username`).value)' action='/login/login-user' method='POST'><input id='username' type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

router.post("/login-user", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
