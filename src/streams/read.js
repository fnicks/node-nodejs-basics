import { createReadStream } from 'fs';
import { getCurrentDir } from '../utils.js';

const read = async () => {
    createReadStream(getCurrentDir(import.meta.url) + '/files/fileToRead.txt')
    .on('error', () => {})
    .pipe(process.stdout);
};

await read();