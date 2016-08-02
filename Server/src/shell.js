'use strict';

const express = require("express");
const bodyParser = require('body-parser');
const RouterSwitcher = require('./RouterSwitcher');
const InitAction = require('./actions/InitAction');
const PostcodeAction = require('./actions/PostcodeAction');
const BarcodeAction = require('./actions/BarcodeAction');

var app = express();

let routers = [
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];
var routerSwitcher = new RouterSwitcher(routers);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/start", (req, res) => {
  res.send(routerSwitcher.start());
});

app.post("/run", (req, res) => {
  res.send(routerSwitcher.switchRouter(req.body.cmd.trim()));

});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
