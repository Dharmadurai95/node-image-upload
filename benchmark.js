process.env.UV_THREADPOOL_SIZE=7;
console.log(process.env.UV_THREADPOOL_SIZE)
const http = require('http');
const { createHash } = require('crypto');

http.createServer((req, res) => {


    const dataToHash = 'I love cupcakes';
    const hash = createHash('sha256').update(dataToHash).digest('hex');
    // bcrypt.hash("Dharma dura", 2).then((resp) => {
        res.writeHead(200, { 'Content-Type': "text/plain" })
        res.write(hash);
        res.end()
    // })
}).listen(1337)