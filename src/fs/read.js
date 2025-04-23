import { exists } from './utils.js';
import { readFile } from 'fs/promises';

const read = async () => {
    const readFilePath = 'src/fs/files/fileToRead.txt';
    if (!await exists(readFilePath)) {
        throw new Error('FS operation failed');
    }
    const content = await readFile(readFilePath, 'utf-8');
    console.log(content);
};

await read();