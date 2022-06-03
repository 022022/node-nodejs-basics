import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { access, rename as fileRename, readdir } from 'fs/promises';

export const rename = async () => {
  const dir = join(__dirname, '/files');
  const newname = 'properFilename.md';
  const newPath = join(__dirname, '/files', 'properFilename.md');
  const oldPath = join(__dirname, '/files', 'wrongFilename.txt');

  try{
    await access(oldPath);
  } catch (err) {
    throw new Error('FS operation failed');
  }

  const dirContents = await readdir(dir);

  if(!dirContents.includes(newname)){
    fileRename(oldPath, newPath);
  }

  else{
    throw new Error('FS operation failed');
  }

};

rename();