const fs = require('fs');
const path = require('path');
// File system


// створення папки
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err;

//     console.log('Папка була створена');
// });

// створення файлу
// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello world', (err) => {
//     if (err) throw err;
//     console.log('Файл було створено!');

//     fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' File is changed', err => {
//         if (err) throw err;
//         console.log('Файл було змінено!');
        
//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (err, data) => {
//                 if (err) throw err;
//                 console.log(data);
//             }
//         );
//     });
// });

// // альтернативний варіант
// // fs.readFile(
// //     path.join(__dirname, 'notes', 'mynotes.txt'),
// //     (err, data) => {
// //         if (err) throw err;
// //         console.log(Buffer.from(data).toString());
// //     }
// // );

// Перейменувати файл
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err;

        console.log('Файл перейменовано');
    }
);