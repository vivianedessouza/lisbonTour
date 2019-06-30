const app = require("./app_config.js");

app.get("/", (req, res) => {
  res.json("turismo website");
});

app.get("/api/attractions", (req, res) => {
  const attractions = [
    "Ribeira das Naus",
    "Sport Lisboa e Benfica",
    "Lisboa Story Centre ",
    "Oceanário de Lisboa",
    "Cabo da Roca",
    "Elevador da Bica",
    "Elevador de Santa Justa",
    "Elevador da Glória",
    "Sporting Clube de Portugal",
    "Casino Estoril",
    "Praça do Comércio",
    "Calçada Portuguesa",
    "Fundação Centro Cultural de Belém",
    "Experiência Pilar 7",
    "Azulejos de Lisboa "
  ];
  res.json(attractions);
});

app.post("/api/attractions", (req, res) => {
  const searchInputs = req.body;
  console.log(searchInputs.attraction);
  console.log(searchInputs.date);
  console.log(searchInputs.time);
  console.log(searchInputs.duration);
  console.log(searchInputs.members);
  res.json("reservation successfully!");
});
