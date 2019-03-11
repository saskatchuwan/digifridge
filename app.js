const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const userFoods = require('./routes/api/userFoods');
const userRecipes = require('./routes/api/userRecipes');
const recipeResults = require('./routes/api/recipeResults');
const bodyParser = require('body-parser');
const passport = require('passport');

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send("dqfvkhdfiv"));
app.use("/api/users", users);
app.use('/api/userFoods', userFoods);
app.use('/api/userRecipes', userRecipes);
app.use('/api/recipeResults', recipeResults);

//app.get("/", (req, res) => res.send("Hello World!!"));

// app.use(passport.initialize());
// require('./config/passport')(passport);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/api/users", users);
// app.use("/api/tweets", tweets);

app.get("/", (req, res) => res.send("hi there it's me alicia"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

