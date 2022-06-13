// Task
// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { rm } from 'fs/promises';

export const remove = async () => {

  const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');

  try{
    //await access(pathToFile);
    await rm(pathToFile);
  } catch {
    throw new Error('FS operation failed');
  }

};

remove();