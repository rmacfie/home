// #!/usr/bin/env node

var path = require("path");
var express = require("express");
var morgan = require("morgan");

var port = process.env.PORT || 5000;
var debugMode = ("" + process.env.NODE_ENV).toLowerCase() !== "production";
var publicDir = path.join(__dirname, "public");

var app = express();

app.use(morgan("dev"));
app.use(express.static(publicDir));

app.get("/", function (req, res, next) {
  if (req.hostname == "robert.macfie.se") {
    res.sendFile(path.join(publicDir, "robert.html"));
  } else if (req.hostname == "irene.macfie.se") {
    res.sendFile(path.join(publicDir, "irene.html"));
  } else if (req.hostname == "macfie.se" || req.hostname == "www.macfie.se") {
    res.redirect("http://robert.macfie.se");
  } else {
    next();
  }
});

var server = app.listen(port, function () {
  console.log("listening on port %s.", server.address().port);
  console.log("debug mode: %s.", debugMode);
});
