// Task
//  implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readdir } from 'fs/promises';


export const list = async () => {

  const pathToFolder = join(__dirname, 'files');

  try {
    const items = await readdir(pathToFolder);
    console.log(items);

  } catch (err) {
    throw new Error('FS operation failed');
  }

};

list();