const express = require("express");
const router = express.Router();

const fs = require("fs"); //

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/register", (_, res) => {
  const file = fs.readFileSync("./database/register.json");

  const object = JSON.parse(file);

  res.send(object);
});

router.post("/salvarRegister", (req, res) => {
  const data = req.body;

  const email = data.email;
  const telefone = data.telefone;

  const file = fs.readFileSync("./database/register.json");

  const object = JSON.parse(file);

  object.push({
    email: email,
    telefone: telefone,
  });

  const string = JSON.stringify(object);

  fs.writeFileSync('./database/register.json', string);
  

  res.send("Parabens pelo cadastro");
});

module.exports = router;
