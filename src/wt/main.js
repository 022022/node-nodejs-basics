import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const basicNum = 10;
  const numberOfCpuCores = cpus().length;
  let resultsArr = [];

  for (let i = 0; i < numberOfCpuCores; i++){
    const worker = new Worker('./worker.js');
    const argForWorker = basicNum + i;
    worker.postMessage(argForWorker);
    worker.on('message', (msg) => {
      console.log(argForWorker +' result '+ msg.status + msg.data );
      resultsArr.push(msg);
      console.log(resultsArr);
    });
  }

  console.log(resultsArr);
};

performCalculations();
