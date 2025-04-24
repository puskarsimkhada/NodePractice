const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){

        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Server is running</h1>");
        res.end();
    }
    if(req.url == '/contact'){

        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Server is in contact section</h1>");
        res.end();
    }

});

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server is running on the port no ${PORT}`);
})