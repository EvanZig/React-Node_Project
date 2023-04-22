const express = require("express");
const deleteRouter = require("./userApiCalls/delete");
const showRouter = require("./userApiCalls/show");
const updateRouter = require("./userApiCalls/update");
const registerRouter = require("./userApiCalls/register");
const loginRouter = require("./userApiCalls/login");
const app = express();

//so i can run my front end at the same time
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const getConnection = require("./getConnection");

app.get("/", (req, res) => {
  res.send("main page");
});

app.use("/delete", deleteRouter);
app.use("/show", showRouter);
app.use("/update", updateRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("App available at http://localhost:5000")
);

module.exports = { getConnection };
