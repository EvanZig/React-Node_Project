const express = require("express");
const router = express.Router();
router.use(express.json());
const authToken = require("../authorization/authTokens");

router.delete("/", authToken, (req, res) => {
  res.status(200).json(req.user.email);
});

module.exports = router;
