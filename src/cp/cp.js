// Task
// implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
// - child process stdin should receive input from master process stdin
// - child process stdout should send data to master process stdout


import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const childProcess = fork("./files/script.js", args);
};

spawnChildProcess([1,2]);