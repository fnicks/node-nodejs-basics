import { readdir } from 'fs/promises';
import { exists, getCurrentDir } from '../utils.js';

const list = async () => {
    const folderPath = getCurrentDir(import.meta.url) + '/files/';
    if (!await exists(folderPath)) {
        throw new Error('FS operation failed');
    }
    const files = await readdir(folderPath);
    console.log(files);
};

await list();