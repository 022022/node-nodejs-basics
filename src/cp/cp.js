import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {

  const childProcess = fork("./files/script.js", [1,2]);
};

spawnChildProcess();