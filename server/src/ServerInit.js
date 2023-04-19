const express = require("express");
const deleteRouter = require("./apiCalls/delete");
const showRouter = require("./apiCalls/show");
const updateRouter = require("./apiCalls/update");
const registerRouter = require("./apiCalls/register");
const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  database: "",
  user: "root",
  password: "kostasvai2001",
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
