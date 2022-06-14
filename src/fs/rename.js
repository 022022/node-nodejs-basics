// Task
// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

import { rename as fileRename, readdir } from 'fs/promises';
import { getPath } from '../getPath.js';

export const rename = async () => {

  const newPath = getPath(import.meta.url, '/files/properFilename.md');
  const oldPath = getPath(import.meta.url, '/files/wrongFilename.txt');

  try{
    await fileRename(oldPath, newPath);
  } catch(err) {
    throw new Error('FS operation failed');
  }

};

rename();