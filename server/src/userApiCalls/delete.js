const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("delete smth");
});

module.exports = router;
