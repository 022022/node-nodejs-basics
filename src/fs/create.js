// Task
// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)



import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { writeFile } from 'fs/promises';

export const create = async () => {

  const data = 'I am fresh and young';
  const pathToFile = join(__dirname, '/files', 'fresh.txt');

//  try{
//    await access(pathToFile);
//    console.log('FS operation failed');
//  } catch (err){
//    writeFile(pathToFile, data);
//  }

  try {
    await writeFile(pathToFile, data, {flag:'wx+'} );
  } catch (err){
    throw new Error('FS operation failed');
  }

};


create();