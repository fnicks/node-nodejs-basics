import { spawn } from 'child_process';
import { getCurrentDir } from '../utils.js';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    const scriptPath = join(getCurrentDir(import.meta.url), 'files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123,345,456]);
