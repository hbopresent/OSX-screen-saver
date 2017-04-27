var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use("/view", express.static(__dirname + "/view/"));

app.get("/", function(req, res) {
    res.sendfile("index.html");
});

http.listen("7788", function() {
  console.log("listening ot port 7788!!");
  console.log("server started!!");
});
