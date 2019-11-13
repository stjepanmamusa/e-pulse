const http = require("http");
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(port);

console.log(`Listening on port : ${port}`);
