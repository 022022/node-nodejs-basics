import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createReadStream, createWriteStream } from 'fs';
import { createInflate } from 'zlib';
import { pipeline } from 'stream';


export const decompress = async () => {
  const sourceFile = join(__dirname, 'files', 'archive.gz');
  const destinationFile = join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);
  const decompressFile = createInflate();
  pipeline(readStream, decompressFile, writeStream, ()=>{});

};

decompress();