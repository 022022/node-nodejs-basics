// Task
// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createWriteStream } from 'fs';

export const write = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToWrite.txt');

  const writableStream = createWriteStream(pathToFile);

  process.stdin.on('data', chunk => writableStream.write(chunk));
};

write();