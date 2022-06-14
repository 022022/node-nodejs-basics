// Task
// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

import { getPath } from '../getPath.js'
import { createWriteStream } from 'fs';

export const write = async () => {
  const pathToFile = getPath(import.meta.url, 'files/fileToWrite.txt');

  const writableStream = createWriteStream(pathToFile);

  process.stdin.on('data', chunk => writableStream.write(chunk));
};

write();