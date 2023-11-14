const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Node Server!");
});

server.listen("5000", "localhost", () => {
  console.log("Server running on port 5000");
});

// 127.0.0.1 = localhost
// port 5000
