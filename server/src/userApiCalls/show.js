const express = require("express");
const router = express.Router();
const getConnection = require("../getConnection");

router.get("/", async (req, res) => {
  let connection;
  try {
    connection = await getConnection();
    connection.query("SELECT * FROM users", function (error, results, fields) {
      if (error) throw error;
      const users = JSON.stringify(results);
      res.status(200).json(users);
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

module.exports = router;
