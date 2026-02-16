const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Men</title></head>');
        res.write('<body><h1>Welcome to Men Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body><h1>Welcome to Women Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body><h1>Welcome to Kids Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/cart') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body><h1>Welcome to Cart</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.write(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra Homepage</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
</body>
<script src="app.js"></script>
</html>
        `);
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});