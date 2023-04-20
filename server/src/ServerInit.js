const express = require("express");
const deleteRouter = require("./userApiCalls/delete");
const showRouter = require("./userApiCalls/show");
const updateRouter = require("./userApiCalls/update");
const registerRouter = require("./userApiCalls/register");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  database: "mydb",
  user: "root",
  password: "123456",
});

connection.connect((error) => {
  if (error) {
    console.error("Failed to connect to the MySQL database:", error);
  } else {
    console.log("Connected to the MySQL database!");
  }
});

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/delete", deleteRouter);
app.use("/show", showRouter);
app.use("/update", updateRouter);
app.use("/register", registerRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("App available at http://localhost:5000")
);
