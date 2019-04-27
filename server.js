const express = require("express");
const path= require('path');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", 'index.html'))
})
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://booksearch:a123456@ds149146.mlab.com:49146/heroku_7z7slkq5"
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
