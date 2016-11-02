var connect = require("connect"),
	serveStatic = require("serve-static");

var app = connect();

app.use(serveStatic("../-AngularJS-"));
app.listen(5000);
console.log("starting")