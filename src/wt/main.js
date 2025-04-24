import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const cpuCount = cpus().length;
    const promises = [];

    for (let i = 0; i < cpuCount; i++) {
        const workerData = 10 + i;

        const promise = new Promise((resolve) => {
            const worker = new Worker(('./src/wt/worker.js'), {
                workerData
            });

            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        });

        promises.push(promise);
    }

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();