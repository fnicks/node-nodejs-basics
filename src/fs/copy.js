import { cp } from 'fs/promises';
import { exists, getCurrentDir } from '../utils.js'

const copy = async () => {
    const originalPath = getCurrentDir(import.meta.url) + '/files/';
    const copyPath = getCurrentDir(import.meta.url) + '/files_copy/';
    if (!await exists(originalPath) || await exists(copyPath)) {
        throw new Error('FS operation failed');
    }
    await cp(originalPath, copyPath, { recursive: true });
};

await copy();
