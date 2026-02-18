const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("1st dummy middleware");
  next();
});

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("2nd dummy middleware");
  next();
});

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   console.log("3rd dummy middleware");
//   res.send(`<html><h1>This is a response.</h1></html>`);
// });

app.get('/', (req, res, next) => {
  console.log("On the first handler", req.url, req.method);
  res.send(`<html><h1> <a href='/contact-us'>  Contact Us </a></h1></html>`);
});

app.get('/contact-us', (req, res, next) => {
  console.log("On the second handler", req.url, req.method);
  res.send(`<html> <h1> Contact Us </h1> <form action = "/contact-us" method = "post"> <input type = "text" name = "name" placeholder = "Enter your name" /> <input type = "email" name = "email" placeholder = "enter your email" /> <input type = "submit" value = "Submit" /> </form> </html>`);
});

app.post('/contact-us', (req, res, next) => {
  console.log("Response recieved", req.url, req.method);
  const body = [];
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
  })
  res.send("Your information is received. <br> <a href = '/'> Go to home </a>");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

