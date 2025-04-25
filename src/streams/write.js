import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getCurrentDir } from '../utils.js';

const write = async () => {
    await pipeline(
        process.stdin,
        createWriteStream(getCurrentDir(import.meta.url) + '/files/fileToWrite.txt')
    );
};

await write();
