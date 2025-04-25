import { readFile } from 'fs/promises';
import { exists, getCurrentDir } from '../utils.js';

const read = async () => {
    const readFilePath = getCurrentDir(import.meta.url) + '/files/fileToRead.txt';
    if (!await exists(readFilePath)) {
        throw new Error('FS operation failed');
    }
    const content = await readFile(readFilePath, 'utf-8');
    console.log(content);
};

await read();