const express = require("express");
const router = express.Router();
const getConnection = require("../getConnection");

router.get("/", async (req, res) => {
  try {
    const connection = await getConnection();
    const query = "SELECT * FROM users ";
    connection.query("SELECT * FROM users", function (error, results, fields) {
      if (error) throw error;
      const users = JSON.stringify(results);
      res.json(users);
    });

    res.sendStatus(200);
    connection.release();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
