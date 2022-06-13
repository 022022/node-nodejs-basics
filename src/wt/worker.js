// Task
// extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread

import { parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = async (data) => {
  try{
    const result = await nthFibonacci(data);
    parentPort.postMessage({status: 'resolved', data: result});
  } catch(err) {
    parentPort.postMessage({status: 'error', data: null});
  }
};

parentPort.on('message', (msg) => {
  sendResult(msg);
});