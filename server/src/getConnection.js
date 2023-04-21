const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "mydb",
  user: "root",
  password: "123456",
  connectionLimit: 10,
});

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

module.exports = getConnection;
