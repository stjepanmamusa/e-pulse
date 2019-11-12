const http = require("http");
const port = process.env.PORT;

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(port);
