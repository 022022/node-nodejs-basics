// Task
//  implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import { getPath } from '../getPath.js';
import { readdir } from 'fs/promises';

export const list = async () => {

  const pathToFolder = getPath(import.meta.url, 'files');

  try {
    const items = await readdir(pathToFolder);
    console.log(items);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

list();