const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
});

// mysql connection 실행
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database!");
});

module.exports = connection;
