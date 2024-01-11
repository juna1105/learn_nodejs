const express = require("express");
// firebase admin/auth 모듈을 통해 firebase sdk를 사용할 수 있다.
const admin = require("firebase-admin");
const auth = require("firebase-auth");

//프로젝트 설정 -> 서비스 계정 내에 있는 Firebase Admin SDk를 통해 서버에서도 firebase sdk를 사용할 수 있다.
//비공개 키를 통해 firebase에 인증을 받는 형식이다.
var serviceAccount = require("./your-trot-firebase-adminsdk-pmj27-5c98393dd7.json");

const app = express();
const port = 80;
// node js에서 json 파일을 읽기 위한 메서드
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 서버에서 firebase sdk 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post("/", async (req, res) => {
  let user = req.body;
  console.log(user);
  const updateParams = {
    email: user.email,
  };
  const uid = `kakao:${user.uid}`;

  try {
    await admin.auth().updateUser(uid, updateParams);
  } catch (e) {
    updateParams["uid"] = uid;
    await admin.auth().createUser(updateParams);
  }
  const token = await admin.auth().createCustomToken(uid);
  console.log(token);
  res.send(token);
});

app.listen(port, () => {
  console.log(`${port} server open`);
});
