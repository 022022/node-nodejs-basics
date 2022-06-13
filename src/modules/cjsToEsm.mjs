// Task
// rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)



// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');

import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const a = readFile(join(__dirname, 'files', 'a.json'));
const b = readFile(join(__dirname, 'files', 'b.json'));
const c = readFile(join(__dirname, 'files', 'c.js'));

// require('./files/c');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    // unknownObject = require('./files/a.json');
    unknownObject = a;
} else {
    // unknownObject = require('./files/b.json');
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

//module.exports = {
//    unknownObject,
//    createMyServer,
//};


export {unknownObject, createMyServer};