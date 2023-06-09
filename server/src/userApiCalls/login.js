const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const getConnection = require("../getConnection");

router.post("/", async (req, res) => {
  let connection;
  try {
    const query = `SELECT * FROM users
               WHERE email = ? AND password = ?`;

    const email = req.body.email;
    const values = [email, req.body.password];
    connection = await getConnection();
    connection.execute(query, values, function (error, results, fields) {
      if (error) throw error;

      if (results.length > 0) {
        console.log("Login successful");
        const idToken = jwt.sign({ email }, process.env.ID_TOKEN_SECRET, {
          expiresIn: "10s",
        });
        const refreshToken = jwt.sign(
          { email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "7d",
          }
        );
        res.status(200).json({ idToken: idToken, refreshToken: refreshToken });
      } else {
        console.log("Login failed");
        res.status(400).send("Invalid email or password");
      }
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

module.exports = router;
