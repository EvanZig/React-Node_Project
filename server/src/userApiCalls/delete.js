const express = require("express");
const router = express.Router();
router.use(express.json());
const authToken = require("../authorization/authTokens");
const getConnection = require("../getConnection");

router.delete("/", authToken, async (req, res) => {
  const email = req.user.email;
  try {
    const connection = await getConnection();
    connection.execute(
      `DELETE FROM users WHERE email = '${email}'`,
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    connection.release();
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
