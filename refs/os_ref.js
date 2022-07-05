const os = require('os');
// робота з операційною системою

// платформа
console.log(os.platform());

// архітектура
console.log(os.arch());

// інформація
console.log(os.cpus());

// вільна пам'ять
console.log(os.freemem());

// загальна пам'ять
console.log(os.totalmem());

// коренева директорія
console.log(os.homedir());

// час роботи системи
console.log(os.uptime());