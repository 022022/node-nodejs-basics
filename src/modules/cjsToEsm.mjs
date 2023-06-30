// Task
// rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)
//

// correct output should be

// Hello from c.js!  // contents of c.js file
// Release ...
// Version Windows ...
// Path segment separator is ...
// Path to current file is ...
// Path to current directory is ...
// { a: 11, b: 22, c: 33 }   - changes randomly to { a: 1, b: 2, c: 3 }
// Server is listening on port ...
// To terminate it, use Ctrl+C combination


import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from "node:module";

import { fileURLToPath } from 'url'
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const __require = createRequire(__filename);

import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = __require("./files/a.json");
} else {
  unknownObject = __require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
const PORT = 8000;

console.log(unknownObject);

createMyServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export {unknownObject, createMyServer};