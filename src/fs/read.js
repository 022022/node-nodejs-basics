// Task
// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import { getPath } from '../getPath.js';
import { readFile } from 'fs/promises';

export const read = async () => {
  const pathToFile = getPath(import.meta.url, 'files/fileToRead.txt');

  try{
    const data = await readFile(pathToFile);
    process.stdout.write(data);
  } catch(err) {
    throw new Error('FS operation failed');
  }

};
 
read();