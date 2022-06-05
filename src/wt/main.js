import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const basicNum = 10;
  const numberOfCpuCores = cpus().length;

  let promisesArr = [];
  let resultsArr = [];

  for (let i = 0; i < numberOfCpuCores; i++){
    promisesArr[i] = new Promise((resolve, reject) => {
      const worker = new Worker('./worker.js');
      const argForWorker = basicNum + i;
      worker.postMessage(argForWorker);
      worker.on('message', (msg) => {
        resultsArr.push(msg);

        resolve();

        });
      });
  }

  await Promise.all(promisesArr);

  console.log(resultsArr);

};

performCalculations();
