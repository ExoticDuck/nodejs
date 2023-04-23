const path = require('path')

console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.join(__dirname, '..', '..'));
//*добавляет \ между аргументами
//*__dirname - путь от корня к текущей директории
//* .. - возврат на папку ниже

console.log(path.resolve('first', 'second', 'third')); //* без dirname 

const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
console.log('парсинг пути', path.parse(fullpath));
// {
//     root: 'd:\\',
//         dir: 'd:\\programming\\study\\nodejs\\first\\second',
//             base: 'third.js',
//                 ext: '.js',
//                     name: 'third'
// }
console.log('разделитель в ОС', path.sep); // \
console.log('проверка на абсолютный путь', path.isAbsolute('first/second')); // false
console.log('Название файла', path.basename(fullpath)); // third.js
console.log('расширение файла', path.extname(fullpath)); //.js

//--------------------------------------------------------------

const siteURL = 'htpp://localhost:6000/users?id=1232'

const url = new URL(siteURL)
console.log(url);
// URL {
//     href: 'htpp://localhost:6000/users?id=1232',
//     origin: 'null',
//     protocol: 'htpp:',
//     username: '',
//     password: '',
//     host: 'localhost:6000',
//     hostname: 'localhost',
//     port: '6000',
//     pathname: '/users',
//     search: '?id=1232',
//     searchParams: URLSearchParams { 'id' => '1232' },
//     hash: ''
//   }