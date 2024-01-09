// node.js로 서버를 운영할 수 있게 해주는 라이브러리
// require은 모듈을 불러오는 것
const express = require("express");
const app = express();

let port = 3000;
// express의 listen 메서드는 지정한 포트로 들어왔을 때 메서드를 실행하게 해주는 기능인듯
app.listen(port, () => {
  console.log("hello");
});

// 서버는 클라이언트로 get,post,update,delete 행동을 하는데 get은 클라이언트에게 데이터를 보내주는 행위이다.
app.get("/", (req, res) => {
  res.send("안녕하세요 홈페이지 입니다.");

  //sendFile을 통해서 html 파일을 보낼 수 있음
  // res.sendFile(__dirname + "/index.html");
});
