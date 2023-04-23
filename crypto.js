// const crypto = require("crypto");
// const start = Date.now()
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('2 end', Date.now() - start);
// })
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('3 end', Date.now() - start);
// })
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('4 end', Date.now() - start);
// })
// //*Первые четыре функции сразу попадают в пул потоков, т.к. в пуле только 4 потока, а 5 и 6 ожтдают
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('5 end', Date.now() - start);
// })
// crypto.pbkdf2('12345qwerty', '5', 100000, 64, 'sha512', () => {
//     console.log('6 end', Date.now() - start);
// })

// console.log(start);

console.log(process.pid);