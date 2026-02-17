const sumRequestHandler = (req, res) => {
  console.log("1. In Sum Request Handler", req.url, req.method);
  const body = [];
  let result;
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log("2. Chunk arrived.")
    });
    req.on('end', () => {
      console.log("3. End event arrived.")
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      let n1 = Number(bodyObj.num1);
      let n2 = Number(bodyObj.num2);
      result = n1 + n2;
      console.log(result);
    })
    console.log("4. Sending the response");
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html><body><h1>The Result is ${result} </h1>
      <a href = "/">Go to Home</a></body></html>`);
    return res.end();
}

module.exports = sumRequestHandler;