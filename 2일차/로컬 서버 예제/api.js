const express = require("express");
const app = express();
const port = 80;

// 3000번 포트에서 요청을 듣고 있겠다는 의미의 listen
app.listen(port, () => {
  console.log(`${port} server open`);
});

// /api 라는 패스로 요청이 들어오면 api 요청 완료라는 로그를 띄운다
// :type 은 어떤 값이든 들어올 수 있다. 사용자가 어떤 정보를 보내느냐에 따라서 다른 응답을 할 수 있다.
app.get("/api/:apiKey/:type", (req, res) => {
  console.log(req.params);
  let { apiKey, type } = req.params;
  if (type == 300) {
    res.send("300번 api 요청 완료");
  } else if (type == 500) {
    res.send("500번 api 요청 완료");
  } else if (type == null) {
    res.send("api 요청 실패");
  } else {
    res.send("응답값 없음");
  }
});

app.get("/", (req, res) => {
  console.log("hello");
  res.send("헬로");
});
