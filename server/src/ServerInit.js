const express = require("express");
const deleteRouter = require("./apiCalls/delete");
const showRouter = require("./apiCalls/show");
const updateRouter = require("./apiCalls/update");
const registerRouter = require("./apiCalls/register");
const bodyParser = require("body-parser");
const app = express();

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  database: "",
  user: "root",
  password: "123456",
});

connection.connect((error) => {
  if (error) {
    console.error("Failed to connect to the MySQL database:", error);
  } else {
    console.log("Connected to the MySQL database!");
    // Perform your database queries here...
  }
});

app.get("/", (req, res) => {
  console.log("Nah");
  res.send("hi");
});

app.use("/delete", deleteRouter);
app.use("/show", showRouter);
app.use("/update", updateRouter);
app.use("/register", registerRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("App available at http://localhost:5000")
);
