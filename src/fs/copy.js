// Task
// implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown). Non-recursive.

import { readdir, mkdir, copyFile} from 'fs/promises';
import { getPath } from '../getPath.js';
import { join } from 'path';

export const copy = async () => {
    const folderPath = getPath(import.meta.url, 'files');
    const newFolderPath = getPath(import.meta.url, 'files_copy');

    try {
      const filesList = await readdir(folderPath);
      await mkdir(newFolderPath);

      filesList.forEach(item => {
        const oldFilePath = join(folderPath, item);
        const newFilePath = join(newFolderPath, item);

        copyFile(oldFilePath, newFilePath);
      });

    } catch(err) {
      throw new Error('FS operation failed');
    }
};

copy();