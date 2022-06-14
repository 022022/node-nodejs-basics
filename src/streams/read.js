// Task
// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout

import { getPath } from '../getPath.js'
import { createReadStream } from 'fs';

export const read = async () => {
  const pathToFile = getPath(import.meta.url, 'files/fileToRead.txt');

  const readStream = createReadStream(pathToFile);
  readStream.on('data', chunk => process.stdout.write(chunk));

  readStream.on('error', () => {throw new Error('FS operation failed')});

};

read();