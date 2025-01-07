const express = require("express");
const users = require("../data/users");

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.send({
    message: "response From Server...",
    method: req.method,
    url: req.url,
    goTo: "http://localhost:3010/api/users",
  });
});

router.get("/users", (req,res)=>{
  res.send({
    users
  })
})

app.use(router);

app.listen(3010, () => {
  console.log("server is running on port 3010");
});

module.exports = app;
