const express = require("express");

console.log("Hello world!");

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send(JSON.stringify({ hello: "json" }));
});

app.listen(8081);
