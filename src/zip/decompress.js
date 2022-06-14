// Task
// implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API

import { getPath } from '../getPath.js'
import { createReadStream, createWriteStream } from 'fs';
import { createInflate } from 'zlib';
import { pipeline } from 'stream';


export const decompress = async () => {
  const sourceFile = getPath(import.meta.url, 'files/archive.gz');
  const destinationFile = getPath(import.meta.url, 'files/fileToCompress.txt');
console.log(destinationFile);
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);
  const decompressFile = createInflate();
  pipeline(readStream, decompressFile , writeStream, ()=>{});

};

decompress();