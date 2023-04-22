const express = require("express");
const router = express.Router();
router.use(express.json());

router.put("/", (req, res) => {
  res.send("update smth");
});

module.exports = router;
