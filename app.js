const http = require('http');
const port = process.env.PORT || 3000; // Use Render's port, fallback to 3000
const hostname = '0.0.0.0';           // Listen on all interfaces

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
