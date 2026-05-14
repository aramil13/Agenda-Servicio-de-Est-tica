const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    let filePath;
    const urlPath = req.url.split('?')[0];
    const ext = path.extname(urlPath);
    
    if (urlPath === '/') {
        filePath = path.join(ROOT, 'index.html');
    } else if (ext && mimeTypes[ext]) {
        filePath = path.join(ROOT, urlPath);
    } else {
        filePath = path.join(ROOT, 'index.html');
    }
    
    const contentType = mimeTypes[ext] || 'text/html';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.readFile(path.join(ROOT, 'index.html'), (err2, indexContent) => {
                    if (err2) {
                        res.writeHead(500);
                        res.end('Server Error', 'utf-8');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(indexContent, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
