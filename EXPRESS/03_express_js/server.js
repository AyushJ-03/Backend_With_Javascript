const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.get('/', (req, res, next) => {
  console.log("On the first handler", req.url, req.method);
  res.send(`<html><h1> <a href='/contact-us'>  Contact Us </a></h1></html>`);
});

app.get('/contact-us', (req, res, next) => {
  console.log("On the second handler", req.url, req.method);
  res.send(`<html> <h1> Contact Us </h1> <form action = "/contact-us" method = "post"> <input type = "text" name = "name" placeholder = "Enter your name" /> <input type = "email" name = "email" placeholder = "enter your email" /> <input type = "submit" value = "Submit" /> </form> </html>`);
});



app.post('/contact-us', (req, res, next) => {
  console.log("Response recieved", req.url, req.method, req.body);
  next();
})

app.use(bodyParser.urlencoded());

app.post('/contact-us', (req, res, next) => {
  console.log("Response recieved", req.url, req.method, req.body);
  res.send("Your information is received. <br> <a href = '/'> Go to home </a>");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

