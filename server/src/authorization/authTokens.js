const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("express");
const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const idToken = authHeader && authHeader.split(" ")[1];
  const refreshToken = req.headers["refreshToken"];

  if (idToken == null) return res.sendStatus(401);

  jwt.verify(idToken, process.env.ID_TOKEN_SECRET, (err, user) => {
    if (err) {
      if (!refreshToken) return res.sendStatus(403);
      console.log(user.email);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) return res.sendStatus(403);

          const newIdToken = jwt.sign(
            { email: user.email },
            process.env.ID_TOKEN_SECRET,
            { expiresIn: "10s" }
          );
          req.user = user;
          req.idToken = newIdToken;
          next();
        }
      );
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = authToken;

// return res.sendStatus(403);
//     req.user = user;
//     next();
