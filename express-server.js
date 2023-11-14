const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("<h2>Welcome to the home page!</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h3>About page!</h3>");
});

app.get("/contact", (req, res) => {
  res.send("<h3>contact page!</h3>");
});

app.listen("5000", () => {
  console.log("Server runing on port 5000");
});
