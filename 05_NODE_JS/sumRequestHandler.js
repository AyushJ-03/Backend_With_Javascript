const addition = require('./addition');

const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url, req.method);
  const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      let n1 = Number(bodyObj.num1);
      let n2 = Number(bodyObj.num2);
      const result = addition(n1, n2);
      res.setHeader('Content-Type', 'text/html');
      res.write(`<html><body><h1>The Result is ${result} </h1>
        <a href = "/">Go to Home</a></body></html>`);
      return res.end();
    })
}

module.exports = sumRequestHandler;