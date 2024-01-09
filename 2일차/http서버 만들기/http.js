const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 443; // HTTPS 기본 포트

const options = {
  key: fs.readFileSync("/path/to/private-key.key"),
  cert: fs.readFileSync("/path/to/certificate.crt"),
};

// HTTPS 서버 생성
const server = https.createServer(options, app);

// 443번 포트에서 요청을 듣고 있겠다는 의미의 listen
server.listen(port, () => {
  console.log(`${port} server open`);
});
