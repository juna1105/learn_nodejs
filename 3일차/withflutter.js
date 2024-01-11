const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 80;

app.get("/", (req, res) => {
  res.send("welcome to node.js server flutter");
});

app.post("/", (req, res) => {
  let request = req.body;
  console.log(request);
  res.send(
    `hello flutter i am node.js\nyour requset is ${JSON.stringify(request)}`
  );
});

app.listen(port, () => {
  console.log(`${port} server open`);
});
