const express = require("express");
const users = require("../data/users");

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.send({
    message: "Welcome to testing API Server...",
    method: req.method,
    currentUrl: req.url,
    data: "https://response-api-nine.vercel.app/users",
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
