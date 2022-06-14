// Task
// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API

import { getPath } from '../getPath.js'

import { createReadStream, createWriteStream } from 'fs';
import { createDeflate } from 'zlib';
import { pipeline } from 'stream';

export const compress = async () => {

  const sourceFile = getPath(import.meta.url, 'files/fileToCompress.txt');
  const destinationFile = getPath(import.meta.url, 'files/archive.gz');
  console.log(destinationFile);
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);
  const compressFile = createDeflate();

  pipeline(readStream, compressFile, writeStream, ()=>{});

};

compress();