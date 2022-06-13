// Task
// implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should return array of results. The results are an array of objects with 2 properties:
// - status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// - data - value from worker in case of success or null in case of error in worker

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
