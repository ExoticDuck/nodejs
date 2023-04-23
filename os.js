const os = require('os')
const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
const cpus = os.cpus()

if(cluster.isMaster) {
    for (let i = 0; i < cpus.length - 2; i++) { //два ядра оставляем свободными
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log('Воркер с pid', worker.process.pid, "умер")
        if(code == 2) {
            cluster.fork()
        } else {
            console.log('воркер умер')
        }
       
    })
} else {
    console.log('Воркер с pid =', process.pid);

    setInterval(() => {
        console.log('Воркер с pid =', process.pid, 'еще работает')
    }, 5000)
}


// for (let i = 0; i < cpus.length - 2; i++) { //два ядра оставляем свободными
//     const CPUcore = cpus[i]
//     console.log('запустить еще один node js процесс');
// }

// console.log(process.pid);

while(true) {

}