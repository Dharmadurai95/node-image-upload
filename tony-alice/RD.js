const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Send early hints to preload critical resources (CSS and JS)
    res.writeEarlyHints([
      { link: '</style.css>; rel="preload"; as="style"' },
      { link: '</app.js>; rel="preload"; as="script"' },
    ]);

    // Simulate some delay in sending the final response (e.g., heavy server-side processing)
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Early Hints Example</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <h1>Welcome to the Early Hints Example</h1>
          <script src="/app.js"></script>
        </body>
        </html>
      `);
    }, 1000); // Simulate a delay of 1 second
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end('body { font-family: Arial, sans-serif; } h1 { color: blue; }');
  } else if (req.url === '/app.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end('console.log("JavaScript loaded!");');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(8000, () => {
  console.log('Server running on port 8000');
});
