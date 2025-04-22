import { cp } from 'fs/promises';
import { exists } from './utils.js'

const copy = async () => {
    const originalPath = 'src/fs/files/';
    const copyPath = 'src/fs/files_copy/';
    if (!await exists(originalPath) || await exists(copyPath)) {
        throw new Error('FS operation failed');
    }
    await cp(originalPath, copyPath, { recursive: true });
};

await copy();
