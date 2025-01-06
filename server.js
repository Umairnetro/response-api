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

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
