// Task
// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)


import { getPath } from '../getPath.js';
import { rm } from 'fs/promises';

export const remove = async () => {

  const pathToFile = getPath(import.meta.url, 'files/fileToRemove.txt');

  try{
    await rm(pathToFile);
  } catch(err) {
    throw new Error(err+'FS operation failed');
  }

};

remove();