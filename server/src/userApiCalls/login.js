const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const getConnection = require("../getConnection");

router.post("/", async (req, res) => {
  try {
    const query = `SELECT * FROM users
               WHERE email = ? AND password = ?`;

    const email = req.body.email;
    const values = [email, req.body.password];
    const connection = await getConnection();
    connection.execute(query, values, function (error, results, fields) {
      if (error) throw error;
    });
    const idToken = jwt.sign(email, process.env.ID_TOKEN_SECRET);
    const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
    res.status(200).json({ idToken: idToken, refreshToken: refreshToken });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

module.exports = router;
