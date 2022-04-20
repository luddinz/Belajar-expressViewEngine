const express = require("express");

const app = express();
const port = 3000;

// Anggap sebuah databases
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/greet", (req, res) => {
  const namaDariQuery = req.query.nama || "Tidak ada nama alias no name";
  res.render("greet", {
    nama: namaDariQuery,
  });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    email: email,
    password: password,
  });

  console.log(users);

  res.redirect("/register");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`Jumlah user ${users.length}`);
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("users", {
    users,
  });
});

app.listen(port, () => {
  console.log(`Listening on https://localhost:${port}`);
});
