const sumRequestHandler = require('./sumRequestHandler');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `<html>
      <head> <title> Calculator Homepage </title> </head>
      <body> 
      <h1> Welcome to the calculator </h1> 
      <h3><a href = '/calculator'> Open Calculator </a></h3>
      </body> 
      </html>`
    );
    return res.end();
  }

  else if (req.url === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
  <head>
    <title>Calculator</title>
  </head>
<body>
  <form action="/calculate-result" method="POST">
    <input type="number" name="num1" placeholder="Enter the first number" />
    <br>
    <input type="number" name="num2" placeholder="Enter the second number" />
    <input type="submit" value="Add the numbers" />
  </form>
</body>
</html>`)
    return res.end();
  }

  else if (req.url.toLowerCase() === "/calculate-result" && req.method.toLowerCase() === "post") {
    return sumRequestHandler(req, res);
  }
}

module.exports = requestHandler;