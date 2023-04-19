const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("register smth");
});

module.exports = router;
