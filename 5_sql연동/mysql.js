const express = require("express");
const mysql = require("mysql2");
const app = express();

let connection = mysql.createConnection({
  host: "localhost",
  user: "your_trot",
  password: "yourtrot36292178!",
  database: "your_trot",
});

// sql 연결
connection.connect((err) => {
  if (err) {
    console.log(`에러 발생: ${err}`);
  }
});

// 멤버 테이블 생성(CREATE)
// const createTableQuery = `CREATE TABLE Members (
//   member_id VARCHAR(26) NOT NULL,
//   username VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )`;

// sql.query(createTableQuery, (err, result, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   onnection.end();
// });

// 테이블에 정보 추가해보기(INSERT)
// for (i = 0; i < 5; i++) {
//   let insertDataQuery = `
// INSERT INTO Members (member_id, username, email, created_at)
// VALUES ('member_id_${i}', 'name_${i}', 'email${i}@example.com', NOW())
// `;
//   connection.query(insertDataQuery, (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//   });
// }

// 테이블 보기(READ)
const selectDataQuery = "SELECT * FROM Members";

// connection.query(selectDataQuery, (err, results, fields) => {
//   if (err) {
//     console.error("데이터 조회 오류:", err);
//     throw err;
//   }

//   console.log("조회된 데이터:", results);
// });

// 데이터 수정하기(UPDATE)
// const updateQuery =
//   "UPDATE members SET username = 'name_0' WHERE username = 'name_3'";
// connection.query(updateQuery, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// 데이터 삭제하기(DELETE)
// const deleteQuery = "DELETE FROM members WHERE username = 'name_4'";
// connection.query(updateQuery, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// connection.end((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("end connection");
// });
