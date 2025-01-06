const express = require("express");

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.send({
    message: "response From Server...",
    method: req.method,
  });
});

router.post("/", (req, res) => {
  res.send({
    message: "response From Server...",
    method: req.method,
  });
});

app.use(router);

module.exports = app