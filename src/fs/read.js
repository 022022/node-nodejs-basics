// Task
// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readFile } from 'fs/promises';

export const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

console.log(pathToFile);
      const data = await readFile(pathToFile);
      process.stdout.write(data);
};

read();