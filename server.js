const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

app.set ("Views engine", "ejs");
app.set ("Views", path.join(__dirname, "./views"));


//*****************Index = login****************************

app.use(express.static(path.join(__dirname, "./static")));


app.get("/", (req, res) => {
  //res.sendFile(path.join(__dirname, "./static/index.html"));
  res.render("index.ejs");
});


//*****************Home****************************
app.get("/home", (req, res) => {
  //res.sendFile(path.join(__dirname, "./static/html/home/home.html"));
  res.render("home.ejs");
});


//*****************Perfil****************************

let dados = require("./Dados/publicacoes.json");

app.get("/perfil", (req, res) => {
  //res.sendFile(path.join(__dirname, "./static/html/home/home.html"));
  res.render("perfil.ejs", { postagens: dados });
});



//*****************Dados server****************************
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
