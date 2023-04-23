const fs = require('fs');
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
//* создать новую папку

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true})
//* создать dir/dir2/dir3

// fs.mkdirSync(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log('папка создана');
// })

//*удаление папки
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw err;
//     }
// })

//*создание и запись в файл
// fs.writeFile(path.resolve(__dirname, "text.txt"), 'few3ddsad', (err) => {
//     if(err) {
//         throw err;
//     }
//     //*дописать что-то в файл
//     fs.appendFile(path.resolve(__dirname, "text.txt"), ' ddwdfwedewdwe', (err) => {
//         if(err) {
//             throw err;
//         }
//         console.log('end');
//     })
//     console.log('end');
// })

//* Подобная запись создает 'callback hell' и поэтому обычно используют промисы

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'text3.txt'), 'fwefefwefwefewfwewfefwe')
// .then(() => appendFileAsync(path.resolve(__dirname, 'text3.txt'), ' 11111111'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text3.txt'), ' 22222222'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'text3.txt'), ' 33333333'))
// .then(() => readFileAsync(path.resolve(__dirname, 'text3.txt')))
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'text3.txt'))
// .then(() => console.log('file removed'))

const text = process.env.TEXT || 'ssws ws sw sw';
writeFileAsync(path.resolve(__dirname, 'text2.txt'), text)
.then(() => readFileAsync(path.resolve(__dirname, 'text2.txt')))
.then((data) => data.split(' ').length.toString())
.then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), count))
.then(() => removeFileAsync(path.resolve(__dirname, 'text2.txt')))
.catch((err) => console.log(err))