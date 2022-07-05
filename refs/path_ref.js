const path = require('path'); // модуль для роботи з шляхами в nodejs

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

// для роботи з шляхами як з об'єктом
console.log(path.parse(__filename));

console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', 'second.html'));