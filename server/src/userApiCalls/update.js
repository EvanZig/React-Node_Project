const express = require("express");
const router = express.Router();
router.use(express.json());
const authToken = require("../authorization/authTokens");
const getConnection = require("../getConnection");

router.put("/", authToken, async (req, res) => {
  try {
    const query = `UPDATE users
               SET firstname = ?,
                   lastname = ?,
                   phone = ?,
                   password = ?,
                   email = ?
               WHERE email = ?`;

    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.phone,
      req.body.password,
      req.body.email,
      req.user.email,
    ];

    const connection = await getConnection();
    connection.execute(query, values, function (error, results, fields) {
      if (error) throw error;
      console.log("User updated successfully");
    });
    connection.release();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
