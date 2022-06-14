// Task
// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex

import { getPath } from '../getPath.js'
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
  try{
    const pathToFile = getPath(import.meta.url, 'files/fileToCalculateHashFor.txt');
    const data = await readFile(pathToFile);

    const hashObj = createHash('sha256');
    hashObj.update(data);
    const hex = hashObj.digest('hex');

    console.log(hex);

  } catch(err) {
    throw new Error('FS operation failed');
  }
};

calculateHash();