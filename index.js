const http = require('node:http');
const add = require('./add.js');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify({ status: 'ok', version: process.env.GIT_SHA || 'unknown'}));
     return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`2 + 3 = ${add(2,3)} (deployed by pipeline)\n`);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
