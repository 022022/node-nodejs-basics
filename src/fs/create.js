// Task
// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

import { getPath } from '../getPath.js';
import { writeFile } from 'fs/promises';

export const create = async () => {
  const data = 'I am fresh and young';
  const pathToFile = getPath(import.meta.url, 'files/fresh.txt');

  try {
    await writeFile(pathToFile, data, {flag:'wx'} );
  } catch (err){
    throw new Error('FS operation failed');
  }
};

create();