import { fileURLToPath } from 'url'
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readFile } from 'fs/promises';

export const read = async () => {
  const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

      const data = await readFile(pathToFile);
      process.stdout.write(data);
};

read();