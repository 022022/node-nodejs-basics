// Task
// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const data = await readFile(pathToFile);

    const hashObj = createHash('sha256');
    hashObj.update(data);
    const hex = hashObj.digest('hex');

    console.log(hex);
    return hex;
};

calculateHash();