// Task
// rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)

import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  await import('./files/a.json', { assert: { type: 'json' } });
  // v2 - import createRequire from 'module'
} else {
  await import('./files/b.json', { assert: { type: 'json' } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {unknownObject, createMyServer};