import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readdir, mkdir} from 'fs/promises';
import { createReadStream, createWriteStream} from 'fs';


export const copy = async () => {
    const folderPath = join(__dirname, 'files');
    let filesList;

    try{
      filesList = await readdir(folderPath);
    } catch(err) {
      throw new Error('FS operation failed');
    }

    const newFolderPath = join(__dirname, 'files_copy');

    try {
      await mkdir(newFolderPath);

      filesList.forEach(item => {
        const oldFilePath = join(__dirname, 'files', item);
        const newFilePath = join(__dirname, 'files_copy', item);

        const readStream = createReadStream(oldFilePath);
        const writeStream = createWriteStream(newFilePath);
        readStream.pipe(writeStream);
      });

    } catch(err) {
      throw new Error('FS operation failed');
    }

};

copy();