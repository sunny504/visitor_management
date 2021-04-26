const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const userInfo = require('./api/user_info/route.config');
console.log("sadf");
app.listen(3000, () => console.log("Listening on port 3000..."));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
});

userInfo.routesConfig(app);