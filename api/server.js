const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const homeController = require("./controllers/home-controller");
const pageNotFoundController = require("./controllers/page-not-found-controller");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.port || 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(authRoute);
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/user', (req, res) => {
  res.json(books)
})

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/1waan";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Can not Connect to Database!!!!");
  });
app.listen(port, function() {
  console.log("Listening on port", port);
});
