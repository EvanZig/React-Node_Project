const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const getConnection = require("../getConnection");

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(`${firstName} , ${lastName}, ${email} , ${phone} , ${password}`);

  const query = `INSERT INTO users (firstname,lastname,email,phone,password)
  VALUES (?,?,?,?,?)`;

  let connection;
  try {
    connection = await getConnection();
    await connection.execute(query, [
      firstName,
      lastName,
      email,
      phone,
      password,
    ]);
    console.log("Data inserted successfully");
    const idToken = jwt.sign(email, process.env.ID_TOKEN_SECRET);
    const refreshToken = jwt.sign(email, process.env.REFRESH_TOKEN_SECRET);
    res.status(200).json({ idToken: idToken, refreshToken: refreshToken });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

module.exports = router;
