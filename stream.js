const fs = require('fs')
const path = require('path')
const http = require('http')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if(err) {
//         throw err
//     }
//     console.log(data);
// })


// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {encoding: 'utf-8'})
// //один чанк по 64кБ
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })

// stream.on('end', () => console.log('end'))
// stream.on('open', () => console.log('open'))
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for(let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', chunk => res.end())
    stream.pipe(res)
})