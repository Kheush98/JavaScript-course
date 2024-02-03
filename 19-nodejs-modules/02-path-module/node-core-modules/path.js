const path = require('path');

const myPath = 'folder/anotherfolder/index.js';

// basename()
const base1 = path.basename(myPath);
const base2 = path.basename(myPath, '.js');

console.log(base1);
console.log(base2);

//  extname()
const ext = path.extname(myPath);
console.log(ext);

const dir =path.dirname(myPath);
console.log(dir);

// join()
const myPath2 = path.join('folder', 'anotherfolder', 'index.js');
console.log(myPath2);

//resolve()
const myPath3 = path.resolve('folder', 'anotherfolder', 'index.js');
console.log(myPath3);

// __dirname
console.log(__dirname);

// __filename
console.log(__filename);