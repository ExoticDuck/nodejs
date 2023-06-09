const http = require('http')

const PORT = process.env.PORT || 5000;

class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]
        if(endpoint[method]) {
            
        }
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    if(req.url === '/users') {
        return res.end(JSON.stringify([
            {id: 1, name: 'first'}
        ]))
    }
    if(req.url === '/posts') {
        return res.end('POSTS')
    }
    res.end(req.url)
})

server.listen(PORT, () => console.log('server started at port', PORT))