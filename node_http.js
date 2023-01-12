const http = require('http');
//what does this do? - answer as a js comment
//then add the code from the next slide from # 2 - 7 and then close the parentheses from line 15
const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.write('Hello world ');
        res.write('This is our first server');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000 ...');