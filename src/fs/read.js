import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createReadStream } from 'fs';

export const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

      const readStream = createReadStream(pathToFile);
      readStream.on('data', chunk => process.stdout.write(chunk));

      readStream.on('error', () => {throw new Error('FS operation failed')});

};

read();