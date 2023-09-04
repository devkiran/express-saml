var express = require("express");
var router = express.Router();

// GET - Dashboard
router.get("/dashboard", function (req, res, next) {
  res.render("dashboard");
});

// GET - Home
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
