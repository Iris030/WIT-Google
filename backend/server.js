import * as api from "./api.js";

const express = require("express");

const app = express();

api.getFormById;
app.get("/getFormById", function (req, res) {
  var id = req.query.id;
  api.getFormById(id).then((data) => {
    console.log(data);
    res.status(200).send(JSON.stringify(data));
  });
});

app.get("/getNumberByType", function (req, res) {
  var type = req.query.type;
  api
    .getNumberByType(type)
    .then((data) => res.status(200).send(JSON.stringify({ number: data })));
});

app.get("/getFormsByType", function (req, res) {
  var type = req.query.type;
  var data = api.getFormsByType(type);
  res.status(200).send(JSON.stringify({ forms: data }));
});

app.get("/getUnresolvedByType", function (req, res) {
  var type = req.query.type;
  var data = api.getUnresolvedByType(type);
  res.status(200).send(JSON.stringify({ forms: data }));
});

app.get("/getResolvedByType", function (req, res) {
  var type = req.query.type;
  var data = api.getResolvedByType(type);
  res.status(200).send(JSON.stringify({ forms: data }));
});

app.get("/getResolvedByOrg", function (req, res) {
  var org = req.query.org;
  var data = api.getResolvedByOrg(org);
  res.status(200).send(JSON.stringify({ forms: data }));
});

app.get("/pushForm", function (req, res) {
  var id = req.query.id;
  var form = JSON.parse(req.query.form);
  var data = api.pushForm(id, form);
  res.status(200).send(JSON.stringify({ status: "successful" }));
});

app.get("/updateRepliesById", function (req, res) {
  var id = req.query.id;
  var replies = JSON.parse(req.query.replies);
  var data = api.updateRepliesById(id, replies);
  res.status(200).send(JSON.stringify({ status: "successful" }));
});

app.get("/updateFormById", function (req, res) {
  var id = req.query.id;
  var form = JSON.parse(req.query.form);
  var data = api.updateFormById(id, form);
  res.status(200).send(JSON.stringify({ status: "successful" }));
});
app.listen(8081);
