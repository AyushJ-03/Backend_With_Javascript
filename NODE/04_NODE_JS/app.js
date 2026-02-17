const http = require('http');
const requestHandler = require('./user');
// import http from 'http';
// import requestHandler from './user.js';

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})