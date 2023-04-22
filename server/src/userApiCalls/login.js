const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const email = req.body.email;
  const user = { email: email };

  try {
    const idToken = jwt.sign(user, process.env.ID_TOKEN_SECRET);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.status(200).json({ idToken: idToken, refreshToken: refreshToken });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, proccess.env.ID_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = router;
