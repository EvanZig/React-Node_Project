const express = require("express");
const router = express.Router();
const getConnection = require("../getConnection");

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(`${firstName} , ${lastName}, ${email} , ${phone} , ${password}`);

  const query = `INSERT INTO users (firstname,lastname,email,phone,password)
  VALUES (?,?,?,?,?)`;

  try {
    const connection = await getConnection();
    const result = await connection.execute(query, [
      firstName,
      lastName,
      email,
      phone,
      password,
    ]);
    console.log("Data inserted successfully");
    res.sendStatus(200);
    connection.release();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
