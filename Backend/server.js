const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const app = express();

app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// ...add routes for each provider here...

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
app.get("/", (req, res) => {
  res.send("Backend connecté !");
});
const path = require("path");

app.use(express.static(path.join(__dirname, "../")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
}) ;