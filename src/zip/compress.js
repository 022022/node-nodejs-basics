import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createReadStream, createWriteStream } from 'fs';
import { createDeflate } from 'zlib';
import { pipeline } from 'stream';

export const compress = async () => {

  const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
  const destinationFile = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);
  const compressFile = createDeflate();

  pipeline(readStream, compressFile, writeStream, ()=>{});

};

compress();