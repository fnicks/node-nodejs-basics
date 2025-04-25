import { unlink } from 'fs/promises';
import { exists, getCurrentDir } from '../utils.js';

const remove = async () => {
    const deleteFile = getCurrentDir(import.meta.url) + '/files/fileToRemove.txt';
    if (!await exists(deleteFile)) {
        throw new Error('FS operation failed');
    }
    await unlink(deleteFile);
};

await remove();